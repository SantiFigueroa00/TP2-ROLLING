let frase =  prompt('Ingrese un texto');
let longitud = frase.length;
let newFrase = ' ';
for (let i = 0; i < longitud; i++) {
    if(i==(longitud-1)){
        newFrase = newFrase + frase.charAt(i);
    }else{
        newFrase = newFrase + frase.charAt(i)+'-';
    }
}
document.write(newFrase)