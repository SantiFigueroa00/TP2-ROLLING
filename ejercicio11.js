let nom1 = prompt('Ingresar el nombre del primer usuario');
let edad1 = parseInt(prompt('Ingresar edad del primer usuario'));
let nom2 = prompt('Ingresar el nombre del segundo usuario');
let edad2 = parseInt(prompt('Ingresar edad del segundo usuario'));
let nom3 = prompt('Ingresar el nombre del tercer usuario');
let edad3 = parseInt(prompt('Ingresar edad del tercer usuario'));
let max = Math.max(edad1,edad2,edad3)
if (max==edad1) {
    document.write('El mayor de los tres es '+ nom1)
} else if (max==edad2) {
    document.write('El mayor de los tres es '+ nom2)
} else {
    document.write('El mayor de los tres es '+ nom3)
}
