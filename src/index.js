import validator from './validator.js';


document.getElementById("pay").addEventListener("click",function(){
  recuperar();
  mostrarSeccion();
} );

//Captura los dígitos de la tarjeta


function recuperar() {
  const digitosCard = document.getElementById("digitos").value;

  document.getElementById("digitosEnmascarados").innerHTML = validator.maskify(digitosCard);


  if (validator.isValid(digitosCard) === true) {
    document.getElementById("validacion").innerHTML = "Felicidades tu pago a sido procesado";
  } else { document.getElementById("validacion").innerHTML = "El número de tarjeta ingresado es "+digitosCard+" Tarjeta invalida presiona regresar para volver a intentar"; }
}




function mostrarSeccion() {
 const digitosCard2 = document.getElementById("digitos").value;
  if (digitosCard2===""){
    alert("Favor de ingresar un número de tarjeta");
  } else{
  document.getElementById("seccion2").style.display = "block";
  document.getElementById("seccion1").style.display = "none";
}
}
