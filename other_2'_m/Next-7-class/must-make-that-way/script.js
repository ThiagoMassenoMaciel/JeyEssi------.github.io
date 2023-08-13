/*
let a = Math.random()
alert(typeof a + a )

*/


/*
let a = Math.random() * 10;
alert(typeof a + a )
*/

/*

let a = Math.random() * 10;
alert( a )

*/
function finish( count){
  alert(`Congratulations ! you got on ${count}º times to try`);
}

const user = prompt("Tried to guess the number i am thinking : beetween 0 and 10 ")
const a = Math.round(Math.random() * 10);
const match = Number(user) == a;
let counter = 1 ;
console.log(user, a ,match)

