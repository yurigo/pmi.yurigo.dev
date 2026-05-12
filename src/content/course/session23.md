---
title: "Sesión 23 - Chat con Gemini desde Frontend"
section: "JavaScript"
order: 23
description: "Construir un chat interactivo en el navegador consumiendo la API de Gemini"
duration: 2
objectives:
  - "Capturar datos de formularios y prevenir recargas con event.preventDefault()"
  - "Manipular el DOM para insertar mensajes dinámicamente"
  - "Realizar peticiones POST a APIs de IA con fetch"
  - "Usar async/await para manejar respuestas del modelo"
  - "Entender los riesgos de seguridad al exponer claves API en el frontend"
exercises:
  - title: "Mejorar el chat de Gemini"
    description: "Añade historial de conversación, manejo de errores mejorado y validación de entrada."
  - title: "Mover la lógica a un backend"
    description: "Refactoriza el chat para que la llamada a Gemini se haga desde un servidor backend, ocultando la API key."
---

# Sesión 23 - Chat con Gemini desde Frontend

<!-- **Fecha:** 12 de Mayo de 2026 -->

## Contenidos de la Sesión

En esta sesión se ha construido un chat sencillo en el navegador que:

- captura el texto del usuario desde un `<form>`
- pinta los mensajes en pantalla
- hace una petición `fetch` a la API de Gemini
- muestra la respuesta del modelo en el chat

Se ha reutilizado la base visual del tutorial de Socket.IO (solo HTML/CSS), y se ha implementado la lógica en JavaScript con `addEventListener`, `async/await` y `fetch`.

El ejemplo de la sesión está en: [`chat/`](./chat/)

---

### 1. Estructura base del chat

La interfaz usa:

- una lista `<ul id="messages">` para los mensajes
- un formulario `<form id="form">`
- un `<input name="textUsuario">` para el texto del usuario

Cuando se envía el formulario:

1. se evita el recargo con `event.preventDefault()`
2. se lee el texto con `new FormData(form).get("textUsuario")`
3. se añade un `<li>` del usuario al chat
4. se llama a Gemini y se añade otro `<li>` con la respuesta

---

### 2. Petición a Gemini con `fetch`

La llamada se hace con `method: "POST"`, cabeceras JSON y la API key en `x-goog-api-key`:

```js
const response = await fetch(url, {
  method: "POST",
  headers: {
    "x-goog-api-key": API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datos),
});
```

Después se transforma la respuesta con `await response.json()` y se extrae el texto:

```js
return data.candidates[0].content.parts[0].text;
```

> [!TIP]
> El patrón `async/await` hace el código asíncrono más legible que encadenar muchos `.then()` / `.catch()`.

---

### 3. Prompt dinámico

El ejemplo concatena el texto del usuario en el payload:

```js
text: "eres un asistente y te han preguntado: " + texto + ". Responde con pocas palabras"
```

Esto permite enviar cada mensaje del formulario como entrada al modelo.

> [!NOTE]
> En un proyecto real conviene mantener instrucciones del sistema separadas del input del usuario para tener más control del comportamiento del modelo.

---

### 4. Renderizado en el DOM

Cada mensaje se representa como un `li`:

- `class="user"` para el mensaje del usuario
- `class="gpt"` para la respuesta del modelo

La construcción se hace con `document.createElement("li")`, `innerText` y `appendChild`.

---

### 5. Aviso importante de seguridad

> [!WARNING]
> El ejemplo de esta sesión es **intencionadamente vulnerable** para aprendizaje: la API key está en el frontend y cualquiera puede verla desde el navegador.

> [!IMPORTANT]
> En producción, las claves privadas **nunca** deben ir en cliente. La llamada a Gemini debe pasar por un backend (servidor propio o función serverless) que guarde la key en variables de entorno.

---

### 6. Estructura de archivos de la sesión

```
session23/
├── README.md
└── chat/
    ├── index.html   — estructura del chat (lista + formulario + input)
    ├── index.js     — lógica de envío, renderizado y llamada a Gemini
    └── style.css    — estilos del chat
```

---

## Resumen

En esta sesión hemos practicado:

- ✅ formularios y eventos (`submit`, `preventDefault`)
- ✅ lectura de datos con `FormData`
- ✅ creación de nodos con `createElement` + `appendChild`
- ✅ llamadas HTTP con `fetch` (`POST`, headers y body JSON)
- ✅ asincronía con `async/await`
- ✅ consumo básico de una API de IA (Gemini)
- ✅ identificación de un riesgo real: exponer una API key en frontend

## Recursos Adicionales

- [Google AI Studio](https://aistudio.google.com/)
- [Gemini API Quickstart](https://ai.google.dev/gemini-api/docs/quickstart?hl=es-419#make-first-request)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [MDN - async function](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [Socket.IO Tutorial (base visual usada en clase)](https://socket.io/docs/v4/tutorial/step-2)
