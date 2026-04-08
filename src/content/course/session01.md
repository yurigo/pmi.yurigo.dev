---
title: "Sesión 01 - Introducción a Web"
section: "HTML"
order: 1
description: "Introducción a la asignatura, HTML básico y herramientas"
---

# Sesión 01 - Introducción a Web

<!-- **Fecha:** 03/02/2026 -->

## Contenidos de la Sesión

### 1. Introducción de la Asignatura

Programación de Medios Interactivos (PMI) es una asignatura enfocada en el desarrollo de aplicaciones web modernas. Durante este curso abordaremos los pilares fundamentales del desarrollo web:

**Objetivos principales:**

- Comprender los fundamentos de la programación web
- Dominar las tecnologías cliente (HTML, CSS, JavaScript)
- Aprender a crear interfaces interactivas y responsivas
- Introducción a frameworks y herramientas modernas
- Desarrollar proyectos prácticos que integren estos conocimientos

**Estructura del curso:**
El curso está organizado en sesiones progresivas que construyen sobre los conocimientos previos. Cada sesión incluye teoría, ejemplos prácticos y ejercicios para consolidar el aprendizaje. Se enfatiza el aprendizaje práctico mediante proyectos reales.

### 2. Visual Studio Code

**Visual Studio Code (VS Code)** es un editor de código fuente desarrollado por Microsoft que se ha convertido en la herramienta estándar para desarrollo web. Es ligero, rápido y altamente extensible mediante extensiones.

**Características principales:**

- **Interfaz intuitiva**: Fácil de usar para principiantes y poderosa para expertos
- **Extensiones**: Marketplace con miles de extensiones que añaden funcionalidades
- **Integración Git**: Gestión de control de versiones integrada
- **Terminal integrada**: Ejecutar comandos sin salir del editor
- **IntelliSense**: Autocompletado inteligente y sugerencias de código
- **Debugging**: Herramientas de depuración integradas
- **Temas y personalización**: Personalización completa del entorno

**Instalación básica:**

1. Descargar desde [code.visualstudio.com](https://code.visualstudio.com)
2. Instalar según el sistema operativo
3. Abrir e instalar extensiones recomendadas (Live Server, Prettier, etc.)
4. Configurar preferencias personales

### 3. Arquitectura Cliente-Servidor

La **arquitectura cliente-servidor** es el modelo fundamental de cómo funciona la web. Este modelo divide el sistema en dos componentes principales que se comunican entre sí.

**Componentes:**

**Cliente:**

- Es el navegador web (Chrome, Firefox, Safari, Edge, etc.)
- Reside en la máquina del usuario
- Solicita recursos (páginas, datos, archivos)
- Interpreta y renderiza HTML, CSS y JavaScript
- Es responsable de la interfaz de usuario

**Servidor:**

- Es una computadora con software especial siempre conectada a internet
- Aloja los archivos y aplicaciones web
- Escucha y responde a las solicitudes de los clientes
- Procesa datos, ejecuta lógica de negocio
- Gestiona bases de datos

**Flujo de comunicación:**

1. El usuario escribe una URL en el navegador o hace clic en un enlace
2. El cliente envía una **solicitud HTTP** al servidor
3. El servidor recibe, procesa y prepara la respuesta
4. El servidor envía una **respuesta HTTP** con el contenido solicitado
5. El navegador recibe el contenido y lo renderiza
6. El usuario ve la página en su pantalla

**Ventajas de esta arquitectura:**

- Escalabilidad: Un servidor puede atender a múltiples clientes
- Seguridad: Datos sensibles se mantienen en el servidor
- Centralización: Actualizaciones se hacen en un lugar
- Accesibilidad: Acceso desde cualquier dispositivo con navegador

### 4. Extensión Live Server

**Live Server** es una extensión de VS Code que proporciona un servidor web local con capacidad de recarga automática. Es una herramienta esencial para el desarrollo web front-end.

**¿Por qué usar Live Server?**

- **Recarga automática**: Los cambios en el código se reflejan instantáneamente en el navegador
- **Servidor local**: Emula un servidor web en tu máquina
- **Sin configuración**: Funciona "fuera de la caja" sin configuración compleja
- **Experiencia realista**: Simula un entorno web real durante el desarrollo
- **Aumenta productividad**: Reduce el tiempo de pruebas y depuración

**Instalación:**

1. Abre VS Code
2. Ve a la sección de Extensiones (Ctrl+Shift+X o Cmd+Shift+X)
3. Busca "Live Server"
4. Instala la extensión de Ritwick Dey

**Uso básico:**

1. Abre una carpeta con archivos HTML en VS Code
2. Haz clic derecho en un archivo `.html` → "Open with Live Server"
3. Se abre automáticamente en tu navegador en `http://localhost:5500`
4. Realiza cambios en tu código
5. Guarda el archivo (Ctrl+S) y los cambios aparecen automáticamente en el navegador

### 5. Introducción a HTML

**HTML (HyperText Markup Language)** es un lenguaje de marcado estándar utilizado para crear páginas web. No es un lenguaje de programación, sino un sistema de etiquetas que permite estructurar y presentar contenido en navegadores web.

HTML funciona mediante etiquetas que le indican al navegador cómo interpretar y mostrar el contenido. Estas etiquetas envuelven el contenido y proporcionan significado semántico, permitiendo que el navegador entienda la estructura del documento y los lectores de pantalla (para accesibilidad) comprendan la importancia de cada elemento.

**Importancia en desarrollo web:**

- Es la base fundamental de toda página web moderna
- Proporciona la estructura y el contenido semántico
- Trabaja en conjunto con CSS (para estilos visuales) y JavaScript (para interactividad)
- Es esencial para la accesibilidad web, permitiendo que personas con discapacidades puedan acceder al contenido
- Optimiza el SEO (posicionamiento en buscadores) mediante etiquetas semánticas apropiadas
- Es un estándar mantenido por el W3C (World Wide Web Consortium)

### 6. Estructura Básica de un Documento HTML

Todo documento HTML sigue una estructura estándar que es reconocida por todos los navegadores web. Esta estructura garantiza que el contenido se interprete correctamente.

**Estructura fundamental:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título de la Página</title>
  </head>
  <body>
    <!-- El contenido visible de la página va aquí -->
  </body>
</html>
```

**Jerarquía de elementos:**

- **`<!DOCTYPE html>`**: Declaración que le dice al navegador que es HTML5. DEBE ser la primera línea.
- **`<html>`**: Elemento raíz que contiene todo el documento. El atributo `lang` especifica el idioma.
- **`<head>`**: Sección de metadatos que NO se ve en la página. Incluye título, meta tags, enlaces a CSS, etc.
- **`<body>`**: Contiene todo el contenido visible de la página (texto, imágenes, enlaces, etc.)

**Elementos esenciales en `<head>`:**

- `<meta charset="UTF-8">`: Define la codificación de caracteres
- `<meta name="viewport">`: Hace la página responsiva en dispositivos móviles
- `<title>`: Título que aparece en la pestaña del navegador

### 7. Etiquetas Principales en HTML

#### Etiquetas de Estructura

- **`<!DOCTYPE html>`**: Declaración del tipo de documento. Debe ser la primera línea sin espacios. Le indica al navegador que es HTML5.
- **`<html>`**: Elemento raíz que envuelve todo el contenido. El atributo `lang` especifica el idioma del documento (ej: `lang="es"` para español).
- **`<head>`**: Contiene metadatos y configuración del documento. No es visible en la página. Incluye título, enlaces a estilos, scripts, meta tags, etc.
- **`<body>`**: Contiene todo el contenido visible de la página. Aquí van párrafos, imágenes, enlaces, botones, etc.

#### Etiquetas de Contenido

- **`<title>`**: Define el título del documento que aparece en la pestaña del navegador. Es importante para SEO y UX.

- **`<meta>`**: Proporciona metadatos sobre el documento. Ejemplos:
  - `<meta charset="UTF-8">` - Define la codificación
  - `<meta name="viewport" content="width=device-width">` - Hace el sitio responsivo
  - `<meta name="description" content="...">` - Descripción para buscadores
- **`<h1>` a `<h6>`**: Encabezados de diferentes niveles jerárquicos. `<h1>` es el más importante, `<h6>` el menos. Cada página debe tener normalmente un único `<h1>`. Son cruciales para accesibilidad y SEO.
  - `<h1>`: Encabezado principal de la página
  - `<h2>`: Secciones principales
  - `<h3>` a `<h6>`: Subsecciones progresivas
- **`<p>`**: Define párrafos de texto. Los navegadores añaden automáticamente espacios antes y después. Es el elemento más utilizado para contenido textual.
- **`<a>`**: Define hipervínculos (enlaces). El atributo `href` especifica la URL destino. Ejemplo: `<a href="https://ejemplo.com">Haz clic aquí</a>`. Los enlaces son fundamentales para la navegación web.

## Ejemplo

### Hello World - Curriculum Vitae

<iframe src="/examples/session01/index.html" title="Ejemplo Hello World - CV" class="course-iframe"></iframe>

<a href="https://github.com/yurigo/PMI-2526/tree/master/sessions/session01/examples/helloworld" target="_blank">Aquí</a> encontrarás un ejemplo práctico que implementa una página HTML básica de un currículum vitae (CV). Este ejemplo demuestra los conceptos fundamentales aprendidos en esta sesión.

**Archivos del ejemplo:**

- `index.html`: Página principal del CV con estructura HTML completa
- `hola/mundo.html`: Archivo de apoyo para mostrar el funcionamiento de la navegación entre páginas

**Características implementadas:**

- Estructura completa de documento HTML5 con `<!DOCTYPE html>`, `<html>`, `<head>` y `<body>`
- Uso de metaetiquetas para configuración (`charset`, `viewport`)
- Jerarquía de encabezados (`<h1>`, `<h2>`, `<h3>`)
- Navegación interna usando enlaces con anclas (`<a href="#datospersonales">`)
- Secciones organizadas con IDs para facilitar la navegación
- Párrafos de texto (`<p>`) con contenido formateado
- Énfasis en texto usando `<strong>`

**Cómo visualizar el ejemplo:**

1. Clonar o descargar el [repositorio del curso](https://github.com/yurigo/PMI-2526) desde GitHub
2. Abre con VS Code el proyecto
3. Navega al archivo `sessions/session01/examples/helloworld/index.html`
4. Haz clic derecho en `index.html`
5. Selecciona "Open with Live Server"
6. La página se abrirá en tu navegador predeterminado

Este ejemplo te permite ver en práctica cómo se estructura un documento HTML real y cómo interactúan las diferentes etiquetas para crear una página web funcional.

## Recursos Adicionales

- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [W3C HTML Specification](https://www.w3.org/TR/html/)
