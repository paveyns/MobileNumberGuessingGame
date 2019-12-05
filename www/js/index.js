showmodal();
getnewrandnum();
var randNum;
var guessCount = 1;

function getnewrandnum(){
    randNum = Math.floor(Math.random() * 10) + 1; //between 1 and 10
    console.log(randNum);
    guessCount = 1;
}
function showmodal() {
    document.getElementById("newgamemodal").hidden = false;
}
function hidemodal() {
    document.getElementById("newgamemodal").hidden = true;
}

function guessbtn(guessNum) {
    var numselect = document.getElementById("numberselect");
    var guessNum = numselect.options[numselect.selectedIndex].value;
    if(guessNum == randNum)
    {
        navigator.vibrate(1000);
        if(guessCount <= 1){confirm("You Win!\nIt took you "+guessCount+" Try");}
        else{confirm("You Win!\nIt took you "+guessCount+" Tries");
        confirm("Start A New Game!");
        getnewrandnum();
    }
    }
    else 
    {
        navigator.vibrate([100, 100, 100]);
        guessCount = guessCount + 1;
        confirm("Incorrect! Guess Again");
    }
  }
