---
title: "Sesión 14 - CSS Transitions, Transforms y Animations"
section: "CSS"
order: 14
description: "Animaciones y transformaciones en CSS"
---

# Sesión 14 - CSS Transitions, Transforms y Animations

**Fecha:** 18 de Marzo de 2026

## Contenidos de la Sesión

En esta sesión se han explicado las tres herramientas de CSS que permiten añadir **movimiento y dinamismo** a los elementos de una página: `transition`, `transform` y `animation`. También se ha visto cómo usar la propiedad individual `rotate` y `scale` (sin `transform`), el pseudo-elemento `::after` para efectos de hover, y `animation-play-state` para pausar animaciones.

El ejemplo construido en clase se encuentra en la carpeta [`animations/`](./animations/), concretamente en los archivos [`index.html`](./animations/index.html) y [`style.css`](./animations/style.css).

---

### 1. `transition` — Transiciones CSS

`transition` permite que los cambios de valor de una propiedad CSS se produzcan de forma **gradual** en lugar de instantánea. Cuando un elemento cambia de estado (por ejemplo, al hacer `:hover`), la transición anima el cambio.

#### Sintaxis

```css
selector {
  transition: propiedad duración función-de-tiempo retardo;
}
```

| Propiedad sub-valor          | Descripción                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| `transition-property`        | La propiedad CSS que se quiere animar (`all`, `transform`…)   |
| `transition-duration`        | Duración de la transición (`250ms`, `1s`…)                    |
| `transition-timing-function` | Curva de velocidad (`linear`, `ease`, `ease-in-out`…)         |
| `transition-delay`           | Retardo antes de que comience la transición                   |

#### Ejemplo: transición múltiple

En el ejemplo de clase, las secciones tienen tres propiedades animadas:

```css
section {
  transition:
    transform 250ms linear 0ms,
    rotate    250ms linear 0ms,
    scale     250ms linear 0ms;
}
```

Y al hacer `:hover` esas propiedades cambian de valor, activando las transiciones:

```css
section:hover {
  rotate: 90deg;
  scale: 1.1;
}
```

También se usó `transition: all` en los enlaces para animar todos los cambios a la vez:

```css
a {
  display: inline-block;
  transition: all 250ms ease-in-out 0s;
}

a:hover {
  color: red;
  transform: translateY(-3px) rotate(363deg);
}
```

> [!TIP]
> Usar `transition: all` es cómodo durante el desarrollo, pero en producción es mejor listar sólo las propiedades que se quieren animar para evitar transiciones inesperadas y mejorar el rendimiento.

---

### 2. `transform` — Transformaciones CSS

`transform` aplica una o varias transformaciones geométricas a un elemento: rotaciones, traslaciones, escalados, etc. **No afecta al flujo del documento**: el espacio que el elemento ocupaba antes de la transformación se mantiene.

```css
/* Una sola transformación */
.elemento {
  transform: rotate(45deg);
}

/* Varias transformaciones encadenadas */
a:hover {
  transform: translateY(-3px) rotate(363deg);
}
```

Las funciones de `transform` más habituales:

| Función              | Descripción                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `rotate(ángulo)`     | Gira el elemento el ángulo indicado (en `deg`, `rad`, `turn`…)     |
| `translate(x, y)`   | Desplaza el elemento horizontal y verticalmente                    |
| `translateX(x)`     | Desplaza el elemento horizontalmente                               |
| `translateY(y)`     | Desplaza el elemento verticalmente                                 |
| `scale(factor)`     | Escala el elemento (1 = tamaño original, 1.5 = 50% más grande)     |

```css
/* Ejemplo del enlace de clase */
a:hover {
  transform: translateY(-3px) rotate(363deg);
  /* primero sube 3px, luego hace casi una vuelta completa */
}
```

---

### 3. Propiedades individuales: `rotate`, `scale` y `translate`

CSS moderno permite escribir `rotate`, `scale` y `translate` como **propiedades independientes** en lugar de dentro de `transform`. Esto facilita animar sólo una de ellas con `transition` sin afectar a las demás.

```css
/* Usando la propiedad individual (recomendado con transition) */
section {
  transition:
    rotate 250ms linear 0ms,
    scale  250ms linear 0ms;
}

section:hover {
  rotate: 90deg;
  scale: 1.1;
}

/* Equivalente con transform (más difícil de animar por separado) */
section:hover {
  transform: rotate(90deg) scale(1.1);
}
```

> [!NOTE]
> Usar las propiedades individuales (`rotate`, `scale`, `translate`) es la forma moderna y recomendada cuando se quieren aplicar transiciones a cada transformación de forma independiente.

---

### 4. `animation` y `@keyframes` — Animaciones CSS

A diferencia de `transition` (que sólo reacciona a cambios de estado), `animation` permite crear **secuencias de animación complejas** que se reproducen automáticamente, en bucle, a la inversa, etc. La secuencia se define con `@keyframes`.

#### Definir la animación con `@keyframes`

```css
@keyframes tembleque {
  0% {
    transform: translateX(4px);
  }

  50% {
    transform: translateX(-4px);
  }

  100% {
    transform: translateX(4px);
  }
}
```

#### Aplicar la animación a un elemento

```css
section {
  animation-name:             tembleque;
  animation-duration:         100ms;
  animation-timing-function:  linear;
  animation-direction:        normal;
  animation-iteration-count:  infinite;
}
```

| Propiedad                    | Descripción                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| `animation-name`             | Nombre del `@keyframes` que se quiere reproducir                                     |
| `animation-duration`         | Duración de un ciclo completo                                                        |
| `animation-timing-function`  | Curva de velocidad (`linear`, `ease`, `ease-in-out`…)                                |
| `animation-delay`            | Retardo antes de que empiece la animación                                            |
| `animation-iteration-count`  | Número de repeticiones (`1`, `3`, `infinite`…)                                       |
| `animation-direction`        | Dirección de reproducción (`normal`, `reverse`, `alternate`, `alternate-reverse`)    |
| `animation-fill-mode`        | Estado del elemento antes/después de la animación (`none`, `forwards`, `backwards`)  |
| `animation-play-state`       | `running` (en reproducción) o `paused` (pausada)                                     |

#### Shorthand `animation`

Todas las sub-propiedades se pueden escribir en una sola declaración:

```css
section {
  /* name duration timing-function delay iteration-count direction fill-mode */
  animation: tembleque 100ms linear 0ms infinite normal;
}
```

---

### 5. `animation-play-state` — Pausar una animación

`animation-play-state` permite pausar (`paused`) o reanudar (`running`) una animación. Es muy útil para detener la animación cuando el usuario interactúa con el elemento:

```css
/* La animación "tembleque" está activa en todas las secciones */
section {
  animation-name: tembleque;
  animation-iteration-count: infinite;
}

/* Al hacer hover sobre el h2 dentro de section, la animación se pausa */
section:hover > h2 {
  background-color: blue;
  animation-play-state: paused;
}
```

> [!NOTE]
> `animation-play-state: paused` detiene la animación en el fotograma actual. Cuando se reanuda, continúa desde ese mismo punto.

---

### 6. El pseudo-elemento `::after` para efectos de hover

En el ejemplo de clase se usó `::after` para crear un efecto de "barrido de color" sobre las secciones al hacer hover:

```css
/* Estado inicial: el pseudo-elemento ocupa 0% de ancho (right: 100%) */
section::after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 100%;              /* el pseudo-elemento tiene ancho 0 */
  background-color: rgb(109, 26, 80);
  z-index: -1;
  transition: right 1s ease-in-out 0ms;
}

/* Estado hover: right pasa a 0, el pseudo-elemento ocupa el 100% */
section:hover::after {
  right: 0;
}
```

**Resultado:** al hacer hover sobre una sección, un color se extiende de izquierda a derecha en 1 segundo.

> [!TIP]
> Para que `::after` con `position: absolute` funcione correctamente dentro de un contenedor, ese contenedor debe tener `position: relative` y `overflow: hidden` (para que el pseudo-elemento no desborde).

```css
section {
  position: relative;
  overflow: hidden;
}
```

---

### 7. Diferencias entre `transition` y `animation`

| Característica         | `transition`                              | `animation`                                  |
| ---------------------- | ----------------------------------------- | -------------------------------------------- |
| Activación             | Requiere un cambio de estado (`:hover`…)  | Se ejecuta automáticamente                   |
| Secuencia de pasos     | Solo de A → B                             | Múltiples fotogramas con `@keyframes`         |
| Repetición             | No (sólo va y vuelta si se deshace)       | Sí (`animation-iteration-count: infinite`)   |
| Control detallado      | Limitado                                  | Completo (dirección, relleno, pausa…)        |
| Cuándo usarlo          | Efectos de hover simples                  | Animaciones complejas o en bucle             |

---

### 8. Estructura de los archivos de la sesión

```
animations/
├── index.html   — Página con secciones animadas, links con transform y transiciones
└── style.css    — Estilos con transition, transform, rotate, scale, animation y @keyframes
```

---

## Resumen

En esta sesión hemos aprendido:

- ✅ `transition` — anima cambios de valor de propiedades CSS al cambiar de estado
- ✅ `transition-duration`, `transition-timing-function`, `transition-delay` — controlan cómo ocurre la transición
- ✅ `transform` — aplica rotaciones, traslaciones y escalados sin afectar el flujo
- ✅ `rotate()`, `translate()`, `translateX()`, `translateY()`, `scale()` — funciones de transformación
- ✅ Propiedades individuales `rotate`, `scale`, `translate` — forma moderna de aplicar transformaciones con `transition`
- ✅ `animation` con `@keyframes` — animaciones complejas y en bucle sin necesidad de interacción del usuario
- ✅ `animation-play-state` — pausa o reanuda una animación
- ✅ `::after` con `transition` — efecto de barrido de color mediante pseudo-elemento

**Lo más importante:**

> [!IMPORTANT]
> - `transition` reacciona a cambios de estado; `animation` se ejecuta sola
> - Las propiedades individuales `rotate`, `scale` y `translate` permiten animar cada transformación por separado con `transition`
> - `@keyframes` define la secuencia de fotogramas; `animation-name` la aplica al elemento
> - Para usar `::after` como capa decorativa: el padre debe tener `position: relative` y `overflow: hidden`

## Recursos Adicionales

- [MDN - transition](https://developer.mozilla.org/es/docs/Web/CSS/transition)
- [MDN - transform](https://developer.mozilla.org/es/docs/Web/CSS/transform)
- [MDN - rotate (propiedad individual)](https://developer.mozilla.org/es/docs/Web/CSS/rotate)
- [MDN - scale (propiedad individual)](https://developer.mozilla.org/es/docs/Web/CSS/scale)
- [MDN - translate (propiedad individual)](https://developer.mozilla.org/es/docs/Web/CSS/translate)
- [MDN - animation](https://developer.mozilla.org/es/docs/Web/CSS/animation)
- [MDN - @keyframes](https://developer.mozilla.org/es/docs/Web/CSS/@keyframes)
- [MDN - animation-play-state](https://developer.mozilla.org/es/docs/Web/CSS/animation-play-state)
- [MDN - ::after](https://developer.mozilla.org/es/docs/Web/CSS/::after)
- [CSS Tricks - A Guide to CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)
- [CSS Tricks - A Guide to CSS Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [Josh Comeau - An Interactive Guide to CSS Transitions](https://www.joshwcomeau.com/animation/css-transitions/)
- [Josh Comeau - A Friendly Introduction to Spring Physics](https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/)