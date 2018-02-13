                 $(document).ready(function () {

                                    var table = $('#user_licznik_Table').DataTable({
                                          dom: "Bfrtip",
                                        "processing": true,
                                        "serverSide": false,
                                        "sAjaxSource": "/user_licznik/get",
                                        "sAjaxDataProp": "",
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


