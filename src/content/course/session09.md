---
title: "Sesión 09 - Actividad de Maquetación con Flexbox"
section: "CSS"
order: 9
description: "Práctica de maquetación: flex-grow, flex-basis, flex-shrink y :hover"
---

# Sesión 09 - Actividad de Maquetación con Flexbox

**Fecha:** 3 de Marzo de 2026

## Contenidos de la Sesión

Esta sesión se dedicó a una **actividad práctica de maquetación** para consolidar HTML5 semántico, CSS Box Model y CSS Flexbox.

### 1. Repaso de Flexbox

| Propiedad | Descripción |
| --- | --- |
| `display: flex` | Activa Flexbox en el contenedor |
| `flex-direction` | Dirección del eje principal (`row`, `column`) |
| `flex-wrap` | Permite envolver items a la siguiente línea |
| `justify-content` | Alineación en el eje principal |
| `align-items` | Alineación en el eje secundario |
| `align-content` | Alineación de líneas (con `flex-wrap`) |
| `gap` | Espacio entre flex items |
| `order` | Cambia el orden visual |
| `align-self` | Sobreescribe `align-items` para un item |

### 2. `flex-grow` — Crecer para ocupar espacio

```css
.contenedor { display: flex; }

.item-a { flex-grow: 1; } /* ocupa 1 parte del espacio libre */
.item-b { flex-grow: 2; } /* ocupa el doble que item-a */
```

> Si todos los items tienen `flex-grow: 1`, el espacio libre se reparte equitativamente.

```css
.ponente { flex-grow: 1; }
```

### 3. `flex-basis` — Tamaño base

Define el tamaño inicial antes de distribuir el espacio libre.

```css
.item { flex-basis: 200px; } /* empieza con 200px */
.item-auto { flex-basis: auto; } /* usa el tamaño de contenido (defecto) */
```

```css
.ponente {
  flex-basis: 200px; /* tamaño base */
  flex-grow: 1;      /* puede crecer */
}
```

> **Nota:** En layouts flexibles, usa `flex-basis` en lugar de `width` fija para tarjetas y columnas.

### 4. `flex-shrink` — Encoger cuando no hay espacio

```css
.item-fijo { flex-shrink: 0; flex-basis: 300px; } /* no se encoge */
.item-flexible { flex-shrink: 1; } /* se encoge (defecto) */
```

### 5. La propiedad shorthand `flex`

```css
.item {
  flex: 1 1 200px;
  /* flex: flex-grow flex-shrink flex-basis */
}
```

Valores habituales:

```css
flex: 1;    /* flex: 1 1 0% — crece, se encoge, empieza desde 0 */
flex: auto; /* flex: 1 1 auto */
flex: none; /* flex: 0 0 auto — no crece, no se encoge */
```

### 6. Pseudo-clase `:hover`

```css
button {
  background-color: rgb(71, 71, 165);
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: rgb(50, 50, 130);
}
```

### 7. Estructura de la Actividad: Landing Page

#### Header

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

#### Hero Section — Dos columnas

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

#### Sección de Ponentes — Cards flexibles

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

#### Footer — Tres columnas

```css
.columns-3 {
  display: flex;
  justify-content: space-between;
  gap: 2em;
}

.column { flex: 1; }
```

### 8. Consejos de Maquetación

- ✅ Usa `flex-basis` en lugar de `width` fija para layouts flexibles
- ✅ Combina `flex-basis` + `flex-grow` para tarjetas adaptables
- ✅ Usa `gap` en lugar de `margin` en flex items
- ✅ Añade `transition` para efectos `:hover` suaves
- ✅ Usa `flex-wrap: wrap` para que las cards pasen a la siguiente línea en móviles
