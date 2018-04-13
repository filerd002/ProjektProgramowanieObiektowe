

$(document).ready(function () {

    var table = $('#user_rozrachunki_Table').DataTable({

        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;

            // converting to interger to find total
            var intVal = function (i) {
                return typeof i === 'string' ?
                        i.replace(/[\$,]/g, '') * 1 :
                        typeof i === 'number' ?
                        i : 0;
            };

            // computing column Total of the complete result 
            var kwotaTotal = api
                    .column(1)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            var skladkaTotal = api
                    .column(4)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            var czynszTotal = api
                    .column(5)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            var awrbpTotal = api
                    .column(6)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            var wpisoweTotal = api
                    .column(7)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            var energ1Total = api
                    .column(8)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
            var energ2Total = api
                    .column(9)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
            var dyz1Total = api
                    .column(10)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);
            var dyz2Total = api
                    .column(11)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            var zadlTotal = api
                    .column(12)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);


            // Update footer by showing the total with the reference of the column index 
            $(api.column(0).footer()).html('Suma');
            $(api.column(1).footer()).html(kwotaTotal);
            $(api.column(4).footer()).html(skladkaTotal);
            $(api.column(5).footer()).html(czynszTotal);
            $(api.column(6).footer()).html(awrbpTotal);
            $(api.column(7).footer()).html(wpisoweTotal);
            $(api.column(8).footer()).html(energ1Total);
            $(api.column(9).footer()).html(energ2Total);
            $(api.column(10).footer()).html(dyz1Total);
            $(api.column(11).footer()).html(dyz2Total);
            $(api.column(12).footer()).html(zadlTotal);
        },

          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
          "deferRender": true,
            stateSave: true,
        "sAjaxSource": "/user_rozrachunki/get",
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
        dataType: 'json',
          columns: [
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
        ],

        select: true,
        idSrc: "nrWyciagu",
                buttons: [

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


