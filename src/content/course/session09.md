---
title: "Sesión 09 - Actividad de Maquetación con Flexbox"
section: "CSS"
order: 9
description: "Práctica de maquetación: flex-grow, flex-basis, flex-shrink y :hover"
duration: 3
objectives:
  - "Aplicar flex-grow para que los ítems ocupen el espacio disponible de forma proporcional"
  - "Usar flex-basis para definir el tamaño base de un ítem antes de la distribución"
  - "Controlar el encogimiento de ítems con flex-shrink"
  - "Usar la propiedad shorthand flex: grow shrink basis"
  - "Añadir interactividad visual con la pseudo-clase :hover"
exercises:
  - title: "Landing page de evento"
    description: "Construye la landing page de un evento tecnológico real (MWC, Google I/O u otro) con secciones hero, características y footer, usando exclusivamente Flexbox para el layout."
  - title: "Menú con hover"
    description: "Crea un menú de navegación donde cada enlace cambia de color y fondo al hacer hover, usando transiciones suaves."
checklist:
  - "Entiendo cómo funciona flex-grow y para qué sirve"
  - "Sé usar flex: 1 como forma compacta de flex-grow: 1 flex-shrink: 1 flex-basis: 0"
  - "Puedo diseñar un layout completo de página usando solo Flexbox"
  - "Sé aplicar estilos al hover con la pseudo-clase :hover"
  - "Comprendo cómo flex-basis afecta al tamaño antes de crecer o encoger"
commonErrors:
  - "Usar flex-grow en el contenedor en lugar de en los ítems hijos"
  - "Olvidar que flex: 1 equivale a flex: 1 1 0 (basis 0, no auto)"
  - "Usar :hover en el contenedor cuando se quiere afectar solo al elemento señalado"
  - "No definir un flex-basis y luego esperar un comportamiento predecible con flex-grow"
---

# Sesión 09 - Actividad de Maquetación con Flexbox

**Fecha:** 3 de Marzo de 2026

## Contenidos de la Sesión

Esta sesión se dedicó íntegramente a una **actividad práctica de maquetación** con el objetivo de repasar y consolidar todo lo aprendido hasta ahora: HTML5 semántico, CSS Box Model y, especialmente, **CSS Flexbox**.

El enunciado completo de la actividad está disponible en el repositorio:

- [`flex-activity.md`](https://github.com/yurigo/PMI-2526/blob/master/sessions/session09/flex-activity.md) — descripción textual de la actividad
- [`flex-activity.png`](https://github.com/yurigo/PMI-2526/blob/master/sessions/session09/flex-activity.png) — captura visual de referencia

El código de ejemplo desarrollado en clase se encuentra en la carpeta del repositorio: [`mwc/`](https://github.com/yurigo/PMI-2526/blob/master/sessions/session09/mwc/).

---

### 1. Repaso general de Flexbox

Antes de empezar la actividad se repasaron las propiedades de Flexbox vistas en la sesión anterior:

| Propiedad         | Descripción                                             |
| ----------------- | ------------------------------------------------------- |
| `display: flex`   | Activa el modelo Flexbox en el contenedor               |
| `flex-direction`  | Define la dirección del eje principal (`row`, `column`) |
| `flex-wrap`       | Permite que los items se envuelvan a la siguiente línea |
| `justify-content` | Alineación en el eje principal                          |
| `align-items`     | Alineación en el eje secundario                         |
| `align-content`   | Alineación de las líneas (cuando hay `flex-wrap`)       |
| `gap`             | Espacio entre los flex items                            |
| `order`           | Cambia el orden visual de un flex item                  |
| `align-self`      | Sobreescribe `align-items` para un item concreto        |

---

### 2. `flex-grow` - Crecer para ocupar espacio disponible

`flex-grow` define la capacidad de un flex item para **crecer** y ocupar el espacio libre disponible en el contenedor. Su valor es un número sin unidades que actúa como proporción.

- Valor `0` (por defecto): el item **no crece**.
- Valor `1` o superior: el item **sí crece** para ocupar el espacio libre.

```css
.contenedor {
  display: flex;
}

.item-a {
  flex-grow: 1; /* ocupa 1 parte del espacio libre */
}

.item-b {
  flex-grow: 2; /* ocupa el doble de espacio libre que item-a */
}
```

**Ejemplo en la actividad (tarjetas de ponentes):**

```css
.ponente {
  flex-grow: 1; /* cada tarjeta crece para ocupar el espacio disponible */
}
```

> [!TIP]
> Si todos los items tienen `flex-grow: 1`, el espacio libre se reparte de forma **equitativa** entre todos ellos.

---

### 3. `flex-basis` - Tamaño base de un flex item

`flex-basis` define el **tamaño inicial** de un flex item antes de que se distribuya el espacio libre. Es similar a `width` (en ejes horizontales) o `height` (en ejes verticales), pero específico para Flexbox.

```css
.item {
  flex-basis: 200px; /* el item empieza con 200px de ancho */
}

.item-auto {
  flex-basis: auto; /* usa el tamaño de contenido (valor por defecto) */
}
```

**Ejemplo en la actividad (tarjetas de ponentes):**

```css
.ponente {
  flex-basis: 200px; /* tamaño base de cada tarjeta */
  flex-grow: 1; /* pueden crecer si hay espacio disponible */
}
```

> [!NOTE]
> En la actividad **no se permite usar `width` fija en píxeles** para las columnas de las tarjetas. En su lugar, se usa `flex-basis` junto con `flex-grow` para lograr un layout flexible y adaptable.

---

### 4. `flex-shrink` - Encoger cuando no hay espacio

`flex-shrink` define la capacidad de un flex item para **encogerse** cuando el contenedor no tiene suficiente espacio. Es el complemento de `flex-grow`.

- Valor `1` (por defecto): el item **puede encogerse**.
- Valor `0`: el item **no se encoge** (mantiene su `flex-basis` o tamaño declarado).

```css
.item-fijo {
  flex-shrink: 0; /* no se encoge aunque no haya espacio */
  flex-basis: 300px;
}

.item-flexible {
  flex-shrink: 1; /* se encoge proporcionalmente (valor por defecto) */
}
```

---

### 5. La propiedad shorthand `flex`

Las tres propiedades anteriores (`flex-grow`, `flex-shrink` y `flex-basis`) se pueden escribir de forma abreviada con la propiedad `flex`:

```css
.item {
  /* flex: flex-grow flex-shrink flex-basis */
  flex: 1 1 200px;
}

/* equivale a: */
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 200px;
}
```

Valores habituales:

```css
flex: 1; /* flex: 1 1 0% — crece, se encoge, empieza desde 0 */
flex: auto; /* flex: 1 1 auto — crece, se encoge, usa tamaño natural */
flex: none; /* flex: 0 0 auto — no crece, no se encoge */
```

---

### 6. Pseudo-clase `:hover`

La pseudo-clase `:hover` permite aplicar estilos a un elemento **cuando el cursor del ratón está encima** de él. Es muy útil para dar retroalimentación visual al usuario en botones, enlaces y tarjetas.

```css
selector:hover {
  /* estilos que se aplican al pasar el ratón */
}
```

**Ejemplo en la actividad (botones con efecto hover):**

```css
button {
  background-color: rgb(71, 71, 165);
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(50, 50, 130); /* color más oscuro al pasar el ratón */
}
```

> [!TIP]
> Combinar `:hover` con la propiedad `transition` permite crear efectos de cambio suaves y atractivos. Este es el **bonus opcional** de la actividad.

---

### 7. Estructura de la actividad: Landing Page de evento tecnológico

La actividad consistió en maquetar una **landing page** de un evento tecnológico con las siguientes secciones, usando HTML5 semántico y Flexbox:

#### Header

Logo a la izquierda y menú de navegación a la derecha:

```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav ul {
  display: flex;
  list-style: none;
  gap: 2em;
}
```

#### Hero Section

Texto e imagen en dos columnas:

```css
.content-flex {
  display: flex;
  gap: 3em;
  align-items: center;
}

.content-flex > img {
  flex-basis: 50%;
  flex-shrink: 0;
}
```

#### Sección de Ponentes (Cards)

Cuatro tarjetas distribuidas con `flex-wrap`, `flex-basis` y `flex-grow` (sin `width` fija en píxeles):

```css
.ponentes {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.ponente {
  flex-basis: 200px;
  flex-grow: 1;
}
```

#### Agenda / Horario

Dos columnas: horarios a la izquierda, descripciones a la derecha.

#### Footer

Tres bloques distribuidos horizontalmente:

```css
.columns-3 {
  display: flex;
  justify-content: space-between;
  gap: 2em;
}

.column {
  flex: 1;
}
```

---

### 8. Ejemplo desarrollado en clase: MWC

En clase se desarrolló el HTML completo del ejemplo `mwc/` (Mobile World Congress) para ilustrar la estructura y se explicaron algunos casos de maquetación con Flex. El resto del CSS se dejó como práctica para completar en casa.

<iframe src="/examples/session09/index.html" title="Ejemplo Sesión 09 - CSS Flexbox" class="course-iframe"></iframe>

**Estructura del ejemplo:**

```
mwc/
├── index.html   — HTML completo con todas las secciones
├── reset.css    — Reset de CSS
├── style.css    — Estilos con Flexbox
└── img/         — Imágenes del proyecto
```

---

## Resumen

En esta sesión hemos practicado y consolidado:

- ✅ Maquetación completa de una landing page con **HTML5 semántico**
- ✅ Uso de **Flexbox** para estructurar todos los bloques del layout
- ✅ `flex-grow` para que los items ocupen el espacio disponible de forma proporcional
- ✅ `flex-basis` como tamaño inicial de los flex items (alternativa flexible a `width`)
- ✅ `flex-shrink` para controlar cómo se encogen los items cuando falta espacio
- ✅ La propiedad shorthand `flex` que combina `flex-grow`, `flex-shrink` y `flex-basis`
- ✅ La pseudo-clase `:hover` para añadir interactividad visual

**Lo más importante:**

> [!IMPORTANT]
>
> - Usa `flex-basis` en lugar de `width` fija cuando quieras que los elementos sean flexibles
> - `flex-grow: 1` distribuye el espacio libre de forma equitativa entre los items
> - `flex: 1` es la forma abreviada más habitual: crece, se encoge y empieza desde 0
> - `:hover` requiere `cursor: pointer` en el elemento para indicar al usuario que es interactivo

## Recursos Adicionales

- [MDN - flex-grow](https://developer.mozilla.org/es/docs/Web/CSS/flex-grow)
- [MDN - flex-shrink](https://developer.mozilla.org/es/docs/Web/CSS/flex-shrink)
- [MDN - flex-basis](https://developer.mozilla.org/es/docs/Web/CSS/flex-basis)
- [MDN - flex (shorthand)](https://developer.mozilla.org/es/docs/Web/CSS/flex)
- [MDN - :hover](https://developer.mozilla.org/es/docs/Web/CSS/:hover)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Josh Comeau - An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/#es) - Juego para practicar Flexbox
