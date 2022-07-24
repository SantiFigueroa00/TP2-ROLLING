let frase =  prompt('Ingrese un texto');
let coincidencia = frase.match(/[aeiou]/gi).length;
document.write(coincidencia);