/*const pianoKeys = document.querySelectorAll(".white");

let audio = new Audio("A0vH.wav");

let map = {};

const playTune = (white) => {
    audio.src = "tunes/${white}.wav";
    audio.play();
}
*/

var white = document.getElementsByClassName("white");
var tunes = new Map();
for(let tune of white){
    tunes.set(tune.firstChild.textContent,new Audio(".\\tunes\\"+tune.firstChild.textContent+"vH.wav"))
    tune.addEventListener('click',function(){
        tunes.get(tune.firstChild.textContent).currentTime=0;
        tunes.get(tune.firstChild.textContent).play();
    })
}