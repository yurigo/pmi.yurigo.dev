---
title: "Sesión 03 - HTML5 Semántico"
section: "HTML"
order: 3
description: "Elementos semánticos, atributos id/class, block vs inline"
---

# Sesión 03 - HTML5 Semántico

**Fecha:** 10/02/2026

## Contenidos de la Sesión

### 1. Repaso: Elementos Block vs Inline

#### Elementos de Bloque (Block)

**Características:**
- Ocupan todo el ancho disponible del contenedor padre
- Siempre comienzan en una nueva línea
- Pueden contener otros elementos de bloque y elementos en línea
- Tienen altura y anchura configurables

**Ejemplos comunes:**
- `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<ol>`, `<table>`
- `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`

#### Elementos en Línea (Inline)

**Características:**
- Ocupan solo el espacio necesario para su contenido
- No comienzan en una nueva línea
- Solo pueden contener otros elementos en línea y texto
- No aceptan propiedades de altura y anchura

**Ejemplos comunes:**
- `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`

**Diferencias clave:**

| Característica | Block | Inline |
| --- | --- | --- |
| Ancho | 100% del contenedor | Solo el contenido |
| Nueva línea | Sí | No |
| Puede contener | Block e Inline | Solo Inline y texto |
| Width/Height | Sí | No |
| Márgenes verticales | Sí | No |

### 2. Atributos Generales en HTML

#### Atributo `id`

Proporciona un identificador único para un elemento.

```html
<section id="datospersonales">
  <h2>Datos Personales</h2>
</section>

<a href="#datospersonales">Ir a Datos Personales</a>
```

**Buenas prácticas:**
- Debe ser único en toda la página
- Usar nombres descriptivos en camelCase o kebab-case
- No empezar con números

#### Atributo `class`

Permite asignar una o más clases a un elemento.

```html
<div class="seccion importante">
  <p class="texto-destacado">Este texto está destacado</p>
</div>
```

```css
.seccion {
  background-color: rebeccapurple;
  padding: 1em;
}
.importante {
  font-weight: bold;
}
.texto-destacado {
  color: crimson;
}
```

#### Atributo `title`

Texto que aparece como tooltip al pasar el cursor sobre el elemento.

```html
<a href="#idiomas" title="Ver idiomas que domino">Idiomas</a>
<abbr title="HyperText Markup Language">HTML</abbr>
```

### 3. Etiquetas Semánticas HTML5

HTML5 introduce elementos semánticos que describen el significado y la estructura del contenido.

**¿Por qué usar etiquetas semánticas?**
- Mejora la accesibilidad (lectores de pantalla)
- Mejora el SEO
- Hace el código más legible y mantenible

#### `<header>`

Contenedor para contenido introductorio o de navegación.

```html
<header>
  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#contacto">Contacto</a>
  </nav>
  <h1>Mi Sitio Web</h1>
</header>
```

#### `<main>`

Contenido principal del documento. Solo debe haber uno por página.

```html
<main>
  <h1>Contenido Principal</h1>
  <p>El contenido único de esta página...</p>
</main>
```

#### `<nav>`

Sección de navegación principal.

```html
<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
```

#### `<section>`

Sección temática del contenido con su propio encabezado.

```html
<section id="experiencia">
  <h2>Experiencia Laboral</h2>
  <p>Mi experiencia profesional...</p>
</section>
```

#### `<article>`

Contenido independiente y auto-contenido.

```html
<article>
  <h2>Título del Artículo</h2>
  <p>Contenido completo del artículo...</p>
</article>
```

#### `<aside>`

Contenido relacionado pero secundario.

```html
<aside>
  <h3>Información Adicional</h3>
  <p>Contenido complementario...</p>
</aside>
```

#### `<footer>`

Pie de página del documento o de una sección.

```html
<footer>
  <p>&copy; 2026 Mi Nombre. Todos los derechos reservados.</p>
</footer>
```

### 4. Estructura Completa con Semántica HTML5

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi CV - Nombre Apellido</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="#datos">Datos</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#educacion">Educación</a>
      </nav>
      <h1>Mi Curriculum Vitae</h1>
    </header>

    <main>
      <section id="datos">
        <h2>Datos Personales</h2>
        <p>Información de contacto...</p>
      </section>

      <section id="experiencia">
        <h2>Experiencia Laboral</h2>
        <article>
          <h3>Empresa XYZ</h3>
          <p>Descripción del trabajo...</p>
        </article>
      </section>
    </main>

    <footer>
      <p>&copy; 2026 Mi Nombre</p>
    </footer>
  </body>
</html>
```
