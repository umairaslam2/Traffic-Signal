var trafficLight = document.getElementById("traffic-light");
function turnOnRedLight() {
    trafficLight.children[0].setAttribute("id", "red")
    onRed();
}
function turnOffRedLight() {
    trafficLight.children[0].removeAttribute("id")
    defaultSpeed();
}

function turnOnYellowLight() {
    trafficLight.children[1].setAttribute("id", "yellow")
    onYellow();
}
function turnOffYellowLight() {
    trafficLight.children[1].removeAttribute("id")
    defaultSpeed();
}

function turnOnGreenLight() {
    trafficLight.children[2].setAttribute("id", "green")
    onGreen();
}
function turnOffGreenLight() {
    trafficLight.children[2].removeAttribute("id")
    defaultSpeed();
}


function defaultSpeed() {
    document.getElementsByClassName("car")[0].style.animationDuration = ".2s";
    document.getElementsByClassName("track")[0].style.animationDuration = "2s";
    document.getElementsByClassName("wheel")[0].style.animationDuration = ".5s";
    document.getElementsByClassName("wheel")[1].style.animationDuration = ".5s";
}

function onRed() {
    document.getElementsByClassName("car")[0].style.animationDuration = "0s";
    document.getElementsByClassName("track")[0].style.animationDuration = "0s";
    document.getElementsByClassName("wheel")[0].style.animationDuration = "0s";
    document.getElementsByClassName("wheel")[1].style.animationDuration = "0s";
}

function onYellow() {
    document.getElementsByClassName("track")[0].style.animationDuration = "4s";
    document.getElementsByClassName("wheel")[0].style.animationDuration = "1s";
    document.getElementsByClassName("wheel")[1].style.animationDuration = "1s";
}

function onGreen() {
    document.getElementsByClassName("track")[0].style.animationDuration = "1s";
    document.getElementsByClassName("wheel")[0].style.animationDuration = ".2s";
    document.getElementsByClassName("wheel")[1].style.animationDuration = ".2s";
}

