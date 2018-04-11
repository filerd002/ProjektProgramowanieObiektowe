var editor;

$(document).ready(function () {


    editor = new $.fn.dataTable.Editor({

         ajax: {
                        create: {
           		
                url: '/admin_zarz_dzialka/add',
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
                             url: "/admin_zarz_dzialka/update",
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
                               url: "/admin_zarz_dzialka/delete",
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',

                data: function (d) {
                    var obj;
                    for (var key in d.data) {
                        obj = d.data[key];
                        break;
                    }
                    JSON.stringify(obj);
                    return {"id": obj["nrDzialki"]};
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
        "table": "#admin_zarz_dzialka_Table",
        idSrc: "nrDzialki",
        "fields": [{
                "label": "Nr Działki",
                "name": "nrDzialki"
            }, {
                "label": "Powierzchnia",
                "name": "powierzchnia"
            }, {
                "label": "Nr członkowski",
                "name": "dzialkowicz.nrDzialkowicza"
            }
        ],
          i18n: {
            create: {
                button: "Nowy",
                title:  "Tworzenie nowej działki",
                submit: "Stwórz"
            },
            edit: {
                button: "Zmodyfikuj",
                title:  "Modyfikacja wybranej działki",
                submit: "Modyfikuj"
            },
             remove: {
                button: "Usuń",
                title:  "Usuwanie wybranej działki",
                submit: "Usuń",
                confirm: {
                    1: "Czy na pewno chcesz usunąć?"
                }
            },
            error: {
                system: "Wystąpił błąd, skontaktuj się z administratorem systemu"
            }
        }
    });


    editor
            .field('nrDzialki')
            .disable();

    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {
            var powierzchnia = this.field('powierzchnia');
            var dzialkowicz = this.field('dzialkowicz.nrDzialkowicza');


            if (!powierzchnia.isMultiValue()) {
                if (!powierzchnia.val()) {
                    powierzchnia.error('Proszę podać powierzchnie działki');
                } else {
                    if (!isNumber(powierzchnia.val())) {
                        powierzchnia.error('Proszę podać poprawną powierzchnie działki');
                    }

                }
            }
            if (!dzialkowicz.isMultiValue()) {
                if (!dzialkowicz.val()) {
                    dzialkowicz.error('Proszę podać numer działkowicza');
                } else {
                    if (!isNumber(dzialkowicz.val())) {
                        dzialkowicz.error('Proszę podać poprawny numer działkowicza');
                    }

                }
            }





            if (this.inError()) {
                return false;
            }
        }
    });

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    var table = $('#admin_zarz_dzialka_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
        "sAjaxSource": "/admin_zarz_dzialka/get",
        "sAjaxDataProp": "",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Polish.json",
            select: {
                rows: {
                    _: "Zaznaczono %d wierszy",
                    0: "Kliknij w wiersz aby go zaznaczyć",
                    1: "Zaznaczono 1 wiersz"
                }
            }
        },
          columns: [
            {data: "nrDzialki"},
            {data: "powierzchnia"},
            {data: "dzialkowicz.nrDzialkowicza"}
        ],

        select: true,
        idSrc: "nrDzialki",
                buttons: [

                        {extend: "create", editor: editor},
                        {extend: "edit",   editor: editor},
                        {extend: "remove", editor: editor},
            {extend: 'pdfHtml5', orientation: 'landscape',
                pageSize: 'LEGAL', download: 'open'}
                ]
    });
});

// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
        return JSON.stringify({
                "nrDzialki": $('#nrDzialki').val(),
                "powierzchnia": $('#powierzchnia').val(),
                "dzialkowicz[].nrDzialkowicza": $('#dzialkowicz.nrDzialkowicza').val()
                                            
            });
}


