---
title: "Sesión 22 - JavaScript: Promesas, `fetch` y `async/await`"
section: "JavaScript"
order: 22
description: "Programación asíncrona: promesas, fetch API, .then()/.catch() y async/await"
duration: 2
objectives:
  - "Comprender qué son las promesas y sus estados: pending, fulfilled, rejected"
  - "Usar .then() y .catch() para encadenar operaciones asíncronas"
  - "Consumir datos de APIs externas usando fetch"
  - "Escribir código asíncrono legible con async/await"
  - "Manejar errores de red y respuestas HTTP en peticiones asíncronas"
exercises:
  - title: "Consumir una API pública con fetch"
    description: "Crea una aplicación que obtenga datos de una API pública (ej: JSONPlaceholder) y los muestre en la página."
  - title: "Convertir promesas clásicas a async/await"
    description: "Toma ejemplos con .then()/.catch() y reescríbelos usando async/await."
---

# Sesión 22 - JavaScript: Promesas, `fetch` y `async/await`

<!-- **Fecha:** 6 de Mayo de 2026 -->

## Contenidos de la Sesión

En esta sesión se introdujo la programación asíncrona moderna en JavaScript a través de cuatro bloques clave:

1. **Promesas** y su máquina de estados (`pending`, `fulfilled`, `rejected`)
2. **`fetch`** para consumir endpoints externos
3. **`.then()` / `.catch()`** para encadenar operaciones asíncronas
4. **`async/await`** como sintaxis más legible (syntax sugar) sobre promesas

El objetivo principal fue entender que, cuando una operación tarda (red, archivos, temporizadores), JavaScript no se bloquea: devuelve una promesa y el resultado se maneja después.

---

### 1. Promesas y máquina de estados

Una **promesa** representa el resultado futuro de una operación asíncrona.

Estados posibles:

- `pending` → la operación sigue en curso
- `fulfilled` → la operación terminó bien
- `rejected` → la operación falló

```js
const promesa = new Promise(function (resolve, reject) {
  const ok = true;

  if (ok) {
    resolve("Todo correcto");
  } else {
    reject(new Error("Algo ha fallado"));
  }
});
```

> [!IMPORTANT]
> Una promesa solo puede resolverse o rechazarse **una vez**.  
> Después de eso, su estado ya no cambia.

---

### 2. Trabajar con promesas usando `.then()` y `.catch()`

Cuando una promesa se cumple, usamos `.then()`.  
Cuando falla, usamos `.catch()`.

```js
promesa
  .then(function (resultado) {
    console.log("Éxito:", resultado);
  })
  .catch(function (error) {
    console.error("Error:", error.message);
  });
```

`.then()` también devuelve otra promesa, lo que permite encadenar pasos:

```js
obtenerUsuario()
  .then(function (usuario) {
    return obtenerPosts(usuario.id);
  })
  .then(function (posts) {
    console.log("Posts:", posts);
  })
  .catch(function (error) {
    console.error(error);
  });
```

> [!TIP]
> Si dentro de un `.then()` necesitas pasar datos al siguiente paso, recuerda hacer `return`.

---

### 3. `fetch`: peticiones HTTP a endpoints externos

`fetch(url)` devuelve una promesa con un objeto `Response`.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json(); // también devuelve una promesa
  })
  .then(function (users) {
    console.log(users);
  })
  .catch(function (error) {
    console.error("Fallo de red o parseo:", error);
  });
```

`response.json()` es asíncrono porque convertir la respuesta a JSON puede tardar.

> [!WARNING]
> `fetch` solo rechaza automáticamente en errores de red.  
> Si el servidor responde `404` o `500`, la promesa puede seguir resuelta.  
> Conviene comprobar `response.ok`.

Ejemplo robusto:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    return response.json();
  })
  .then(function (users) {
    console.log(users);
  })
  .catch(function (error) {
    console.error(error.message);
  });
```

---

### 4. `async/await`: la misma idea con sintaxis más simple

`async/await` no reemplaza promesas: **las usa por debajo**.  
Simplemente permite escribir código asíncrono con estilo más cercano a código secuencial.

```js
async function cargarUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
}

cargarUsuarios();
```

Relación directa:

- `await` espera una promesa (equivale a un `.then()`)
- `try/catch` captura errores (equivale al `.catch()`)

> [!NOTE]
> `await` solo se puede usar dentro de funciones `async` (o en top-level await en módulos compatibles).

---

### 5. Resumen rápido

- Promesas: resultado futuro de operaciones asíncronas
- Estados: `pending` → `fulfilled` / `rejected`
- `.then()` y `.catch()`: forma clásica de encadenar promesas
- `fetch`: API nativa para peticiones HTTP
- `async/await`: syntax sugar para trabajar con promesas con mejor legibilidad

---

## Recursos adicionales

- [MDN - Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [MDN - async function](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
