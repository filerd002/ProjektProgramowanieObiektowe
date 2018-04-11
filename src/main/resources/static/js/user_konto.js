

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
        "fields": [{
                "label": "login",
                "name": "login"
            }, {
                "label": "password",
                "name": "password"
            }
        ]
    });



    editor.on('preSubmit', function (e, o, action) {

        if (action !== 'remove') {
            var login = this.field('login');
            var password = this.field('password');



            if (!login.isMultiValue()) {
                if (!login.val()) {
                    login.error('Proszę podać login');
                } else {
                    if (login.val().length < 4) {
                        login.error('login nie może być krótsze niż 4 znaki');
                    }
                }
            }

            if (!password.isMultiValue()) {
                if (!password.val()) {
                    password.error('Proszę podać hasło');
                } else {
                    if (!validatePassword(password.val())) {
                        password.error('Hasło musi zawierać: osiem znaków, w tym: 1 wielka litera, 1 mała litera i 1 cyfra');
                    }
                }

            }


            if (this.inError()) {
                return false;
            }
        }
    });


    function validatePassword(password) {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(String(password));
    }



    var table = $('#user_konto_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
        "sAjaxSource": "/user_konto/get",
        "sAjaxDataProp": "",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Polish.json"
        },
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


