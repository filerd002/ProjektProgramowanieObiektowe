$(document).ready(function () {

    var table = $('#user_licznik_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
          "deferRender": true,
        "sAjaxSource": "/user_licznik/get",
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
            {data: "nrPomiaru"},
            {data: "data"},
            {data: "stanLicznika"},
            {data: "naleznosc"}

        ],

        select: true,
        idSrc: "nrPomiaru",
                buttons: [

            {extend: 'pdfHtml5', orientation: 'landscape',
                pageSize: 'LEGAL', download: 'open'}
                ]
    });
});


