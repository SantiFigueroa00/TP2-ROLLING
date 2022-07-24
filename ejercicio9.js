let i;

for ( i = 1; i <= 500; i++) {
    if((i%5)==0){
        document.write(i+'<br><hr><br>');
    }else{
        if((i%4)==0 && (i%9)==0){
            document.write(i+' (Multiplo de 4 y 9)<br>'); 
        }else if((i%4)==0){
            document.write(i+' (Multiplo de 4)<br>');
        }else if((i%9)==0){
            document.write(i+' (Multiplo de 9)<br>');
        }else{
            document.write(i+'<br>');
        }
    }
}