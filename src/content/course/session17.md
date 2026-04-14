---
title: "Sesión 17 - Introducción a JavaScript"
section: "JavaScript"
order: 17
description: "Introducción al lenguaje de programación JavaScript, tipos de datos, operadores, variables, estructuras de control y funciones"
duration: 2
objectives:
  - "Entender el papel de JavaScript en la web: interactividad y manipulación del DOM"
  - "Declarar variables con let y const y conocer sus diferencias con var"
  - "Manejar los tipos de datos primitivos: string, number, boolean, null y undefined"
  - "Usar operadores aritméticos, de comparación y lógicos"
  - "Escribir estructuras de control: if/else, for y while"
  - "Definir y llamar funciones con parámetros y valor de retorno"
exercises:
  - title: "Calculadora básica"
    description: "Crea una función que reciba dos números y un operador (+, -, *, /) y devuelva el resultado de la operación. Pruébala con al menos cinco llamadas distintas en la consola."
  - title: "FizzBuzz"
    description: "Escribe un bucle que recorra los números del 1 al 100. Para múltiplos de 3 muestra 'Fizz', para múltiplos de 5 muestra 'Buzz' y para múltiplos de ambos 'FizzBuzz'."
  - title: "Interacción en el DOM"
    description: "Añade un botón a una página HTML. Con JavaScript, haz que al hacer clic el texto del botón cambie y se añada una clase CSS de color diferente."
checklist:
  - "Sé declarar variables con let y const y entiendo cuándo usar cada una"
  - "Conozco los tipos primitivos de JavaScript y cómo comprobar el tipo con typeof"
  - "Puedo escribir condicionales con if, else if y else"
  - "Sé recorrer rangos con bucles for y while"
  - "Puedo definir y llamar funciones con parámetros y return"
  - "Sé seleccionar un elemento del DOM con document.querySelector y modificar su contenido"
commonErrors:
  - "Usar == en lugar de === (el operador de igualdad estricta evita conversiones de tipo implícitas)"
  - "Declarar variables con var cuando let o const son más seguros y predecibles"
  - "Olvidar que const no significa que el valor sea inmutable en objetos y arrays"
  - "Llamar a una función antes de declararla cuando se usa una función expresión (const fn = () => {})"
  - "No añadir el atributo defer al <script> y que el JavaScript se ejecute antes de que el DOM esté listo"
---

# Sesión 17 - Introducción a JavaScript

## Contenidos de la Sesión

En esta sesión se ha introducido **JavaScript** como lenguaje de programación del navegador. Se han explicado sus orígenes, la consola de Chrome como herramienta de desarrollo, los tipos de datos, los operadores, la declaración de variables, las estructuras de control y la declaración de funciones. Al final de la sesión se ha hecho una primera toma de contacto con el acceso al **DOM** para dar interactividad a la página.

El ejemplo construido en clase se encuentra en la carpeta [`example/`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session17/example), con los archivos [`index.html`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session17/example/index.html) e [`index.js`](https://github.com/yurigo/PMI-2526/tree/master/sessions/session17/example/index.js).

---

### 1. Historia de JavaScript

**JavaScript** nació en 1995 creado por **Brendan Eich** en Netscape en solo 10 días. A pesar de su nombre, no tiene ninguna relación con Java; el nombre fue una decisión de marketing de la época.

| Año   | Hito                                                                                    |
| ----- | --------------------------------------------------------------------------------------- |
| 1995  | Brendan Eich crea JavaScript en Netscape (en 10 días)                                   |
| 1996  | Microsoft lanza JScript (su versión para Internet Explorer)                             |
| 1997  | Se estandariza como **ECMAScript** (ES1) por ECMA International                         |
| 2009  | **ES5** — `forEach`, `map`, `filter`, `JSON.parse/stringify`, strict mode               |
| 2015  | **ES6 / ES2015** — `let`, `const`, arrow functions, clases, módulos, promesas           |
| 2016  | **ES2016** — `**` (exponentiation), `Array.prototype.includes`                          |
| 2017  | **ES2017** — `async`/`await`, `Object.values`, `Object.entries`                         |
| 2018  | **ES2018** — rest/spread en objetos, `Promise.finally`, mejoras de regex                |
| 2019  | **ES2019** — `Array.prototype.flat`, `Array.prototype.flatMap`                          |
| 2020  | **ES2020** — `?.` (optional chaining), `??` (nullish coalescing), `BigInt`              |
| 2021  | **ES2021** — `String.prototype.replaceAll`, `Promise.any`                               |
| 2022  | **ES2022** — class fields, campos privados, `top-level await`, `Array.prototype.at`     |
| 2023  | **ES2023** — `toSorted`, `toReversed`, `toSpliced`, `with`, `findLast`, `findLastIndex` |
| 2024  | **ES2024** — `Object.groupBy`, `Map.groupBy`, `Promise.withResolvers`                   |
| 2025+ | Propuestas en curso (no estándar aún): `Temporal`, Pattern Matching, etc.               |

👉 JavaScript es el **único lenguaje de programación nativo del navegador**  
👉 Hoy también se ejecuta en el servidor gracias a **Node.js**  
👉 Es el lenguaje más usado del mundo según la encuesta anual de Stack Overflow

---

### 2. Consola de Chrome y REPL

La **consola de Chrome** (DevTools → pestaña _Console_) es una herramienta de desarrollo integrada en el navegador que permite ejecutar código JavaScript de forma interactiva.

Funciona como un **REPL** (_Read–Eval–Print Loop_):

1. **Read** — lees (escribes) una expresión
2. **Eval** — el motor la evalúa
3. **Print** — muestra el resultado
4. **Loop** — vuelve al paso 1

#### Cómo abrirla

| Método             | Atajo                              |
| ------------------ | ---------------------------------- |
| Menú del navegador | ⋮ → Más herramientas → DevTools    |
| Teclado (Windows)  | `F12` o `Ctrl + Shift + I`         |
| Teclado (Mac)      | `Cmd + Option + I`                 |
| Clic derecho       | _Inspeccionar_ → pestaña _Console_ |

#### `console.log()`

La función más usada para depurar código:

```js
console.log("Hola mundo"); // escribe en la consola
console.log(typeof 42); // "number"
console.log("valor:", 42); // varios valores a la vez
```

---

### 3. Tipos de datos y `typeof`

JavaScript tiene **tipado dinámico**: una misma variable puede cambiar de tipo a lo largo de la ejecución. Para conocer el tipo de un valor se usa el operador `typeof`.

| Tipo        | Ejemplo             | `typeof` devuelve |
| ----------- | ------------------- | ----------------- |
| `undefined` | `let a;`            | `"undefined"`     |
| `number`    | `42`, `3.14`        | `"number"`        |
| `string`    | `"hola"`, `'mundo'` | `"string"`        |
| `boolean`   | `true`, `false`     | `"boolean"`       |
| `null`      | `null`              | `"object"` ⚠️     |
| `object`    | `{}`, `[]`          | `"object"`        |
| `function`  | `function f() {}`   | `"function"`      |

> [!NOTE]
> `typeof null` devuelve `"object"`. Es un **bug histórico** de JavaScript que no se puede corregir por compatibilidad con webs antiguas.

```js
let a;
console.log(typeof a); // "undefined"

a = 10;
console.log(typeof a); // "number"

a = "hola";
console.log(typeof a); // "string"

a = true;
console.log(typeof a); // "boolean"

a = null;
console.log(typeof a); // "object"  ← bug histórico de JS

a = {};
console.log(typeof a); // "object"

a = [];
console.log(typeof a); // "object"
```

---

### 4. Operadores booleanos

Los **operadores booleanos** (o lógicos) trabajan con valores `true` / `false`.

| Operador | Nombre  | Descripción                                   |
| -------- | ------- | --------------------------------------------- |
| `&&`     | AND     | `true` solo si **ambos** operandos son `true` |
| `\|\|`   | OR      | `true` si **al menos uno** es `true`          |
| `!`      | NOT     | Invierte el valor booleano                    |
| `!!`     | NOT NOT | Convierte cualquier valor a su booleano       |

```js
true && true; // true
true && false; // false
true || false; // true
false || false; // false
!true; // false
!!0; // false  (convierte 0 a booleano)
!!"hola"; // true   (string no vacío es truthy)
```

#### Comparadores de igualdad

> [!IMPORTANT]
> **Está prohibido usar `==` y `!=`** porque realizan coerción de tipos y producen resultados inesperados. Usa siempre `===` y `!==`.

```js
3 == "3"; // true  ← coerción de tipo, ¡peligroso!
3 === "3"; // false ← compara valor Y tipo → correcto ✅
3 !== "3"; // true  ← correcto ✅
```

| Operador | Descripción                 |
| -------- | --------------------------- |
| `===`    | Igual en valor y tipo ✅    |
| `!==`    | Distinto en valor o tipo ✅ |
| `>`      | Mayor que                   |
| `<`      | Menor que                   |
| `>=`     | Mayor o igual que           |
| `<=`     | Menor o igual que           |

---

### 5. Operadores aritméticos

| Operador | Nombre         | Ejemplo  | Resultado |
| -------- | -------------- | -------- | --------- |
| `+`      | Suma           | `3 + 2`  | `5`       |
| `-`      | Resta          | `10 - 4` | `6`       |
| `*`      | Multiplicación | `3 * 4`  | `12`      |
| `/`      | División       | `10 / 3` | `3.333…`  |
| `**`     | Exponente      | `2 ** 8` | `256`     |
| `%`      | Módulo         | `10 % 3` | `1`       |

#### Operadores de asignación abreviada

```js
let a = 1000;

a += 1; // a = a + 1  → 1001
a -= 2; // a = a - 2  → 999
a *= 3; // a = a * 3  → 2997
a /= 7; // a = a / 7  → 428.14…

a++; // a = a + 1 (post-incremento)
a--; // a = a - 1 (post-decremento)
++a; // pre-incremento
--a; // pre-decremento
```

#### Post-incremento vs pre-incremento

La diferencia es cuándo se aplica el incremento **respecto al valor que se usa en la expresión**:

| Operador | Nombre          | ¿Cuándo incrementa?                          |
| -------- | --------------- | -------------------------------------------- |
| `x++`    | Post-incremento | **Después** de usar el valor en la expresión |
| `++x`    | Pre-incremento  | **Antes** de usar el valor en la expresión   |

```js
let x = 5;

// POST-incremento (x++)
// Primero se usa el valor actual (5), luego se incrementa
let post = x++;
console.log(post); // 5  ← valor ANTES del incremento
console.log(x); // 6  ← x ya vale 6 después

// PRE-incremento (++x)
// Primero se incrementa, luego se usa el nuevo valor
let pre = ++x;
console.log(pre); // 7  ← valor DESPUÉS del incremento
console.log(x); // 7  ← x también vale 7
```

> [!NOTE]
> En una línea aislada como `a++;` o `++a;` el resultado es idéntico: `a` queda incrementado en 1. La diferencia solo importa cuando el resultado de la expresión se **asigna o usa** al mismo tiempo que se incrementa.

---

### 6. Declaración de variables

En JavaScript hay tres formas de declarar variables:

| Palabra clave | Reasignable | Ámbito  | ¿Usarla?                                   |
| ------------- | ----------- | ------- | ------------------------------------------ |
| `var`         | ✅ Sí       | función | ❌ **Prohibida** (comportamiento confuso)  |
| `let`         | ✅ Sí       | bloque  | ✅ Para valores que cambian                |
| `const`       | ❌ No       | bloque  | ✅ Para valores que no cambian (preferida) |

```js
let b = 10;
b = "hola"; // ✅ let permite reasignación

const c = 10;
// c = 20;    // ❌ TypeError: Assignment to constant variable
```

> [!IMPORTANT]
> **Nunca uses `var`** — usa `let` cuando el valor puede cambiar y `const` cuando no. En caso de duda, empieza siempre con `const`.

---

### 7. Estructuras de control

#### Condicional `if / else`

```js
let a = 99;

if (a > 100) {
  console.log("mayor que 100");
} else {
  console.log("menor o igual que 100");
}
```

#### `switch`

Útil cuando hay muchos posibles valores para una misma variable:

```js
let a = 2;

switch (a) {
  case 1:
    console.log("vale 1");
    break;
  case 2:
    console.log("vale 2");
    break;
  default:
    console.log("vale otro");
    break;
}
```

> [!NOTE]
> No olvides el `break` en cada `case` para evitar que la ejecución "caiga" al siguiente caso (_fall-through_).

#### Bucle `for`

```js
for (let i = 1; i <= 100; i++) {
  console.log("f", i);
}
```

- `continue` — salta a la siguiente iteración
- `break` — sale del bucle

```js
for (let j = 0; j < 5; j++) {
  if (j === 1) continue; // salta j = 1
  if (j === 3) break; // sale cuando j = 3
  console.log(j); // imprime: 0, 2
}
```

#### Bucle `while`

Ejecuta el bloque **mientras** la condición sea `true`:

```js
let i = 101;

while (i < 200) {
  console.log("w", i);
  i++;
}
```

#### Bucle `do…while`

Ejecuta el bloque **al menos una vez** antes de comprobar la condición:

```js
do {
  console.log("d", i);
  i++;
} while (i < 300);
```

| Bucle      | ¿Cuándo usarlo?                                      |
| ---------- | ---------------------------------------------------- |
| `for`      | Cuando sabes cuántas iteraciones necesitas           |
| `while`    | Cuando no sabes cuántas iteraciones necesitas        |
| `do…while` | Cuando necesitas ejecutar el bloque al menos una vez |

---

### 8. Declaración de funciones

Una **función** es un bloque de código reutilizable que puede recibir **parámetros** y devolver un **valor**.

```js
// Declaración
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// Invocación (llamada)
console.log(suma(1, 2)); // 3
console.log(resta(10, 4)); // 6
console.log(multiplicacion(3, 4)); // 12
console.log(division(10, 2)); // 5

const resultado = suma(1, 4);
console.log(resultado); // 5
```

---

### 9. Primera toma de contacto con el DOM

El **DOM** (_Document Object Model_) es la representación del HTML como un árbol de objetos que JavaScript puede leer y modificar.

> [!NOTE]
> Para acceder al DOM desde un script externo, el `<script>` debe colocarse **al final del `<body>`** (o usar `defer`). Si se coloca en el `<head>`, el HTML aún no ha sido cargado y el navegador no encontrará los elementos.

#### Seleccionar un elemento

```js
const x = document.getElementById("titulo");
```

#### Añadir un evento

```js
x.addEventListener("click", () => {
  // código que se ejecuta al hacer clic en el elemento
  document.getElementsByTagName("body")[0].style.backgroundColor = "#ff0000";
  x.innerHTML = "¡Me has hecho clic!";
});
```

El ejemplo de la sesión usa estas técnicas para cambiar el color de fondo de la página al hacer clic en el título, mostrando que JavaScript puede **reaccionar a eventos del usuario** y **modificar la página en tiempo real**.

---

### 10. Estructura de los archivos de la sesión

```
example/
├── index.html   — Página con un título que reacciona al clic
└── index.js     — Script con los ejemplos de la sesión
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ **Historia de JavaScript** — creado por Brendan Eich en 1995, estandarizado como ECMAScript
- ✅ **Consola de Chrome** — herramienta REPL para ejecutar y depurar código JS
- ✅ **Tipos de datos** — `undefined`, `number`, `string`, `boolean`, `null`, `object` y `typeof`
- ✅ **Operadores booleanos** — `&&`, `||`, `!` y comparadores `===` / `!==` (prohibidos `==` y `!=`)
- ✅ **Operadores aritméticos** — `+`, `-`, `*`, `/`, `**`, `%` y operadores de asignación abreviada
- ✅ **Variables** — `const` (preferida), `let` (cuando cambia), `var` (prohibida)
- ✅ **Estructuras de control** — `if/else`, `switch`, `for`, `while`, `do…while`
- ✅ **Funciones** — declaración con `function`, parámetros y `return`
- ✅ **DOM básico** — `document.getElementById()`, `addEventListener()` y modificación del HTML

**Lo más importante:**

> [!IMPORTANT]
>
> - **Nunca uses `==` ni `!=`** — usa siempre `===` y `!==`
> - **Nunca uses `var`** — usa `const` por defecto y `let` cuando necesites reasignar
> - El `<script>` debe ir **al final del `<body>`** cuando necesites acceder al DOM
> - `typeof null` devuelve `"object"` — es un bug histórico de JavaScript

## Recursos Adicionales

- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [MDN - Tipos de datos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
- [MDN - `typeof`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN - Operadores lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [MDN - Comparaciones de igualdad](https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [MDN - `let`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)
- [MDN - `const`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)
- [MDN - Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [javascript.info - Fundamentos de JavaScript](https://es.javascript.info/first-steps)
- [The JavaScript History (brief)](https://www.w3schools.com/js/js_history.asp)
