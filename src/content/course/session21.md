---
title: "Sesión 21 - Corrección de la Cuenta Atrás y Presentación de la Práctica"
section: "JavaScript"
order: 21
description: "Revisión de errores comunes en proyectos de cuenta atrás y presentación de la práctica TripPlanner+"
duration: 2
objectives:
  - "Identificar y corregir errores frecuentes en operaciones con Date y conversión de tipos"
  - "Consolidar buenas prácticas en manejo de timestamps y aritmética de fechas"
  - "Evitar errores de concatenación de strings en lugar de suma aritmética"
  - "Usar Math.floor correctamente para extraer unidades de tiempo"
  - "Comprender los requisitos y criterios de evaluación de la práctica final"
exercises:
  - title: "Revisar y mejorar tu cuenta atrás"
    description: "Toma tu proyecto anterior, identifica errores potenciales y corrígelos según los patrones vistos en clase."
---

# Sesión 21 - Corrección de la Cuenta Atrás y Presentación de la Práctica

<!-- **Fecha:** 5 de mayo de 2026 -->

## Contenidos de la Sesión

Esta sesión se dividió en dos partes. En la primera se realizó una **corrección en directo de los proyectos de cuenta atrás** entregados por los alumnos: se revisaron los trabajos funcionando en el navegador, se identificaron los errores más comunes y se consolidaron las buenas prácticas vistas en las sesiones 19 y 20. En la segunda se **presentó la práctica** de la asignatura — **TripPlanner+** — con su enunciado completo, requisitos técnicos y criterios de evaluación.

No existe carpeta de ejemplos nueva en esta sesión; el código analizado es el propio de [`session19/example/temporizador/`](../session19/example/temporizador/) y [`session20/cuentaAtras/`](../session20/cuentaAtras/).

---

## Entregas

Los proyectos de cuenta atrás entregados por los alumnos se pueden ver a continuación:

<iframe width="100%" height="600" src="https://mybirthday-eta.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://birthdaycountdown-lime.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://arnauvavi.github.io/contadorcumple/">
</iframe>

<iframe width="100%" height="600" src="https://temporizador-cumple.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://Honza1414.github.io/interactive-media">
</iframe>

<iframe width="100%" height="600" src="https://joeltempest56.github.io/Mi-cumplea-os/">
</iframe>

<iframe width="100%" height="600" src="https://pmicumplejordicarrasco.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://cuenta-atras-kohl.vercel.app/">
</iframe>

<iframe width="100%" height="600" src="https://birthday-countdown-alpha-umber.vercel.app/">
</iframe>

---

## Corrección de los Errores más Frecuentes

### 1. Error: concatenación de strings en lugar de suma

El error más repetido fue operar aritméticamente con valores de tipo **string** sin convertirlos antes a número. Como `.value` de un `<input>` devuelve siempre un string, sumar dos valores sin convertir produce concatenación:

```js
// ❌ Incorrecto — concatena strings
const minutos = inputMinutos.value; // "05" (string)
const segundos = inputSegundos.value; // "30" (string)
const total = minutos * 60 + segundos; // 300 + "30" → "30030" (¡mal!)
```

La solución es envolver cada lectura con `parseInt`:

```js
// ✅ Correcto — opera con números
const minutos = parseInt(inputMinutos.value, 10); // 5  (number)
const segundos = parseInt(inputSegundos.value, 10); // 30 (number)
const total = minutos * 60 + segundos; // 330 (number)
```

> [!IMPORTANT]
> **`.value` siempre devuelve un string**, incluso cuando el `<input>` es de tipo `number`. Usa `parseInt(valor, 10)` para convertirlo a entero antes de cualquier operación aritmética. El segundo argumento `10` indica la base decimal y es una buena práctica incluirlo siempre.

---

### 2. Error: decimales en la pantalla por olvidar `Math.floor`

Al dividir el total de segundos entre 60 para obtener minutos, el resultado puede tener decimales. Sin `Math.floor`, estos decimales aparecen directamente en pantalla:

```js
// ❌ Incorrecto
let minutos = cuentaAtras / 60; // 5.5 → "5.5" en pantalla
let segundos = cuentaAtras % 60; // correcto, pero la parte de arriba falla
```

```js
// ✅ Correcto
let minutos = Math.floor(cuentaAtras / 60); // 5 → "5" en pantalla
let segundos = cuentaAtras % 60; // 30
```

> [!NOTE]
> `Math.floor` redondea **hacia abajo** al entero más cercano (`Math.floor(5.9) === 5`). Es exactamente lo que se necesita para extraer la cantidad entera de minutos (o de horas, o de días) que caben en un número de segundos totales.

---

### 3. Error: mostrar `"5"` en lugar de `"05"` (padding de ceros)

Los números menores de 10 se mostraban sin el cero de relleno, dando un aspecto poco profesional al contador:

```
❌ Resultado en pantalla:  5:7
✅ Resultado esperado:     05:07
```

Hay dos formas de añadir el cero a la izquierda:

```js
// Opción A — con if (enfoque visto en sesiones anteriores)
if (minutos < 10) minutos = "0" + minutos;
if (segundos < 10) segundos = "0" + segundos;

// Opción B — con .padStart() (más conciso y moderno)
minutos = String(minutos).padStart(2, "0");
segundos = String(segundos).padStart(2, "0");
```

> [!TIP]
> `String.prototype.padStart(longitud, caracterDeRelleno)` completa un string por la izquierda hasta alcanzar la longitud indicada. Es la forma moderna y recomendada de hacer padding de ceros.

---

### 4. Error: posición incorrecta del `<script>`

Varios alumnos colocaban el `<script>` al **final del `<body>`** en lugar de en el `<head>` con el atributo `defer`:

```html
<!-- ❌ Incorrecto — al final del body -->
<body>
  <!-- contenido -->
  <script src="index.js"></script>
</body>
```

```html
<!-- ✅ Correcto — en el <head> con defer -->
<head>
  <script src="index.js" defer></script>
</head>
```

> [!IMPORTANT]
> El `<script>` debe ir **siempre en el `<head>` con `defer`** (ver sesión 18). El atributo `defer` garantiza que el script se descarga en paralelo con el HTML y se ejecuta solo cuando todo el DOM ha sido construido. Colocar el `<script>` al final del `<body>` es un patrón **obsoleto**.

---

### 5. Error: no llamar a la función inmediatamente al cargar

En el patrón de `setTimeout` recursivo, si no se invoca la función al arrancar la página, el contador tarda **un segundo** en mostrarse por primera vez, creando un efecto de pantalla vacía:

```js
// ❌ Incorrecto — espera 1 segundo antes del primer tick
setTimeout(handleTimeout, 1000);

function handleTimeout() {
  // actualiza el DOM
  setTimeout(handleTimeout, 1000);
}
```

```js
// ✅ Correcto — se muestra inmediatamente al cargar
handleTimeout(); // llamada inicial sin espera

function handleTimeout() {
  // actualiza el DOM
  setTimeout(handleTimeout, 1000);
}
```

> [!NOTE]
> La llamada inicial a `handleTimeout()` hace que el DOM se actualice en el momento en que se ejecuta el script, sin esperar el primer intervalo de un segundo.

---

### 6. Buenas prácticas reforzadas

Durante la corrección se recordaron varias buenas prácticas generales de JavaScript:

#### `const` y `let`, nunca `var`

```js
// ❌ Prohibido
var contador = 0;

// ✅ Correcto
let contador = 0; // para valores que van a cambiar
const LIMITE = 60; // para valores constantes
```

#### Constantes con nombre para valores mágicos

```js
// ❌ Difícil de entender
setTimeout(handleTimeout, 1000);

// ✅ Más legible
const UN_SEGUNDO_EN_MS = 1000;
setTimeout(handleTimeout, UN_SEGUNDO_EN_MS);
```

#### Nombres descriptivos para las variables

```js
// ❌ Difícil de razonar
const x = new Date().getTime();

// ✅ Mucho más claro
const timestampDeHoy = new Date().getTime();
```

> [!TIP]
> Un buen nombre de variable hace que el código se lea casi como prosa. Si necesitas un comentario para explicar qué es `x`, el problema es el nombre de la variable, no la falta del comentario.

---

## Presentación de la Práctica

### TripPlanner+

#### Objetivo General

Desarrollar **TripPlanner+**, una plataforma web interactiva y moderna para la planificación personalizada de viajes.

Esta aplicación permitirá a los usuarios crear y gestionar sus viajes, añadiendo actividades por días y consultando información meteorológica actualizada.

TripPlanner+ buscará proporcionar una experiencia de usuario fluida y eficiente, simulando características comunes de aplicaciones de planificación de viajes.

---

#### Descripción del Proyecto

TripPlanner+ será una aplicación web dinámica que simulará un entorno de planificación de viajes.

Los usuarios podrán crear viajes, añadir actividades o puntos de interés, y consultar el tiempo de su destino en tiempo real.

La aplicación también ofrecerá visualizaciones atractivas y una interfaz intuitiva para facilitar la gestión y consulta de viajes.

---

#### Requisitos

##### 1. Interfaz de Usuario

- Desarrollar una interfaz responsiva y visualmente atractiva que sea intuitiva y fácil de usar.
- Implementar interacciones dinámicas utilizando JavaScript para mejorar la experiencia del usuario, como menús desplegables, diálogos modales y formularios interactivos.

##### 2. Funcionalidades de la Aplicación

- **Creación y gestión de viajes:** Permitir a los usuarios crear nuevos viajes con información básica (nombre, fechas, origen, destino).
- **Actividades dentro del viaje:** Posibilidad de añadir, editar o eliminar actividades asociadas a un viaje concreto (título, descripción, hora o día).
- **Consulta del tiempo:** Para garantizar la coherencia entre todos los proyectos, se deberá utilizar la API pública de OpenWeatherMap (versión gratuita) para todas las consultas meteorológicas. No se permite utilizar otros servicios o APIs alternativas.
- **Sugerencias de viaje:** Implementar una función de sugerencias para que los usuarios puedan interactuar con una IA (Gemini) y que esta dé sugerencias de viaje.

##### 3. Requisitos Técnicos

- El desarrollo de la práctica se debe realizar utilizando **vanilla HTML, CSS y vanilla JavaScript** (sin ningún framework o librería externa).
- Se permite el uso opcional de frameworks CSS para mejorar el diseño y la responsividad, como Bootstrap o TailwindCSS.
- **No se permite** el uso de frameworks de JavaScript como React, Vue, Angular...

---

#### Descripción Detallada de las Páginas y Funcionalidades

##### Página Principal (Home)

**Objetivo:** Dar la bienvenida a los usuarios y explicar las ventajas de utilizar TripPlanner+.

**Contenidos:**

- **Mensaje de Bienvenida:** Breve introducción a la plataforma.
- **Descripción de Características:** Enumeración de las principales funcionalidades como la gestión de viajes, consulta del tiempo y sistema de sugerencias.

---

##### Pantalla de Viajes

**Objetivo:** Permitir la visualización y gestión de los viajes creados.

**Funcionalidades:**

- Listado de viajes guardados.
- Formulario para añadir nuevos viajes (nombre, fechas, destino).
- Posibilidad de ver, editar o eliminar viajes.
- Por cada viaje, posibilidad de añadir actividades diarias.
- Los datos se deben guardar automáticamente para que se mantengan después de cerrar el navegador.

---

##### Pantalla de Clima

**Objetivo:** Mostrar información meteorológica del destino seleccionado.

**Funcionalidades:**

- Consulta de datos mediante una API pública de meteorología.
- Mostrar temperatura actual, estado del cielo, icono y fecha.
- Opcionalmente, mostrar también la previsión de los próximos días.

---

##### Página Sobre Nosotros (About Us)

**Objetivo:** Informar a los usuarios sobre los creadores del proyecto y su misión.

**Contenidos:**

- **Información del Equipo:** Breves biografías o descripciones del equipo detrás de TripPlanner+.
- **Misión y Visión:** Explicación de los objetivos y aspiraciones del proyecto.
- **Contacto:** Información de contacto o formulario para enviar mensajes al equipo de TripPlanner+ con campos como Nombre, Apellidos, Email, Mensaje…
- Cuando el usuario rellene el formulario de contacto, debe llegar un correo al equipo de TripPlanner+ y otro al cliente que ha escrito el mensaje indicándole que se han recibido sus consultas y que el equipo las responderá lo antes posible.
- Para realizar el envío de mails, se propone hacerlo a través de la **API REST de EmailJS** haciendo uso de FETCH/AJAX/Axios o similar, pero queda **estrictamente prohibido** usar su SDK.

---

##### Sistema de Sugerencias IA

**Objetivo:** Simular un sistema para permitir a los usuarios obtener sugerencias sobre nuevos viajes.

**Funcionalidades:**

- **Interfaz de Sugerencias:** Área de mensajes donde los usuarios pueden escribir y enviar mensajes.
- **Respuestas Automáticas:** Implementación de respuestas automáticas utilizando la **API de Gemini de Google**.
- **Formato de Chat Realista:** Diseño que emula aplicaciones de chat reales, con mensajes entrantes y salientes claramente diferenciados.
- La funcionalidad de sugerencias IA se debe implementar obligatoriamente utilizando la API de Gemini de Google. Esta solo se utilizará para generar ideas o sugerencias de destinos o actividades de viaje, sin funciones adicionales de análisis o recomendaciones personalizadas avanzadas.

> [!NOTE]
> En la sesión 23 se proporcionará un ejemplo de cómo integrar la API de Gemini de Google para generar respuestas automáticas a partir de las preguntas o mensajes enviados por los usuarios en el sistema de sugerencias IA.

---

##### Gestión y Persistencia de Datos

**Objetivo:** Garantizar que los datos del viaje y las actividades se mantengan disponibles después de cerrar el navegador.

**Tecnología a utilizar:** Se hará uso de **LocalStorage**, que permite almacenar información de forma persistente en el navegador del usuario.

- Todos los datos (viajes, actividades, etc.) se deben guardar exclusivamente en el LocalStorage del navegador.
- **No se permite** el uso de bases de datos remotas, ni ningún tipo de backend o servidor para la persistencia.

> [!IMPORTANT]
> La práctica debe ser **trabajo propio**. Usar código de otros alumnos o generado íntegramente por IA sin comprenderlo se considera deshonestidad académica y puede suponer el suspenso de la asignatura.

---

## Resumen

En esta sesión hemos repasado y consolidado:

- ✅ **`parseInt(valor, 10)`** — convertir strings a enteros antes de operar aritméticamente con `.value`
- ✅ **`Math.floor`** — eliminar los decimales al descomponer segundos en minutos, horas y días
- ✅ **Padding de ceros** — usar `.padStart(2, "0")` para mostrar `"05"` en lugar de `"5"`
- ✅ **Posición del `<script>`** — siempre en `<head>` con `defer`, nunca al final del `<body>`
- ✅ **Llamada inicial en `setTimeout` recursivo** — invocar la función al cargar para evitar el retraso inicial
- ✅ **`const` / `let`** — nunca `var`; constantes con nombre para valores mágicos
- ✅ **Nombres descriptivos** — variables y funciones que explican su propósito sin necesidad de comentarios
- ✅ **TripPlanner+** — enunciado, requisitos técnicos y criterios de la práctica de la asignatura

**Lo más importante:**

> [!IMPORTANT]
>
> - **`.value` siempre es un string** — usa `parseInt(..., 10)` antes de cualquier cálculo numérico
> - **`Math.floor` es obligatorio** al convertir segundos a minutos (o minutos a horas) para evitar decimales en pantalla
> - **El `<script>` va en el `<head>` con `defer`** — no al final del `<body>`
> - **Llama la función inmediatamente** además de programar el primer `setTimeout`, para que el DOM se actualice al instante

## Recursos Adicionales

- [MDN - `parseInt`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN - `Math.floor`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [MDN - `String.prototype.padStart`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [MDN - `defer`](https://developer.mozilla.org/es/docs/Web/HTML/Element/script#defer)
- [MDN - `setTimeout`](https://developer.mozilla.org/es/docs/Web/API/setTimeout)
- [MDN - `Date`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN - `localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [EmailJS REST API](https://www.emailjs.com/docs/rest-api/send/)
- [Google AI Studio (Gemini)](https://aistudio.google.com/)
- [javascript.info - setTimeout y setInterval](https://es.javascript.info/settimeout-setinterval)
