
function initButtons(){
    var instruments = 8;
    var beats = 8;
    var squaresPerBeat = 4;

    var div = document.getElementById('beatCheckboxes');
    for(i = 0; i<instruments;i++){
        var instrumentDiv = document.createElement('div');
        div.appendChild(instrumentDiv);
        instrumentDiv.id = "instrument-"+i;
        instrumentDiv.className="instrument"
        for(j=0;j<beats*squaresPerBeat;j++){
            var container = document.createElement('div');
            container.classList.add('checkBoxContainer')
            var checkbox = document.createElement('input');
            checkbox.type='checkbox';
            checkbox.classList.add("beatCheckbox");
            if(j%squaresPerBeat==0){
                checkbox.classList.add('sigBeatbox')
            }
            checkbox.id=instrumentDiv.id+"-"+j;
            var checkmark = document.createElement('span');
            checkmark.classList.add("boxCheck");
            instrumentDiv.appendChild(container);
            container.appendChild(checkbox);
            container.appendChild(checkmark);
        }
    }
}

initButtons();