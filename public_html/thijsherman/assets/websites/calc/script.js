let scherm = document.getElementById("scherm");
let knoppen = document.getElementsByTagName("button");

var audio = document.getElementById("myAudio"); 


scherm.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementsByTagName("button").click();
    }
  });



function playAudio() { 
  audio.play(); 
} 



//loop
for( let i=0; i<knoppen.length; i++ ){
    let knop = knoppen[i];
    knop.addEventListener("click", knopGeklikt);



    //console.log("dit is knop "+knop);

}

function knopGeklikt(event){

    switch(event.currentTarget.id) {
        case "nul": scherm.value += "0"
            break;

        case "een": scherm.value += "1"
            break;
        case "twee": scherm.value += "2"
            break;
        case "drie": scherm.value += "3"
            break;
        case "vier": scherm.value += "4"
            break;
        case "vijf": scherm.value += "5"
            break;
        case "zes": scherm.value += "6"
            break;
        case "zeven": scherm.value += "7"
            break;
        case "acht": scherm.value += "8"
            break;
        case "negen": scherm.value += "9"
            break;

        case "leeg": scherm.value = "";
            break;
        case "punt": scherm.value += ".";
            break;

        case "optellen": scherm.value += "+";
            break;
        case "aftrekken": scherm.value += "-";
            break;
        case "vermeningvuldigen": scherm.value += "*";
            break;
        case "delen": scherm.value += "/";
            break;
            
        case "is": scherm.value = eval(scherm.value)
            break;

    }

    

function writeToDisplay(event) {
        //console.log(event.currentTarget);
    var tekenGeklikt = event.currentTarget.innerHTML; //lowel camelCase
    var nuOpDisplay = display.innerHTML;
    var laatsteTekenInDisplay = nuOpDisplay.charAt(nuOpDisplay.length - 1);
      
    if (laatsteTekenInDisplay == "+" || laatsteTekenInDisplay == "-") {
        if (tekenGeklikt == "+" || tekenGeklikt == "-") {
            // doe niets
        console.log("doen niets");
        } else {
        display.innerHTML += event.currentTarget.innerHTML;
        }
    } else {
        console.log("geen min en geen plus");
        display.innerHTML += event.currentTarget.innerHTML;
    }
    }

}