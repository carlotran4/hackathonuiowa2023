var white = document.getElementsByClassName("white");
var black = document.getElementsByClassName("black");
var tunes = new Map();

for(let tune of white){
    tunes.set(tune.firstChild.textContent,new Audio(".\\tunes\\"+tune.firstChild.textContent.toLowerCase() +".ogg"))
    tune.addEventListener('click',function(){
        tunes.get(tune.firstChild.textContent).currentTime=0;
        tunes.get(tune.firstChild.textContent).play();
    })
}

for(let tune of black){
    tunes.set(tune.firstChild.textContent,new Audio(".\\tunes\\" +tune.firstChild.textContent.toLowerCase().substring(0, 1) + "s" + tune.firstChild.textContent.toLowerCase().substring(2, 3) +".ogg"))
    tune.addEventListener('click',function(){

        tunes.get(tune.firstChild.textContent).currentTime=0;
        tunes.get(tune.firstChild.textContent).play();
        
       
        
        
        
    })
}