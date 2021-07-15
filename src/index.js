import validator from './validator.js';
//console.log(validator); 

let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
let tarjeta = document.getElementById("tarjeta").value; //Se declara una variable obteniendo el valor del elemento por id llamado tarjeta

let validacion = validator.isValid(tarjeta);


let tarjetaOculta = validator.maskify(tarjeta);

if (validacion){
  document.getElementById("resul").innerHTML = "Tu tarjeta es valida!" + "<br/>"+ tarjetaOculta;
  
  
}else{ 
  document.getElementById("resul").innerHTML = "Tu tarjeta es invalida!" + "<br/>"+ tarjetaOculta; 
  
}

});
