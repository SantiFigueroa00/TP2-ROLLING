let contador;
let i;
let num;
do{
    num = prompt('Ingrese un numero (no mayor a 50)');
    if(num>50){
        alert('Ingrese un numero valido');
    }
}while(num>50);

for ( i = 0; i <= num; i++) {
    for (let contador = 0; contador < i; contador++) {
        document.write(i);
    }
    document.write(`<br>`);
}