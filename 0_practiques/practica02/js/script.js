
// 1. 1️⃣ Afegir un nou <li> dinàmicament en clicar el botó Afegir Element.
document.getElementById('afegirElement').addEventListener('click', function() {         // afegim un event listener al botó afegir element
    const input = document.getElementById('textElement');                               // obtenim l'input
    const inputValue = input.value.trim();                                              // eliminem els espais en blanc de l'inici i final de l'string                            


    // 2️. 2️⃣ No permetre afegir elements buits (cal validar l’input)
    if (inputValue === '') {                                                            // comprovem si l'input és buit     
        alert('No es pot afegir un element buit. Sorry:(');                             // mostrem un alert si l'input és buit
        return;     
    }


    // 3️. 3️⃣ Cada element de la llista ha de contenir un text editable.
    const li = document.createElement('li');                                            // creem un li
    const span = document.createElement('span');                                        // creem un span
    span.textContent = inputValue;                                                      // afegim el text al span
    //span.contentEditable = true;    Por si quiero que sea editable por defecto 
    span.classList.add('editable');


    // 5️. 5️⃣ El text ha de canviar de color cada vegada que es faci clic sobre ell.
    span.addEventListener('click', function() {                                         // afegim un event listener al span  
        //span.style.color = span.style.color === 'red' ? 'black' : 'red';              // canvia el color del text a vermell si és negre i a negre si és vermell
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);    // genera un color aleatori en format hexadecimal
        span.style.color = randomColor;                                                 // aplica el color aleatori al text
    });


    // 4️. 4️⃣ Cada element ha de tenir un botó "Editar" que activi la edició en línia.
    const editButton = document.createElement('button');                                // creem un botó
    editButton.textContent = 'Editar';                                                  // afegim text al botó
    editButton.classList.add('edit');                                                   // afegim una classe al botó
    editButton.addEventListener('click', function() {                                   // afegim un event listener al botó
        span.contentEditable = true;                                                    // activa la edició
        span.focus();                                                                   // posa el focus al span
        editButton.disabled = true;                                                     // Deshabilitar el botón de editar mientras se edita
        saveButton.style.display = 'inline';                                            // Mostrar el botón de guardar
    });


    // Botón de guardar (AÑADIDO)
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.classList.add('save');
    saveButton.style.display = 'none';                                                  // Ocultar el botón de guardar inicialmente
    saveButton.addEventListener('click', function() {                                   // afegim un event listener al botó guardar
        span.contentEditable = false;                                                   // desactiva la edició
        editButton.disabled = false;                                                    // Habilitar el botón de editar después de guardar
        saveButton.style.display = 'none';                                              // Ocultar el botón de guardar
    });


    // 6️.  6️⃣ El botó "Eliminar" ha de permetre eliminar l’element.
    const deleteButton = document.createElement('button');                              // creem un botó
    deleteButton.textContent = 'Eliminar';                                              // afegim text al botó
    deleteButton.classList.add('delete');                                               // afegim una classe al botó
    deleteButton.addEventListener('click', function() {                                 // afegim un event listener al botó eliminar
        if (confirm('Estàs segur que vols eliminar aquest element?')) {
            li.remove();
        }// elimina el li si està segur
    });


    // 7️.  7️⃣ El text editable s’ha de desactivar quan l'usuari guardi els canvis.
    span.addEventListener('blur', function() {                                          // blur es quan perds el focus
        span.contentEditable = false;                                                   // desactiva la edició
        editButton.disabled = false;                                                    // Habilitar el botón de editar después de perder el foco
        saveButton.style.display = 'none';                                              // Ocultar el botón de guardar
    });

    li.appendChild(span);                                                               // afegim el span al li
    li.appendChild(editButton);                                                         // afegim el botó editar al li
    li.appendChild(saveButton);                                                         // afegim el botón guardar al li
    li.appendChild(deleteButton);                                                       // afegim el botó eliminar al li
    document.getElementById('llistaElements').appendChild(li);                          // afegim el li a la llista

    input.value = '';                                                                   // buidem l'input
});