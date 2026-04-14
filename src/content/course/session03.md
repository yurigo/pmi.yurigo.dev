---
title: "Sesión 03 - HTML5 Semántico"
section: "HTML"
order: 3
description: "Elementos semánticos, atributos id/class, block vs inline"
duration: 2
objectives:
  - "Distinguir entre elementos de bloque e inline y cuándo usar cada uno"
  - "Utilizar etiquetas semánticas de HTML5: header, main, section, article, footer, nav, aside"
  - "Aplicar atributos id y class para identificar y agrupar elementos"
  - "Comprender la importancia del HTML semántico para accesibilidad y SEO"
exercises:
  - title: "Maqueta semántica"
    description: "Reconstruye la estructura de una página web real (por ejemplo la de tu escuela) usando únicamente etiquetas semánticas HTML5 y sin nada de CSS."
  - title: "Refactorización"
    description: "Toma una página HTML que use solo <div> y <span> y sustitúyela por etiquetas semánticas apropiadas."
checklist:
  - "Sé diferenciar block e inline y cómo afecta al layout"
  - "Uso header, main, section, article, footer, nav y aside correctamente"
  - "Entiendo para qué sirven los atributos id y class"
  - "Comprendo por qué el HTML semántico es importante para accesibilidad y SEO"
commonErrors:
  - "Usar <div> para todo en lugar de elegir la etiqueta semántica correcta"
  - "Poner elementos de bloque (como <p>) dentro de elementos inline (como <span>)"
  - "Asignar el mismo id a varios elementos (los ids deben ser únicos)"
  - "Confundir <section> y <article>: <article> es contenido independiente, <section> agrupa temáticamente"
---

# Sesión 03 - HTML5 Semántico

<!-- **Fecha:** 10/02/2026 -->

## Contenidos de la Sesión

### 1. Repaso: Elementos Block vs Inline

Los elementos HTML se pueden clasificar en dos categorías principales según su comportamiento de visualización: elementos de bloque y elementos en línea.

#### Elementos de Bloque (Block)

Los elementos de bloque ocupan todo el ancho disponible y siempre comienzan en una nueva línea.

**Características:**

- Ocupan todo el ancho disponible del contenedor padre
- Siempre comienzan en una nueva línea
- Pueden contener otros elementos de bloque y elementos en línea
- Se pueden aplicar márgenes verticales y horizontales
- Tienen altura y anchura configurables

**Ejemplos comunes:**

- `<div>`: Contenedor genérico de bloque
- `<p>`: Párrafos de texto
- `<h1>` a `<h6>`: Encabezados
- `<ul>`, `<ol>`: Listas
- `<table>`: Tablas
- `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`: Elementos semánticos HTML5

**Ejemplo:**

```html
<div>
  <p>Este es un párrafo de bloque.</p>
  <p>Este es otro párrafo de bloque.</p>
</div>
```

Cada `<p>` ocupará todo el ancho disponible y se mostrará en una línea separada.

#### Elementos en Línea (Inline)

Los elementos en línea ocupan solo el espacio necesario para su contenido y no fuerzan saltos de línea.

**Características:**

- Ocupan solo el espacio necesario para su contenido
- No comienzan en una nueva línea
- Se colocan uno al lado del otro en la misma línea
- Solo pueden contener otros elementos en línea y texto
- No aceptan propiedades de altura y anchura (width/height)
- Los márgenes verticales no tienen efecto

**Ejemplos comunes:**

- `<span>`: Contenedor genérico en línea
- `<a>`: Enlaces
- `<strong>`, `<em>`: Énfasis en texto
- `<img>`: Imágenes (técnicamente inline-block)

**Ejemplo:**

```html
<p>Este es un <span>texto en línea</span> dentro de un párrafo.</p>
```

El elemento `<span>` se muestra en la misma línea que el resto del texto.

**Diferencias clave:**

| Característica      | Block               | Inline              |
| ------------------- | ------------------- | ------------------- |
| Ancho               | 100% del contenedor | Solo el contenido   |
| Nueva línea         | Sí                  | No                  |
| Puede contener      | Block e Inline      | Solo Inline y texto |
| Width/Height        | Sí                  | No                  |
| Márgenes verticales | Sí                  | No                  |

### 2. Atributos Generales en HTML

Los atributos generales son atributos que se pueden aplicar a prácticamente cualquier elemento HTML. Son fundamentales para identificar, clasificar y proporcionar información adicional sobre los elementos.

#### Atributo `id`

El atributo `id` proporciona un identificador único para un elemento dentro del documento HTML.

**Características:**

- Debe ser único en toda la página (no puede haber dos elementos con el mismo `id`)
- Se utiliza para identificar elementos específicos
- Permite la navegación mediante anclas (ej: `<a href="#seccion1">`)
- Se usa en JavaScript para seleccionar elementos específicos
- Se usa en CSS para aplicar estilos a un elemento concreto

**Sintaxis:**

```html
<div id="nombreUnico">Contenido</div>
```

**Ejemplo:**

```html
<section id="datospersonales">
  <h2>Datos Personales</h2>
  <p>Contenido de la sección</p>
</section>

<a href="#datospersonales">Ir a Datos Personales</a>
```

**Buenas prácticas:**

- Usar nombres descriptivos en camelCase o kebab-case
- No usar espacios ni caracteres especiales
- No empezar con números
- Mantener la unicidad del id en toda la página

#### Atributo `class`

El atributo `class` permite asignar una o más clases a un elemento para aplicar estilos CSS o agrupar elementos relacionados.

**Características:**

- Un elemento puede tener múltiples clases separadas por espacios
- Varios elementos pueden compartir la misma clase
- Se utiliza principalmente para aplicar estilos CSS
- Se usa en JavaScript para seleccionar grupos de elementos
- Es la forma más común de aplicar estilos reutilizables

**Sintaxis:**

```html
<div class="clase1 clase2 clase3">Contenido</div>
```

**Ejemplo:**

```html
<div class="seccion importante">
  <h2>Título importante</h2>
  <p class="texto-destacado">Este texto está destacado</p>
</div>

<div class="seccion">
  <h2>Otra sección</h2>
  <p class="texto-destacado">Este texto también está destacado</p>
</div>
```

**CSS asociado:**

```css
.seccion {
  background-color: rebeccapurple;
  padding: 1em;
}

.importante {
  font-weight: bold;
  border: 2px solid red;
}

.texto-destacado {
  color: crimson;
}
```

**Buenas prácticas:**

- Usar nombres descriptivos que indiquen el propósito o función
- Preferir kebab-case para nombres de clases (ej: `texto-destacado`)
- Reutilizar clases para mantener consistencia
- Evitar nombres genéricos como `box` o `contenedor1`

#### Atributo `title`

El atributo `title` proporciona información adicional sobre un elemento que se muestra como tooltip cuando el usuario pasa el cursor sobre él.

**Características:**

- Aparece como un pequeño cuadro emergente (tooltip) al pasar el ratón
- Proporciona información contextual o ayuda al usuario
- Mejora la accesibilidad y experiencia del usuario
- Se puede aplicar a prácticamente cualquier elemento HTML
- Es especialmente útil en enlaces, imágenes y abreviaturas

**Sintaxis:**

```html
<elemento title="Texto descriptivo">Contenido</elemento>
```

**Ejemplo:**

```html
<a href="#idiomas" title="Haz clic para ver los idiomas que domino">
  Idiomas
</a>

<img
  src="./img/psyduck.png"
  alt="Psyduck"
  title="Psyduck es un Pokémon de tipo Agua"
  height="40px"
/>

<abbr title="HyperText Markup Language">HTML</abbr>
```

**Casos de uso comunes:**

- **Enlaces**: Proporcionar información sobre el destino del enlace
- **Imágenes**: Añadir descripción adicional más allá del alt
- **Abreviaturas**: Mostrar el significado completo de siglas
- **Botones/Iconos**: Explicar la función del elemento
- **Campos de formulario**: Proporcionar ayuda sobre qué introducir

**Diferencia entre `alt` y `title` en imágenes:**

- **`alt`**: Texto alternativo que se muestra si la imagen no carga. Esencial para accesibilidad.
- **`title`**: Información adicional que aparece al pasar el ratón. Opcional y complementario.

### 3. Etiquetas Semánticas HTML5

HTML5 introduce elementos semánticos que describen el significado y la estructura del contenido de manera más clara que los genéricos `<div>` y `<span>`. Estos elementos mejoran la accesibilidad, el SEO y la mantenibilidad del código.

**¿Por qué usar etiquetas semánticas?**

- **Accesibilidad**: Los lectores de pantalla pueden navegar mejor por la página
- **SEO**: Los motores de búsqueda entienden mejor la estructura del contenido
- **Legibilidad del código**: Hace el HTML más fácil de leer y mantener
- **Estructura clara**: Define las diferentes partes de una página web de manera significativa

#### `<header>`

El elemento `<header>` representa un contenedor para contenido introductorio o de navegación. Puede contener encabezados, logos, menús de navegación, formularios de búsqueda, etc.

**Características:**

- Puede aparecer varias veces en un documento
- Puede ser el header de la página completa, o de una sección o artículo específico
- Generalmente contiene el título principal (`<h1>`-`<h6>`) de su sección
- Suele incluir elementos de navegación

**Ejemplo:**

```html
<header>
  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#servicios">Servicios</a>
    <a href="#contacto">Contacto</a>
  </nav>
  <h1>Mi Sitio Web</h1>
</header>
```

**También puede usarse dentro de secciones:**

```html
<section>
  <header>
    <h2>Datos Personales</h2>
    <p>Información de contacto</p>
  </header>
  <p>Contenido de la sección...</p>
</section>
```

#### `<main>`

El elemento `<main>` representa el contenido principal y único del documento. Debe contener el contenido central de la página, excluyendo cabeceras, pies de página, barras laterales y navegación repetida.

**Características:**

- Solo puede haber **un único** `<main>` por página (sin duplicar)
- No debe ser descendiente de `<article>`, `<aside>`, `<footer>`, `<header>` o `<nav>`
- Contiene el contenido que es único para esa página
- Mejora significativamente la accesibilidad

**Ejemplo:**

```html
<body>
  <header>
    <!-- Cabecera del sitio -->
  </header>

  <main>
    <h1>Título Principal</h1>
    <section>
      <h2>Sección 1</h2>
      <p>Contenido principal...</p>
    </section>
    <section>
      <h2>Sección 2</h2>
      <p>Más contenido...</p>
    </section>
  </main>

  <footer>
    <!-- Pie de página -->
  </footer>
</body>
```

**Diferencia con `<div>`:**

- `<main>` tiene significado semántico: indica el contenido principal
- `<div>` es genérico sin significado semántico especial

#### `<footer>`

El elemento `<footer>` representa el pie de página de su sección o documento más cercano. Típicamente contiene información sobre el autor, copyright, enlaces relacionados, o información de contacto.

**Características:**

- Puede aparecer varias veces en un documento
- Puede ser el footer de toda la página o de una sección específica
- Generalmente contiene información secundaria o de cierre
- No necesariamente debe estar al final visual de la página

**Ejemplo (footer de página):**

```html
<footer>
  <p>&copy; 2026 Mi Empresa. Todos los derechos reservados.</p>
  <nav>
    <a href="#privacidad">Política de Privacidad</a>
    <a href="#terminos">Términos de Uso</a>
  </nav>
</footer>
```

**Ejemplo (footer de sección):**

```html
<section>
  <header>
    <h2>Artículo Principal</h2>
  </header>
  <p>Contenido del artículo...</p>
  <footer>
    <p>Publicado por Juan Pérez el 10/02/2026</p>
  </footer>
</section>
```

#### `<nav>`

El elemento `<nav>` representa una sección de navegación con enlaces a otras páginas o partes dentro de la página actual.

**Características:**

- Se usa para bloques principales de navegación
- No todos los grupos de enlaces deben estar en `<nav>`, solo las navegaciones principales
- Puede contener listas de enlaces (`<ul>` con `<li>`)
- Mejora la accesibilidad permitiendo a los usuarios saltar directamente a la navegación

**Ejemplo:**

```html
<nav>
  <a href="#datospersonales">Datos personales</a>
  <a href="#formacion">Formación</a>
  <a href="#experiencia">Experiencia</a>
  <a href="#contacto">Contacto</a>
</nav>
```

**Ejemplo con lista:**

```html
<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/servicios">Servicios</a></li>
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/contacto">Contacto</a></li>
  </ul>
</nav>
```

**Cuándo NO usar `<nav>`:**

- Para enlaces en el pie de página secundarios
- Para enlaces de redes sociales (a menos que sean navegación principal)
- Para enlaces dentro de artículos

#### `<aside>`

El elemento `<aside>` representa contenido relacionado indirectamente con el contenido principal, típicamente presentado como una barra lateral.

**Características:**

- Contiene contenido tangencialmente relacionado
- Puede usarse para barras laterales, cajas de información, publicidad, widgets
- El contenido debería tener sentido por sí solo si se remueve
- Frecuentemente se posiciona al lado del contenido principal

**Ejemplo:**

```html
<aside>
  <h3>Información Adicional</h3>
  <p>Este es contenido complementario que proporciona contexto adicional.</p>
</aside>
```

**Ejemplo (anuncio o widget):**

```html
<aside>
  <div>Compro moto</div>
  <div>Contacta para más información</div>
</aside>
```

**Casos de uso comunes:**

- Barras laterales con información complementaria
- Cuadros de "Sabías que..."
- Publicidad relacionada
- Widgets de redes sociales
- Glosarios o definiciones

#### `<section>`

El elemento `<section>` representa una sección temática del contenido, típicamente con un encabezado propio.

**Características:**

- Agrupa contenido relacionado temáticamente
- Generalmente tiene un encabezado (`<h1>`-`<h6>`)
- Cada sección debe tener un propósito o tema claro
- Se puede anidar dentro de otras secciones

**Ejemplo:**

```html
<section id="datospersonales">
  <header>
    <h2>Datos Personales</h2>
  </header>
  <p>Nombre: Alice Doe</p>
  <p>Email: alice@example.com</p>
</section>

<section id="formacion">
  <h2>Formación</h2>
  <p>Ingeniería Informática - Universidad XYZ</p>
</section>
```

**Cuándo usar `<section>`:**

- Para dividir el contenido en partes temáticas distintas
- Cuando cada parte tiene un encabezado lógico
- Para capítulos, pestañas, o segmentos numerados de contenido

**Diferencia con `<div>`:**

- `<section>` tiene significado semántico: agrupa contenido relacionado
- `<div>` es genérico solo para agrupar con propósitos de estilo

#### `<article>`

El elemento `<article>` representa una composición independiente y auto-contenida que podría distribuirse o reutilizarse de forma independiente.

**Características:**

- El contenido tiene sentido por sí solo
- Puede ser sindicado, compartido o reutilizado independientemente
- Típicamente tiene su propio encabezado
- Puede contener `<header>`, `<footer>`, y múltiples `<section>`

**Ejemplo:**

```html
<article>
  <header>
    <h2>Título del Artículo</h2>
    <p>Por Juan Pérez - 10/02/2026</p>
  </header>
  <p>Contenido del artículo que tiene sentido por sí solo...</p>
  <footer>
    <p>Etiquetas: HTML5, Desarrollo Web</p>
  </footer>
</article>
```

**Casos de uso comunes:**

- Posts de blog
- Artículos de noticias
- Comentarios de usuarios
- Tarjetas de productos
- Entradas de foro

**Diferencia con `<section>`:**

- `<article>` es independiente y auto-contenido
- `<section>` es parte de algo más grande y agrupa contenido relacionado

**Combinación de `<article>` y `<section>`:**

```html
<article>
  <h1>Guía Completa de HTML5</h1>
  <section>
    <h2>Introducción</h2>
    <p>Contenido de introducción...</p>
  </section>
  <section>
    <h2>Elementos Semánticos</h2>
    <p>Contenido sobre elementos semánticos...</p>
  </section>
</article>
```

### 4. Estructura Semántica de una Página HTML5

Una página web moderna con HTML5 semántico debe estructurarse de manera clara y significativa. Aquí está la estructura típica recomendada:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título de la Página</title>
  </head>
  <body>
    <header>
      <nav>
        <!-- Enlaces de navegación principal -->
      </nav>
      <h1>Título Principal del Sitio</h1>
    </header>

    <main>
      <section>
        <header>
          <h2>Título de Sección</h2>
        </header>
        <article>
          <!-- Contenido independiente -->
        </article>
      </section>

      <section>
        <h2>Otra Sección</h2>
        <p>Contenido...</p>
      </section>
    </main>

    <aside>
      <!-- Contenido complementario o barras laterales -->
    </aside>

    <footer>
      <!-- Información del pie de página -->
      <p>&copy; 2026 Mi Sitio Web</p>
    </footer>
  </body>
</html>
```

**Beneficios de esta estructura:**

- **Clara jerarquía**: Fácil de entender el flujo del contenido
- **Accesible**: Los lectores de pantalla pueden navegar eficientemente
- **Mantenible**: Código más limpio y fácil de actualizar
- **SEO optimizado**: Los motores de búsqueda entienden mejor el contenido
- **Profesional**: Sigue las mejores prácticas de desarrollo web moderno

## Ejemplo

### HTML5 - Curriculum Vitae Semántico

<a href="https://github.com/yurigo/PMI-2526/tree/master/sessions/session03/examples/html5" target="_blank">Aquí</a> encontrarás un ejemplo práctico que implementa todas las etiquetas semánticas HTML5 aprendidas en esta sesión junto con los atributos generales.

<iframe src="/examples/session03/index.html" title="Ejemplo HTML5 - CV Semántico" class="course-iframe"></iframe>

**Archivos del ejemplo:**

- `index.html`: CV completo con estructura HTML5 semántica y estilos CSS
- `proyecto1.html`: Página secundaria con navegación de retorno
- `hola/mundo.html`: Archivo auxiliar demostrativo
- `img/`: Carpeta con recursos multimedia (imágenes, videos, audio)

**Características implementadas:**

- **Estructura HTML5 completa**: `<header>`, `<main>`, `<footer>`, `<nav>`, `<aside>`, `<section>`
- **Atributos generales**:
  - `id`: Para identificar secciones únicas y permitir navegación con anclas
  - `class`: Para aplicar estilos CSS reutilizables (`.seccion`, `.importante`)
  - `title`: Para proporcionar información adicional en enlaces e imágenes
- **Navegación semántica**: Menú de navegación con enlaces a secciones internas usando anclas
- **Múltiples secciones**: Datos personales, formación, experiencia, idiomas, skills, proyectos
- **Elementos block e inline**: Uso de `<div>` (block) y `<span>` (inline) con clases
- **CSS integrado**: Estilos que demuestran la diferencia entre elementos block e inline
- **Footer con redes sociales**: Enlaces externos con SVG icons y `target="_blank"`
- **Aside flotante**: Barra lateral con contenido complementario
- **Tablas e imágenes**: Reutilización de conceptos de Sesión 02

**Ejemplo de uso de tags semánticos:**

```html
<header>
  <nav>
    <a href="#datospersonales">Datos personales</a>
    <a title="haz click para ver los idiomas" href="#idiomas">Idiomas</a>
  </nav>
  <h1>Alice Doe</h1>
</header>

<main>
  <section id="datospersonales" class="importante">
    <header>
      <h2>Datos personales</h2>
    </header>
    <p>Alice Doe Doe</p>
    <footer>info extra</footer>
  </section>

  <section id="formacion" class="seccion">
    <h2>Formación</h2>
    <p>Contenido...</p>
  </section>
</main>

<aside>
  <div>Contenido complementario</div>
</aside>

<footer>
  <a href="https://instagram.com/usuario" target="_blank">
    <!-- SVG icon -->
  </a>
</footer>
```

**Cómo visualizar el ejemplo:**

1. Abre VS Code y navega al directorio del proyecto
2. Abre el archivo `sessions/session03/examples/html5/index.html`
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"
5. La página se abrirá en tu navegador predeterminado
6. Prueba la navegación por anclas y observa cómo funcionan los elementos semánticos

**Comparación con Sesiones anteriores:**

Sesión 03 introduce el concepto fundamental de **HTML semántico**, reemplazando los genéricos `<div>` por elementos con significado:

- En lugar de `<div id="header">`, usamos `<header>`
- En lugar de `<div id="nav">`, usamos `<nav>`
- En lugar de `<div id="main">`, usamos `<main>`
- En lugar de `<div class="section">`, usamos `<section>`
- En lugar de `<div id="footer">`, usamos `<footer>`

Esto hace el código más legible, accesible y profesional.

## Recursos Adicionales

- [MDN Web Docs - Elementos HTML5](https://developer.mozilla.org/es/docs/Web/HTML/Element)
- [MDN Web Docs - Semántica HTML](https://developer.mozilla.org/es/docs/Glossary/Semantics)
- [HTML5 Doctor - Elementos Semánticos](http://html5doctor.com/)
- [W3C - Secciones HTML5](https://www.w3.org/TR/html5/sections.html)
- [MDN Web Docs - Atributos Globales](https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes)
