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
