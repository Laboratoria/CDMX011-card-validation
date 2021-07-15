const validator = {
  isValid:function(tarjeta){
   
    let numTarjeta = tarjeta.split(""); //En esta variable se dividen los elementos y se forma un nuevo arreglo 
    
    let longArreglo = (numTarjeta.length);
    for (let i = longArreglo - 2; i >= 0; i -= 2){
      if((numTarjeta[i]*2)>9)
      {
        numTarjeta[i] = Number((numTarjeta[i]*2)-9);
      }    
      else
      {
        numTarjeta[i] = Number(numTarjeta[i]*2);
      }
    }

    for (let i = 0; i < numTarjeta.length; i++)
    {
      numTarjeta[i] = Number(numTarjeta[i]);
    }
    let suma = numTarjeta.reduce(sumando);
    function sumando (total,num)
    {
      return total + num;
    }
    
    if ((suma % 10) == 0){
      return true;
    } 
    else{
      return false;
    }       
    
  } ,
  maskify:function(str){ 
    let x = str.length;
    let output = "";
    for(let i = 0; i< x - 4;i++)
    {
     output += "#";
    }
    return output + str.substring(x-4,x); 
  }
};

export default validator;
