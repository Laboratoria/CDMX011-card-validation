import validator from './validator.js';
//console.log(validator); 
//declaramos la variable boton para que obtenga el elemento por id llamado boton
//el cual mandamos llamar desde el index.html en la línea 42
let boton = document.getElementById("boton");
//Creamos un evento llamado boton que al hacer click manda llamar a la funcion anónima
boton.addEventListener("click", function(){
//Se declara la variable tarjeta obteniendo el valor del elemento por id llamado tarjeta 
let tarjeta = document.getElementById("tarjeta").value; 
//Se declara la variable validacion para que reciba el valor que retorna en isvalid 
//(true o false)(líneas 39 -44)(validator.js) 
let validacion = validator.isValid(tarjeta);

//Se declara la siguiente variable para que reciba el valor que retorna en la función maskify
let tarjetaOculta = validator.maskify(tarjeta);
//Se hace una condición para colocar insertar un string dentro del elemento obtenido por id llamado resul
//Si el resultado que retorta al final de la función isvalid es verdadero, 
//coloca el primer mensaje, dando un salto de línea y 
//concatenando el string obtenido en la función maskify
//si no es así coloca el segundo mensaje con las mismas instrucciones 
if (validacion){
  document.getElementById("resul").innerHTML = "Tu tarjeta es valida!" + "<br/>"+ tarjetaOculta;
  
  
}else{ 
  document.getElementById("resul").innerHTML = "Tu tarjeta es invalida!" + "<br/>"+ tarjetaOculta; 
  
}

});
