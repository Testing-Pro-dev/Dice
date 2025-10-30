function rollDice() {
  let num = Math.floor(Math.random() * 6)+1;
  document.getElementById("myH1").innerHTML = num;
  
   if(num === 6) {
  document.getElementById("kataKuri").innerHTML = "Roll Again";
 } else {
   document.getElementById("kataKuri").innerHTML = "Kata-Dice";
 }
}

