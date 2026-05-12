---
title: "Sesión 20 - JavaScript: El objeto Date y Librerías de Terceros"
section: "JavaScript"
order: 20
description: "Objeto Date, timestamps, conversión de unidades de tiempo y librerías de terceros"
duration: 2
objectives:
  - "Trabajar con el objeto Date para crear y manipular fechas"
  - "Entender qué son los timestamps y cómo usarlos para comparar fechas"
  - "Convertir milisegundos a unidades de tiempo (segundos, minutos, horas, días)"
  - "Documentar funciones con comentarios JSDoc"
  - "Integrar librerías de terceros desde un CDN"
exercises:
  - title: "Cuenta atrás personalizada"
    description: "Crea una cuenta atrás hasta una fecha importante (cumpleaños, evento, etc.) mostrando días, horas, minutos y segundos restantes."
  - title: "Integrar librería de confeti"
    description: "Añade un efecto visual cuando la cuenta atrás llega a cero usando la librería confettijs."
---

# Sesión 20 - JavaScript: El objeto Date y Librerías de Terceros

<!-- **Fecha:** 29 de Abril de 2026 -->

## Contenidos de la Sesión

En esta sesión se ha practicado y consolidado lo aprendido en la sesión 19 construyendo, en conjunto con toda la clase, una **cuenta atrás hasta una fecha concreta** (el cumpleaños). Para ello se ha trabajado con el **objeto `Date`** de JavaScript, los **timestamps**, la aritmética entre fechas y la conversión de milisegundos a días, horas, minutos y segundos. También se han introducido los **comentarios JSDoc** para documentar funciones.

Al final de la sesión se integró la librería de confeti **[confettijs](https://confettijs.org/)** para celebrar cuando la cuenta llega a cero, lo que sirvió de excusa para explicar qué es una **librería de terceros** y cómo cargarla desde un **CDN**.

Los dos ejemplos de la sesión se encuentran en:
- [`cuentaAtras/`](./cuentaAtras/) — cuenta atrás hasta una fecha, sin estilar
- [`cuentaAtrasConConfetti/`](./cuentaAtrasConConfetti/) — misma cuenta atrás con efecto de confeti al llegar a cero

---

### 1. El objeto `Date`

JavaScript incluye un objeto nativo llamado `Date` para trabajar con fechas y horas.

```js
// Fecha y hora actuales
const ahora = new Date();

// Fecha concreta (año-mes-día en formato ISO 8601)
const miFiesta = new Date("2026-11-30");
```

El constructor acepta varios formatos, pero el más seguro y portable es la cadena **ISO 8601** (`"YYYY-MM-DD"`).

> [!NOTE]
> Cuando se crea una fecha con solo el día (`"2026-11-30"`) sin hora ni zona horaria, algunos navegadores la interpretan como medianoche UTC. Si necesitas precisión de hora, incluye la hora explícitamente: `"2026-11-30T00:00:00"`.

---

### 2. Timestamps: `.getTime()`

Un **timestamp** es el número de milisegundos transcurridos desde el 1 de enero de 1970 (Epoch). Es la forma más sencilla de comparar y restar fechas en JavaScript.

```js
const ahora = new Date();
const miFiesta = new Date("2026-11-30");

const timestampAhora  = ahora.getTime();    // p.ej. 1746000000000
const timestampFiesta = miFiesta.getTime(); // p.ej. 1764460800000

const diferencia = timestampFiesta - timestampAhora; // milisegundos que quedan
```

> [!IMPORTANT]
> La resta de dos timestamps siempre da **milisegundos**. Hay que dividir entre 1 000 para obtener segundos, entre 60 000 para minutos, etc.

---

### 3. Convertir milisegundos a segundos

En el ejemplo se separó esta conversión en su propia función para que fuera más fácil de razonar:

```js
/**
 * Convierte milisegundos a segundos.
 * @param {number} m - Los milisegundos a convertir.
 * @returns {number} Los segundos equivalentes.
 */
function conversorSegundos(m) {
  return m / 1000;
}
```

---

### 4. Comentarios JSDoc

**JSDoc** es una convención estándar para documentar funciones en JavaScript. VSCode los lee y muestra como tooltips al pasar el ratón por encima de la función.

```js
/**
 * Calcula los segundos que quedan hasta el día de mi cumple.
 * @returns {number} Los segundos que quedan hasta el día de mi cumple.
 */
function calculaLosSegundos() {
  const timestampDelDiaDeMiCumple = EL_DIA_DE_MI_CUMPLE.getTime();
  const timestampDeHoy = new Date().getTime();
  const milisegundos = timestampDelDiaDeMiCumple - timestampDeHoy;
  return conversorSegundos(milisegundos);
}
```

Las etiquetas más comunes de JSDoc son:

| Etiqueta | Significado |
| --- | --- |
| `@param {tipo} nombre` | Describe un parámetro de entrada |
| `@returns {tipo}` | Describe el valor de retorno |
| `@type {tipo}` | Declara el tipo de una variable |

> [!TIP]
> Aunque JavaScript no tiene tipado estático, añadir JSDoc mejora la legibilidad del código y permite que editores como VSCode ofrezcan autocompletado y detección de errores sin necesidad de TypeScript.

---

### 5. Convertir segundos totales en días, horas, minutos y segundos

El truco clave es aplicar sucesivamente `Math.floor` (división entera) y `%` (módulo) para ir extrayendo cada unidad:

```js
function conversor(segundos) {
  let m = Math.floor(segundos / 60); // minutos totales
  const s = segundos % 60;           // segundos sobrantes

  let h = Math.floor(m / 60);        // horas totales
  m = m % 60;                        // minutos sobrantes

  const d = Math.floor(h / 24);      // días totales
  h = h % 24;                        // horas sobrantes

  return {
    dias: d,
    horas: h,
    minutos: m,
    segundos: Math.floor(s),
  };
}
```

El proceso en orden:

1. `segundos / 60` → minutos totales; el resto `% 60` son los segundos sobrantes
2. `minutos / 60` → horas totales; el resto `% 60` son los minutos sobrantes
3. `horas / 24` → días totales; el resto `% 24` son las horas sobrantes

> [!NOTE]
> Se aplica `Math.floor` al valor de segundos final (`Math.floor(s)`) porque la división de milisegundos entre 1 000 puede producir decimales.

---

### 6. Objetos literales como estructura de datos

Cuando una función necesita devolver **varios valores relacionados**, la solución habitual en JavaScript es retornar un **objeto literal**:

```js
return {
  dias: d,
  horas: h,
  minutos: m,
  segundos: Math.floor(s),
};
```

Para acceder a sus propiedades se usa la notación de punto:

```js
const resultado = conversor(segundosRestantes);

console.log(resultado.dias);     // número de días
console.log(resultado.horas);    // número de horas
console.log(resultado.minutos);  // número de minutos
console.log(resultado.segundos); // número de segundos
```

> [!TIP]
> Una función solo puede retornar **un valor**. Cuando necesitas devolver varios datos, agrúpalos en un objeto o en un array.

---

### 7. Actualizar el DOM cada segundo con `setTimeout` recursivo

Para que la cuenta atrás se actualice automáticamente se reutilizó el patrón de `setTimeout` recursivo visto en la sesión 19:

```js
handleTimeout(); // llamada inicial para que no haya espera al cargar la página

function handleTimeout() {
  const s = calculaLosSegundos();
  const valor = conversor(s);
  printar(valor);
  setTimeout(handleTimeout, 1000); // se vuelve a llamar a sí misma en 1 segundo
}
```

> [!NOTE]
> Se llama a `handleTimeout()` directamente al cargar la página para que el contador aparezca de inmediato sin esperar el primer segundo.

La función `printar` usa `innerText` para actualizar cada celda del DOM:

```js
function printar(valor) {
  const segundos = document.getElementById("segundos");
  const minutos  = document.getElementById("minutos");
  const horas    = document.getElementById("horas");
  const dias     = document.getElementById("dias");

  segundos.innerText = valor.segundos;
  minutos.innerText  = valor.minutos;
  horas.innerText    = valor.horas;
  dias.innerText     = valor.dias;
}
```

---

### 8. Librerías de terceros

Una **librería de terceros** es código JavaScript escrito por otra persona (o empresa) que podemos reutilizar en nuestros proyectos. Evita tener que implementar funcionalidades complejas desde cero.

Hay dos formas habituales de incluir una librería:

| Método | Descripción |
| --- | --- |
| **CDN** | Enlazar el archivo desde un servidor externo con `<script src="URL">` |
| **npm** | Instalarla localmente con el gestor de paquetes Node.js |

En esta sesión se usó el método **CDN**, que es el más sencillo para proyectos pequeños sin proceso de compilación.

> [!NOTE]
> **CDN** son las siglas de *Content Delivery Network* (Red de Distribución de Contenidos). Son servidores distribuidos por todo el mundo que sirven archivos estáticos (JS, CSS, imágenes) con alta disponibilidad y baja latencia.

---

### 9. La librería Confetti

La librería usada fue **[confettijs](https://confettijs.org/)** (paquete npm `@hiseb/confetti`). Se incluye añadiendo un `<script>` en el `<head>` **antes** del script de la aplicación:

```html
<head>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/npm/@hiseb/confetti@2.1.0/dist/confetti.min.js"></script>
  <script src="index.js" defer></script>
</head>
```

> [!IMPORTANT]
> El `<script>` de la librería debe ir **antes** del `<script>` de nuestra aplicación (o sin `defer`) para que la función `confetti` ya exista cuando nuestro código la llame.

Una vez cargada, la función `confetti()` queda disponible de forma global. Se puede llamar sin argumentos o con un objeto de opciones:

```js
// Llamada mínima (confeti por defecto)
confetti();

// Llamada con opciones
confetti({
  position: { x: 0, y: 0 }, // origen en píxeles desde la esquina superior izquierda
  count: 100,                // número de partículas
  size: 1,                   // tamaño de las partículas
  velocity: 200,             // velocidad inicial
  fade: false,               // las partículas caen (true = desvanecen)
});
```

En el ejemplo se lanzaron dos ráfagas simultáneas (desde las dos esquinas superiores) cuando la cuenta llegó a cero:

```js
confetti({ position: { x: 0,                y: 0 }, count: 100, velocity: 200 });
confetti({ position: { x: window.innerWidth, y: 0 }, count: 100, velocity: 200 });
```

> [!TIP]
> `window.innerWidth` devuelve el ancho visible del navegador en píxeles. Es útil para posicionar elementos relativos al tamaño de la ventana.

---

### 10. Detectar que la cuenta ha llegado a cero

En la versión con confeti se añadió la propiedad `isMyBirthday` al objeto de retorno de `conversor`:

```js
const isMyBirthday = segundos < 0; // true cuando ya hemos superado la fecha

const chupiguay = {
  dias: d,
  horas: h,
  minutos: m,
  segundos: Math.floor(s),
  isMyBirthday: isMyBirthday,
};
```

Y en `handleTimeout` se comprueba antes de pintar:

```js
function handleTimeout() {
  const s = calculaLosSegundos();
  const valor = conversor(s);

  if (valor.isMyBirthday) {
    confetti({ position: { x: 0,                y: 0 }, count: 100, velocity: 200 });
    confetti({ position: { x: window.innerWidth, y: 0 }, count: 100, velocity: 200 });
  }

  printar(valor);
  setTimeout(handleTimeout, 1000);
}
```

> [!NOTE]
> Se usa `segundos < 0` (en lugar de `=== 0`) para detectar el fin de la cuenta, porque entre el cálculo y la ejecución puede haber pasado algún milisegundo y el valor exacto `0` podría no darse nunca.

---

### 11. Trucos para probar sin esperar

Para no tener que esperar meses hasta el cumpleaños y poder probar el efecto de confeti, se usó un pequeño truco: calcular una fecha que venza en pocos segundos a partir del momento de carga:

```js
// En lugar de: const EL_DIA_DE_MI_CUMPLE = new Date("2026-11-30");

let EL_DIA_DE_MI_CUMPLE = new Date();                              // fecha y hora actuales
EL_DIA_DE_MI_CUMPLE.setSeconds(EL_DIA_DE_MI_CUMPLE.getSeconds() + 2); // +2 segundos
```

De esta forma, la cuenta atrás llegará a cero en 2 segundos al abrir la página.

| Método de `Date` | Descripción |
| --- | --- |
| `getSeconds()` | Devuelve los segundos (0-59) de la fecha |
| `setSeconds(n)` | Modifica los segundos de la fecha (puede "desbordar" y cambiar minutos/horas) |
| `getTime()` | Devuelve el timestamp en milisegundos |
| `getFullYear()` | Devuelve el año de cuatro dígitos |
| `getMonth()` | Devuelve el mes (¡0-11!, enero = 0) |
| `getDate()` | Devuelve el día del mes (1-31) |

> [!WARNING]
> En JavaScript, `Date.getMonth()` devuelve valores del **0 al 11** (enero = 0, diciembre = 11). Es un error muy frecuente que no se puede olvidar.

---

### 12. Estructura de los archivos de la sesión

```
session20/
├── cuentaAtras/
│   ├── index.html   — Página con cuatro celdas: días, horas, minutos y segundos
│   ├── index.js     — Lógica de la cuenta atrás con Date, getTime y setTimeout recursivo
│   └── style.css    — Layout en fila con Flexbox
└── cuentaAtrasConConfetti/
    ├── index.html   — Igual que el anterior + <script> de la librería confettijs
    ├── index.js     — Misma lógica + lanzamiento de confeti al llegar a cero
    └── style.css    — Layout en fila con Flexbox y tipografía monoespaciada
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ **`new Date()`** — crear un objeto de fecha con la hora actual o una fecha concreta
- ✅ **`.getTime()`** — obtener el timestamp de una fecha en milisegundos
- ✅ **Aritmética de fechas** — restar timestamps para obtener la diferencia en milisegundos
- ✅ **Conversión de unidades** — transformar segundos en días, horas, minutos y segundos con `Math.floor` y `%`
- ✅ **Objetos literales** — agrupar varios valores relacionados en un objeto para devolverlos desde una función
- ✅ **JSDoc** — documentar funciones con `/** */`, `@param` y `@returns`
- ✅ **`setTimeout` recursivo** — actualizar el DOM automáticamente cada segundo
- ✅ **Librerías de terceros** — qué son y cómo cargarlas mediante un CDN
- ✅ **Confettijs** — cómo incluir y usar una librería externa para lanzar confeti
- ✅ **`setSeconds` / `getSeconds`** — modificar partes de un objeto `Date` para pruebas rápidas

**Lo más importante:**

> [!IMPORTANT]
>
> - **`.getTime()` devuelve milisegundos** — hay que dividir entre 1 000 para obtener segundos
> - **`getMonth()` devuelve 0-11** — enero es `0`, diciembre es `11`; es el error más frecuente con `Date`
> - **El `<script>` de la librería debe ir antes del tuyo** para que sus funciones ya estén disponibles cuando tu código se ejecute
> - **`Math.floor` + `%` en cadena** es el patrón para descomponer una cantidad total de segundos en días, horas, minutos y segundos

## Recursos Adicionales

- [MDN - `Date`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN - `Date.prototype.getTime()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
- [MDN - `Date.prototype.setSeconds()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [MDN - `Math.floor`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [javascript.info - Fecha y Hora](https://es.javascript.info/date)
- [JSDoc - Documentación oficial](https://jsdoc.app/)
- [jsDelivr CDN](https://www.jsdelivr.com/)
- [Confettijs - Documentación](https://confettijs.org/)
