const divi = document.getElementById("change-text");

divi.onclick = function() {
  document.execCommand("copy");
}

divi.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", divi.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});
const divid = document.getElementById("change-text1");

divid.onclick = function() {
  document.execCommand("copy");
}

divid.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", divid.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});



let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let characters1 = document.getElementById("change-text")
    let characters2 = document.getElementById("change-text1")
    let buttonRandom = document.getElementById("button-random")
    let count = characters.length
    let randomchar ;
    let randomchar1;
    let passwords=8;
    
function generateRandom()
{
    
 characters1.textContent = characters[randomchar]
 characters2.textContent = characters[randomchar1]
 for (let i = 0; i < passwords; i++) {
      randomchar = Math.floor(Math.random() * count)
      randomchar1 = Math.floor(Math.random() * count)
        characters1.textContent += characters[randomchar] + ""
        characters2.textContent += characters[randomchar1] + ""
    }
  
}




