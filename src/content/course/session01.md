---
title: "Sesión 01 - Introducción a Web"
section: "HTML"
order: 1
description: "Introducción a la asignatura, HTML básico y herramientas"
---

# Sesión 01 - Introducción a Web

**Fecha:** 03/02/2026

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

### 4. Extensión Live Server

**Live Server** es una extensión de VS Code que proporciona un servidor web local con capacidad de recarga automática.

**Uso básico:**

1. Abre una carpeta con archivos HTML en VS Code
2. Haz clic derecho en un archivo `.html` → "Open with Live Server"
3. Se abre automáticamente en tu navegador en `http://localhost:5500`
4. Realiza cambios en tu código
5. Guarda el archivo (Ctrl+S) y los cambios aparecen automáticamente en el navegador

### 5. Introducción a HTML

**HTML (HyperText Markup Language)** es un lenguaje de marcado estándar utilizado para crear páginas web.

### 6. Estructura Básica de un Documento HTML

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

- **`<!DOCTYPE html>`**: Declaración que le dice al navegador que es HTML5.
- **`<html>`**: Elemento raíz que contiene todo el documento.
- **`<head>`**: Sección de metadatos que NO se ve en la página.
- **`<body>`**: Contiene todo el contenido visible de la página.

### 7. Etiquetas Principales en HTML

#### Etiquetas de Estructura

- **`<!DOCTYPE html>`**: Declaración del tipo de documento.
- **`<html>`**: Elemento raíz que envuelve todo el contenido.
- **`<head>`**: Contiene metadatos y configuración del documento.
- **`<body>`**: Contiene todo el contenido visible de la página.

#### Etiquetas de Contenido

- **`<title>`**: Define el título del documento.
- **`<meta>`**: Proporciona metadatos sobre el documento.
- **`<h1>` a `<h6>`**: Encabezados de diferentes niveles jerárquicos.
- **`<p>`**: Párrafos de texto.
- **`<a>`**: Enlaces (hipervínculos).
- **`<img>`**: Imágenes.
- **`<ul>`, `<ol>`, `<li>`**: Listas.
- **`<div>`**: Contenedor de bloque genérico.
- **`<span>`**: Contenedor en línea genérico.
- **`<strong>`**: Texto en negrita (énfasis fuerte).
- **`<em>`**: Texto en cursiva (énfasis).
- **`<br>`**: Salto de línea.
- **`<hr>`**: Línea horizontal separadora.
