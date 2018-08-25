
var pantalla= document.getElementById("display")

function animacionBoton(obj){
obj.onmousedown = onClickDown(obj);
obj.onmouseup= onClickUp(obj);
}

var n1= document.getElementById("1");
var n2= document.getElementById("2");
var n3= document.getElementById("3");
var n4= document.getElementById("4");
var n5= document.getElementById("5");
var n6= document.getElementById("6");
var n7= document.getElementById("7");
var n8= document.getElementById("8");
var n9= document.getElementById("9");


n1.onmousedown= function(){onClickDown(this)};
n1.onmouseup= function(){onClickUp(this)};

n1.onclick= function(){escribir(this)}


function onClickDown(obj){
  obj.style.width = "20%";
}
function onClickUp(obj){
  obj.style.width = "22%";
}

function escribir(obj){
  var num=  obj.getAttribute("id");

  if(pantalla.innerHTML==0){
      pantalla.innerHTML= num;
  }else{
      pantalla.innerHTML+= num;
  }
}
