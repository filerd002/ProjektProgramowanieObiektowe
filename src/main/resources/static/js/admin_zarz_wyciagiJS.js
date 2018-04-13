var editor;

$(document).ready(function () {
    
  $.extend( $.fn.dataTable.Editor.display.envelope.conf, {
        attach: 'head'
    } );

    editor = new $.fn.dataTable.Editor({
     display: 'envelope',
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
                    obj["idWyciagu"]=1;
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
                    return {"id": obj["idWyciagu"]};
                },
                success: function (data) {
             editor.close();
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
        "table": "#admin_zarz_wyciagiJS_Table",
        idSrc: "idWyciagu",
        "fields": [{
                "label": "ID wyciągu",
                "name": "idWyciagu"
            }, {
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
                "name": "data",
                "type": 'date',
                def: function () {
                    return new Date();
                }
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
        ],

        i18n: {
            create: {
                button: "Nowy",
                title: "Tworzenie nowego wyciągu bankowego",
                submit: "Stwórz"
            },
            edit: {
                button: "Zmodyfikuj",
                title: "Modyfikacja wybranego wyciągu bankowego",
                submit: "Modyfikuj"
            },
            remove: {
                button: "Usuń",
                title: "Usuwanie wybranego wyciągu bankowego",
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

$('#admin_zarz_wyciagiJS_Table').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this, {
            onBlur: 'submit',
              submit: 'allIfChanged'
        } );
    } );

editor.field('idWyciagu')
            .disable();

    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {
            var nrDzialki = this.field('dzialki.nrDzialki');
            var nrWyciagu = this.field('nrWyciagu');
            var kwota = this.field('kwota');
            var data = this.field('data');
            var opis = this.field('opis');
            var skladka = this.field('skladka');
            var cynsz = this.field('cynsz');
            var awrbp = this.field('awrbp');
            var wpisowe = this.field('wpisowe');
            var energiaRozpoczecieSezonu = this.field('energiaRozpoczecieSezonu');
            var energiaZakonczenieSezonu = this.field('energiaZakonczenieSezonu');
            var dyzurZRokuPoprzedniegoNaBiezacy = this.field('dyzurZRokuPoprzedniegoNaBiezacy');
            var dyzurZRokuBiezacegoNaNastepny = this.field('dyzurZRokuBiezacegoNaNastepny');
            var zadluzenieZRokuPoprzedniego = this.field('zadluzenieZRokuPoprzedniego');
            var licznik = this.field('licznik');


            if (!nrDzialki.isMultiValue()) {
                if (!nrDzialki.val()) {
                    nrDzialki.error('Proszę podać numer działki');
                } else {
                    if (!isNumber(nrDzialki.val())) {
                        nrDzialki.error('Proszę podać poprawny numer działki');
                    }
                }
            }
            if (!nrWyciagu.isMultiValue()) {
                if (!nrWyciagu.val()) {
                    nrWyciagu.error('Proszę podać numer wyciagu');
                } else {
                    if (!isNumber(nrWyciagu.val())) {
                        nrWyciagu.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!kwota.isMultiValue()) {
                if (!kwota.val()) {
                    kwota.error('Proszę podać kwotę wyciagu');
                } else {
                    if (!isNumber(kwota.val())) {
                        kwota.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!data.isMultiValue()) {
                if (!data.val()) {
                    data.error('Proszę podać date wyciagu');
                } else {
                    if (!validateDate(data.val())) {
                        data.error('Proszę podać poprawny format daty pomiaru RRRR-MM-DD');
                    }

                }
            }



            if (!skladka.isMultiValue()) {
                if (skladka.val()) {
                    if (!isNumber(skladka.val())) {
                        skladka.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }


            if (!cynsz.isMultiValue()) {
                if (cynsz.val()) {
                    if (!isNumber(cynsz.val())) {
                        cynsz.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!awrbp.isMultiValue()) {
                if (awrbp.val()) {
                    if (!isNumber(awrbp.val())) {
                        awrbp.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!wpisowe.isMultiValue()) {
                if (wpisowe.val()) {
                    if (!isNumber(wpisowe.val())) {
                        wpisowe.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }

            if (!energiaRozpoczecieSezonu.isMultiValue()) {
                if (energiaRozpoczecieSezonu.val()) {
                    if (!isNumber(energiaRozpoczecieSezonu.val())) {
                        energiaRozpoczecieSezonu.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!energiaZakonczenieSezonu.isMultiValue()) {
                if (energiaZakonczenieSezonu.val()) {
                    if (!isNumber(energiaZakonczenieSezonu.val())) {
                        energiaZakonczenieSezonu.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!dyzurZRokuPoprzedniegoNaBiezacy.isMultiValue()) {
                if (dyzurZRokuPoprzedniegoNaBiezacy.val()) {
                    if (!isNumber(dyzurZRokuPoprzedniegoNaBiezacy.val())) {
                        dyzurZRokuPoprzedniegoNaBiezacy.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!dyzurZRokuBiezacegoNaNastepny.isMultiValue()) {
                if (dyzurZRokuBiezacegoNaNastepny.val()) {
                    if (!isNumber(dyzurZRokuBiezacegoNaNastepny.val())) {
                        dyzurZRokuBiezacegoNaNastepny.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!zadluzenieZRokuPoprzedniego.isMultiValue()) {
                if (zadluzenieZRokuPoprzedniego.val()) {
                    if (!isNumber(zadluzenieZRokuPoprzedniego.val())) {
                        zadluzenieZRokuPoprzedniego.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!licznik.isMultiValue()) {
                if (licznik.val()) {
                    if (!isNumber(licznik.val())) {
                        licznik.error('Proszę podać poprawną wartość liczbową');
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



    var table = $('#admin_zarz_wyciagiJS_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
        "sAjaxSource": "/admin_zarz_wyciagiJS/get",
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
            {data: "idWyciagu"},
            {data: "dzialki",
                render: function (data, type, full) {
                    if (data.nrDzialki !== undefined) {
                        return data.nrDzialki;
                    } else {
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
order: [ 1, 'asc' ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        idSrc: "idWyciagu",
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
            {extend: 'pdfHtml5', orientation: 'landscape',
                pageSize: 'LEGAL', download: 'open'}
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

