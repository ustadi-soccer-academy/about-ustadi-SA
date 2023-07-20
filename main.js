//change color to gree on mouse over
const menuButton = document.querySelectorAll("button")
function changeColor() {
for (let i = 0; i < menuButton.length; i++ ) {
     event.target.style.backgroundColor = "green";
        //event.target.style.fontSize = "16px";
}

}
//change back background color on mouse out
function returnColor() {
    for (let i = 0; i < menuButton.length; i++ ) {
        event.target.style.backgroundColor = "white";
        //event.target.style.fontSize = "18px";
}
}
//calling eventlisteners on individual inexes of the array
menuButton[0].addEventListener("mouseover", changeColor);
menuButton[0].addEventListener("mouseout", returnColor);

menuButton[1].addEventListener("mouseover", changeColor);
menuButton[1].addEventListener("mouseout", returnColor);

menuButton[2].addEventListener("mouseover", changeColor);
menuButton[2].addEventListener("mouseout", returnColor);

menuButton[3].addEventListener("mouseover", changeColor);
menuButton[3].addEventListener("mouseout", returnColor);

menuButton[4].addEventListener("mouseover", changeColor);
menuButton[4].addEventListener("mouseout", returnColor);

// to change photos randomly after 2 seconds on programmes section
const photo = document.querySelectorAll(".photo");
const randomNumber = Math.floor(Math.random() * photo.length);
const programmes = document.getElementById("programmes")

/*setInterval(switchPhotos, 2000);
function switchPhotos() {
    for (let i = 0; i < photo.length; i++) {
programmes.styles.backgroundImage = photo[randomNumber];
    }
}



body.addEventListener('onload',switchPhotos);*/
