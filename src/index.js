import validator from './validator.js';
//console.log(validator); 

let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
let tarjeta = document.getElementById("tarjeta").value; //Se declara una variable obteniendo el valor del elemento por id llamado tarjeta

let valida = validator.isValid(tarjeta);

valida = validator.maskify(tarjeta);
if (valida){
  document.getElementById("resul").innerHTML = "Tu tarjeta es valida!" + "<br/>"+ valida;
  
  
}else{ 
  document.getElementById("resul").innerHTML = "Tu tarjeta es invalida!" + "<br/>"+ valida; 
  
}

});
