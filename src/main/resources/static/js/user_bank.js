  $(document).ready(function () {
                $.ajax({
                     dataType: "json",
                    url: "/user/get"
                    
                }).then(function (data) {
                      
                  
                    $('.kodIban').append(data.dzialkis[0].iban.kodIban);
                 $('.nrKonta').append(data.dzialkis[0].iban.nrKonta);



                });
            });
