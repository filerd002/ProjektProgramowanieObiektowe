var editor;

$(document).ready(function () {
    
  $.extend( $.fn.dataTable.Editor.display.envelope.conf, {
        attach: 'head'
    } );

    editor = new $.fn.dataTable.Editor({
     display: 'envelope',
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
                    obj["nrZobowiazania"] =1;
                    return JSON.stringify(obj);
                },

                success: function (data) {
                    editor.close();
                    table.clear().draw();
                    table.ajax.reload();
                },
                error: function (e) {
                     editor.close();
                    table.clear().draw();
                    table.ajax.reload();
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
                    return {"id": obj["nrZobowiazania"]};
                },
                success: function (data) {
                    editor.close();
                    table.clear().draw();
                    table.ajax.reload();
                },
                error: function (e) {
                    editor.close();
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
        ],

        i18n: {
            create: {
                button: "Nowy",
                title: "Tworzenie nowego zobowiązania",
                submit: "Stwórz"
            },
            edit: {
                button: "Zmodyfikuj",
                title: "Modyfikacja wybranego zobowiązania",
                submit: "Modyfikuj"
            },
            remove: {
                button: "Usuń",
                title: "Usuwanie wybranego zobowiązania",
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

editor.field('nrZobowiazania')
            .disable();

$('#admin_zarz_zobowiazania_Table').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this, {
            onBlur: 'submit',
              submit: 'allIfChanged'
        } );
    } );


    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {
            var nrDzialki = this.field('dzialki.nrDzialki');
            var rokRozliczeniowy = this.field('rokRozliczeniowy');
            var bilansOtwarcia = this.field('bilansOtwarcia');
            var skladka = this.field('skladka');
            var czynsz = this.field('czynsz');
            var anr = this.field('anr');
            var wpisowe = this.field('wpisowe');
            var energiaRozpocecieSezonu = this.field('energiaRozpocecieSezonu');
            var energiaZakonczeniaSeoznu = this.field('energiaZakonczeniaSeoznu');
            var dyzurZRokuPoprzedniegoNaBiezacy = this.field('dyzurZRokuPoprzedniegoNaBiezacy');
            var dyzurZRokuBiezacegoNaNastepny = this.field('dyzurZRokuBiezacegoNaNastepny');
            var zadluzenieZRokuPoprzedniego = this.field('zadluzenieZRokuPoprzedniego');
            var zobowiazaniaRazemZBo = this.field('zobowiazaniaRazemZBo');


            if (!nrDzialki.isMultiValue()) {
                if (!nrDzialki.val()) {
                    nrDzialki.error('Proszę podać numer działki');
                } else {
                    if (!isNumber(nrDzialki.val())) {
                        nrDzialki.error('Proszę podać poprawny numer działki');
                    }
                }
            }
            if (!rokRozliczeniowy.isMultiValue()) {
                if (!rokRozliczeniowy.val()) {
                    rokRozliczeniowy.error('Proszę podać rok rozliczeniowy');
                } else {
                    if (!isNumber(rokRozliczeniowy.val())) {
                        rokRozliczeniowy.error('Proszę podać poprawny rok rozliczeniowy');
                    }
                    if (rokRozliczeniowy.val().length !== 4) {
                        rokRozliczeniowy.error('Proszę podać poprawny rok rozliczeniowy');
                    }
                }
            }
            if (!bilansOtwarcia.isMultiValue()) {
                if (bilansOtwarcia.val()) {
                    if (!isNumber(bilansOtwarcia.val())) {
                        bilansOtwarcia.error('Proszę podać poprawną wartość liczbową');
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

            if (!czynsz.isMultiValue()) {
                if (czynsz.val()) {
                    if (!isNumber(czynsz.val())) {
                        czynsz.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!anr.isMultiValue()) {
                if (anr.val()) {
                    if (!isNumber(anr.val())) {
                        anr.error('Proszę podać poprawną wartość liczbową');
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

            if (!energiaRozpocecieSezonu.isMultiValue()) {
                if (energiaRozpocecieSezonu.val()) {
                    if (!isNumber(energiaRozpocecieSezonu.val())) {
                        energiaRozpocecieSezonu.error('Proszę podać poprawną wartość liczbową');
                    }
                }
            }
            if (!energiaZakonczeniaSeoznu.isMultiValue()) {
                if (energiaZakonczeniaSeoznu.val()) {
                    if (!isNumber(energiaZakonczeniaSeoznu.val())) {
                        energiaZakonczeniaSeoznu.error('Proszę podać poprawną wartość liczbową');
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
            if (!zobowiazaniaRazemZBo.isMultiValue()) {
                if (zobowiazaniaRazemZBo.val()) {
                    if (!isNumber(zobowiazaniaRazemZBo.val())) {
                        zobowiazaniaRazemZBo.error('Proszę podać poprawną wartość liczbową');
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



    var table = $('#admin_zarz_zobowiazania_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
          "deferRender": true,
            stateSave: true,
        "sAjaxSource": "/admin_zarz_zobowiazania/get",
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
order: [ 1, 'asc' ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        idSrc: "nrZobowiazania",
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

