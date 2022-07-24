let row = Number(prompt("Ingrese el numero de filas"));
let col = Number(prompt("Ingrese el numero de columnas"));

let numero = row*col;

document.write(`<table>
        <tbody>`);


for (let i = 0; i < row; i++) {
  document.write(`<tr>`);

  for (let j = 0; j < col; j++) {
    document.write(`<td>${numero}</td>`);
    numero--;
  }

  document.write(`</tr>`);
}

document.write(`
        </tbody>
    </table>`);
