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
                    return {"id": obj["idOdczytLicznika"]};
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
            }, {
                "label": "Nr dzialki",
                "name": "dzialki.nrDzialki"
            }, {
                "label": "Nr pomiaru",
                "name": "nrPomiaru"
            }, {
                "label": "data",
                "name": "data",
                 "type":  'date',
                 def:   function () { return new Date(); }
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
                title:  "Tworzenie nowego odczytu licznika",
                submit: "Stwórz"
            },
            edit: {
                button: "Zmodyfikuj",
                title:  "Modyfikacja wybranego odczytu licznika",
                submit: "Modyfikuj"
            },
             remove: {
                button: "Usuń",
                title:  "Usuwanie wybranego odczytu licznika",
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

        select: true,
        idSrc: "idOdczytLicznika",
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
                "dzialki.nrDzialki": $('#dzialki.nrDzialki').val(),
                "nrPomiaru": $('#nrPomiaru').val(),
          "data": $('#data').val(),
          "stanLicznika": $('#stanLicznika').val(),
                "naleznosc": $('#naleznosc').val()
                                            
            });
}


