---
title: "Sesión 18 - JavaScript: DOM, Arrays y forEach"
section: "JavaScript"
order: 18
description: "Manipulación del DOM, eventos, colecciones y arrays con forEach"
duration: 2
objectives:
  - "Incluir scripts correctamente en HTML usando <script defer> en el <head>"
  - "Seleccionar y manipular elementos del DOM con getElementById, style y classList"
  - "Gestionar interacciones del usuario con addEventListener y callbacks"
  - "Iterar colecciones de elementos convirtiendo HTMLCollection a Array y usando forEach"
exercises:
  - title: "Botones interactivos escalables"
    description: "Crea una página con al menos 6 botones que compartan una misma clase. Selecciónalos como colección, conviértela a Array y usa forEach para registrar un único comportamiento: al hacer click, cada botón debe alternar dos clases visuales (por ejemplo, .blue y .red)."
  - title: "Lista dinámica de tareas"
    description: "Implementa una mini lista de tareas con un input, un botón 'Añadir' y un contenedor <ul>. Guarda las tareas en un array y, en cada alta, vuelve a renderizar la lista usando forEach para crear los <li>. Añade también un botón de eliminar por tarea usando addEventListener."
checklist:
  - "Sé incluir JavaScript correctamente con defer en el <head>"
  - "Sé seleccionar un elemento por id y modificar sus estilos/clases"
  - "Sé registrar eventos click con addEventListener"
  - "Entiendo la diferencia entre HTMLCollection y Array"
  - "Sé convertir colecciones a Array y recorrerlas con forEach"
commonErrors:
  - "Colocar el <script> al final del <body> o en <head> sin defer"
  - "Intentar usar forEach directamente sobre una HTMLCollection"
  - "Duplicar listeners manualmente en muchos botones en lugar de iterar una colección"
  - "Confundir evento.target con el elemento seleccionado fuera del callback"
---

# Sesión 18 - JavaScript: DOM, Arrays y forEach

<!-- **Fecha:** 15 de Abril de 2026 -->

## Contenidos de la Sesión

En esta sesión se ha profundizado en la manipulación del **DOM** con JavaScript, revisando la forma correcta de incluir scripts en HTML. Se han explorado los atributos y métodos de los elementos (`style`, `classList`), la programación dirigida por eventos con `addEventListener`, y se ha introducido el concepto de **Array** y sus métodos más importantes: `push`, `pop` y `forEach`. Al final se ha refactorizado el ejemplo para asignar eventos a múltiples botones de forma escalable usando `forEach`.

El ejemplo construido en clase se encuentra en la carpeta [`example/`](./example/), con los archivos [`index.html`](./example/index.html), [`index.js`](./example/index.js) y [`styles.css`](./example/styles.css).

---

### 1. Dónde colocar el `<script>`

La posición del `<script>` en el HTML es fundamental para que JavaScript pueda acceder al DOM sin errores.

| Posición                        | ¿Funciona?                     | Observaciones                                                           |
| ------------------------------- | ------------------------------ | ----------------------------------------------------------------------- |
| Final del `<body>`              | ⚠️ Funciona pero **prohibido** | Mezcla estructura (HTML) con comportamiento (JS)                        |
| `<head>` sin `defer`            | ❌ Falla                       | El DOM aún no existe cuando se ejecuta el script                        |
| `<head>` con `DOMContentLoaded` | ⚠️ Funciona pero **prohibido** | Workaround innecesario; añade complejidad                               |
| `<head>` con `defer`            | ✅ **Correcto**                | El script se descarga en paralelo y se ejecuta cuando el DOM está listo |
| `<head>` con `async`            | ✅ Si no accede al DOM         | Se ejecuta en cuanto se descarga, sin garantías sobre el DOM            |

> [!IMPORTANT]
> **Prohibido** colocar el `<script>` al final del `<body>`.  
> **Prohibido** usar `DOMContentLoaded` como workaround.  
> La buena práctica es colocar el `<script>` en el `<head>` con el atributo **`defer`** (o `type="module"`, que lleva `defer` implícito).

```html
<!-- ✅ Correcto -->
<head>
  <script src="./index.js" defer></script>
</head>

<!-- ❌ Prohibido -->
<body>
  ...
  <script src="./index.js"></script>
</body>
```

#### ¿Qué hace `defer`?

- El navegador **descarga** el script en paralelo mientras parsea el HTML.
- El script se **ejecuta** solo cuando el HTML ha sido completamente parseado (el DOM está listo).
- Los scripts con `defer` se ejecutan **en orden** de aparición.

#### ¿Y `async`?

- El script se descarga en paralelo, igual que `defer`.
- Pero se ejecuta **en cuanto se descarga**, sin esperar a que el DOM esté listo.
- Solo es seguro usarlo si el script **no accede al DOM**.

---

### 2. Acceso al DOM: `document.getElementById`

`document.getElementById` es el método más básico para seleccionar un elemento del DOM por su atributo `id`.

```js
const titulo = document.getElementById("titulo");
```

- Devuelve el **elemento HTML** con ese `id`, o `null` si no existe.
- Es una referencia viva al nodo del DOM: los cambios en el objeto se reflejan en la página.

---

### 3. Atributos y métodos de los elementos del DOM

Una vez que tenemos una referencia a un elemento, podemos leer y modificar sus propiedades.

#### La propiedad `style`

Permite aplicar estilos en línea directamente desde JavaScript:

```js
const titulo = document.getElementById("titulo");
titulo.style.color = "red";
titulo.style.backgroundColor = "#ff0000";
```

> [!NOTE]
> Las propiedades CSS con guión (como `background-color`) se escriben en **camelCase** en JavaScript: `backgroundColor`.

#### La propiedad `classList`

Es el objeto que representa las clases CSS del elemento. Sus métodos más usados:

| Método                        | Descripción                                              |
| ----------------------------- | -------------------------------------------------------- |
| `classList.add("clase")`      | Añade una clase                                          |
| `classList.remove("clase")`   | Elimina una clase                                        |
| `classList.contains("clase")` | Devuelve `true` si el elemento tiene esa clase           |
| `classList.toggle("clase")`   | Añade la clase si no la tiene; la elimina si ya la tiene |

```js
const boton = document.getElementById("btn");

boton.classList.add("blue"); // añade la clase "blue"
boton.classList.remove("red"); // elimina la clase "red"
boton.classList.contains("red"); // false
boton.classList.toggle("active"); // activa/desactiva "active"
```

> [!TIP]
> `classList.toggle` es especialmente útil para alternar entre dos estados (activo/inactivo, visible/oculto) sin necesidad de un `if/else`.

---

### 4. Programación dirigida por eventos: `addEventListener`

La **programación dirigida por eventos** (_event-driven programming_) es el paradigma central de JavaScript en el navegador: el código no se ejecuta de forma secuencial sino **en respuesta a acciones del usuario** (clics, teclas, scroll…).

```js
elemento.addEventListener("tipo-de-evento", funcionCallback);
```

El primer argumento es el nombre del evento (`"click"`, `"keydown"`, `"mouseover"`…) y el segundo es la **función callback** que se ejecutará cuando ocurra ese evento.

```js
const boton = document.getElementById("btn");

function handleClick(evento) {
  console.log(evento.target); // el elemento que disparó el evento
  evento.target.classList.toggle("red");
  evento.target.classList.toggle("blue");
}

boton.addEventListener("click", handleClick);
```

#### El objeto `evento`

La función callback recibe automáticamente un objeto `Event` con información sobre lo que ha ocurrido:

| Propiedad                 | Descripción                                         |
| ------------------------- | --------------------------------------------------- |
| `evento.target`           | El elemento que disparó el evento                   |
| `evento.type`             | El tipo de evento (`"click"`, `"keydown"`…)         |
| `evento.preventDefault()` | Cancela el comportamiento por defecto del navegador |

---

### 5. El problema de la escalabilidad con `getElementById`

Cuando hay varios botones, la solución con `getElementById` para cada uno no escala:

```js
// ❌ Insostenible con muchos botones
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
// ...

btn1.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick);
btn3.addEventListener("click", handleClick);
// ...
```

Si tenemos 50 botones, necesitaríamos 50 variables y 50 llamadas a `addEventListener`. La solución es seleccionar **todos los botones a la vez** usando su clase CSS.

---

### 6. `document.getElementsByClassName` y `Array.from`

`document.getElementsByClassName` devuelve **todos los elementos** del DOM que tengan la clase indicada:

```js
const botones = document.getElementsByClassName("button");
```

> [!WARNING]
> `getElementsByClassName` **no devuelve un `Array`**, sino una **`HTMLCollection`** (una colección de elementos). Las colecciones no tienen el método `forEach`, por lo que no podemos iterar sobre ellas directamente con ese método.

Para convertir la colección en un `Array` se usa `Array.from()`:

```js
const botones = Array.from(document.getElementsByClassName("button"));
// Ahora `botones` es un Array y podemos usar forEach, map, filter...
```

| Método de selección                        | Devuelve             | ¿Tiene `forEach`? |
| ------------------------------------------ | -------------------- | ----------------- |
| `document.getElementById("id")`            | Un elemento o `null` | —                 |
| `document.getElementsByClassName("clase")` | `HTMLCollection`     | ❌ No             |
| `document.querySelectorAll(".clase")`      | `NodeList`           | ✅ Sí (moderno)   |

---

### 7. Arrays en JavaScript

Un **array** es una estructura de datos que permite almacenar una colección ordenada de valores. En JavaScript los arrays son objetos y pueden contener valores de **cualquier tipo**.

```js
const arrVacio = [];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const mixto = ["a", true, 78, ["1", "a"], {}, null];
```

#### Acceso por índice

Los arrays se indexan desde `0`:

```js
const frutas = ["banana", "apple", "orange", "grape"];
console.log(frutas[0]); // "banana"
console.log(frutas[3]); // "grape"
```

#### `const` con arrays

Declarar un array con `const` significa que **la referencia** no puede cambiar, pero el **contenido** sí:

```js
const arr = [1, 2, 3];
// arr = [];    // ❌ Error: no se puede reasignar
arr[0] = 100; // ✅ Se puede modificar el contenido
```

#### Separadores numéricos

JavaScript permite usar `_` como separador visual en números literales para mejorar la legibilidad:

```js
const millon = 1_000_000; // ✅ fácil de leer
const confuso = 1_0_0_000_0000; // ⚠️ válido pero poco legible
```

---

### 8. Métodos de Array: `push`, `pop` y `forEach`

#### `push` — añadir al final

```js
const frutas = ["banana", "apple", "orange"];
frutas.push("kiwi");
console.log(frutas); // ['banana', 'apple', 'orange', 'kiwi']
```

#### `pop` — quitar del final

`pop` elimina el último elemento **y lo devuelve**:

```js
const fruta = frutas.pop();
console.log(fruta); // "kiwi"
console.log(frutas); // ['banana', 'apple', 'orange']
```

| Método        | Acción                     | Devuelve                    |
| ------------- | -------------------------- | --------------------------- |
| `push(valor)` | Añade `valor` al final     | La nueva longitud del array |
| `pop()`       | Elimina el último elemento | El elemento eliminado       |

#### `forEach` — iterar con una función callback

`forEach` ejecuta una **función callback** por cada elemento del array. Es la alternativa moderna y expresiva al `for` clásico:

```js
const frutas = ["banana", "apple", "orange", "grape"];

// for clásico
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for...of (más limpio)
for (const fruta of frutas) {
  console.log(fruta);
}

// forEach (con función callback)
frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index);
});
```

La función callback de `forEach` recibe hasta tres argumentos:

| Parámetro  | Descripción                   |
| ---------- | ----------------------------- |
| `elemento` | El elemento actual del array  |
| `index`    | El índice del elemento actual |
| `array`    | El array completo             |

---

### 9. Funciones callback

Una **función callback** es una función que se pasa como argumento a otra función, para que esta la ejecute en el momento adecuado.

```js
// Función declarada por separado
function hazAlgoConLaFruta(fruta, index, array) {
  console.log("*", fruta, "*:", index, "->", array);
}

frutas.forEach(hazAlgoConLaFruta); // ← se pasa la función, NO se invoca

// Función expresión asignada a una variable
const logFruta = function (value) {
  console.log("lorem", value);
};

frutas.forEach(logFruta);

// Función anónima inline (la más habitual)
frutas.forEach(function (fruta) {
  console.log("hola!", fruta);
});
```

> [!IMPORTANT]
> Al pasar una función callback **no se usan los paréntesis**: se pasa la **referencia** a la función, no su resultado.  
> `frutas.forEach(hazAlgoConLaFruta)` ✅ — se pasa la función  
> `frutas.forEach(hazAlgoConLaFruta())` ❌ — se ejecuta la función y se pasa `undefined`

---

### 10. Solución escalable: `forEach` + `addEventListener`

Combinando `Array.from`, `getElementsByClassName` y `forEach` se puede asignar el evento de clic a todos los botones con una sola iteración, sin importar cuántos haya:

```js
// 1. Seleccionar todos los botones por clase y convertirlos en Array
const botones = Array.from(document.getElementsByClassName("button"));

// 2. Asignar el evento a cada uno con forEach
botones.forEach(function (boton) {
  boton.addEventListener("click", handleClick);
});

// 3. Función que gestiona el clic
function handleClick(evento) {
  const botonClicado = evento.target;
  botonClicado.classList.toggle("red");
  botonClicado.classList.toggle("blue");
}
```

Este patrón es **escalable**: funciona igual con 2 botones que con 200, sin necesidad de añadir código nuevo.

---

### 11. Estructura de los archivos de la sesión

```
example/
├── index.html   — Página con múltiples botones que alternan color al hacer clic
├── index.js     — Script con la lógica de Arrays, forEach y addEventListener
└── styles.css   — Estilos para los botones (.button, .red, .blue)
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ **Posición del `<script>`** — siempre en el `<head>` con `defer`; prohibido al final del `<body>` o con `DOMContentLoaded`
- ✅ **`document.getElementById`** — seleccionar un elemento por su `id`
- ✅ **`style` y `classList`** — modificar estilos y clases CSS desde JavaScript (`add`, `remove`, `contains`, `toggle`)
- ✅ **`addEventListener`** — programación dirigida por eventos y el objeto `evento`
- ✅ **Escalabilidad** — por qué `getElementById` no escala con muchos elementos
- ✅ **`getElementsByClassName`** — devuelve una `HTMLCollection`, no un `Array`
- ✅ **`Array.from()`** — convertir una colección en un `Array` verdadero
- ✅ **Arrays** — creación, acceso por índice, y `const` con arrays
- ✅ **Métodos de Array** — `push` (añadir al final), `pop` (quitar del final), `forEach` (iterar)
- ✅ **Funciones callback** — qué son y cómo pasarlas correctamente sin paréntesis
- ✅ **Patrón escalable** — `Array.from` + `getElementsByClassName` + `forEach` + `addEventListener`

**Lo más importante:**

> [!IMPORTANT]
>
> - El `<script>` debe ir en el `<head>` con **`defer`** — nunca al final del `<body>`
> - `getElementsByClassName` devuelve una **`HTMLCollection`**, no un `Array` — usa `Array.from()` para convertirla
> - Al pasar un callback **no pongas paréntesis**: `forEach(miFuncion)` ✅, `forEach(miFuncion())` ❌
> - `classList.toggle` simplifica alternar clases sin necesidad de `if/else`

## Recursos Adicionales

- [MDN - `defer` y `async`](https://developer.mozilla.org/es/docs/Web/HTML/Element/script#attr-defer)
- [MDN - `document.getElementById`](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
- [MDN - `document.getElementsByClassName`](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName)
- [MDN - `Element.classList`](https://developer.mozilla.org/es/docs/Web/API/Element/classList)
- [MDN - `EventTarget.addEventListener`](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [MDN - `Array`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - `Array.from()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [MDN - `Array.prototype.forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN - `Array.prototype.push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [MDN - `Array.prototype.pop()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [javascript.info - Callbacks](https://es.javascript.info/callbacks)
- [javascript.info - Arrays](https://es.javascript.info/array)
- [javascript.info - Métodos de Array](https://es.javascript.info/array-methods)
