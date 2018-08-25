var pantalla = document.getElementById("display")
var valorInicial;
var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var n4 = document.getElementById("4");
var n5 = document.getElementById("5");
var n6 = document.getElementById("6");
var n7 = document.getElementById("7");
var n8 = document.getElementById("8");
var n9 = document.getElementById("9");
var n0 = document.getElementById("0");
var on = document.getElementById("on");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var signo = document.getElementById("sign");
var suma = document.getElementById("mas");
var resta = document.getElementById("menos");
var multiplicacion = document.getElementById("por");
var division = document.getElementById("dividido");

var calculadora=(function (num1,num2) {

    var resultado;

    function actualizarResultado(nuevoResultado) {
      resultado = nuevoResultado;
    }

    return {
      sumar: function() {
        var nuevoResultado= num1+num2;
        actualizarResultado(nuevoResultado)
      },
      resta: function() {
        var nuevoResultado= num1-num2;
        actualizarResultado(nuevoResultado)
      },
      multiplicacion: function() {
        var nuevoResultado= num1*num2;
        actualizarResultado(nuevoResultado)
      },
      division: function() {
        var nuevoResultado= num1/num2;
        actualizarResultado(nuevoResultado)
      }
    }
  })
=======
n1.onclick = function() {
  escribir(this);
}
n2.onclick = function() {
  escribir(this)
}
n3.onclick = function() {
  escribir(this)
}
n4.onclick = function() {
  escribir(this)
}
n5.onclick = function() {
  escribir(this)
}
n6.onclick = function() {
  escribir(this)
}
n7.onclick = function() {
  escribir(this)
}
n8.onclick = function() {
  escribir(this)
}
n9.onclick = function() {
  escribir(this)
}
n0.onclick = function() {
  escribir(this)
}

on.onclick = function() {
  pantalla.innerHTML = 0
  valorTotal = 0;
}

suma.onclick = function() {
  resultado()
  sumar()
}

resta.onclick = function() {
  resultado()
  restar()
}
multiplicacion.onclick = function() {
  resultado()
  multiplicar()
}
division.onclick = function() {
  resultado()
  dividir()
}

igual.onclick = function() {
  resultado()
  mostrarResultado()
}

punto.onclick = function() {
  var existe = pantalla.innerHTML.indexOf(".");
  if (existe == -1) {
    pantalla.innerHTML += "."
  }
}

signo.onclick = function() {
  pantalla.innerHTML = pantalla.innerHTML * -1
}

function escribir(obj) {
  var num = obj.getAttribute("id");
  if (pantalla.innerHTML == "0") {
    pantalla.innerHTML = num;
    valorInicial = num
  } else if (pantalla.innerHTML.length < 8) {
    pantalla.innerHTML += num;
    valorInicial += num;
  } else {
    valorInicial += num
  }
  return valorInicial;
}

function mostrarResultado() {
  pantalla.innerHTML = valorTotal;
}



function limpiar() {
  valorInicial = "";
  pantalla.innerHTML = "";
}
