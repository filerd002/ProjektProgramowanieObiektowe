var editor;

$(document).ready(function () {

  $.extend( $.fn.dataTable.Editor.display.envelope.conf, {
        attach: 'head'
    } );

    editor = new $.fn.dataTable.Editor({
     display: 'envelope',

         ajax: {
                        create: {
           		
                url: '/admin_zarz_bank/add',
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
                             url: "/admin_zarz_bank/update",
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
                               url: "/admin_zarz_bank/delete",
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
        "table": "#admin_zarz_bank_Table",
        idSrc: "nrDzialki",
        "fields": [{
                "label": "Nr działki",
                "name": "nrDzialki"
            }, {
                "label": "Iban",
                "name": "kodIban"
            }, {
                "label": "Nr konta",
                "name": "nrKonta"
            }
        ],

        i18n: {
            create: {
                button: "Nowy",
                title: "Tworzenie nowego konta bankowego",
                submit: "Stwórz"
            },
            edit: {
                button: "Zmodyfikuj",
                title: "Modyfikacja wybranego konta",
                submit: "Modyfikuj"
            },
            remove: {
                button: "Usuń",
                title: "Usuwanie wybranego konta",
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

   $('#admin_zarz_bank_Table').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this, {
            onBlur: 'submit',
              submit: 'allIfChanged'
        } );
    } );


    editor.field('nrDzialki')
            .disable();

    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {

            var kodIban = this.field('kodIban');
            var nrKonta = this.field('nrKonta');



            if (!kodIban.isMultiValue()) {
                if (!kodIban.val()) {
                    kodIban.error('Proszę podać kod IBAN');
                } else {
                    if (!validateIban(kodIban.val())) {
                        kodIban.error('Proszę podać poprawny format kodu IBAN PLXX XXXX XXXX XXXX XXXX XXXX XXXX');
                    }

                }
            }

            if (!nrKonta.isMultiValue()) {
                if (!nrKonta.val()) {
                    nrKonta.error('Proszę podać numer konta');
                } else {
                    if (!validateBank(nrKonta.val())) {
                        nrKonta.error('Proszę podać poprawny format numeru konta XX XXXX XXXX XXXX XXXX XXXX XXXX');
                    }

                }
            }


            if (this.inError()) {
                return false;
            }
        }
    });





    function validateIban(iban) {
        var re = /[a-zA-Z]{2}(\d{2}) (\d{4}) (\d{4}) (\d{4}) (\d{4}) (\d{4}) (\d{4})/;
        return re.test(String(iban));
    }

    function validateBank(bank) {
        var re = /(\d{2}) (\d{4}) (\d{4}) (\d{4}) (\d{4}) (\d{4}) (\d{4})/;
        return re.test(String(bank));
    }

    var table = $('#admin_zarz_bank_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
        "sAjaxSource": "/admin_zarz_bank/get",
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
            {data: "nrDzialki"},
            {data: "kodIban"},
            {data: "nrKonta"}
        ],

       order: [ 1, 'asc' ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        idSrc: "nrDzialki",
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
                "nrDzialki": $('#nrDzialki').val(),
                "kodIban": $('#kodIban').val(),
                "nrKonta": $('#nrKonta').val()
                                            
            });
}
                            