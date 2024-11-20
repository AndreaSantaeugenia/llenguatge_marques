# Examen pràctic d'HTML  

# Creació d'un fitxer ZIP amb hash de l'HTML inalterable

Aquest tutorial explica com crear un hash únic a l'arxiu HTML de l'examen. Un cop creat, el hash no es podra modificar sense que detectem els canvis.

## 0. Què és un hash

[hash](https://latam.kaspersky.com/blog/que-es-un-hash-y-como-funciona/2806/?srsltid=AfmBOoqrLrjQhBHoCrmcGti0biLnTF_rkffq7qlSh83ITCx8OTLzIYgJ)

## 1. Crear l'arxiu HTML de l'examen

1. Completa l'exercici HTML seguint les instruccions de l'examen.
2. Desa l’arxiu amb un nom com ara `examen.html` en una carpeta específica on puguis treballar.

## 2. Generar el hash de l'arxiu HTML

A continuació, genera un hash de l’arxiu `examen.html`. Aquest hash és com una “empremta digital” de l'arxiu: qualsevol canvi a l'arxiu farà que el hash canviï, ajudant-nos a detectar modificacions.

  1. Obre el Terminal.
  2. Navega a la carpeta on has desat `examen.html`.
  3. Escriu aquesta comanda per generar un hash SHA-256:

     ```bash
     sha256sum examen.html > examen_hash.txt
     ```

  4. Això crearà un fitxer anomenat `examen_hash.txt` amb el hash de `examen.html`.

## 3. Crear un arxiu ZIP amb l'HTML i el hash

1. Selecciona `examen.html` i `examen_hash.txt`.
2. Crea un arxiu ZIP amb aquests dos fitxers.  
    Fes clic amb el botó dret i selecciona `Comprimir` o utilitza la comanda:

     ```bash
     zip examen.zip examen.html examen_hash.txt
     ```

## 4., Lliurar el fitxer

L'examen final ha de consistir en:

- El fitxer `examen.zip` amb l'arxiu HTML i el fitxer de hash `examen_hash.txt` dins.
