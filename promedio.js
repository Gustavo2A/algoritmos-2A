#promedio.js

function calcularPromedio() { // 1. Inicio
//2. Definir c1, c2, c3, c4, c5, promedio
  var c1;
  var c2;
  var c3;
  var c4;
  var c5;
  var promedio;
// 3. Hacer c1 = 10, c2 = 7.5, c3 = 9, c4 = 10, c5 = 10
//3.1 obtener el campo de texto
var campoDeTexto = document.getElementById('calificacion1');
//3.2 obtener el contenido de texto de mi campo de texto
var contenido = campoDeTexto.value;
c1 = parseFloat (contenido);

var campoDeTexto = document.getElementById('calificacion2');
var contenido = campoDeTexto.value;
c2 = parseFloat (contenido);

var campoDeTexto = document.getElementById('calificacion3');
var contenido = campoDeTexto.value;
c3 = parseFloat (contenido);

var campoDeTexto = document.getElementById('calificacion4');
var contenido = campoDeTexto.value;
c4 = parseFloat (contenido);

var campoDeTexto = document.getElementById('calificacion5');
var contenido = campoDeTexto.value;
c5 = parseFloat (contenido);

  c1 = 10;
  c2 = 7.5;
  c3 = 9;
  c4 = 10;
  c5 = 10;
// 4.Hacer promedio + c1 + c2 + c3 + c4 + c5 / 5 - 46.5 / 5 - 9.3
  promedio = (c1 + c2 + c3 + c4 + c5) / 5;
// 5. imprimir promedio
  alert('Tu promedio es de:' + promedio);
}//fin
