---
title: "Sesión 19 - JavaScript: Contenido del DOM y Temporizadores"
section: "JavaScript"
order: 19
description: "Manipulación de contenido del DOM y temporizadores con setTimeout"
duration: 2
objectives:
  - "Diferenciar y aplicar textContent, innerText e innerHTML según el caso"
  - "Leer valores de inputs con .value y convertirlos correctamente con parseInt"
  - "Crear e insertar nodos con createElement y appendChild"
  - "Implementar una cuenta atrás usando setTimeout recursivo y condición de parada"
exercises:
  - title: "Lista dinámica con doble render"
    description: "Construye una interfaz con input y botón que añada elementos a una lista en dos contenedores: uno renderizado con innerHTML y otro con createElement + appendChild. Compara comportamiento, rendimiento percibido y conservación de listeners."
  - title: "Temporizador MM:SS"
    description: "Implementa un temporizador con inputs de minutos y segundos. Convierte los valores a número, calcula el total en segundos, muestra formato MM:SS con cero a la izquierda y cambia el estado visual al finalizar."
checklist:
  - "Sé cuándo usar textContent, innerText e innerHTML"
  - "Sé leer .value y convertir strings a enteros para operar"
  - "Sé crear nodos del DOM con createElement y añadirlos con appendChild"
  - "Sé construir un bucle asíncrono con setTimeout recursivo"
  - "Sé formatear minutos y segundos con padding a dos dígitos"
commonErrors:
  - "Usar innerHTML con datos no saneados provenientes del usuario"
  - "Olvidar parseInt y obtener concatenación de strings en vez de suma"
  - "Reescribir contenedores con innerHTML perdiendo listeners en hijos"
  - "No incluir condición de parada en el setTimeout recursivo"
  - "Mostrar 5:3 en lugar de 05:03 por no aplicar padding"
---

# Sesión 19 - JavaScript: Contenido del DOM y Temporizadores

**Fecha:** 28 de Abril de 2026

## Contenidos de la Sesión

En esta sesión se ha repasado brevemente lo trabajado en la sesión 18 y se ha profundizado en la **manipulación del contenido del DOM** con JavaScript: cómo leer y escribir texto o HTML en los elementos (`textContent`, `innerHTML`, `innerText`), cómo leer el valor de un `<input>` con `.value`, y cómo crear e insertar nuevos elementos en el DOM con `document.createElement` y `appendChild`. También se ha explorado la posibilidad de asignar **múltiples listeners** al mismo elemento y se ha introducido `setTimeout` para ejecutar código de forma diferida.

El ejercicio práctico de la sesión fue construir un **temporizador de cuenta atrás**, que se encuentra en la carpeta [`example/temporizador/`](./example/temporizador/). Para resolverlo se usó `document.querySelector`, una función helper `$`, `parseInt`, `Math.floor` y el patrón de `setTimeout` recursivo.

Los dos ejemplos de la sesión se encuentran en:

- [`example/session19/`](./example/session19/) — ejemplo principal con `createElement`, `innerHTML` y `setTimeout`
- [`example/temporizador/`](./example/temporizador/) — temporizador de cuenta atrás

---

### 1. Leer y modificar el contenido de un elemento: `textContent`, `innerHTML` e `innerText`

Una vez seleccionado un elemento del DOM, podemos leer o modificar su contenido con tres propiedades:

| Propiedad     | Lee / Escribe    | ¿Interpreta HTML? | Notas                                                      |
| ------------- | ---------------- | ----------------- | ---------------------------------------------------------- |
| `textContent` | texto plano      | ❌ No             | Incluye el texto de nodos ocultos (con CSS `display:none`) |
| `innerText`   | texto visible    | ❌ No             | Solo el texto visible; tiene en cuenta el CSS              |
| `innerHTML`   | HTML como string | ✅ Sí             | Permite insertar etiquetas HTML directamente               |

```js
const titulo = document.getElementById("titulo");

// Leer el contenido actual
console.log(titulo.textContent); // "Hello World"
console.log(titulo.innerText); // "Hello World"
console.log(titulo.innerHTML); // "Hello World"

// Escribir texto plano
titulo.textContent = "Nuevo título";
titulo.innerText = "Nuevo título";

// Escribir HTML
titulo.innerHTML = `<span class="destacado">Nuevo título</span>`;
```

> [!TIP]
> Para insertar **solo texto** usa `textContent`. Es más seguro y eficiente que `innerHTML` porque no interpreta etiquetas.  
> Usa `innerHTML` solo cuando necesites insertar etiquetas HTML.

> [!WARNING]
> **Nunca** uses `innerHTML` con datos que provengan directamente del usuario sin sanearlos antes. Insertar HTML no controlado abre la puerta a ataques **XSS** (Cross-Site Scripting).

---

### 2. Leer el valor de un `<input>`: `.value`

La propiedad `.value` de un input devuelve lo que el usuario ha escrito en ese campo, siempre como **string**.

```js
const elinput = document.getElementById("elinput");

console.log(elinput.value); // lo que haya escrito el usuario (como string)
```

> [!IMPORTANT]
> `.value` siempre devuelve un **string**, incluso si el input es de tipo `number`. Recuerda convertirlo a número con `parseInt()` o `parseFloat()` cuando lo necesites para cálculos.

---

### 3. Múltiples `addEventListener` en el mismo elemento

Es posible añadir **más de un listener** al mismo elemento para el mismo evento. Ambas funciones se ejecutarán cuando ocurra el evento:

```js
elboton.addEventListener("click", handleClick);
elboton.addEventListener("click", handleClickExtra);
```

Cuando el usuario hace clic en el botón, primero se ejecuta `handleClick` y después `handleClickExtra` (en el orden en que fueron registrados).

> [!NOTE]
> A diferencia de asignar directamente `elemento.onclick = funcion`, que solo permite una función, `addEventListener` permite registrar tantos callbacks como necesites para el mismo evento.

---

### 4. Renderizado dinámico con `innerHTML` y template literals

Una técnica habitual para representar listas de datos en el DOM es construir un string HTML con `forEach` y template literals, y luego asignarlo de golpe a `innerHTML`:

```js
const cuadraditos = [];

function handleClick(evento) {
  cuadraditos.push(elinput.value); // añadimos el valor al array
  pintame(cuadraditos); // re-renderizamos la lista completa
}

function pintame(parametro1) {
  let cuadraditosHTML = "";

  parametro1.forEach(function (elemento) {
    cuadraditosHTML =
      cuadraditosHTML + `<div class="cuadrado">` + elemento + `</div>`;
  });

  cuadrados.innerHTML = cuadraditosHTML;
}
```

Cada vez que se llama a `pintame`, se recorre el array completo y se reconstruye el HTML entero del contenedor. Es una técnica sencilla y muy usada en frameworks modernos (React, Vue…).

> [!TIP]
> En lugar de concatenar strings con `+` dentro del `forEach`, puedes usar una variable acumuladora y template literals. Otra alternativa más moderna es `parametro1.map(el => \`<div>${el}</div>\`).join("")`.

---

### 5. Crear e insertar elementos con `document.createElement` y `appendChild`

La alternativa a `innerHTML` es crear los elementos de forma **programática** con la API del DOM:

```js
function handleClickExtra(evento) {
  const nuevoElementoHtml = document.createElement("div"); // 1. Crear el elemento

  nuevoElementoHtml.classList.add("a"); // 2. Modificar propiedades
  nuevoElementoHtml.classList.add("b");
  nuevoElementoHtml.textContent = elinput.value; // 3. Añadir contenido

  cuadrados2.appendChild(nuevoElementoHtml); // 4. Insertar en el DOM
}
```

Los pasos habituales son:

1. **Crear** el elemento con `document.createElement("etiqueta")`
2. **Configurarlo**: añadir clases, atributos, contenido…
3. **Insertarlo** en el DOM con `appendChild(nuevoElemento)` (o `prepend`, `insertBefore`, etc.)

| Método                     | Descripción                               |
| -------------------------- | ----------------------------------------- |
| `parent.appendChild(hijo)` | Añade `hijo` como último hijo de `parent` |
| `parent.prepend(hijo)`     | Añade `hijo` como primer hijo de `parent` |
| `parent.removeChild(hijo)` | Elimina `hijo` de `parent`                |
| `elemento.remove()`        | Elimina el propio elemento del DOM        |

---

### 6. Comparación: `innerHTML` vs `createElement` + `appendChild`

Ambas técnicas permiten añadir contenido al DOM pero tienen diferencias importantes:

| Característica                 | `innerHTML`                         | `createElement` + `appendChild` |
| ------------------------------ | ----------------------------------- | ------------------------------- |
| Código                         | Más conciso                         | Más verboso                     |
| Rendimiento (muchos elementos) | Reconstruye todo el DOM             | Solo añade el nuevo nodo        |
| Seguridad                      | ⚠️ Riesgo de XSS con datos externos | ✅ No interpreta HTML           |
| Eventos existentes             | ❌ Los destruye al reescribir       | ✅ Los conserva                 |
| Uso recomendado                | Renderizado completo de listas      | Añadir elementos uno a uno      |

> [!IMPORTANT]
> Si usas `innerHTML = "..."` para reescribir un contenedor, **todos los event listeners** que hubieran sido asignados a sus elementos hijos se pierden. Con `createElement` + `appendChild` esto no ocurre porque los nodos ya existentes no se tocan.

---

### 7. `setTimeout` — ejecutar código de forma diferida

`setTimeout` permite ejecutar una función **una vez**, después de un tiempo de espera en milisegundos:

```js
setTimeout(functionTimeout, 1000); // ejecuta functionTimeout en 1 segundo

function functionTimeout() {
  console.log("Han pasado 1000 ms");
}
```

La firma completa es:

```js
const idTemporizador = setTimeout(callback, delay_en_ms);
```

- `callback` — la función a ejecutar (sin paréntesis)
- `delay_en_ms` — tiempo de espera en milisegundos
- Devuelve un identificador que se puede pasar a `clearTimeout(id)` para cancelarlo

> [!NOTE]
> `setTimeout` no bloquea la ejecución. El resto del código continúa ejecutándose mientras espera. Esto es la base de la **programación asíncrona** en JavaScript.

---

### 8. Patrón de `setTimeout` recursivo

Para ejecutar código **repetidamente** sin un intervalo fijo, se puede llamar a `setTimeout` dentro de la propia función de callback:

```js
setTimeout(functionTimeout, 1000);

function functionTimeout() {
  handleClickExtra(); // hace algo
  setTimeout(functionTimeout, 1000); // se vuelve a programar a sí misma
}
```

Esto crea un bucle asíncrono: la función se ejecuta, realiza su trabajo y vuelve a programarse para dentro de 1 segundo.

> [!TIP]
> Esta técnica es útil cuando el tiempo entre ejecuciones puede variar. Si quieres un intervalo fijo y constante, `setInterval` es más adecuado. Sin embargo, el patrón recursivo con `setTimeout` tiene la ventaja de que el siguiente tick solo se programa **una vez que el actual ha terminado**.

---

### 9. `document.querySelector` y la función helper `$`

`document.querySelector` es el selector moderno del DOM: acepta **cualquier selector CSS** y devuelve el **primer elemento** que coincide (o `null` si no hay ninguno).

```js
const boton = document.querySelector("#empezar"); // por id
const titulo = document.querySelector("h1"); // por etiqueta
const activo = document.querySelector(".active"); // por clase
const span = document.querySelector("#crono > span"); // selector anidado
```

En el ejemplo de la sesión se definió una pequeña función helper para abreviar la llamada:

```js
function $(selector) {
  return document.querySelector(selector);
}

// Uso equivalente a document.querySelector
const inputMinutos = $("#minutos");
const inputSegundos = $("#segundos");
```

| Método                         | Devuelve                 | Selector               |
| ------------------------------ | ------------------------ | ---------------------- |
| `getElementById("id")`         | Elemento o `null`        | Solo por id (sin `#`)  |
| `querySelector("selector")`    | Primer elemento o `null` | Cualquier selector CSS |
| `querySelectorAll("selector")` | `NodeList` (todos)       | Cualquier selector CSS |

> [!TIP]
> `querySelector` es más flexible que `getElementById`. Úsalo cuando necesites seleccionar por clase, atributo, pseudo-clase o relaciones entre elementos. Para seleccionar simplemente por `id`, ambos son equivalentes.

---

### 10. `parseInt` — convertir string a entero

Como `.value` de un input siempre devuelve un string, es necesario convertirlo a número antes de operar aritméticamente. `parseInt` convierte un string a número entero:

```js
const minutos = inputMinutos.value; // "05" (string)
const mNum = parseInt(minutos); // 5   (number)
```

Sin la conversión, la suma de strings produce **concatenación** en lugar de suma numérica:

```js
console.log("2" + "3"); // "23" (concatenación ❌)
console.log(parseInt("2") + parseInt("3")); // 5  (suma ✅)
```

> [!WARNING]
> Este fue uno de los **errores detectados** durante la sesión: al sumar minutos y segundos sin convertirlos a número, JavaScript concatenaba los strings en lugar de sumarlos, dando resultados incorrectos en la cuenta atrás.

`parseInt` acepta un segundo argumento llamado **radix** (base numérica). Para números decimales es buena práctica pasarlo explícitamente:

```js
parseInt("10", 10); // 10 en base 10 → 10
parseInt("10", 2); // "10" en base 2 → 2
```

---

### 11. `Math.floor` — redondear hacia abajo

`Math.floor` redondea un número hacia abajo al entero más cercano:

```js
Math.floor(3.9); // 3
Math.floor(3.1); // 3
Math.floor(0.9); // 0
```

En el temporizador se usa para convertir los segundos totales en minutos y segundos:

```js
let minutos = Math.floor(cuentaAtras / 60); // parte entera de la división
let segundos = cuentaAtras % 60; // resto de la división
```

> [!NOTE]
> El operador `%` (módulo) devuelve el **resto** de la división entera. Es perfecto para extraer los segundos que sobran tras calcular los minutos.

---

### 12. Zeros a la izquierda (padding)

Otro de los problemas encontrados durante la sesión fue que los números menores de 10 se mostraban sin el cero inicial (`"5"` en lugar de `"05"`). La solución fue añadir el cero manualmente:

```js
if (minutos < 10) {
  minutos = "0" + minutos; // "05" en lugar de "5"
}
if (segundos < 10) {
  segundos = "0" + segundos;
}
```

> [!TIP]
> La forma moderna de hacer padding de strings es con el método `.padStart()`:
>
> ```js
> minutos = String(minutos).padStart(2, "0"); // "05"
> segundos = String(segundos).padStart(2, "0"); // "09"
> ```

---

### 13. El temporizador de cuenta atrás

El ejemplo del temporizador combina todos los conceptos de la sesión:

```js
function $(selector) {
  return document.querySelector(selector);
}

const inputMinutos = $("#minutos");
const inputSegundos = $("#segundos");
const buttonStart = $("#empezar");

buttonStart.addEventListener("click", handleClick);

let cuentaAtras = 0;

function handleClick(event) {
  const minutos = inputMinutos.value;
  const segundos = inputSegundos.value;

  // parseInt para evitar concatenación de strings
  cuentaAtras = parseInt(minutos) * 60 + parseInt(segundos);

  pintameElCrono();

  setTimeout(cadaSegundo, 1000);
  setTimeout(finalizarCuentaAtras, cuentaAtras * 1000);
}

function cadaSegundo() {
  cuentaAtras--;
  pintameElCrono();

  if (cuentaAtras > 0) setTimeout(cadaSegundo, 1000); // solo sigue si queda tiempo
}

function finalizarCuentaAtras() {
  const body = $("body");
  body.classList.add("red"); // fondo rojo al llegar a cero
}

function pintameElCrono() {
  const minutero = $("#temporizador>#m");
  const segundero = $("#temporizador>#s");

  let minutos = Math.floor(cuentaAtras / 60);
  let segundos = cuentaAtras % 60;

  // Añadir cero a la izquierda si hace falta
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  minutero.textContent = minutos;
  segundero.textContent = segundos;
}
```

> [!NOTE]
> Se usan **dos `setTimeout`** independientes: uno que descuenta el tiempo segundo a segundo (`cadaSegundo`) y otro que dispara la finalización cuando se acaba el tiempo (`finalizarCuentaAtras`). El primero es recursivo y se detiene cuando `cuentaAtras` llega a `0`.

---

### 14. Estructura de los archivos de la sesión

```
example/
├── session19/
│   ├── index.html   — Página con input, botón y dos contenedores de cuadrados
│   ├── index.js     — Ejemplo de innerHTML, createElement, appendChild y setTimeout
│   └── style.css    — Estilos para los contenedores de cuadrados
└── temporizador/
    ├── index.html   — Formulario con inputs de minutos/segundos y display del crono
    ├── index.js     — Lógica del temporizador con querySelector, parseInt y setTimeout
    └── style.css    — Estilos básicos y clase .red para el estado de finalización
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ **`textContent`, `innerText` e `innerHTML`** — tres formas de leer y escribir contenido en un elemento del DOM
- ✅ **`.value`** — leer el valor actual de un `<input>` (siempre string)
- ✅ **Múltiples listeners** — un mismo elemento puede tener varios `addEventListener` para el mismo evento
- ✅ **Renderizado con `innerHTML`** — construir HTML como string con `forEach` + template literals y asignarlo de golpe
- ✅ **`document.createElement` + `appendChild`** — crear e insertar nodos en el DOM de forma programática
- ✅ **`innerHTML` vs `createElement`** — cuándo usar cada técnica y sus implicaciones de seguridad y rendimiento
- ✅ **`setTimeout`** — ejecutar una función de forma diferida (una vez)
- ✅ **`setTimeout` recursivo** — patrón para crear un bucle asíncrono
- ✅ **`document.querySelector`** — selector moderno que acepta cualquier selector CSS
- ✅ **Función helper `$`** — abreviar `document.querySelector` con una función de una línea
- ✅ **`parseInt`** — convertir string a entero para evitar concatenaciones indeseadas
- ✅ **`Math.floor` y `%`** — calcular minutos y segundos a partir de un total en segundos
- ✅ **Padding de zeros** — mostrar `"05"` en lugar de `"5"` con `if` o `.padStart()`

**Lo más importante:**

> [!IMPORTANT]
>
> - **`.value` siempre devuelve un string** — usa `parseInt()` antes de operar numéricamente con él
> - **`innerHTML` destruye los listeners** de los hijos al reescribir el contenedor; usa `createElement` + `appendChild` si necesitas conservarlos
> - **Nunca uses `innerHTML` con datos del usuario** sin sanear — riesgo de XSS
> - **`setTimeout` es asíncrono** — el código que viene después se ejecuta sin esperar; el callback se ejecuta más tarde
> - Para crear un bucle asíncrono: llama a `setTimeout` dentro del propio callback, y añade una **condición de parada**

## Recursos Adicionales

- [MDN - `textContent`](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
- [MDN - `innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
- [MDN - `innerText`](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/innerText)
- [MDN - `document.createElement`](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
- [MDN - `Node.appendChild`](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
- [MDN - `document.querySelector`](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)
- [MDN - `setTimeout`](https://developer.mozilla.org/es/docs/Web/API/setTimeout)
- [MDN - `parseInt`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN - `Math.floor`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [MDN - `String.prototype.padStart`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [javascript.info - Modificando el documento](https://es.javascript.info/modifying-document)
- [javascript.info - setTimeout y setInterval](https://es.javascript.info/settimeout-setinterval)
- [javascript.info - Inyección XSS con innerHTML](https://es.javascript.info/modifying-document#a-word-about-innerhtml)
