const selectionButtons = document.querySelectorAll("[data-selection]");
const computerScoreSpam = document.querySelector("[data-computer-score]");
const yourScoreSpam = document.querySelector("[data-your-score]");
const resetWin = document.querySelector('#reset-win');
const resetLost = document.querySelector('#reset-lost');



const SELECTIONS = [
  {
    name: "rock",
    beast: "scisor"
  },
  {
    name: "paper",
    beast: "rock"
  },
  {
    name: "scisor",
    beast: "paper"
  }
];

//selection button
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

//selection play
function makeSelection(selection) {
 
  
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
 
  
  
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);


  
  if (yourWinner) incrementscore(yourScoreSpam)
  if (computerWinner) incrementscore(computerScoreSpam);
  
  function plays(){
    let user = yourScoreSpam.innerHTML;
    let pc = computerScoreSpam.innerHTML;
    
    //plays condicion page
    if (user === "5" ){
      window.location.href = 'win.html';
    } else if(pc === "5"){
      window.location.href = 'lost.html';
    }
    
}plays()
  
}



//increment score
function incrementscore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) +1;
}

//ressult
function addSelectionResult(selection, winner) {
  
}  

//winner selection
function isWinner(selection, opponentSelection) {
  return (selection.beast === opponentSelection.name);
}

//random select
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

