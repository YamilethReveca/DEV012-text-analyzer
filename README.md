# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Funcionalidades](#4-funcionalidades)
* [5. Criterios de aceptación mínimos del proyecto](#6-Criterios-de-aceptación)
* [6. Pruebas](#7-pruebas)


***

# 1.- Consideraciones generales.

Este es un proyecto diseñado con fines educativo , la cual tiene como finalidad contar las métricas de palabras, caracteres, caracteres sin espacios, números, suma de números y promedio longitud de palabras. Este proyecto se inició con lo anterior mencionado, pero se espera poder agregar otros tipos de contadores. Este prototipo es de fácil uso por los usuarios de la aplicación.

# 2.- Preámbulo

![imagen de texto](https://media.istockphoto.com/id/1458664845/es/foto/aprender-matem%C3%A1ticas.jpg?s=1024x1024&w=is&k=20&c=JMa5zH6z_c2CNmoi_bC-_dQJvQ028lg0bikeKhhma9s=)
_Credito: Foto de [wildpixel]

El Analizador de texto es una aplicación que extrae métricas desde un texto y que a su vez permite mostrar al usuario cada uno de estas mediciones.

# 3.- Funcionalidades 

  * Medición de palabras (no se toma en cuenta los números): Se obtiene el número de palabras a partir del texto escrito en la caja de texto y se muestra el conteo a la usuaria.
  * Medición de caractes (se incluye todos los signos de puntuación y espacios en blanco):Permite cálcula la cantidad de caracteres escrito y mostrar el conteo a la usuaria.
  * Medición de caracteres sin espacios (se excluye espacios y signos de puntuación): Permite el conteo de números y letras en la caja de texto, excluyendo espacios y signos de puntuación.
  * Medición de números (solo números): Permite el conteo de números que escribe la usuaria y muestra este recuento.
  * Medición de suma números (sumatoria de números):Suma todos los números escritos por la usuaria y muestra el resultado.
  * Medición de la longitud promedio de palabras (longitud media de las palabras):Permite el conteo de la longitud media de las palabras escritas en la caja de texto.
  

  ![Analizador de texto](imagen-analyzer.png)

### Caracteristica HTML CSS Y JAVASCRIPT

# HTML

* Se tiene un header con un hijo h1.
* El textarea tiene un atributo con un valor usar-name.
* se creó una sección para contener el ul y sus hijos.
* Un ul con 6 hijos , cada hijo tiene un atributo data-testid con valores únicos mencionados a continuación.

- li data-testid valor= word-count con un atributo class con un valor contador.
- li data-testid valor= character-count con un atributo class con un valor contador.
- li data-testid valor= character-no-spaces-count con un atributo class con un valor contador.
- li data-testid valor= number-count con un atributo class con un valor contador.
- li data-testid valor= number-sum con un atributo class con un valor contador.
- li data-testid valor= word-length-average con un atributo class con un valor contador.

* Un button con un atributo con valor reset-button;
* Un footer con un hijo p, que se tiene el nombre del autor del proyecto

# CSS

* Se trabajó con estilos básicos de CSS y respetando los criterios básicos de diseño de usuario.
* Se le colocó un backgorund-color al cuerpo (body).
* El textarea se uso el selector de atributo y se le aplicó estilo.
* Sección se le dio un 100% de anchura.
* Los li se uso el selector de clases y se le dio una anchura de 50%.
* El botón tiene un id y se le aplicó un estilo para que los li estuviera centrado.
* El footer se le dio un estilo en letras, tamaño y se puso a flotar a la derecha.
* Se aplicó modelo de caja a los li.

# JAVASCRIPT

En el javascript debe retornar las métricas de cada unos de los li. Se tiene 2 archivos javascript, el analyzer.js y el index.js. El analyzer.js tiene el objeto llamado analyzer y que tiene 6 metodos que retornará los valores métricos de cada uno de los li.
El analyzer.js exporta los resultados al index.js.
El index.js sólo se obtiene las variables del evento input y el evento click del textarea y del boton y las instrucciones  de lo que se va a ejecutar cuando los eventos sea invocados.
* [`src/index.html`](./src/index.html): este es el punto de entrada a tu
  aplicación. Este archivo debe contener tu HTML.
* [`src/style.css`](./src/style.css): este archivo debe contener las reglas de estilo. Queremos que escribas tus propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).
* [`src/analyzer.js`](./src/analyzer.js): acá debes implementar el objeto `analyzer`, el cual ya está _exportado_ en el _boilerplate_. Este objeto (`analyzer`) debe contener seis métodos:
 - `analyzer.getWordCount(text)`: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`. En este caso usa 2 dígitos decimales.


# WEB APIs


* Se creó una variable que almacena el textarea del Dom.
* Luego a la variable se agrega un EventListener para escuchar el evento input.
* Cuando sucede un evento input en el textarea se llama a la función calcularValores, este dará las indicaciones que se quieren, en este caso, que muestre las metricas en cada uno de los li.
* Otra variable llamada botón , tiene un evento EventListener para escuchar el evento click, que limpiará la caja de texto, eliminando lo que la usuaria digito y también eliminando las métricas calculadas.
* Las instrucciones son que borre el texto del textarea y lo deje como estaba al inicio y que todos los li inicialice en 0.


# 6.- Criterios-de-aceptación

HTML

* Un header que contenga un hijo con el encabezado más grande y que contenga "ANALIZADOR DE TEXTO".
* ul que tenga 6 hijos cada uno con atributo llamado data-testid con valores únicos.
* Un textarea que contenga un atributo llamado name con valor" user-input".
* Un button con atributo llamado id con valor "reset-button".
* Un footer que contenga un hijo p, que este tenga solo dato del autor.

CSS

* Selectores de CSS de etiqueta para el header y el footer.
* Selectores de CSS de clases para los 6 li.
* Selectores de atributo para el textarea.
* Selectores de CSS de id para el button.
* Modelo de caja para los li, backgroud-color, margin,border y padding.

JAVASCRIPT

* Exportar desde analyzer.js hacia el index.js
* El objeto analyzer con 6 mÉtodos que retorna las métricas.
* Uso de condicional if else,
* Métodos .split(), .trim() y .replace() para el retorno de las métricas.
* Ciclo for.

WEB-APIs(index.js)

* Importar desde index.js
* Uso del querySelector para los li.
* Uso del getElementById para el botón.
* Evento input para el textarea.
* Evento click para el botón.


# 7.- Comandos y pruebas unitarias 

| ------ | ------ |
| GitHub |Crear una cuenta en Github.|
| GitHub |Configura de cuenta Github con una llave SSH.|
| GitHub |[phttps://github.com/YamilethReveca/DEV012-text-analyzer] |
| GitHub | Creó un _fork_ para su proyecto.|
| GitHub | Clonar repositorio del Github.  |

# Comando GitBash

| -------- | --------------|
| CARPETA  | commits      .|
| COMANDOS | [npm install] |
| COMANDOS | [npx playwright install chromium --with-deps] |
| COMANDOS | [npm start] |
| RUTA     | [ http://localhost:3000] |


* **GitHub: Despliegue con GitHub Pages**

| -------- | ------------|
|[Github ] |La aplicación será desplegada en Github Pages.|


## Comando pruebas unitarias

* npm run test:oas-html
* npm run test:oas-css
* npm run test:oas-web-api
* npm run test:oas-js

Estos comandos verifica los criterios minimos de aceptación de cada unos de los archivos , HTML, CSS, JAVASCRIPT y WEB-APIs.

## Comando pruebas End to End.

* npm run test:e2e

Este comando nos permite validar internamente, simulando una prueba de usuario donde se verifica que cada unos de los archivos antes mencionados esten funcionando correctamente.

## Despliegue Github


Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.


***