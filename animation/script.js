const car = document.getElementById("car");
const box = document.getElementById("box");
const startAnimationBtn = document.getElementById("startAnimation");

let leftPosition = 0;
let animationId = null;
let isMoving = false;

function isValidName(name){
    return name.length > 2;

}

function isValidPassword(password){
    return password.length > 6;
}

function moveCar(){
    const maxRight = window.innerWidth - car.offsetWidth;
    
    if (leftPosition < maxRight){
        leftPosition += 5;
        car.style.left = leftPosition + "px";
        requestAnimationFrame(moveCar);  
    }
    else{
        cancelAnimationFrame(animationId);
        isMoving = false;
        startAnimation = false;
        console.log("Машина доїхала до краю!")
    }     
     
}

startAnimationBtn.onclick = function (){
    if (!isValidName(name)){
        alert('В імені має бути не меньше 2 символів!');
        return;
    }
    if (!isValidPassword(password)){
            alert('В паролі має бути не меньше 6 символів!');
            return;
        }
    
    if (!isMoving){
        isMoving = true
        startAnimationBtn.disabled = true
        box.style.animation = "move 4s ease-in-out";
        setTimeout(function(){
        box.style.animation = ""; 
    }, 4000);
    requestAnimationFrame(moveCar); 
    }
}

