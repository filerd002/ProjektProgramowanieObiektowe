              var editor;

                                $(document).ready(function () {


                                    editor = new $.fn.dataTable.Editor({

                                         ajax: {
                                                        create: {
           		
                                                url: '/admin_zarz_dostep/add',                                      
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
                                                             url: "/admin_zarz_dostep/update",
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
                                                               url: "/admin_zarz_dostep/delete",
                                                dataType: 'json',
                                                contentType: 'application/json; charset=utf-8',
                                              
                                             data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    JSON.stringify(obj);
                                                    return {"id" : obj["dzialkowicz.nrDzialkowicza"]};
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
                                        "table": "#admin_zarz_dostep_Table",
                                        idSrc: "dzialkowicz.nrDzialkowicza",
                                        "fields": [{
                                                "label": "Nr dzialkowicza",
                                                "name": "dzialkowicz.nrDzialkowicza"
                                            }, {
                                                   "label": "login",
                                                "name": "login"
                                            }, {
                                               "label": "password",
                                                "name": "password"
                                            }, {
                                               "label": "enabled",
                                                "name": "enabled"
                                            }, {
                                               "label": "role",
                                                "name": "role"
                                            }
                                        ]
                                    });




                                    var table = $('#admin_zarz_dostep_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/admin_zarz_dostep/get",
                                        "sAjaxDataProp": "",
                                       
                                          columns: [
                                            {data: "dzialkowicz.nrDzialkowicza"},
                                            {data: "login"},
                                             {data: "password"},
                                              {data: "enabled"},
                                            {data: "role"}
                                        ],

                                        select: true,
                                        idSrc: "dzialkowicz.nrDzialkowicza",
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
                                                "dzialkowicz.nrDzialkowicza": $('#dzialkowicz.nrDzialkowicza').val(),
                                                "login": $('#login').val(),
                                          "password": $('#password').val(),
                                          "enabled": $('#enabled').val(),
                                                "role": $('#role').val()
                                            
                                            });
                                }
                            

