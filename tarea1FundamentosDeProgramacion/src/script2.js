primerNum = parseInt(prompt("Introduce un número"));
segundoNum = parseInt(prompt("Introduce otro número"));
if(primerNum==segundoNum){
parseInt(segundoNum = parseInt(prompt("Son iguales, vuelve a introducir el segundo número")));
}
console.log("El número más alto es:"+Math.max(primerNum,segundoNum));