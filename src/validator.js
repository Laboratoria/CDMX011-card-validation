const validator = {
  isValid(digitosCard) {
    const digitosArr = [].slice.call(digitosCard).reverse();


    //Agrega ceros para acompletar array

    switch (digitosArr.length) {
      case 13: digitosArr.push("0", "0", "0");
        break
      case 11: digitosArr.push("0", "0", "0", "0", "0");
        break
      case 10: digitosArr.push("0", "0", "0", "0", "0", "0");
    }

    //Toma las posiciones pares

    let n1 = parseInt(digitosArr[1]);
    let n3 = parseInt(digitosArr[3]);
    let n5 = parseInt(digitosArr[5]);
    let n7 = parseInt(digitosArr[7]);
    let n9 = parseInt(digitosArr[9]);
    let n11 = parseInt(digitosArr[11]);
    let n13 = parseInt(digitosArr[13]);
    let n15 = parseInt(digitosArr[15]);


    const pares = [n1, n3, n5, n7, n9, n11, n13, n15];


    //Multiplica los digitos de las posiciones pares y suma cada resultado en caso de tener dos digitos
    let paresSumadosDecenas = 0;
    let paresSumadosUnidades = 0;

    for (let i = 0; i <= pares.length - 1; i++) {
      let paresMultiplicados = pares[i] * 2;
      if (paresMultiplicados >= 10) {
        let pares2digSumados = parseInt((paresMultiplicados / 10) + (paresMultiplicados % 10));
        paresSumadosDecenas += pares2digSumados;
      } else { paresSumadosUnidades += paresMultiplicados }
    }

    let paresTotal = (paresSumadosDecenas + paresSumadosUnidades);


    //toma posiciones impares
    let n2 = parseInt(digitosArr[0]);
    let n4 = parseInt(digitosArr[2]);
    let n6 = parseInt(digitosArr[4]);
    let n8 = parseInt(digitosArr[6]);
    let n10 = parseInt(digitosArr[8]);
    let n12 = parseInt(digitosArr[10]);
    let n14 = parseInt(digitosArr[12]);
    let n16 = parseInt(digitosArr[14]);

    const impares = [n2, n4, n6, n8, n10, n12, n14, n16];
    // Suma posiciones impares
    let imparesTotal = 0;
    for (let i = 0; i <= impares.length - 1; i++) {
      let impar = impares[i];
      imparesTotal += impar;
    }
    // Suma totales de las sumas impares y pares
    const digitosValidacion = paresTotal + imparesTotal;

    let respuesta
    //Valida si la respuesta es correcta revisando si el residuo es igual a cero
    if (digitosValidacion % 10 === 0) {
      respuesta = true;
    } else {
      respuesta =false;
    }
    return respuesta;

  }
  //Regresa mensaje en la pantalla

  // funcion para enmascarar
  , maskify(digitosCard) {

    let enmascarar;
    if (digitosCard.length > 4) {

      enmascarar = "#".repeat(digitosCard.length - 4) + digitosCard.slice(-4);
    } else {
      enmascarar = digitosCard;
    }

    return enmascarar;
  }
};

export default validator;


/*let let i = 0;
 let n = 0;
 while (i < 5) {
   i++;
   if (i === 3) {
      // continue;
   }
   n += i;
   console.log(n);
   break
 }*/
