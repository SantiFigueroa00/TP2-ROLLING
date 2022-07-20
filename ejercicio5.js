do {
  let numero = parseInt(prompt("Ingrese su dni: "));
  let calculo = 0;
  if (!isNaN(numero)) {
    if (numero >= 0 && numero <= 99999999) {
      calculo = numero % 23;
      console.log(calculo)
      if (calculo == 0) {
        console.log("T");
      } else if (calculo == 1) {
        console.log("R");
      } else if (calculo == 2) {
        console.log("W");
      } else if (calculo == 3) {
        console.log("A");
      } else if (calculo == 4) {
        console.log("G");
      } else if (calculo == 5) {
        console.log("M");
      } else if (calculo == 6) {
        console.log("Y");
      } else if (calculo == 7) {
        console.log("F");
      } else if (calculo == 8) {
        console.log("P");
      } else if (calculo == 9) {
        console.log("D");
      } else if (calculo == 10) {
        console.log("X");
      } else if (calculo == 11) {
        console.log("B");
      } else if (calculo == 12) {
        console.log("N");
      } else if (calculo == 13) {
        console.log("J");
      } else if (calculo == 14) {
        console.log("Z");
      } else if (calculo == 15) {
        console.log("S");
      } else if (calculo == 16) {
        console.log("Q");
      } else if (calculo == 17) {
        console.log("V");
      } else if (calculo == 18) {
        console.log("H");
      } else if (calculo == 19) {
        console.log("L");
      } else if (calculo == 20) {
        console.log("C");
      } else if (calculo == 21) {
        console.log("K");
      } else if (calculo == 22) {1516
        console.log("E");
      }
    } else {
      alert("El número debe ser entre 0 y 99999999");
    }
  } else {
    alert("No es un numero");
  }
} while (confirm("¿Desea ingresar mas numeros?"));
