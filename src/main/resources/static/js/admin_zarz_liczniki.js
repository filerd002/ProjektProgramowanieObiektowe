var editor;

$(document).ready(function () {

  $.extend( $.fn.dataTable.Editor.display.envelope.conf, {
        attach: 'head'
    } );



    editor = new $.fn.dataTable.Editor({
     display: 'envelope',
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
                    obj["idOdczytLicznika"] = 1;
                    return JSON.stringify(obj);
                },

                success: function (data) {
                      editor.close();
                  $.fn.dataTable.ext.errMode = 'none';
                    location.reload();
                },
                error: function (e) {
                    editor.close();
                  $.fn.dataTable.ext.errMode = 'none';
                    location.reload();
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
                    editor.close();
                  $.fn.dataTable.ext.errMode = 'none';
                    location.reload();
                },
                error: function (e) {
                   editor.close();
                  $.fn.dataTable.ext.errMode = 'none';
                    location.reload();
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
                    return {"id": obj["idOdczytLicznika"]};
                },
                success: function (data) {
                 editor.close();
                  $.fn.dataTable.ext.errMode = 'none';
                    location.reload();
                },
                error: function (e) {
                      editor.close();
                  $.fn.dataTable.ext.errMode = 'none';
                    location.reload();
                }            

            }

                },
        "table": "#admin_zarz_liczniki_Table",
        idSrc: "idOdczytLicznika",
        "fields": [{
                "label": "ID Odczyt licznika",
                "name": "idOdczytLicznika"
            }, {
                "label": "Nr dzialki",             
                "name":"dzialki.nrDzialki"
            }, {
                "label": "Nr pomiaru",
                "name": "nrPomiaru"
            }, {
                "label": "data",
                "name": "data",
                "type": 'date',
                def: function () {
                    return new Date();
                }
            }, {
                "label": "Stan licznika",
                "name": "stanLicznika"
            }, {
                "label": "Należność",
                "name": "naleznosc"
            }
        ],

        i18n: {
            create: {
                button: "Nowy",
                title: "Tworzenie nowego odczytu licznika",
                submit: "Stwórz"
            },
            edit: {
                button: "Zmodyfikuj",
                title: "Modyfikacja wybranego odczytu licznika",
                submit: "Modyfikuj"
            },
            remove: {
                button: "Usuń",
                title: "Usuwanie wybranego odczytu licznika",
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

$('#admin_zarz_liczniki_Table').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this, {
            onBlur: 'submit',
              submit: 'allIfChanged'
        } );
    } );

    editor.field('idOdczytLicznika')
            .disable();

    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {
            var nrDzialki = this.field('dzialki.nrDzialki');
            var nrPomiaru = this.field('nrPomiaru');
            var data = this.field('data');
            var stanLicznika = this.field('stanLicznika');
            var naleznosc = this.field('naleznosc');


            if (!nrDzialki.isMultiValue()) {
                if (!nrDzialki.val()) {
                    nrDzialki.error('Proszę podać numer działki');
                } else {
                    if (!isNumber(nrDzialki.val())) {
                        nrDzialki.error('Proszę podać poprawny numer działki');
                    }

                }
            }

            if (!nrPomiaru.isMultiValue()) {
                if (!nrPomiaru.val()) {
                    nrPomiaru.error('Proszę podać numer pomiaru');
                } else {
                    if (!isNumber(nrPomiaru.val())) {
                        nrPomiaru.error('Proszę podać poprawny numer pomiaru');
                    }

                }
            }
            if (!data.isMultiValue()) {
                if (!data.val()) {
                    data.error('Proszę podać date pomiaru');
                } else {
                    if (!validateDate(data.val())) {
                        data.error('Proszę podać poprawny format daty pomiaru RRRR-MM-DD');
                    }

                }
            }
            if (!stanLicznika.isMultiValue()) {
                if (!stanLicznika.val()) {
                    stanLicznika.error('Proszę podać stan licznika');
                } else {
                    if (!isNumber(stanLicznika.val())) {
                        stanLicznika.error('Proszę podać poprawny stan licznika, liczbę kWh');
                    }

                }
            }
            if (!naleznosc.isMultiValue()) {
                if (!naleznosc.val()) {
                    naleznosc.error('Proszę podać należność');
                } else {
                    if (!isNumber(naleznosc.val())) {
                        naleznosc.error('Proszę podać należność');
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
    function validateDate(date) {
        var re = /(\d{4})-(\d{2})-(\d{2})/;
        return re.test(String(date));
    }


    var table = $('#admin_zarz_liczniki_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
          "deferRender": true,
            stateSave: true,
        "sAjaxSource": "/admin_zarz_liczniki/get",
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
              {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            {data: "idOdczytLicznika"},
            {data: "dzialki",
                render: function (data, type, full) {
                    if (data.nrDzialki !== undefined) {
                        return data.nrDzialki;
                    } else {
                        return data;
                    }

                }},
            {data: "nrPomiaru"},
            {data: "data"},
            {data: "stanLicznika"},
            {data: "naleznosc"}
        ],
order: [ 1, 'asc' ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        idSrc: "idOdczytLicznika",
                buttons: [
                {extend: "create", editor: editor,
                formButtons: ['Stwórz', {text: 'Powrót', action: function () {
                            this.close();
                        }}]},
                        {extend: "edit",   editor: editor,
                formButtons: ['Modyfikuj', {text: 'Powrót', action: function () {
                            this.close();
                        }}]},
                        {extend: "remove", editor: editor,
                formButtons: ['Usuń', {text: 'Powrót', action: function () {
                            this.close();
                        }}]},
           {
                extend: 'collection',
                text: 'Export',
                buttons: [
                    'copy',
                    'excel',
                     {extend: 'pdfHtml5', orientation: 'landscape',
                pageSize: 'LEGAL', download: 'open'}
                ,
                    'print'
                ]
            }
                ]
    });
});

// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
        return JSON.stringify({
                "idOdczytLicznika": $('idOdczytLicznika').val(),
                "dzialki.nrDzialki": $('#dzialki.nrDzialki').val(),
                "nrPomiaru": $('#nrPomiaru').val(),
          "data": $('#data').val(),
          "stanLicznika": $('#stanLicznika').val(),
                "naleznosc": $('#naleznosc').val()
                                            
            });
}


