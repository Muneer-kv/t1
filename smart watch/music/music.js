
function myfunction(z) {
    z.classList.toggle("fa-pause");
}
function forward() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText)
            let b = a.music

            c = 0
            if (c < b.length) {
                c++
            }
            else {
                c = 0
            }
            var d = b[c]
            document.getElementById('songName').innerHTML = d.name;
            document.getElementById('songImage').src = b[c].img;
            var x = document.getElementById("playSong")
            x.src = b[c].song
            x.play()
        }
    }
    xhttp.open("GET", "music.json", true);
    xhttp.send();
}
function backward() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText)
            let b = a.music

            c = 0
            if (c > b.length) {
                c--
            }
            else {
                c = 0
            }
            var d = b[c]
            document.getElementById('songName').innerHTML = d.name;
            document.getElementById('songImage').src = b[c].img;
            var x = document.getElementById("playSong")
            x.src = b[c].song
            x.play()
        }
    }
    xhttp.open("GET", "music.json", true);
    xhttp.send();
}
function dd() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText)
            // console.log(a)
            let b = a.music
            // console.log(b)
            // let c = b[0]
            // console.log(c)

            c = 0
            if (c == b.length) {
                c++
            }
            else {

            }
            var d = b[c]
            document.getElementById('songName').innerHTML = d.name;
            document.getElementById('songImage').src = b[c].img;
            var x = document.getElementById("playSong")
            x.src = b[0].song
            // console.log(x)

            var m = document.getElementById('cl');
            console.log(m.className)
            if (m.className == "fa fa-play") {



                x.pause()



            }
            else {
                x.play()
            }




        }
    }
    xhttp.open("GET", "music.json", true);
    xhttp.send();
}