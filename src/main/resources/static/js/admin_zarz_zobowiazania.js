var editor;

$(document).ready(function () {


    editor = new $.fn.dataTable.Editor({

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
                    table.clear().draw();
                    table.ajax.reload();
                },
                error: function (e) {
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
        ]
    });


    editor.field('nrZobowiazania')
            .disable();

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
                     if (rokRozliczeniowy.val().length!==4) {
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
        "sAjaxSource": "/admin_zarz_zobowiazania/get",
        "sAjaxDataProp": "",
  "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Polish.json"
        },
          columns: [
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

        select: true,
        idSrc: "nrZobowiazania",
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

