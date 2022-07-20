let suma = 0;
let numIng;
do{
    numIng = parseInt(prompt('Ingrese un numero'));
    if(!isNaN(numIng)){
        suma = suma + numIng;
    } else{
        alert('No es un numero');
    }
    console.log(suma);
}while(confirm('¿Desea ingresar mas numeros?'))

document.write(`La suma es igual a: ${suma}`)