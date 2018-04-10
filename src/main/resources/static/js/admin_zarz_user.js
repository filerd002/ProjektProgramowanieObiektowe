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
                    table.clear().draw();
                    table.ajax.reload();
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
                    return {"id": obj["nrDzialkowicza"]};
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


    editor
            .field('nrDzialkowicza')
            .disable();

    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {
            var imie = this.field('imie');
            var nazwisko = this.field('nazwisko');
            var ulica = this.field('ulica');
            var nrDomu = this.field('nrDomu');
            var nrLokalu = this.field('nrLokalu');
            var kodPocztowy = this.field('kodPocztowy');
            var miasto = this.field('miasto');
  
            var telefon = this.field('telefon');
            var email = this.field('email');

            if (!imie.isMultiValue()) {
                if (!imie.val()) {
                    imie.error('Proszę podać imię');
                }

                if (imie.val().length >= 20) {
                    imie.error('Imię nie może być dłuższe niż 20 znaków');
                }
                if (imie.val().length < 3) {
                    imie.error('Imię nie może być krótsze niż 3 znaki');
                }
            }

            if (!nazwisko.isMultiValue()) {
                if (!nazwisko.val()) {
                    nazwisko.error('Proszę podać nazwisko');
                }

                if (nazwisko.val().length >= 35) {
                    nazwisko.error('Nazwisko nie może być dłuższe niż 35 znaków');
                }
                if (nazwisko.val().length < 3) {
                    nazwisko.error('Nazwisko nie może być krótsze niż 3 znaki');
                }
            }
            if (!ulica.isMultiValue()) {
                if (!ulica.val()) {
                    ulica.error('Proszę podać ulicę');
                }

                if (ulica.val().length >= 45) {
                    ulica.error('Nazwa ulicy nie może być dłuższe niż 45 znaków');
                }
                if (ulica.val().length < 3) {
                    ulica.error('Nazwa ulicy nie może być krótsze niż 3 znaki');
                }
            }
            if (!nrDomu.isMultiValue()) {
                if (!nrDomu.val()) {
                    nrDomu.error('Proszę podać numer domu');
                }

                if (nrDomu.val().length > 4) {
                    nrDomu.error('Numer domu nie może być dłuższy niż 4 znaków');
                }
                if (nrDomu.val().length < 1) {
                    nrDomu.error('Numer domu nie może być  krótsze niż 1 znaki');
                }
            }
            if (!nrLokalu.isMultiValue()) {

                if (nrLokalu.val().length > 4) {
                    nrLokalu.error('Numer lokalu nie może być dłuższy niż 4 znaków');
                }

            }

            if (!kodPocztowy.isMultiValue()) {
                if (!kodPocztowy.val()) {
                    kodPocztowy.error('Proszę podać kod pocztowy');
                }

                if (validateCodePost()(kodPocztowy.val()) !== true) {
                    kodPocztowy.error('Niepoprawny kod pocztowy');

                }

            }


            if (!miasto.isMultiValue()) {
                if (!miasto.val()) {
                    miasto.error('Proszę podać nazwę miasta');
                }

                if (miasto.val().length >= 20) {
                    miasto.error('Nazwa miasta nie może być dłuższy niż 20 znaków');
                }
                if (miasto.val().length < 2) {
                    miasto.error('Nazwa miasta nie może być krótsze niż 2 znaki');
                }
            }




            if (!telefon.isMultiValue()) {

                if (!telefon.val()) {



                    if (telefon.val().length >= 13) {
                        telefon.error('Numer telefonu nie może być dłuższy niż 13 znaków');
                    }
                    if (telefon.val().length <= 9) {
                        telefon.error('Numer telefonu nie może być  krótsze niż 9 znaki');
                    }
                }
            }

            if (!email.isMultiValue()) {
                if (!email.val()) {
                    email.error('Proszę podać email');
                }

                if (validateEmail(email.val()) !== true) {
                    email.error('Niepoprawny adres email');

                }

            }


            if (this.inError()) {
                return false;
            }
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    function validateCodePost(code) {
        var re = /[0-9]{2}-[0-9]{3}/g;
        return re.test(String(code).toLowerCase());
    }

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
                pageSize: 'LEGAL', download: 'open'}
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

