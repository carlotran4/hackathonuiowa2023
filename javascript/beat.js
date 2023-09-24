var instruments = ["yuh","cymbals","snare","kickdrum"];
var beats = 8;
var squaresPerBeat = 4;

const soundnames = [
    
"808s/Balloon_808.wav",
"808s/Calm_808.wav",
"808s/Carti_808.wav",
"808s/Deep_Sub_Bass.wav",
"808s/Drill_808.wav",
"808s/Drilling_808.wav",
"808s/Eestbound_Bass.wav",
"808s/Evil_808.wav",
"808s/Go_To_808.wav",
"808s/Jugg_808.wav",
"808s/Krud_808.wav",
"808s/LA_808.wav",
"808s/Mad_Sub_Bass.wav",
"808s/Mafia_808.wav",
"808s/Metro_808.wav",
"808s/Permanent_808.wav",
"808s/Piano_808.wav",
"808s/Power_808.wav",
"808s/Reese_Bass.wav",
"808s/Sand_808.wav",
"808s/Sauce_808.wav",
"808s/Splash_808.wav",
"808s/Sub_Zero_808.wav",
"808s/Wavey_Sub_Bass.wav",
"808s/Wild_Sub_Bass.wav",
"Bells/Cold_Bell.wav",
"Bells/Kash_Bell.wav",
"Bells/Realist_Bell.wav",
"Bells/Signature_Bell.wav",
"Bells/Wham_Bell.wav",
"Chants/Ahhh_Chant.wav",
"Chants/Baitest_Chant.wav",
"Chants/Banter_Chant.wav",
"Chants/Beat_Chant.wav",
"Chants/Bow_Chant.wav",
"Chants/Check_Chant.wav",
"Chants/Choir_Chant.wav",
"Chants/Crash_Chant.wav",
"Chants/Drill_Chant.wav",
"Chants/Future_Chant.wav",
"Chants/Gas_Chant.wav",
"Chants/Hello_Chant.wav",
"Chants/Hey_Chant.wav",
"Chants/Hot_Chant.wav",
"Chants/JM00_Chant.wav",
"Chants/Jokes_Chant.wav",
"Chants/Liar_Chant.wav",
"Chants/M1_Chant.wav",
"Chants/Mac_Chant.wav",
"Chants/Mad_Chant.wav",
"Chants/Odd_Chant.wav",
"Chants/Pull_Up_Chant.wav",
"Chants/Rain_Chant_1.wav",
"Chants/Rain_Chant_2.wav",
"Chants/Rain_Chant_3.wav",
"Chants/Rain_Chant_4.wav",
"Chants/Roblox_Chant.wav",
"Chants/Rude_Chant.wav",
"Chants/Scream_Chant.wav",
"Chants/Signature_Chant.wav",
"Chants/Sosa_Chant.wav",
"Chants/Spartan_Chant.wav",
"Chants/Special_Chant.wav",
"Chants/Trouble_Chant.wav",
"Chants/Vocal_Chant.wav",
"Chants/Wave_Chant.wav",
"Chants/Weird_Chant.wav",
"Chants/Zay_Chant.wav",
"Crashes/Dirty_Crash.wav",
"Crashes/Drill_Crash.wav",
"Crashes/Hit_Crash.wav",
"Crashes/Light_Crash.wav",
"Crashes/OT_Crash.wav",
"Extras/138_In_Progress.wav",
"Extras/desktop.ini",
"Extras/Dig_This.mp3",
"Extras/Division.wav",
"Extras/Firearms.wav",
"Extras/Grime_1.wav",
"Extras/Grime_2.wav",
"Extras/Grime_3.wav",
"Extras/Grime_4.wav",
"Extras/Introduct_Selecta.wav",
"Extras/Perfect.wav",
"Extras/Scarface.wav",
"Extras/Strength.wav",
"Extras/Yah_Hear_Me.wav",
"FLP/67_Kick.wav",
"FLP/Banter_Chant.wav",
"FLP/Crash_Perc.wav",
"FLP/Drill_Crash.wav",
"FLP/Drill_Snap.wav",
"FLP/Ender_Perc.wav",
"FLP/Go_To_808.wav",
"FLP/Harlem_Spartans_-_No_Hook_[Acapella].wav",
"FLP/Krud_Open_Hat.wav",
"FLP/KX9_-_Yooo9ine_Tag_2.wav",
"FLP/LA_Beats_Snare_2.wav",
"FLP/LA_Gun_Shot_FX.wav",
"FLP/Mxnarchy_Tag.wav",
"FLP/No_Hook_(UK_Drill)_-_9ine.flp",
"FLP/Plug_FX.wav",
"FLP/Rude_Chant.wav",
"FLP/Shimmer_Perc.wav",
"FLP/Signature_Bell.wav",
"FLP/Signature_Brass_Hit.wav",
"FLP/Sosa_Chant.wav",
"FLP/Swang_Snare.wav",
"FLP/Tapped_Hat.wav",
"FLP/Vocal_Chant.wav",
"FLP/Weird_Chant.wav",
"FX/Bonez_Gun_Shot.wav",
"FX/Bootings_Gun_Shot.wav",
"FX/Car_Crash_and_Siren_FX.wav",
"FX/Drill_Gun_Shot.wav",
"FX/Drilla_Gun_Shot.wav",
"FX/Kick_Down_Doors_FX.wav",
"FX/Kill_Bill_Siren_FX.wav",
"FX/Kill_Confirmed_FX.wav",
"FX/Krud_FX.wav",
"FX/LA_Gun_Shot_FX.wav",
"FX/Mario_FX.wav",
"FX/MK_Whoosh_FX.wav",
"FX/Plug_FX.wav",
"FX/Trap_Line_FX.wav",
"FX/Weird_FX.wav",
"FX/Whip_FX.wav",
"FX/Young_Chop_FX.wav",
"Hats/Corn_Hat.wav",
"Hats/Gang_Hat.wav",
"Hats/Mazza_Hat.wav",
"Hats/Metro_Hat.wav",
"Hats/Sleep_Hat.wav",
"Hats/Tapped_Hat.wav",
"Hits/Hawk_Hit.wav",
"Hits/Rare_Brass_Hit.wav",
"Hits/Signature_Brass_Hit.wav",
"Hits/Zeph_Ellis_Hit.wav",
"Kicks/67_Kick.wav",
"Kicks/Beef_Kick.wav",
"Kicks/DJ_L_Kick.wav",
"Kicks/Drill_Formula_Kick.wav",
"Kicks/Flick_Kick.wav",
"Kicks/Krud_Kick.wav",
"Kicks/Mazza_Kick.wav",
"Kicks/Rack_Kick.wav",
"MIDI/Chop_Snare_1.mid",
"MIDI/Chop_Snare_2.mid",
"MIDI/Kick_1.mid",
"MIDI/Kick_2.mid",
"MIDI/Kick_3.mid",
"MIDI/LA_Beats_Snare_1.mid",
"MIDI/LA_Beats_Snare_2.mid",
"MIDI/Open_Hat_1.mid",
"MIDI/Open_Hat_2.mid",
"MIDI/Open_Hat_3.mid",
"MIDI/Snare_Roll.mid",
"Mixer_Presets/67_Kick.fst",
"Mixer_Presets/Brass_Hit.fst",
"Mixer_Presets/Chant.fst",
"Mixer_Presets/Chop_Snare.fst",
"Mixer_Presets/Crash.fst",
"Mixer_Presets/Drill_Snap.fst",
"Mixer_Presets/Hat.fst",
"Mixer_Presets/Hit_Crash.fst",
"Mixer_Presets/HL8_808.fst",
"Mixer_Presets/LA_Beats_Snare.fst",
"Mixer_Presets/LA_Gun_Shot_Pan.fst",
"Mixer_Presets/LA_Gun_Shot.fst",
"Mixer_Presets/Mika_808.fst",
"Mixer_Presets/Mun_Roe_Snare.fst",
"Mixer_Presets/Open_Hat_1.fst",
"Mixer_Presets/Open_Hat_2.fst",
"Mixer_Presets/Signature_Bell.fst",
"Mixer_Presets/Swang_Snare.fst",
"Mixer_Presets/Tidal_Perc.fst",
"Mixer_Presets/Vox.fst",
"Nexus_Presets/Ambient_Bells.fxp",
"Nexus_Presets/Anthem_Strings.fxp",
"Nexus_Presets/Crash_Flute.fxp",
"Nexus_Presets/Delayed_Piano.fxp",
"Nexus_Presets/Drill_Arp.fxp",
"Nexus_Presets/Drill_Brass.fxp",
"Nexus_Presets/Drill_Choir.fxp",
"Nexus_Presets/Drill_Piano.fxp",
"Nexus_Presets/Evil_Piano.fxp",
"Nexus_Presets/Ghost_Piano.fxp",
"Nexus_Presets/Go_To_Pad.fxp",
"Nexus_Presets/Karate_Kid.fxp",
"Nexus_Presets/Krud_Pad.fxp",
"Nexus_Presets/M1_Piano.fxp",
"Nexus_Presets/Mika_Arp.fxp",
"Nexus_Presets/Moscow_Piano.fxp",
"Nexus_Presets/Murda_Arp.fxp",
"Nexus_Presets/Rapid_Arp.fxp",
"Open_Hats/Death_Open_Hat.wav",
"Open_Hats/Go_To_Open_Hat.wav",
"Open_Hats/Krud_Open_Hat.wav",
"Open_Hats/Shower_Open_Hat.wav",
"Open_Hats/Trapfit_Open_Hat.wav",
"Open_Hats/Upgraded_Open_Hat.wav",
"Open_Hats/Wave_Open_Hat.wav",
"Percs/Crash_Perc.wav",
"Percs/Dinger_Perc.wav",
"Percs/Drilla_Perc.wav",
"Percs/Ender_Perc.wav",
"Percs/LA_Perc.wav",
"Percs/Light_Perc.wav",
"Percs/Low_Tom_Perc.wav",
"Percs/Mafia_Perc.wav",
"Percs/Shimmer_Perc.wav",
"Percs/Tap_Perc.wav",
"Percs/Tidal_Perc.wav",
"Snares/Chef_Snare.wav",
"Snares/Chop_Snare.wav",
"Snares/Clang_Snare.wav",
"Snares/Clicky_Snare.wav",
"Snares/Comp_Snare.wav",
"Snares/Corn_Snare.wav",
"Snares/Crack_Snap.wav",
"Snares/Drill_Snap.wav",
"Snares/Drilla_Snare.wav",
"Snares/Haki_Snare.wav",
"Snares/HitBoy_Slap.wav",
"Snares/JL_Snare.wav",
"Snares/Kwef_Snare.wav",
"Snares/LA_Beats_Snare_1.wav",
"Snares/LA_Beats_Snare_2.wav",
"Snares/LA_Clap.wav",
"Snares/Light_Snare.wav",
"Snares/Mun_Roe_Snare.wav",
"Snares/Special_Snare.wav",
"Snares/Swang_Snare.wav",
"Tags/Mxnarchy_Tag.wav",
"Tags/Yooo9ine_Tag_1.wav",
"Tags/Yooo9ine_Tag_2.wav",
"Triangles/Drill_Triangle.wav",
"Triangles/Maud_Triangle.wav"
]
    

function initButtons(){
    var div = document.getElementById('beatCheckboxes');
    for(i = 0; i<instruments.length;i++){
        var instrumentDiv = document.createElement('div');
        div.appendChild(instrumentDiv);
        instrumentDiv.id = "instrument-"+i;
        instrumentDiv.className="instrument"
        var instrumentButton = document.createElement("button");
        
        instrumentButton.className="instrumentButton"
        instrumentButton.id=i;
        instrumentButton.textContent = i+1
        instrumentDiv.appendChild(instrumentButton);
        for(j=0;j<beats*squaresPerBeat;j++){
            var checkbox = document.createElement('div');
            checkbox.id = "box-"+i+"-"+j;
            checkbox.className="beatBox";
            instrumentDiv.appendChild(checkbox);
        }
        var fileSelectDiv = document.getElementById('fileSelect')
        var select = document.createElement('select') 
        select.id='fileSelect'+i
        select.className = "fileSelect"
        select.setAttribute('onchange','changeInstrument(this,value)')
        fileSelectDiv.appendChild(select)
        for(j = 0; j<soundnames.length; j++){
            var soundname = soundnames[j];
            var option = document.createElement('option')
            option.value = soundname;
            option.text = soundname;
            select.appendChild(option);
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
    sounds.set(button.id,new Audio(".\\sounds\\"+instruments[parseInt(button.id)]+".wav"))
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

function playButtonClick(button){
    console.log('clicked')
    button.classList.toggle('paused');
    if(button.classList.contains('paused')){
        clearInterval(intervalId);
    }
    else{
        changeInterval(document.getElementById("bpm").value);
    }
}

function changeInstrument(select, value){
    var instrumentNo = select.id.substring(10);
    var decoded = decodeURI(value)
    sounds.set(instrumentNo,new Audio(".\\sounds\\yo9drillkit\\"+decoded))
}
 

