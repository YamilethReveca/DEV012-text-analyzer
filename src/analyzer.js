const analyzer = {  
  getWordCount: (text) => {

    let array= text.trim();
    
    if(array===""){
      return 0;
   
    }else{

      array= array.split(" ");
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
   console.log(eliminarCaracteres);
   eliminarCaracteres=eliminarCaracteres.replace(/\s+/g, "");
   console.log(eliminarCaracteres);

   return eliminarCaracteres.length;

    // retorna los caracteres sin espacio - excluye los signos de puntuacion y los espacios
   //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {  
   
    let eliminarCaracteres= text.replace(/\.\,\:;_-\!\?°\|"#\$%&\/\(\)\=\'¡¿¨\^\+\*\}\{\]\[\'/g, "");
    eliminarCaracteres=eliminarCaracteres.replace(/\s+/g, "");
   
    let array= text.trim();
    
    if(array===""){
      return 0;
   
    }else{

      array= array.split(" ");
      return eliminarCaracteres.length/array.length;

    }
        
    // aqui retorna la longitud de medición entre los caracteres sin espacio entre las cantidades de palabras.
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    
    
    let numeros= text.trim();
    console.log("mira trim "+ numeros)    
    let reemplazonumeros=numeros.replace(/[^0-9\s]+/g, "");
    
    console.log("reemplazo "+ numeros)   
    
    if(reemplazonumeros===""){

      return 0;
    }else{

      reemplazonumeros= reemplazonumeros.split(/\s/g);
      console.log("reemplazo 2 "+ reemplazonumeros)   
      return reemplazonumeros.length;
    }
    

    
    
    
      // retorna los numeros por cifras y dara la cantidad de longitud. 
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
   
    // let sumaNumeros= 0;
    //   sumaNumeros= text.trim().split(" ");

    //   for(let i= 0; i<text.length; i++){

    //   const regex=/^[0-9]*$/;
    //   let onlyNumber=regex.test(text[i]);
    //   // 
    //     if(onlyNumber===true){
    //       sumaNumeros= sumaNumeros , parseInt(text);
    //       console.log("suma de numeros"+ sumaNumeros);
          
    //     }
        
    // }

   
    // return sumaNumeros;
   
    // retora los numeros en fracciones y sumandose entre ellas.
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
