import analyzer from './analyzer.js';

// aqui inicio en 0 todo los li 

const contador= 0;

document.querySelector("li[data-testid='word-count']").textContent="Palabras:"+ contador;
document.querySelector("li[data-testid='character-count']").textContent="Caracteres:"+ contador;
document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Carácter sin espacios:"+ contador;
document.querySelector("li[data-testid='number-count']").textContent="Números:"+ contador;
document.querySelector("li[data-testid='number-sum']").textContent="Suma números:"+ contador;
document.querySelector("li[data-testid='word-length-average']").textContent="Promedio longitud:"+ contador;


// aqui se escucha el eventos input del textarea

const textarea = document.querySelector("textarea[name='user-input']");
textarea.addEventListener("input",calcularValores);

function calcularValores(e) {
  
  document.querySelector("li[data-testid='word-count']").textContent="Palabras:"+ analyzer.getWordCount(e.target.value);
  document.querySelector("li[data-testid='character-count']").textContent="Caracteres:"+ analyzer.getCharacterCount(e.target.value);
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Carácter sin espacios:"+ analyzer.getCharacterCountExcludingSpaces(e.target.value);
  document.querySelector("li[data-testid='number-count']").textContent="Números:"+ analyzer.getNumberCount(e.target.value);
  document.querySelector("li[data-testid='number-sum']").textContent="Suma números:"+ analyzer.getNumberSum(e.target.value);
  document.querySelector("li[data-testid='word-length-average']").textContent="Promedio longitud:"+ analyzer.getAverageWordLength(e.target.value);
}

// evento click del boton que limpia el textarea y a su vez todos los li.
const boton= document.getElementById("reset-button");
const limpiar= document.querySelector("textarea[name='user-input']");
boton.addEventListener("click", function(){
  limpiar.value="";
  document.querySelector("li[data-testid='word-count']").textContent="Palabras:"+ contador;
  document.querySelector("li[data-testid='character-count']").textContent="Caracteres:"+ contador;
  document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Carácter sin espacios:"+ contador;
  document.querySelector("li[data-testid='number-count']").textContent="Números:"+ contador;
  document.querySelector("li[data-testid='number-sum']").textContent="Suma números:"+ contador;
  document.querySelector("li[data-testid='word-length-average']").textContent="Promedio longitud:"+ contador;
      
})

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`