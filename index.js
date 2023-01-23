const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("generated1")
let passwordTwo = document.getElementById("generated2")





function randomCharacters1() { 

    let randomIndex =characters[Math.floor(Math.random() * characters.length)] 
    return randomIndex
     
}

function randomCharacters2() { 

    let randomIndex =characters[Math.floor(Math.random() * characters.length)] 
    return randomIndex
     
}

function generate() {
    let randomPassword1 = " "
    for (let i = 0 ; i < 15 ; i++) {
     randomPassword1 += randomCharacters1()
    }
   passwordOne.textContent = randomPassword1

   let randomPassword2= " "
   for (let i = 0 ; i < 15 ; i++) {
    randomPassword2 += randomCharacters2()
   }
  passwordTwo.textContent = randomPassword2
   
}


