let frase =  prompt('Ingrese un texto');
frase=frase.toLowerCase();
let longitud = frase.length;
let contador=0;

for (let i = 0; i < longitud; i++) {
    if(frase.charAt(i)=='a' || frase.charAt(i)=='e' || frase.charAt(i)=='i'|| frase.charAt(i)=='o'|| frase.charAt(i)=='u'){
        contador++;
    }
}
document.write(contador)