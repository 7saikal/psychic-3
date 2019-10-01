//1. WHat will I need to make this game?
//alphabet array for computer to choose random letter
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compIndex;
var compChoice;
var Guesses = [];
var winstext =document.getElementById("your-wins");
var lossestext=document.getElementById("your-losses");
var guessestext=document.getElementById("your-guesses");
var $guessesLeft = document.getElementById('guesses-left');



function setLetter(){
    Guesses = [];
   compIndex = Math.floor(Math.random() * alphabet.length);
   compChoice = alphabet[compIndex];
   console.log("comp choice " + compChoice);
   updateDisplay();
}

document.onkeyup = function(event){
    //alert("Hello!");
   var letter = event.key.toLowerCase();

   if (alphabet.includes(letter) && !Guesses.includes(letter)) {
    if
    (letter === compChoice){
        wins++
        
        guessesLeft = 9;
        console.log("Num win " + wins);
        setLetter()
 
    } else{
         Guesses.push(letter);
         guessesLeft--
        
        console.log("remaining lives " + guessesLeft)
        if(guessesLeft === 0){
            console.log("You lose")
            losses++
            
            guessesLeft = 9;
            setLetter()
        }
     }
     updateDisplay()

   }
   //console.log(letter);
  
}

function updateDisplay() {
    console.log(Guesses);
    var string = "";
    for(var i = 0; i<Guesses.length ; i++) {
        string += Guesses[i] + " ";
    }
    guessestext.textContent = string;
    $guessesLeft.textContent = guessesLeft;
    winstext.textContent =  wins;
    lossestext.textContent = losses;
}

setLetter();
//I can not make it work. 
