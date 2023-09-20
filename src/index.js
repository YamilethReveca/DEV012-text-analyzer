import analyzer from './analyzer.js';

// aqui inicio en 0 todo los li 

let contador= 0;

document.querySelector(".palabras").innerHTML="Palabras:"+ contador;
document.querySelector(".caracteres").innerHTML="Caracteres:"+ contador;
document.querySelector(".sincaracteres").innerHTML="Carácter sin espacios:"+ contador;
document.querySelector(".numeros").innerHTML="Números:"+ contador;
document.querySelector(".sumanumeros").innerHTML="Suma números:"+ contador;
document.querySelector(".promediolongitud").innerHTML="Promedio longitud:"+ contador;



// aqui se escucha el eventos input del textarea

let textarea = document.querySelector("textarea[name='user-input']");
textarea.addEventListener("input",calcularValores);

function calcularValores(e) {
  
  document.querySelector(".palabras").innerHTML="Palabras:"+ analyzer.getWordCount(e.target.value);
  document.querySelector(".caracteres").innerHTML="Caracteres:"+ analyzer.getCharacterCount(e.target.value);
  document.querySelector(".sincaracteres").innerHTML="Carácter sin espacios:"+ analyzer.getCharacterCountExcludingSpaces(e.target.value);
  document.querySelector(".numeros").innerHTML="Números:"+ analyzer.getNumberCount(e.target.value);
  document.querySelector(".sumanumeros").innerHTML="Suma números:"+ analyzer.getNumberSum(e.target.value);
  document.querySelector(".promediolongitud").innerHTML="Promedio longitud:"+ analyzer.getAverageWordLength(e.target.value);
}

// boton limpiador de todos los li
let boton= document.getElementById("reset-button");
let limpiar= document.querySelector("textarea[name='user-input']");
boton.addEventListener("click", function(){
  limpiar.value="";
  document.querySelector(".palabras").innerHTML="Palabras:"+ contador;
  document.querySelector(".caracteres").innerHTML="Caracteres:"+ contador;
  document.querySelector(".sincaracteres").innerHTML="Carácter sin espacios:"+ contador;
  document.querySelector(".numeros").innerHTML="Números:"+ contador;
  document.querySelector(".sumanumeros").innerHTML="Suma números:"+ contador;
  document.querySelector(".promediolongitud").innerHTML="Promedio longitud:"+ contador;
      
})

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`