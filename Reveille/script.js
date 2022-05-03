document.addEventListener("DOMContentLoaded", (e) => {

        var btn = document.getElementById('send');
        var lapCounter = 1;
        var time = document.querySelector("#laps");

        var tab = [];
        let heur;
        let minute;
        let text1;
        var tabfinal = [];

        btn.addEventListener("click", function(event) {


            // valeur entré
            heur = document.getElementById('heur').value;
            minute = document.getElementById('minutes').value;
            text1 = document.getElementById('text1').value;
            li = document.querySelector("li");

            // let mheur = 0;
            // let mminute = 0;

            // mheur = parseInt(heur, 10);
            // mminute = parseInt(minute, 10);

            let datetest = new Date(2022, 0, 1, heur, minute, 0);
            let testheur = datetest.getHours();
            let testmin = datetest.getMinutes();
            let testsec = datetest.getSeconds();
            // console.log(datetest);
            // console.log(Date.now());
            testmin = testmin < 10 ? "0" + testmin : testmin;
            testheur = testheur < 10 ? "0" + testheur : testheur;

            // lastmin = parseInt(testmin, 10);
            // lastheur = parseInt(testheur, 10);
            // console.log(testheur);
            // console.log(testmin);

            time.innerHTML += '<li>' + testheur + ' : ' + testmin + '<label for="scales"> : Reveille' + lapCounter + '</label></li>';
            tab = [testheur, testmin, text1];
            tabfinal.push(tab);
            // console.log(tabfinal)

            // tabfinal.forEach(element => console.log(element[1])

            // );


            lapCounter++;

        })

        function timer() {
            setInterval(() => {
                const time = document.querySelector("#time");
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                time.textContent = hours + ":" + minutes + ":" + seconds;

                // mettre peut etre en objet date les valeur entree ??
                // valeur entré
                let heur = document.getElementById('heur').value;
                let minute = document.getElementById('minutes').value;
                let text1 = document.getElementById('text1').value;

                // tab.forEach(element => function() {
                //     if (hours == heur && minutes == minute && seconds == 00) {
                //         alert(text1);

                //     }
                // });
                for (var i = 0; i < tabfinal.length; i++) {

                    if (hours == tabfinal[i][0] && minutes == tabfinal[i][1] && seconds == 00) {
                        alert(text1);

                    }
                }


            });


        }
        timer();





    })
    // bouclersur un tab qui contiendra toute les date rentrer a la main et mettre une condition dans la boucle qui compererala date actuelle avec celle du tab