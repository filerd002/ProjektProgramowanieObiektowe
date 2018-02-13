             var editor;

                                $(document).ready(function () {


                                    editor = new $.fn.dataTable.Editor({

                                         ajax: {
                                                        create: {
           		
                                                url: '/admin_zarz_wyciagiJS/add',                                      
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
                                                             url: "/admin_zarz_wyciagiJS/update",
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
                                                               url: "/admin_zarz_wyciagiJS/delete",
                                                dataType: 'json',
                                                contentType: 'application/json; charset=utf-8',
                                              
                                             data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    JSON.stringify(obj);
                                                    return {"id" : obj["idWyciagu"]};
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
                                        "table": "#admin_zarz_wyciagiJS_Table",
                                        idSrc: "idWyciagu",
                                        "fields": [{
                                                "label": "ID wyciągu",
                                                "name": "idWyciagu"
                                            },{
                                                "label": "Nr działki",
                                                "name": "dzialki.nrDzialki"
                                            }, {
                                                   "label": "Nr wyciagu",
                                                "name": "nrWyciagu"
                                            }, {
                                                   "label": "Kwota",
                                                "name": "kwota"
                                            }, {
                                                   "label": "Data",
                                                "name": "data"
                                            }, {
                                                   "label": "Opis",
                                                "name": "opis"
                                            }, {
                                                   "label": "Skladka",
                                                "name": "skladka"
                                            }, {
                                                   "label": "Czynsz",
                                                "name": "cynsz"
                                            }, {
                                                   "label": "Awrbp",
                                                "name": "awrbp"
                                            }, {
                                                   "label": "Wpisowe",
                                                "name": "wpisowe"
                                            }, {
                                                   "label": "Energia rozp. sez.",
                                                "name": "energiaRozpoczecieSezonu"
                                            }, {
                                                   "label": "Energia zak. sez.",
                                                "name": "energiaZakonczenieSezonu"
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
                                               "label": "Licznik",
                                                "name": "licznik"
                                            }
                                        ]
                                    });




                                    var table = $('#admin_zarz_wyciagiJS_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/admin_zarz_wyciagiJS/get",
                                        "sAjaxDataProp": "",
                                       
                                          columns: [
                                              {data: "idWyciagu"},
                                           {data: "dzialki",
render: function ( data, type, full ) {
   if(data.nrDzialki!==undefined){
  return data.nrDzialki;}
else{
      return data;
      } 
  
}},
                                            {data: "nrWyciagu"},
                                             {data: "kwota"},
                                              {data: "data"},
                                              {data: "opis"},
                                             {data: "skladka"},
                                              {data: "cynsz"},
                                              {data: "awrbp"},
                                             {data: "wpisowe"},
                                              {data: "energiaRozpoczecieSezonu"},
                                              {data: "energiaZakonczenieSezonu"},
                                             {data: "dyzurZRokuPoprzedniegoNaBiezacy"},
                                              {data: "dyzurZRokuBiezacegoNaNastepny"},
                                            {data: "zadluzenieZRokuPoprzedniego"},
                                              {data: "licznik"}
                                        ],

                                        select: true,
                                        idSrc: "idWyciagu",
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
                                                "idWyciagu": $('#idWyciagu').val(),
                                                "dzialki.nrDzialki": $('#dzialki.nrDzialki').val(),
                                          "nrWyciagu": $('#nrWyciagu').val(),
                                          "kwota": $('#kwota').val(),
                                           "data": $('#data').val(),
                                          "opis": $('#opis').val(),
                                           "skladka": $('#skladka').val(),
                                          "cynsz": $('#cynsz').val(),
                                           "awrbp": $('#awrbp').val(),
                                          "wpisowe": $('#wpisowe').val(),
                                           "energiaRozpoczecieSezonu": $('#energiaRozpoczecieSezonu').val(),
                                          "energiaZakonczenieSezonu": $('#energiaZakonczenieSezonu').val(),
                                           "dyzurZRokuPoprzedniegoNaBiezacy": $('#dyzurZRokuPoprzedniegoNaBiezacy').val(),
                                          "dyzurZRokuBiezacegoNaNastepny": $('#dyzurZRokuBiezacegoNaNastepny').val(),
                                           "zadluzenieZRokuPoprzedniego": $('#zadluzenieZRokuPoprzedniego').val(),
                                          "licznik": $('#licznik').val()
                                            
                                            });
                                }
                            
