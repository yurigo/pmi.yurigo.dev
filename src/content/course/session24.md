---
title: "Sesión 24 - Propagación de Eventos: bubbling, `stopPropagation` y `stopImmediatePropagation`"
section: "JavaScript"
order: 24
description: "Propagación de eventos en el DOM: bubbling, stopPropagation y stopImmediatePropagation"
duration: 2
objectives:
  - "Entender cómo funciona el event bubbling en el árbol DOM"
  - "Distinguir entre e.target y e.currentTarget en listeners"
  - "Aplicar stopPropagation para evitar que eventos de hijos afecten al padre"
  - "Aplicar stopImmediatePropagation para bloquear otros listeners del mismo elemento"
  - "Diseñar componentes interactivos evitando efectos colaterales por propagación"
exercises:
  - title: "Tarjeta interactiva con bubbling controlado"
    description: "Crea una tarjeta expandible con inputs y botón interno, evitando la expansión al interactuar con elementos hijos."
  - title: "Comparar stopPropagation vs stopImmediatePropagation"
    description: "Registra varios listeners en un mismo botón y documenta la diferencia práctica entre ambos métodos."
---

# Sesión 24 - Propagación de Eventos: bubbling, `stopPropagation` y `stopImmediatePropagation`

<!-- **Fecha:** 13 de Mayo de 2026 -->

## Contenidos de la Sesión

Esta sesión fue principalmente una sesión de **trabajo personal y resolución de dudas**. Se aprovechó para reforzar un concepto clave de los eventos en JavaScript:

- Cómo se propagan los eventos en el DOM (**event bubbling**)
- Cómo detener esa propagación con **`stopPropagation`**
- Cómo detener también otros listeners del mismo elemento con **`stopImmediatePropagation`**

El ejemplo de la sesión está en: [`bubbling/`](./bubbling/)

---

### 1. Event Bubbling: cómo se propagan los eventos

Cuando se hace clic en un elemento del DOM, el evento no se queda solo en ese elemento: **sube ("burbujea") por todos sus ancestros** hasta llegar a `document`.

```
document
  └── body
        └── div#b.card        ← 3. llega aquí también
              └── button#a    ← 1. aquí se hace clic → 2. el evento sube
```

Ejemplo: si `button#a` está dentro de `div#b.card`, un clic en el botón dispara primero el listener del botón, y después el listener del div padre.

```js
card.addEventListener("click", (e) => {
  card.classList.toggle("expanded"); // se ejecuta aunque el clic sea en button
});

card.querySelector("button").addEventListener("click", (e) => {
  console.log("button"); // se ejecuta primero
});
```

> [!NOTE]
> `e.target` es siempre el elemento sobre el que se hizo clic originalmente, aunque el listener esté en un ancestro. `e.currentTarget` es el elemento al que está asociado el listener.

---

### 2. `stopPropagation`: detener el burbujeo

`e.stopPropagation()` evita que el evento siga subiendo por el árbol DOM. Los listeners del elemento actual se ejecutan todos, pero los de sus ancestros no.

```js
card.querySelectorAll("input, button, label").forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    e.stopPropagation(); // el clic no llega al card padre
  });
});
```

En el ejemplo: al hacer clic en un `<input>`, `<label>` o `<button>`, el evento **no llega** al `div#b.card` y por tanto la tarjeta no se expande ni contrae.

> [!TIP]
> Usa `stopPropagation` cuando quieras que un elemento hijo tenga su propio comportamiento sin afectar al padre. Es especialmente útil en componentes como modales, menús desplegables o tarjetas interactivas.

---

### 3. `stopImmediatePropagation`: detener burbujeo **y** otros listeners del mismo elemento

`e.stopImmediatePropagation()` va un paso más allá que `stopPropagation`:

1. Detiene el burbujeo hacia los ancestros.
2. Impide que se ejecuten **otros listeners registrados en el mismo elemento**.

```js
card.querySelector("button").addEventListener("click", (e) => {
  console.log("button");
  e.stopImmediatePropagation(); // ningún otro listener del botón se ejecuta después de este
});
```

> [!IMPORTANT]
> El orden en que se registran los listeners importa con `stopImmediatePropagation`. Solo se ejecutan los listeners registrados **antes** de este. Los registrados después quedan bloqueados.

---

### 4. Diferencia entre `stopPropagation` y `stopImmediatePropagation`

| Método                     | Detiene el burbujeo | Detiene otros listeners del mismo elemento |
| -------------------------- | ------------------- | ------------------------------------------ |
| `stopPropagation`          | ✅ Sí               | ❌ No                                      |
| `stopImmediatePropagation` | ✅ Sí               | ✅ Sí                                      |

**Ejemplo:** si un `<button>` tiene tres listeners registrados y el segundo llama a `stopImmediatePropagation()`:

- El primero se ejecuta (ya terminó).
- El segundo se ejecuta y llama a `stopImmediatePropagation()`.
- El tercero **no** se ejecuta.
- Ningún listener de los ancestros se ejecuta.

> [!NOTE]
> `stopPropagation` en el mismo escenario dejaría que el tercer listener sí se ejecutara, pero impediría que el evento llegue a los ancestros.

---

### 5. Estructura de los archivos de la sesión

```
session24/
├── README.md
└── bubbling/
    ├── index.html   — tarjeta con párrafos, inputs y un botón
    ├── index.js     — listeners con stopPropagation y stopImmediatePropagation
    └── style.css    — tarjeta colapsada / expandida con clase .expanded
```

---

## Resumen

En esta sesión hemos practicado:

- ✅ Event bubbling: los eventos suben por el árbol DOM
- ✅ `e.target` vs `e.currentTarget`
- ✅ `stopPropagation()`: corta el burbujeo hacia los ancestros
- ✅ `stopImmediatePropagation()`: corta el burbujeo **y** otros listeners del mismo elemento
- ✅ Cuándo usar cada método según la necesidad

## Recursos Adicionales

- [MDN - Event bubbling](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [MDN - stopPropagation()](https://developer.mozilla.org/es/docs/Web/API/Event/stopPropagation)
- [MDN - stopImmediatePropagation()](https://developer.mozilla.org/es/docs/Web/API/Event/stopImmediatePropagation)
- [MDN - addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
