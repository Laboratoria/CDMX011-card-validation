const validator = {
  isValid:function(tarjeta){
   //Se declara la variable dividiendo los elementos de la variable tarjeta que se define en el index.js línea 7 y se forma un nuevo arreglo (string)
    let numTarjeta = tarjeta.split("");  
    //Se declara la variable para calcular la longitud de la variable inicial (numTarjeta)
    let longArreglo = (numTarjeta.length);
    //Se hace un ciclo for declarando la variable i con el tamaño del arreglo menos dos, 
    //hasta que compruebe que i sea mayor o igual a cero y reduciendo dos veces 
    for (let i = longArreglo - 2; i >= 0; i -= 2){  
      //Se hace una condición para multiplicar el valor de numTarjeta en i por dos y 
      //que ese valor compruebe si es mayor a 9
      //Si se cumple entonces guardamos el resultado en la variable numTarjeta
      //el cual vamos a convertir en número multiplicarlo por dos y restarle nueve
      //Si no se cumple entonces solo se multiplica por dos 
      if((numTarjeta[i]*2)>9)
      {
        numTarjeta[i] = Number((numTarjeta[i]*2)-9);
      }    
      else
      {
        numTarjeta[i] = Number(numTarjeta[i]*2);
      }
    }
    //Se hace un ciclo para que los valores que no se habían obtenido es decir los impares
    //en el arreglo numTarjeta se conviertan en número
    for (let i = 0; i < numTarjeta.length; i++)
    {
      numTarjeta[i] = Number(numTarjeta[i]);
    }
    //Se declara la variable suma para que sume los valores de la variable numTarjeta
    let suma = numTarjeta.reduce(sumando);
    function sumando (total,num)
    {
      return total + num;
    }
    //Se hace una condición para comprobar si el valor obtenido en la variable suma 
    //al aplicarle modulo diez te da un resultado igual a cero y retorna verdadero
    //si no lo hace te retorna falso
    if ((suma % 10) == 0){
      return true;
    } 
    else{
      return false;
    }       
    //Todo esto esta dentro de la función isvalid
  } ,
  
  maskify:function(str){ 
    //Se declara la variable x para calcular el tamaño del string
    let x = str.length;
    //Se declara la variable output 
    let output = "";
    //Se hace un ciclo que inicialice en cero; si el valor de la variable i es menor a x 
    //que es el tamaño del string menos cuatro y que vaya aumentando y 
    //que coloque un #
    //Al final que retorne el string de output y concatene el string 
    //y obtenga los caractéres que estan entre índices y 
    //que coloque la longitud del string menos 4  
    //
    for(let i = 0; i< x - 4;i++)
    {
     output += "#";
    }
    return output + str.substring(x-4,x); 
  }
};

export default validator;
