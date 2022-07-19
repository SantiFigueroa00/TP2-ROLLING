let fraseCompleta = '';
let estado = true;
while(estado){
    let textoIngresado = prompt('Ingrese una palabra');
    estado = confirm('¿Desea ingresar mas palabras?');
    if(estado){
        fraseCompleta = fraseCompleta + textoIngresado + '-';
    }else{
        fraseCompleta = fraseCompleta + textoIngresado;
    }
    console.log(fraseCompleta)
}