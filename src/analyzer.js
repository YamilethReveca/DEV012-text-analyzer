const analyzer = {
  getWordCount: (text) => {

    let array= text.replace(/[0-9]/g, "");
    array=array.trim();

    if(array===""){
      return 0;

    }else{
      array= array.split(/\s+/g);

      return array.length;
    }



    // retorna el texto palabra por palabra.
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {

    return text.length;

    // retorna los caracteres tal como llega sin espacio, con todo los signos de puntuación.
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {

    let eliminarCaracteres= text.replace(/[^A-Za-z0-9]/g, "");

    eliminarCaracteres=eliminarCaracteres.replace(/\s+/g, "");

    return eliminarCaracteres.length;



  },
  getAverageWordLength: (text) => {

    let array2= text.replace(/[0-9]/g, "");
    array2=array2.trim();

    if(array2===""){
      return 0;

    }else{
      const palabrasSinEspacios= array2.replace(/\s+/g, "");
      array2= array2.split(/\s+/g);

      let longitud= palabrasSinEspacios.length / array2.length;

      longitud= parseFloat(longitud.toFixed(2));
      return longitud;
    }



  },
  getNumberCount: (text) => {

    const numeros= text.match(/\b\d+(\.\d+)?\b/g);

    if( numeros===null){
      return 0
    }else{

      return numeros.length;
    }





  },
  getNumberSum: (text) => {

    if (text) {
      const numbers= text.match(/\b\d+(\.\d+)?\b/g);
      if (numbers) {
        let suma = 0;
        for (let i = 0; i < numbers.length; i++) {
          suma += parseFloat(numbers[i]);
        }
        return suma;
      } else {
        return 0;
      }
    } else {
      return 0;
    }

    // retora los numeros en fracciones y sumandose entre ellas.
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
