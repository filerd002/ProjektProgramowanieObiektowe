 $(document).ready(function () {
                $.ajax({
                     dataType: "json",
                    url: "/user/get"
                    
                }).then(function (data) {
                      
                    $('.nrDzialkowicza').append(data.nrDzialkowicza);
                    $('.nrDzialki').append(data.dzialkis[0].nrDzialki);
                    $('.imie').append(data.imie);
                    $('.nazwisko').append(data.nazwisko);
                    $('.ulica').append(data.ulica);
                    $('.nrDomu').append(data.nrDomu);
                    $('.nrLokalu').append(data.nrLokalu);
                    $('.kodPocztowy').append(data.kodPocztowy);
                    $('.miasto').append(data.miasto);
                    $('.adresDoKorespondencji').append(data.adresDoKorespondencji);
                    $('.telefon').append(data.telefon);
                    $('.email').append(data.email);



                });
            });
