let array = [2,5,90,115,350,20,10,12];
const impares = array.filter(x=> x%2 !== 0).length;
const masCien = array.filter(x=> x>100).length;
console.log("El total de números impares es: " + impares,
 "y el total de números mayores de cien es: " + masCien);
