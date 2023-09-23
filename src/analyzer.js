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

    // retorna los caracteres sin espacio - excluye los signos de puntuacion y los espacios
   //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {  

    let array2= text.replace(/[0-9]/g, "");
    array2=array2.trim();
        
    if(array2===""){
     return 0;
       
    }else{
      let palabrasSinEspacios= array2.replace(/\s+/g, "");
      array2= array2.split(/\s+/g);

      let longitud= palabrasSinEspacios.length / array2.length;
      

      return longitud.toFixed(2);
    }
        
    // aqui retorna la longitud de medición entre los caracteres sin espacio entre las cantidades de palabras.
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
       
   let numeros= text.match(/\b\d+(\.\d+)?\b/g);
    
    if( numeros===null){
      return 0
    }else{

      return numeros.length;
    }
    
    
      
      // retorna los numeros por cifras y dara la cantidad de longitud. 
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
   
    if (text) {
      let numbers= text.match(/\b\d+(\.\d+)?\b/g);
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
