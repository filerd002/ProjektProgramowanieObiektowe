

                                $(document).ready(function () {


   editor = new $.fn.dataTable.Editor({

                                         ajax: {
                                                       
                                                        edit: {
                                                                type: 'PUT',
                                                             url: "/user_konto/update",
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

                                                        }
                                                     
                                                },
                                        "table": "#user_konto_Table",
                                        idSrc: "nrDzialkowicza",
                                        "fields": [ {
                                                   "label": "login",
                                                "name": "login"
                                            }, {
                                               "label": "password",
                                                "name": "password"
                                            }
                                        ]
                                    });


                                    var table = $('#user_konto_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/user_konto/get",
                                        "sAjaxDataProp": "",
                                        dataType: 'json',
                                          columns: [
                                            {data: "login"},
                                            {data: "password"}                                     

                                        ],

                                        select: true,
                                        idSrc: "nrDzialkowicza",
                                                buttons: [
                                                 {extend: "edit",   editor: editor},
                                            {extend: 'pdfHtml5', orientation: 'landscape',
                                                pageSize: 'LEGAL', download: 'open'}
                                                ]
                                    });
                                });

// Helper function to serialize all the form fields into a JSON string
                                function formToJSON() {
                                        return JSON.stringify({
                                              
                                                "login": $('#login').val(),
                                          "password": $('#password').val()
                                            
                                            });
                                }


