const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.getElementById("btn-el")
let passwordOne = document.getElementById("generated1")
let passwordTwo = document.getElementById("generated2")

function generate1() {
    return characters[ Math.floor(Math.random()* characters.length)];
}

function generate2() {
    return characters[ Math.floor(Math.random()* characters.length)];
}

btnEl.addEventListener("click" , function() {
    let renderedPassword1 = " "
    let renderedPassword2 = " "
    for (let i = 0 ; i < 15 ; i++) {
       renderedPassword1 += generate1()
       renderedPassword2 += generate2()
    }
    passwordOne.innerHTML = renderedPassword1
    passwordTwo.innerHTML = renderedPassword2
});
