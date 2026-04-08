# Sesión 12 - CSS Grid Declarativo: `grid-template-areas`

**Fecha:** 11 de Marzo de 2026

## Contenidos de la Sesión

En esta sesión se ha continuado con **CSS Grid Layout**, complementando la parte imperativa de la sesión anterior con el enfoque **declarativo**. En lugar de posicionar cada elemento con números de línea, se nombran las áreas de la grid con `grid-template-areas` y luego se asigna cada elemento a su área con `grid-area`.

El ejemplo comentado en clase se encuentra en la carpeta [`grid-example-continuacion/`](./grid-example-continuacion/), concretamente en los archivos [`declarativa.html`](./grid-example-continuacion/declarativa.html) y [`style3.css`](./grid-example-continuacion/style3.css).

---

### 1. `grid-template-areas` — Definir el layout con nombres

`grid-template-areas` permite describir visualmente el layout de una página asignando **nombres de área** a las celdas de la grid. Cada cadena de texto entre comillas representa una **fila**, y cada palabra dentro de la cadena representa una **columna**.

```css
body {
  display: grid;
  grid-template-areas:
    "a a a a a a a"
    "b b b b b b c"
    "d d d d d d d";
  grid-template-rows: 100px 1fr 60px;
}
```

En el ejemplo anterior:
- La primera fila tiene 7 columnas y todas pertenecen al área `a` (el `header` ocupa toda la anchura).
- La segunda fila tiene 6 columnas para el área `b` (`main`) y 1 columna para el área `c` (`aside`).
- La tercera fila tiene 7 columnas y todas pertenecen al área `d` (el `footer` ocupa toda la anchura).

> [!IMPORTANT]
> Cada área debe formar un **rectángulo** (no puede tener forma de L ni de T). Si se intenta definir un área con forma irregular, la declaración no es válida.

> [!TIP]
> Usar un punto (`.`) como nombre de área deja esa celda **vacía** sin asignarla a ningún elemento.

---

### 2. `grid-area` — Asignar un elemento a un área con nombre

Una vez definidas las áreas con `grid-template-areas`, se usa `grid-area` en cada elemento con el **nombre del área** al que debe pertenecer.

```css
header {
  grid-area: a;
}

main {
  grid-area: b;
}

aside {
  grid-area: c;
}

footer {
  grid-area: d;
}
```

> [!NOTE]
> Este uso de `grid-area` (con el nombre del área) es diferente al uso de `grid-area` con 4 valores numéricos visto en la sesión anterior (`grid-area: row-start / col-start / row-end / col-end`).

---

### 3. Diferencia entre Grid imperativo y declarativo

| Enfoque | Cómo se posicionan los elementos | Cuándo usarlo |
| ------- | -------------------------------- | ------------- |
| **Imperativo** (sesión 11) | Con números de línea: `grid-column: 1 / -1` | Layouts complejos con posiciones exactas |
| **Declarativo** (sesión 12) | Con nombres de área: `grid-area: header` | Layouts de página clásicos, más legibles |

El enfoque declarativo resulta especialmente útil para el **layout principal de una página** (header, main, aside, footer) porque el código refleja visualmente la estructura final.

---

### 4. Ejemplo completo: layout de página declarativo

El archivo [`declarativa.html`](./grid-example-continuacion/declarativa.html) con [`style3.css`](./grid-example-continuacion/style3.css) muestra el layout clásico de página construido de forma declarativa:

**HTML:**
```html
<body>
  <header>...</header>
  <main>...</main>
  <aside>...</aside>
  <footer>...</footer>
</body>
```

**CSS:**
```css
body {
  height: 100vh;
  display: grid;
  grid-template-areas:
    "a a a a a a a"
    "b b b b b b c"
    "d d d d d d d";
  grid-template-rows: 100px 1fr 60px;
}

header { grid-area: a; }
main   { grid-area: b; }
aside  { grid-area: c; }
footer { grid-area: d; }
```

**Resultado visual:**

```
┌─────────────────────────────────────┐  ← header (área "a", full width)
├──────────────────────────┬──────────┤
│       main (área "b")    │  aside   │  ← fila central (1fr)
│                          │ (área "c")│
├──────────────────────────┴──────────┤
│       footer (área "d", full width) │  ← footer
└─────────────────────────────────────┘
```

---

### 5. Diseño responsivo con `grid-template-areas` y `@media`

Una de las ventajas del enfoque declarativo es que es muy sencillo **redefinir el layout** en diferentes tamaños de pantalla, simplemente reescribiendo `grid-template-areas` dentro de una media query:

```css
/* Layout para pantallas grandes (por defecto) */
body {
  display: grid;
  grid-template-areas:
    "a a a a"
    "b b b c"
    "d d d d";
}

/* Layout para pantallas pequeñas (mobile) */
@media (width < 600px) {
  body {
    grid-template-areas:
      "a a a a"
      "b b b b"
      "c c c c"
      "d d d d";
  }
}
```

En pantallas pequeñas, `aside` pasa a ocupar su propia fila en lugar de compartirla con `main`.

> [!TIP]
> Con el enfoque declarativo, el CSS de las media queries sólo necesita modificar `grid-template-areas` (y, si fuera necesario, `grid-template-rows`). Los selectores de cada elemento (`grid-area: a`, etc.) **no cambian**.

---

### 6. Estructura de los archivos de la sesión

```
grid-example-continuacion/
├── index.html        — Ejemplo de grid imperativo (continuación sesión 11)
├── style.css         — Estilos del ejemplo imperativo
├── pagina2.html      — Layout de página completa (sesión 11)
├── style2.css        — Estilos del layout de página (sesión 11)
├── declarativa.html  — Layout de página con grid-template-areas ← NUEVO
├── style3.css        — Estilos del layout declarativo ← NUEVO
└── reset.css         — Reset CSS compartido
```

---

### 7. Actividad: maquetado con Grid declarativo

Una vez vista la teoría, se ha propuesto la siguiente actividad práctica:

Realiza el maquetado de la siguiente página usando `grid-template-areas`:

![actividad maquetado](actividad-maquetado.png)

**Indicaciones:**
- Usa `grid-template-areas` para definir el layout.
- Asigna cada elemento semántico (`header`, `nav`, `main`, `aside`, `footer`) a su área correspondiente.
- Adapta el layout a pantallas pequeñas con una media query.

---

## Resumen

En esta sesión hemos aprendido:

- ✅ `grid-template-areas` para definir el layout de forma visual y declarativa
- ✅ `grid-area` con nombre de área para asignar cada elemento a su zona en la grid
- ✅ La diferencia entre el enfoque imperativo (números de línea) y el declarativo (nombres de área)
- ✅ Cómo crear layouts responsivos cambiando únicamente `grid-template-areas` en una media query

**Lo más importante:**

> [!IMPORTANT]
> - `grid-template-areas` describe el layout visualmente: cada cadena es una fila, cada palabra es una columna
> - Cada área debe ser rectangular; el punto `.` sirve para dejar celdas vacías
> - `grid-area: nombre` asigna el elemento al área con ese nombre (diferente al shorthand de 4 valores numéricos)
> - Para hacer el layout responsivo basta con redefinir `grid-template-areas` en la media query

## Recursos Adicionales

- [MDN - grid-template-areas](https://developer.mozilla.org/es/docs/Web/CSS/grid-template-areas)
- [MDN - grid-area](https://developer.mozilla.org/es/docs/Web/CSS/grid-area)
- [MDN - CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout)
- [CSS Tricks - A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Josh Comeau - An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)
- [Grid Garden](https://cssgridgarden.com/#es) — Juego para practicar CSS Grid
- [layoutit](https://grid.layoutit.com/) — Herramienta visual para diseñar grids
