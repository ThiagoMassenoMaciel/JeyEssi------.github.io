

let flag = false
let counter = 0;
while(flag == false){
  
  let tryy = Number(prompt("Adivinha: "));
  ++counter;

  if (tryy === 3){
    flag = true;
  }

}

alert(`Congratulations , you tried ${counter}times`);