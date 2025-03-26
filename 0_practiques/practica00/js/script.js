{////RA03 - PRÀCTICA 00 - Introducció a JavaScript
// **📌 PART 1: Primera prova amb JavaScript** 
console.log('Hola, món! 🎉')
alert('Página web de Andrea Santaeugenia :3')


//**📌 PART 2: Variables i Operacions Matemàtiques**  
let edat = '26'
const nom = 'Andrea'  // es una variable no modificable 
const ciutat= 'Barcelona'

console.log(`Hola, sóc ${nom}, tinc ${edat} anys i visc a ${ciutat}`)

const num1=15
const num2=7

let suma=num1+num2
let resta=num1-num2
let multi=num1*num2
let div=num1/num2
let modul=num1%num2


console.log(`La suma de ${num1} i de ${num2} es ` ,(num1 + num2))
console.log(`La resta de ${num1} i de ${num2} es ${resta}`)
console.log(`La multiplicació de ${num1} i de ${num2} es ${multi}`)
console.log(`La divisió de ${num1} i de ${num2} es ${div}`)
console.log(`El modul de ${num1} i de ${num2} es ${modul}`)

// **📌 PART 3: Interacció amb l’Usuari**  
const nomUsuari = prompt("Quin és el teu nom?");//el navegador pregunta el nom de l’usuari amb `prompt()`
console.log(`L'usuari es diu: ${nomUsuari}`);//mostra el missatge a la consola 
alert(`Hola, ${nomUsuari}! Benvingut a JavaScript.`);// mostra una alerta emergent amb el text


// **📌 PART 4: Condicionals (`if` - `else`)**  
let edatUsuari = prompt("Quina és la teva edat?");
edatUsuari = parseInt(edatUsuari);

// Si edatUsuari es major de 18, mostra aquest missatge a la consola i alerta.
if (edatUsuari >= 18) {
    console.log("Ets major d’edat. Pots accedir al contingut.");
    alert("Ets major d’edat. Pots accedir al contingut.");
} else {// Si edatUsuari es menor de 18, mostra aquest missatge a la consola i alerta.
    console.log("Ets menor d’edat. Ho sentim, però no pots accedir.");
    alert("Ets menor d’edat. Ho sentim, però no pots accedir.");
    window.location.href = "https://colorear-online.com/colorear-princesas/princesas/?nombre=princess-03"; // Redirigeix a una altra pàgina
}


// **📌 PART 5: Bucles (`for`, `while`)**  
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`);
}//escriu un bucle for que imprimeixi a la consola els números del 1 al 10 en aquest format

let countdown = 5;
while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}
console.log("BOOM! 🎆");//escriu un bucle `while` que faci un compte enrere des de 5 fins a 0, i al final mostri "BOOM! 🎆" a la consola


// **📌 PART 6: Funcions**  
function fsuma(a, b) {
    return a + b;
}//Crea una funció `suma()` que rebi dos paràmetres (`a, b`) i retorni la seva suma.


console.log(fsuma(5, 3)); // // Crida la funció amb els valors `5` i `3` i mostra el resultat a la consola.


function esParell(num) {
    return num % 2 === 0;
}//Crea una funció `esParell()` que rebi un número com a paràmetre i retorni `true` si és parell i `false` si és senar.

//Mostra a la consola els resultats de `esParell(4)` i `esParell(7)`.
console.log(esParell(4)); // Mostra true
console.log(esParell(7)); // Mostra false


// **📌 PART 7: Esdeveniments Bàsics**  
/*
document.getElementById("mostrarMissatge").addEventListener("click", function() {
    alert("Has fet clic!");
});//Programa un esdeveniment en `script.js` perquè, quan es faci clic al botó, aparegui una alerta emergent amb el text: "Has fet clic!
*/
}

{ //RA03 - PRÀCTICA 1 - Manipulació del DOM amb JavaScript

//PART 1: Seleccionar i Modificar Elements

//canvia el color de fons de la pàgina web quan es fa clic al botó.
//document.querySelector('h1').style.color = 'red';

//canvia la mida de la font de l’element `h1` de la pàgina web quan es fa clic al botó.
document.querySelector('h1').style.fontSize = '140px';

//canvia el text de l’element `h1` de la pàgina web quan es fa clic al botó.
document.querySelector('h1').style.textContent = 'Hola, món! 🎉';

//afegeix un paragraf despres del h1 i canvia el text de l’element `p` de la pàgina web quan es fa clic al botó.
const paragraf = document.createElement('p'); //Crea un element paràgraf.
paragraf.textContent = 'Aquest és un paràgraf creat amb JavaScript.';   //Crea un paràgraf amb el text "Aquest és un paràgraf creat amb JavaScript."
document.body.appendChild(paragraf);//Crea un paràgraf amb el text "Aquest és un paràgraf creat amb JavaScript." i afegeix-lo al final de la pàgina web.

//elimina l’element paràgraf de la pàgina web.
document.body.removeChild(paragraf) //Elimina l’element paràgraf de la pàgina web.

//[] aplica un estil css
document.querySelector('h1').classList.add('colorBlue') //Afegeix la classe `colorBlue` a l’element `h1` de la pàgina web.

// PART 2: Afegir Esdeveniments d’Usuari

document.addEventListener("DOMContentLoaded", function() {
    // Esdeveniment per al botó "mostrarMissatge"
    document.getElementById("mostrarMissatge").addEventListener("click", function() {
        alert("Felicitats! Has fet clic:)");
    });

    // Esdeveniment per al botó "canviarText"
    document.getElementById("canviarText").addEventListener("click", function() {
        let titol = document.getElementById("titol");
        titol.textContent = "El text del títol ha canviat!";
        titol.style.color = "#b369e8"; // Canvia el color del text
    });
});

//PART 3: Afegir i Eliminar Elements

document.addEventListener("DOMContentLoaded", function() {
    // Esdeveniment per al botó "afegirElement"
    document.getElementById("afegirElement").addEventListener("click", function() {
        let llista = document.getElementById("llista");
        let nouElement = document.createElement("li");
        nouElement.textContent = "Nou element afegit!";
        llista.appendChild(nouElement);
    });

    // Esdeveniment per al botó "eliminarElement"
    document.getElementById("eliminarElement").addEventListener("click", function() {
        let llista = document.getElementById("llista");
        if (llista.lastChild) {
            llista.removeChild(llista.lastChild);
        }
    });
});

}


