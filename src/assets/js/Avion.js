var avion = document.getElementById('avion').style;

function seguir() {
  avion.top = parseInt(window.event.pageY - 15) + "px";
  avion.left = parseInt(window.event.pageX - 55) + "px";
}
var cola = document.getElementById('cola').style;

function seguir2() {
  cola.top = parseInt(window.event.pageY - 38) + "px";
  cola.left = parseInt(window.event.pageX - 53) + "px";
}
var timon = document.getElementById('timon').style;

function seguir3() {
  timon.top = parseInt(window.event.pageY - 17) + "px";
  timon.left = parseInt(window.event.pageX - 58) + "px";
}
var flap = document.getElementById('flap').style;

function seguir4() {
  flap.top = parseInt(window.event.pageY - 10) + "px";
  flap.left = parseInt(window.event.pageX - 43) + "px";
}




