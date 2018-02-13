              var editor;

                                $(document).ready(function () {


                                    editor = new $.fn.dataTable.Editor({

                                         ajax: {
                                                        create: {
           		
                                                url: '/admin_zarz_liczniki/add',                                      
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
                                                             url: "/admin_zarz_liczniki/update",
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
                                                               url: "/admin_zarz_liczniki/delete",
                                                dataType: 'json',
                                                contentType: 'application/json; charset=utf-8',
                                              
                                             data: function (d) {
                                                    var obj;
                                                    for (var key in d.data) {
                                                        obj = d.data[key];
                                                        break;
                                                    }
                                                    JSON.stringify(obj);
                                                    return {"id" : obj["idOdczytLicznika"]};
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
                                        "table": "#admin_zarz_liczniki_Table",
                                        idSrc: "idOdczytLicznika",
                                        "fields": [{
                                                "label": "ID Odczyt licznika",
                                                "name": "idOdczytLicznika"
                                            },{
                                                "label": "Nr dzialki",
                                                "name": "dzialki.nrDzialki"
                                            }, {
                                                   "label": "Nr pomiaru",
                                                "name": "nrPomiaru"
                                            }, {
                                               "label": "data",
                                                "name": "data"
                                            }, {
                                               "label": "Stan licznika",
                                                "name": "stanLicznika"
                                            }, {
                                               "label": "Należność",
                                                "name": "naleznosc"
                                            }
                                        ]
                                    });




                                    var table = $('#admin_zarz_liczniki_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/admin_zarz_liczniki/get",
                                        "sAjaxDataProp": "",
                                   
                                       
                                          columns: [
                                            {data: "idOdczytLicznika"},
                                            {data: "dzialki",
render: function ( data, type, full ) {
   if(data.nrDzialki!==undefined){
  return data.nrDzialki;}
else{
      return data;
      } 
  
}},
                                             {data: "nrPomiaru"},
                                              {data: "data"},
                                            {data: "stanLicznika"},
                                            {data: "naleznosc"}
                                        ],

                                        select: true,
                                        idSrc: "idOdczytLicznika",
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
                                                "dzialki.nrDzialki": $('#dzialki.nrDzialki').val(),
                                                "nrPomiaru": $('#nrPomiaru').val(),
                                          "data": $('#data').val(),
                                          "stanLicznika": $('#stanLicznika').val(),
                                                "naleznosc": $('#naleznosc').val()
                                            
                                            });
                                }
                            

