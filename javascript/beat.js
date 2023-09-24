var instruments = ["yuh","cymbals","snare","kickdrum"];
var beats = 8;
var squaresPerBeat = 4;


function initButtons(){
    var div = document.getElementById('beatCheckboxes');
    for(i = 0; i<instruments.length;i++){
        var instrumentDiv = document.createElement('div');
        div.appendChild(instrumentDiv);
        instrumentDiv.id = "instrument-"+i;
        instrumentDiv.className="instrument"
        var instrumentButton = document.createElement("button");
        var instrument = document.createElement("img")
        instrument.setAttribute("src","\\images\\"+instruments[i]+".png");
        instrumentButton.className="instrumentButton"
        instrumentButton.id=instruments[i];
        instrumentDiv.appendChild(instrumentButton);
        instrumentButton.appendChild(instrument)

        for(j=0;j<beats*squaresPerBeat;j++){
            var checkbox = document.createElement('div');
            checkbox.id = "box-"+i+"-"+j;
            checkbox.className="beatBox";
            instrumentDiv.appendChild(checkbox);
        }
    }
}
function initsquareNo(){
    var div = document.getElementById("squareNo");
    for(let i=beats*squaresPerBeat;i>0;i--){
        var span = document.createElement("span");
        span.textContent = i;
        span.className = "squareNoText"
        div.appendChild(span);
    }
}
function DOMRegex(regex) {
    let output = [];
    for (let i of document.querySelectorAll('*')) {
        if (regex.test(i.id)) { // or whatever attribute you want to search
            output.push(i);
        }
    }
    return output;
}


initButtons();
initsquareNo();

var buttons = document.getElementsByClassName("beatBox");
for(let button of buttons){
    button.addEventListener("click",function(){
        console.log("clicked");
        this.classList.toggle("clicked");
    })
}

//Sounds for instrument buttons
var instrumentButtons = document.getElementsByClassName("instrumentButton");
var sounds = new Map();
for(let button of instrumentButtons){
    sounds.set(button.id,new Audio(".\\sounds\\"+button.id+".wav"))
    button.addEventListener('click',function(){
        sounds.get(button.id).currentTime=0;
        sounds.get(button.id).play();
    })
    i++;
}


var squareNumbers = document.getElementsByClassName("squareNoText");

var bpm = document.getElementById("bpm").value;
var i = 0;
var intervalId;

function changeInterval(value){
    console.log(value)
    clearInterval(intervalId);
    intervalId=setInterval(runAtInterval, 60000/(value*squaresPerBeat))
    console.log(intervalId);
}

function runAtInterval(){
    squareNumbers[31-i].classList.toggle('current');
    
    var re = new RegExp("^box-[0-9]+-"+i+"$");
    currentBoxes = DOMRegex(re);
    for(let box of currentBoxes){
        if(box.classList.contains('clicked')){
            var button = box.parentElement.querySelector('.instrumentButton')
            button.click()        
        }
    }

    if(i<beats*squaresPerBeat-1) i++;
    else{i = 0}
    console.log(intervalId);
}

function playButtonClick( button){
    button.classList.toggle('paused');
    if(button.classList.contains('paused')){
        clearInterval(intervalId);
    }
    else{
        changeInterval(document.getElementById("bpm").value);
    }
}