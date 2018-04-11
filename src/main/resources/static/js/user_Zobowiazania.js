

$(document).ready(function () {

    var table = $('#user_zobowiazania_Table').DataTable({
          dom: "Bfrtip",
        "processing": true,
        "serverSide": false,
        "sAjaxSource": "/user_zobowiazania/get",
        "sAjaxDataProp": "",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Polish.json"
        },
        dataType: 'json',
          columns: [
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
        idSrc: "rokRozliczeniowy",
                buttons: [

            {extend: 'pdfHtml5', orientation: 'landscape',
                pageSize: 'LEGAL', download: 'open'}
                ]
    });
});


