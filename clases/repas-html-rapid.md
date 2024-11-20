# REPÀS RÀPID HTML

## Índex

- [REPÀS RÀPID HTML](#repàs-ràpid-html)
  - [Índex](#índex)
  - [1. `<head>`](#1-head)
  - [2. `<header>`](#2-header)
  - [3. Encapçalaments](#3-encapçalaments)
    - [3.1 `<h1>`](#31-h1)
    - [3.2 `<h2>`](#32-h2)
    - [3.3 `<h3>`](#33-h3)
    - [3.4 `<h4>`](#34-h4)
    - [3.5 `<h5>`](#35-h5)
    - [3.6 `<h6>`](#36-h6)
    - [Resum Jerarquia Encapçalaments](#resum-jerarquia-encapçalaments)
  - [4. `<nav>`](#4-nav)
  - [5. `<section>`](#5-section)
  - [6. `<footer>`](#6-footer)
  - [7. `<ul> > <li>`](#7-ul--li)
  - [8. `<a>`](#8-a)
  - [9. `<p>`](#9-p)
  - [Exemple complet d’estructura i jerarquia](#exemple-complet-destructura-i-jerarquia)
  - [Jerarquia dels elements](#jerarquia-dels-elements)

---

## 1. `<head>`

```html
<head>
    <title>Examen de Llenguatges de Marques</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
```

**Funció i lloc a la jerarquia**: `<head>` es troba dins de `<html>` i precedeix el cos del document (`<body>`). Defineix la informació sobre el document, com ara el títol que apareix a la pestanya del navegador, metadades, i enllaços a fitxers CSS o JavaScript.

---

## 2. `<header>`

```html
<header>
    <h1>Benvinguts a l'Examen de Llenguatges de Marques</h1>
    <nav>
        <ul>
            <li><a href="#inici">Inici</a></li>
            <li><a href="#temari">Temari</a></li>
            <li><a href="#practiques">Pràctiques</a></li>
            <li><a href="#contacte">Contacte</a></li>
        </ul>
    </nav>
</header>
```

**Funció i lloc a la jerarquia**: El `<header>` es troba dins del `<body>` i pot aparèixer com a part de la capçalera principal o d'altres seccions. Serveix com a introducció, incloent títols principals i la navegació de la pàgina.

---

## 3. Encapçalaments

Els encapçalaments HTML des de `<h1>` fins a `<h6>` s’utilitzen per organitzar i estructurar el contingut en una pàgina web amb nivells jeràrquics, des del més important (`<h1>`) fins al més detallat i específic (`<h6>`). Cadascun té un paper específic en la jerarquia:

### 3.1 `<h1>`

- **Funció**: Representa el títol principal de la pàgina o del document, definint-ne el tema general.
- **Usos**: Idealment, només un `<h1>` per pàgina per donar coherència al document.
- **SEO**: Té el major impacte en els motors de cerca, que l’utilitzen per entendre el tema principal de la pàgina.

  ```html
  <h1>Guia Completa de Llenguatges de Marques</h1>
  ```

### 3.2 `<h2>`

- **Funció**: Defineix els títols secundaris o seccions principals que estan relacionades amb el tema general marcat per `<h1>`.
- **Usos**: Pot aparèixer diverses vegades per organitzar les diferents seccions principals dins de la pàgina.
- **SEO**: Aporta estructura i ajuda els cercadors a entendre millor l’organització del contingut.

  ```html
  <h2>Introducció a HTML</h2>
  ```

### 3.3 `<h3>`

- **Funció**: Representa les subseccions dins de cada secció principal definida per `<h2>`.
- **Usos**: S’utilitza per organitzar contingut més detallat dins de cada tema principal.
- **SEO**: Ajuda a la jerarquia però amb un pes menor que `<h1>` i `<h2>`.

  ```html
  <h3>Etiquetes Bàsiques d'HTML</h3>
  ```

### 3.4 `<h4>`

- **Funció**: Dóna títol a subnivells dins de les subseccions definides per `<h3>`.
- **Usos**: S'utilitza per desglossar temes de `<h3>` en parts més petites, sovint per a temes tècnics o detalls específics.
- **SEO**: Té un impacte menor en SEO però encara contribueix a una estructura coherent.

  ```html
  <h4>Exemple de l'Estructura HTML</h4>
  ```

### 3.5 `<h5>`

- **Funció**: S'utilitza per a nivells encara més específics dins de `<h4>`, representant informació complementària o detallada.
- **Usos**: Pot aparèixer quan es requereixen subtemes en detall dins d’una subsecció d'informació específica.
- **SEO**: Té un impacte molt baix en SEO però ajuda en la llegibilitat i organització de continguts complexes.

  ```html
  <h5>Combinació de Text i Imatges</h5>
  ```

### 3.6 `<h6>`

- **Funció**: Representa el nivell d’encapçalament més baix, sovint utilitzat per als detalls més petits o comentaris finals.
- **Usos**: És útil quan es necessiten molts nivells de detalls dins d'una secció molt subdividida.
- **SEO**: Té poc impacte en SEO, però ajuda a estructurar visualment la pàgina en temes complexos.

  ```html
  <h6>Nota: Compatible amb la versió HTML5</h6>
  ```

### Resum Jerarquia Encapçalaments

Cada etiqueta d’encapçalament serveix per organitzar el document en una jerarquia descendent d’importància:

- **`<h1>`** - Títol principal de la pàgina.
- **`<h2>`** - Seccions principals.
- **`<h3>`** - Subsections dins de cada secció.
- **`<h4>`** - Subnivells dins de les subseccions.
- **`<h5>`** - Detalls específics dins de cada subnivell.
- **`<h6>`** - Detalls o comentaris finals.

---

## 4. `<nav>`

```html
<nav>
    <ul>
        <li><a href="#inici">Inici</a></li>
        <li><a href="#temari">Temari</a></li>
        <li><a href="#practiques">Pràctiques</a></li>
        <li><a href="#contacte">Contacte</a></li>
    </ul>
</nav>
```

**Funció i lloc a la jerarquia**: El `<nav>` es troba dins del `<header>` o en altres parts del document. Agrupa elements de navegació que porten a diferents seccions o pàgines. Facilita la navegació a l'usuari i ajuda a estructurar el document.

---

## 5. `<section>`

```html
<section id="temari">
    <h2>Temari de l'Examen</h2>
    <p>Aquest examen inclou els següents temes:</p>
    <ul>
        <li>Estructura HTML</li>
        <li>CSS i estil</li>
        <li>Introducció a JavaScript</li>
    </ul>
</section>
```

**Funció i lloc a la jerarquia**: `<section>` organitza el contingut en blocs temàtics dins del `<body>`. Cada secció pot tenir el seu propi `<header>`, títols secundaris com `<h2>` o `<h3>`, i altres elements estructurals. Dóna ordre i coherència al contingut.

---

## 6. `<footer>`

```html
<footer>
    <p>&copy; 2024 Institut de Llenguatges de Marques</p>
    <nav>
        <ul>
            <li><a href="#politica">Política de privacitat</a></li>
            <li><a href="#contacte">Contacte</a></li>
        </ul>
    </nav>
</footer>
```

**Funció i lloc a la jerarquia**: El `<footer>` es col·loca al final del `<body>`, dins d’una secció o d

'una pàgina completa, per indicar informació de tancament, com el copyright, enllaços addicionals, i altres dades finals.

---

## 7. `<ul> > <li>`

```html
<ul>
    <li>Estructura HTML</li>
    <li>CSS i estil</li>
    <li>Introducció a JavaScript</li>
</ul>
```

**Funció i lloc a la jerarquia**: `<ul>` (llista no ordenada) i `<li>` (element de llista) s’utilitzen dins de `<nav>`, `<section>`, o qualsevol part del `<body>` per crear llistes de contingut. Permet organitzar punts d'informació d'una manera estructurada.

---

## 8. `<a>`

```html
<a href="https://www.iescarlesvallbona.com" target="_blank">Visita la web de l'institut</a>
```

**Funció i lloc a la jerarquia**: `<a>` crea un enllaç. Es troba dins de `<nav>`, llistes, o paràgrafs, i utilitza l’atribut `href` per indicar la destinació de l’enllaç. És un element clau per a la navegació dins i fora del document.

---

## 9. `<p>`

```html
<p>Aquest examen d'HTML cobreix aspectes essencials de la programació web.</p>
```

**Funció i lloc a la jerarquia**: `<p>` defineix un paràgraf de text i es troba dins de `<section>`, `<article>`, o qualsevol altra part del `<body>`. Ajuda a dividir i organitzar el text en blocs llegibles.

---

## Exemple complet d’estructura i jerarquia

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <title>Examen de Llenguatges de Marques</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <h1>Benvinguts a l'Examen de Llenguatges de Marques</h1>
    <nav>
        <ul>
            <li><a href="#inici">Inici</a></li>
            <li><a href="#temari">Temari</a></li>
            <li><a href="#practiques">Pràctiques</a></li>
            <li><a href="#contacte">Contacte</a></li>
        </ul>
    </nav>
</header>

<section id="temari">
    <h2>Temari de l'Examen</h2>
    <p>Aquest examen inclou els següents temes:</p>
    <ul>
        <li>Estructura HTML</li>
        <li>CSS i estil</li>
        <li>Introducció a JavaScript</li>
    </ul>
</section>

<footer>
    <p>&copy; 2024 Institut de Llenguatges de Marques</p>
    <nav>
        <ul>
            <li><a href="#politica">Política de privacitat</a></li>
            <li><a href="#contacte">Contacte</a></li>
        </ul>
    </nav>
</footer>

</body>
</html>
```

---

## Jerarquia dels elements

1. **`<html>`**: Conté tot el document HTML.
2. **`<head>`**: Inclou metadades i enllaços (CSS, JS).
3. **`<body>`**: Conté el contingut visible.
4. **`<header>`**: Encapsula el títol principal (`<h1>`) i la navegació (`<nav>`).
5. **Encapçalaments (`<h1>` - `<h6>`)**:
   - **`<h1>`**: Títol principal de la pàgina.
   - **`<h2>`**: Seccions principals.
   - **`<h3>`**: Subsections dins de cada secció.
   - **`<h4>`**: Subnivells dins de les subseccions.
   - **`<h5>`**: Detalls específics dins de cada subnivell.
   - **`<h6>`**: Detalls o comentaris finals.
6. **`<nav>`** dins del `<header>` o altres seccions: Proporciona enllaços a diferents seccions o pàgines.
7. **`<section>`**: Defineix una secció del document, amb subtítols i contingut.
8. **`<p>`**: Defineix paràgrafs de text dins de `<section>`, `<article>`, o altres parts del cos.
9. **`<ul>`** i **`<li>`**: Crea una llista no ordenada, sovint usada dins de `<nav>`, `<section>`, o per organitzar elements de forma llistada.
10. **`<a>`**: Crea enllaços, utilitzat dins de `<nav>`, llistes, o paràgrafs per connectar amb altres pàgines o seccions.
11. **`<footer>`**: Col·loca informació complementària i enllaços addicionals al final de la pàgina.
