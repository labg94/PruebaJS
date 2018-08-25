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

function resultado() {
  if (suma) {
    sumar();
    suma = false;
  }
  if (resta) {
    restar();
    resta = false;
  }
  if (multi) {
    multiplicar();
    multi = false;
  }
  if (divi) {
    dividir();
    divi = false;
  }

  if (valorTotal == 0) {
    valorTotal = valorInicial;
  }


}

function mostrarResultado() {
  pantalla.innerHTML = valorTotal;
}


var valorTotal = 0;
var suma = false;
var resta = false;
var multi = false;
var divi = false;

function limpiar() {
  pantalla.innerHTML = "";
}


function sumar() {
  resta = false;
  multi = false;
  divi = false;
  suma = true;
  valorTotal += Number(valorInicial);
  limpiar();
}

function restar() {
  suma = false;
  multi = false;
  divi = false;
  resta = true;
  if (valorTotal == 0) {
    valorTotal = valorInicial;
  } else {
    valorTotal -= Number(valorInicial);
  }
  limpiar();

}

function multiplicar() {
  resta = false;
  suma = false;
  divi = false;
  multi = true;
  console.log("@antes de todo: " +valorTotal)
  if (valorTotal == 0) {
    valorTotal = valorInicial;
  } else {
    valorTotal *= Number(valorInicial);
  }
  limpiar();

}

function dividir() {
  resta = false;
  multi = false;
  suma = false;
  divi = true;
  console.log("@antes de todo: " +valorTotal)
  if (valorTotal == 0) {
    console.log("@deberia ser 0: "+valorTotal)
    valorTotal = valorInicial;
    valorInicial="";
    console.log("@deberia ser ahora el valor inicial:"+valorTotal+"\nvalor inicial: "+ valorInicial)
  } else {
    console.log("@Empezo la division"+ valorTotal+"\nentre: "+valorInicial);
    valorTotal /= Number(valorInicial);
    console.log("@valorTotal despues de la division: "+ valorTotal+"\nvalor inicial luego de la division: " +valorInicial);
  }
  limpiar();

}
