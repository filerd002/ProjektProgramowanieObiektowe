            var editor;

                                $(document).ready(function () {


                                    editor = new $.fn.dataTable.Editor({

                                         ajax: {
                                                        create: {
           		
                                                url: '/admin_zarz_zobowiazania/add',                                      
                                                   type: 'POST',
                                                dataType: 'json',     
                                                  contentType: 'application/json; charset=utf-8',
                                                data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    return JSON.stringify(obj);
                                                },
                                                
                                                success: function (data) {
                                                    table.clear().draw();
                                                    table.ajax.reload();
                                                },
                                                error: function (e) {
                                                    alert("ERROR: ", e);
                                                }



                                                        },
                                                        edit: {
                                                                type: 'PUT',
                                                             url: "/admin_zarz_zobowiazania/update",
                                                dataType: 'json',
                                                contentType: 'application/json; charset=utf-8',
                                                
                                                data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    return JSON.stringify(obj);
                                                },
                                                success: function (data) {
                                                    table.clear().draw();
                                                    table.ajax.reload();
                                                },
                                                error: function (e) {
                                                    alert("ERROR: ", e);
                                                }

                                                        },
                                                        remove: {
                                                
                                                                type: 'DELETE',
                                                               url: "/admin_zarz_zobowiazania/delete",
                                                dataType: 'json',
                                                contentType: 'application/json; charset=utf-8',
                                              
                                             data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    JSON.stringify(obj);
                                                    return {"id" : obj["nrZobowiazania"]};
                                                },
                                          success: function (data) {
                                                    table.clear().draw();
                                                    table.ajax.reload();
                                                },
                                                error: function (e) {
                                                      table.clear().draw();
                                                    table.ajax.reload();
                                                }            

                                            }
                                                },
                                        "table": "#admin_zarz_zobowiazania_Table",
                                        idSrc: "nrZobowiazania",
                                        "fields": [{
                                                "label": "Nr Zobowiazania",
                                                "name": "nrZobowiazania"
                                            }, {
                                                "label": "Nr działki",
                                                "name": "dzialki.nrDzialki"
                                            }, {
                                                   "label": "Rok rozliczeniowy",
                                                "name": "rokRozliczeniowy"
                                            }, {
                                                   "label": "Bilans otwarcia",
                                                "name": "bilansOtwarcia"
                                            }, {
                                                   "label": "Skladka",
                                                "name": "skladka"
                                            }, {
                                                   "label": "Czynsz",
                                                "name": "czynsz"
                                            }, {
                                                   "label": "Anr",
                                                "name": "anr"
                                            }, {
                                                   "label": "Wpisowe",
                                                "name": "wpisowe"
                                            }, {
                                                   "label": "Energia rozp. sez.",
                                                "name": "energiaRozpocecieSezonu"
                                            }, {
                                                   "label": "Energia zak. sez.",
                                                "name": "energiaZakonczeniaSeoznu"
                                            }, {
                                                   "label": "Dyżur Rok Poprz/Bież",
                                                "name": "dyzurZRokuPoprzedniegoNaBiezacy"
                                            }, {
                                               "label": "Dyżur Rok Bież/Nast",
                                                "name": "dyzurZRokuBiezacegoNaNastepny"
                                            }, {
                                               "label": "Zadluzenie",
                                                "name": "zadluzenieZRokuPoprzedniego"
                                            }, {
                                               "label": "Zobowiazania razem z BO",
                                                "name": "zobowiazaniaRazemZBo"
                                            }
                                        ]
                                    });




                                    var table = $('#admin_zarz_zobowiazania_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/admin_zarz_zobowiazania/get",
                                        "sAjaxDataProp": "",
                                       
                                          columns: [
                                              {data: "nrZobowiazania"},
                                           {data: "dzialki.nrDzialki"},
                                            {data: "rokRozliczeniowy"},
                                             {data: "bilansOtwarcia"},
                                              {data: "skladka"},                                       
                                              {data: "czynsz"},
                                              {data: "anr"},
                                             {data: "wpisowe"},
                                              {data: "energiaRozpocecieSezonu"},
                                              {data: "energiaZakonczeniaSeoznu"},
                                             {data: "dyzurZRokuPoprzedniegoNaBiezacy"},
                                              {data: "dyzurZRokuBiezacegoNaNastepny"},
                                            {data: "zadluzenieZRokuPoprzedniego"},
                                              {data: "zobowiazaniaRazemZBo"}
                                        ],

                                        select: true,
                                        idSrc: "nrZobowiazania",
                                                buttons: [

                                                        {extend: "create", editor: editor},
                                                        {extend: "edit",   editor: editor},
                                                        {extend: "remove", editor: editor},
                                            {extend: 'pdfHtml5', orientation: 'landscape',
                pageSize: 'LEGAL',  download: 'open'}
                                                ]
                                    });
                                });

// Helper function to serialize all the form fields into a JSON string
                                function formToJSON() {
                                        return JSON.stringify({
                                                "nrZobowiazania": $('#nrZobowiazania').val(),
                                                "dzialki.nrDzialki": $('#dzialki.nrDzialki').val(),
                                          "rokRozliczeniowy": $('#rokRozliczeniowy').val(),
                                          "bilansOtwarcia": $('#bilansOtwarcia').val(),
                                           "skladka": $('#skladka').val(),
                                          "czynsz": $('#czynsz').val(),
                                           "anr": $('#anr').val(),
                                          "wpisowe": $('#wpisowe').val(),
                                           "energiaRozpocecieSezonu": $('#energiaRozpocecieSezonu').val(),
                                          "energiaZakonczeniaSeoznu": $('#energiaZakonczeniaSeoznu').val(),
                                           "dyzurZRokuPoprzedniegoNaBiezacy": $('#dyzurZRokuPoprzedniegoNaBiezacy').val(),
                                          "dyzurZRokuBiezacegoNaNastepny": $('#dyzurZRokuBiezacegoNaNastepny').val(),
                                           "zadluzenieZRokuPoprzedniego": $('#zadluzenieZRokuPoprzedniego').val(),
                                          "zobowiazaniaRazemZBo": $('#zobowiazaniaRazemZBo').val()
                                            
                                            });
                                }
                            
