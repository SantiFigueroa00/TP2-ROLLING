let numero = parseInt(prompt('Ingrese una nota (número) de 0  a 10: '));

if(numero>=0 && numero<=2){
    alert('Muy deficiente');
}else if(numero>=3 && numero<=4){
    alert('Insuficiente');
} else if(numero>=5 && numero<=6){
    alert('Suficiente');
} else if(numero==7){
    alert('Bien');
} else if(numero>=8 && numero<=9){
    alert('Notable');
} else if(numero==10){
    alert('Sobresaliente');
} else if(numero<0 || numero>10){
    document.write('Numero erroneo');
} 
else{
    document.write('Numero invalido');
}