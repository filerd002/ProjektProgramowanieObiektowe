$(document).ready(function () {

    var table = $('#user_licznik_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
        "sAjaxSource": "/user_licznik/get",
        "sAjaxDataProp": "",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Polish.json"
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


