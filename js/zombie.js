var zombie = document.getElementById("zombietomb");
var left = 0
var x = 0
var y = 0

zombie.style.backgroundImage = "url(./img/zombie.png)"

//animation pour faire défiler l'image
function animation (){
    if( left <1000){
        left += 100
        zombie.style.backgroundPosition = "-"+left+"px, 0px"
    } else {
        zombie.style.backgroundPosition = "-1000px, 0px"
    }
   
}

//lancement de l'animation
setInterval(animation, 150);

//listener qui trigger les touches du clavier
window.addEventListener("keydown",function(e) {
    const maTouch = e.keyCode
    //droite
    if (maTouch === 39){
        x+= 10
    }
    //gauche
    else if(maTouch === 37){
        x-= 10
    }
    //bas
    else if(maTouch === 40){
        y += 10
    }
    //haut
    else if(maTouch === 38){      
        y -= 10
    } 
    zombie.style.transform = "translate("+x+"px, "+y+"px)"
} )   