document.addEventListener("DOMContentLoaded", (e) => {


    var btn = document.getElementById('send');
    var lapCounter = 1;
    btn.addEventListener("click", function(event) {
        var time = document.querySelector("#laps");

        // valeur entré
        let heur = document.getElementById('heur').value;
        let minute = document.getElementById('minutes').value;
        let text1 = document.getElementById('text1').value;

        time.innerHTML += '<li><span class="lap-heur">' + heur + '</span >: <span class = "lap-minute"> ' + minute + '<input type="checkbox" id="scales" name="scales" value="1" checked> <label for="scales">Reveille' + lapCounter + '</label></li>';
        lapCounter++;
        //





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

            // valeur entré
            let heur = document.getElementById('heur').value;
            let minute = document.getElementById('minutes').value;
            let text1 = document.getElementById('text1').value;

            if (hours == heur && minutes == minute && seconds == 00) {
                alert(text1);
                // time.innerHTML = '<span class = "lap-heur">' + "Passe" + '</span>'

            }

        });


    }
    timer();





})