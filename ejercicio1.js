let numero = parseInt(prompt('Ingrese su edad: '));

if(numero>=18){
    document.write('Puede conducir');
}else if(numero<18){
    document.write('Aun no puede conducir');
} else{
    document.write('Numero invalido');
}