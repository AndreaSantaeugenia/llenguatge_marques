# ETIQUETA FORM EN UN HTML

L'etiqueta `<form>` en HTML s'utilitza per crear formularis que permeten als usuaris enviar dades a un servidor. Aquesta etiqueta és fonamental per a la recopilació d'informació en pàgines web.

## Estructura bàsica d'un formulari

```html
<form action="URL_del_servidor" method="mètode">
  <!-- Camps del formulari -->
</form>
```

## Atributs principals

- **`action`**: Especifica l'URL on s'enviaran les dades del formulari.
- **`method`**: Defineix el mètode HTTP utilitzat per enviar les dades.
  - `GET`: Afegeix les dades a l'URL com a paràmetres. És adequat per cerques o peticions que no modifiquen dades al servidor.
  - `POST`: Envia les dades en el cos de la petició. S'utilitza per a dades confidencials o per modificar informació al servidor.

## Exemples

### Formulari amb mètode GET

```html
<form action="buscar.php" method="get">
  <label for="query">Cerca:</label>
  <input type="text" id="query" name="query">
  <button type="submit">Enviar</button>
</form>
```

Exemples:

- Filtratge de pel·lícules per gènere
- Consulta d'horaris de tren
- Calculadora d'IMC (Índex de Massa Corporal)
- Filtratge de productes en una botiga

### Formulari amb mètode POST

```html
<form action="registre.php" method="post">
  <label for="nom">Nom:</label>
  <input type="text" id="nom" name="nom">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Registrar</button>
</form>
```

Exemples:

- registre d'usuari
- contacte
- pujada de fitxers
- comanda o compra
- subscripció butlletí
- configuració de perfil
- nova entrada a blog

### Altres atributs comuns

- **`enctype`**: Especifica com s'han de codificar les dades. Per defecte és `application/x-www-form-urlencoded`. Altres opcions inclouen:
  - `multipart/form-data`: Necessari per a pujar fitxers.
  - `text/plain`: Envia les dades com a text pla.
  
- **`target`**: Defineix on es mostrarà la resposta del formulari:
  - `_self` (per defecte): A la mateixa pestanya.
  - `_blank`: En una pestanya nova.
  
- **`novalidate`**: Desactiva la validació del formulari per part del navegador.

### Elements típics dins d'un formulari

- **`<input>`**: Per a camps de text, contrasenyes, caselles de selecció, botons, etc.
- **`<textarea>`**: Per a àrees de text més grans.
- **`<select>`**: Per a menús desplegables.
- **`<button>`**: Per enviar o restablir el formulari.
