var time = new Date();
var txt = document.getElementById('hora');
var hora = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hora < 10) {
    hora = "0" + hora;
}
if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}
txt.innerHTML = hora + ":" + min + ":" + sec;