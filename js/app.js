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
var num1=0;
var num2;
var valorTotal;
var su=false;
var re=false;
var mu=false;
var di=false;
var calculadora=(function (num1,num2) {

    //
    // console.log("numero1"+num1);
    // console.log("numero2"+num2);
    function actualizarResultado(nuevoResultado) {
      valorTotal = nuevoResultado;
    }

    return {
      sumar: function() {
        su=true;
        re=false;
        mu=false;
        di=false;
        var nuevoResultado= Number(num1)+Number(num2);
        actualizarResultado(nuevoResultado)
      },
      resta: function() {
        su=false;
        re=true;
        mu=false;
        di=false;
        var nuevoResultado=  Number(num1)-Number(num2);
        actualizarResultado(nuevoResultado)
      },
      multiplicacion: function() {
        su=false;
        re=false;
        mu=true;
        di=false;
        var nuevoResultado=  Number(num1)*Number(num2);
        actualizarResultado(nuevoResultado)
      },
      division: function() {
        su=false;
        re=false;
        mu=false;
        di=true;
        var nuevoResultado=  Number(num1)/Number(num2);
        actualizarResultado(nuevoResultado)
      }
    }
  });


n1.onmousedown =function () {
    n1.style.width= "20%";
}

n1.onmouseup =function () {
    n1.style.width= "30%";
}

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
  numeros();
  limpiar();
  calculadora(num1,num2).sumar();
}
resta.onclick = function() {
  numeros();
  limpiar();
  calculadora(num1,num2).resta();
}
multiplicacion.onclick = function() {
  numeros();
  limpiar();
  calculadora(num1,num2).multiplicacion();
}
division.onclick = function() {
  numeros();
  limpiar();
  calculadora(num1,num2).division();
}
igual.onclick = function() {

  if(su){
    numeros();
    limpiar();
    calculadora(num1,num2).sumar();
  }
  if(re){
    numeros();
    limpiar();
    calculadora(num1,num2).resta();
  }
  if(mu){
    numeros();
    limpiar();
    calculadora(num1,num2).multiplicacion();
  }
  if(di){
    numeros();
    limpiar();
    calculadora(num1,num2).division();
  }
  num1=0;
  num2=null;
  mostrarResultado()
  valorInicial=""
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

function numeros() {
if(valorInicial!=""){
  num2=valorInicial;
  valorInicial="";
}
if(num1==0){
  num1=num2;
  num2="";
}
}


function escribir(obj) {
  var num = obj.getAttribute("id");
  if (pantalla.innerHTML == "0" ||valorInicial=="") {
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
