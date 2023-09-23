
function initButtons(){
    var instruments = ["yuh","cymbals","snare","kickdrum"];
    var beats = 8;
    var squaresPerBeat = 4;

    var div = document.getElementById('beatCheckboxes');
    for(i = 0; i<instruments.length;i++){
        var instrumentDiv = document.createElement('div');
        div.appendChild(instrumentDiv);
        instrumentDiv.id = "instrument-"+i;
        instrumentDiv.className="instrument"
        var instrumentButton = document.createElement("button");
        var instrument = document.createElement("img")
        instrument.setAttribute("src","\\images\\"+instruments[i]+".png");
        instrument.id=instrumentDiv.id+"InstrumentLogo";
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


initButtons();

var buttons = document.getElementsByClassName("beatBox");
for(let button of buttons){
    console.log(button.id)
    button.addEventListener("click",function(){
        console.log("clicked");
        this.classList.toggle("clicked");
    })
}