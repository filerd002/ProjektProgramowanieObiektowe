           var editor;

                                $(document).ready(function () {


                                    editor = new $.fn.dataTable.Editor({

                                         ajax: {
                                                        create: {
           		
                                                url: '/admin_zarz_user/add',
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
                                                             url: "/admin_zarz_user/update",
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
                                            alert(data);
                                                },
                                                error: function (e) {
                                                    alert("ERROR: ", e);
                                                }

                                                        },
                                                        remove: {
                                                
                                                                type: 'DELETE',
                                                               url: "/admin_zarz_user/delete",
                                                dataType: 'json',
                                                contentType: 'application/json; charset=utf-8',
                                              
                                             data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    JSON.stringify(obj);
                                                    return {"id" : obj["nrDzialkowicza"]};
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
                                        "table": "#admin_zarz_user_Table",
                                        idSrc: "nrDzialkowicza",
                                        "fields": [{
                                                "label": "Nr Działkowicza",
                                                "name": "nrDzialkowicza"
                                            }, {
                                                "label": "Imie",
                                                "name": "imie"
                                            }, {
                                                "label": "Nazwisko",
                                                "name": "nazwisko"
                                            }, {
                                                "label": "Ulica",
                                                "name": "ulica"
                                            }, {
                                                "label": "Nr domu",
                                                "name": "nrDomu"
                                            }, {
                                                "label": "Nr lokalu",
                                                "name": "nrLokalu"
                                            }, {
                                                "label": "Kod pocztowy",
                                                "name": "kodPocztowy"
                                            }, {
                                                "label": "Miasto",
                                                "name": "miasto"
                                            }, {
                                                "label": "Adres do korespondencji",
                                                "name": "adresDoKorespondencji"
                                            }, {
                                                "label": "Telefon",
                                                "name": "telefon"
                                            }, {
                                                "label": "Email",
                                                "name": "email"
                                            }
                                        ]
                                    });




                                    var table = $('#admin_zarz_user_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/admin_zarz_user/get",
                                        "sAjaxDataProp": "",

                                          columns: [
                                            {data: "nrDzialkowicza"},
                                            {data: "imie"},
                                            {data: "nazwisko"},
                                            {data: "ulica"},
                                            {data: "nrDomu"},
                                            {data: "nrLokalu"},
                                            {data: "kodPocztowy"},
                                            {data: "miasto"},
                                            {data: "adresDoKorespondencji"},
                                            {data: "telefon"},
                                            {data: "email"}

                                        ],

                                        select: true,
                                        idSrc: "nrDzialkowicza",
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
                                                "nrDzialkowicza": $('#nrDzialkowicza').val(),
                                                "imie": $('#imie').val(),
                                                "nazwisko": $('#nazwisko').val(),
                                                "ulica": $('#ulica').val(),
                                                "nrDomu": $('#nrDomu').val(),
                                                "nrLokalu": $('#nrLokalu').val(),
                                                "kodPocztowy": $('#kodPocztowy').val(),
                                                "miasto": $('#miasto').val(),
                                                "adresDoKorespondencji": $('#adresDoKorespondencji').val(),
                                                "telefon": $('#telefon').val(),
                                        "email": $('#email').val()
                                            });
                                }
                            
