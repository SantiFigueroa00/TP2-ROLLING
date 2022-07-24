let contador;
let i;
do{
    i = prompt('Ingrese un numero (no mayor a 50)');
    if(i>50){
        alert('Ingrese un numero valido');
    }
}while(i>50);

for (i; i >= 0; i--) {
    for (contador = 0; contador < i; contador++) {
        document.write(i);
    }
    document.write(`<br>`);
}