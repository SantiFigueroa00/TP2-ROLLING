let frase =  prompt('Ingrese un texto');
let longitud = frase.length;
let newFrase = ' ';
for (let i = longitud; i >= 0; i--) {

    newFrase = newFrase + frase.charAt(i);
    
}
document.write(newFrase)