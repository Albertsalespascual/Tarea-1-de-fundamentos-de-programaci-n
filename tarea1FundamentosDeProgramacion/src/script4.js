let array = [];
do{
let dado1 = 1 + Math.round(Math.random()*5);
let dado2 = 1 + Math.round(Math.random()*5);
let suma = dado1 + dado2;
array.push(suma);
}
while(array.length<6001);
console.log(array);


