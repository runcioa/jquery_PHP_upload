        // Per eseguire dopo che ha caricato la pagina
        $(document).ready(function() {
            let request;

            // Intercetta il button di submit (deve essere $("form"). altrimenti non funziona)
            $("form").submit(function(event) {
                // Previene il comportamento di submit
                event.preventDefault();

                // Prelevo i dati per fare l'upload del file con il FormData
                let formData = new FormData(document.getElementById('myForm'));

                // Controllo i valori del FormData
                for (var value of formData.values()) {
                    console.log(value);
                }

                // Effettuo la richiesta di upload al file PHP passando i dati
                request = $.ajax({
                    url: 'upload_2_file.php',
                    type: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false,
                });

                //Ottengo la risposta 
                request.done(function(response, textStatus, jqXHR) {
                    // let risposta = JSON.parse(response);
                    // console.log(risposta.status);
                    // console.log('response');
                    $('#posto').text(response);
                });

                // Se fallisce
                request.fail(function(jqXHR, textStatus, errorThrown) {
                    console.log('fail');
                    console.log(textStatus);
                });

                // Lo fa sempre
                request.always(function() {
                    console.log('always');
                });
            });
        });