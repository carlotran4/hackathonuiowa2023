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


initButtons();
initsquareNo();

var buttons = document.getElementsByClassName("beatBox");
for(let button of buttons){
    console.log(button.id)
    button.addEventListener("click",function(){
        console.log("clicked");
        this.classList.toggle("clicked");
    })
}

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
