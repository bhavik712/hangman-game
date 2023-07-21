
getPuzzle().then((puzzle)=>console.log(puzzle)
).catch((error)=>(console.log(error)))

const game1 = new Hangman('chair',2);
const game2 = new Hangman('New Body',4);
// onsole.log(game1.getPuzzle());

showPuzzle = () =>{
    const puzzleWord = game1.getPuzzle();
    const puzzleEle = document.querySelector('#puzzle-word')
    puzzleEle.textContent = puzzleWord;
}

showStatus = () => {
    game1.calculateStatus();
    const statusEle = document.querySelector('#show-status')
    statusEle.textContent = game1.status;

}

showPuzzle();

window.addEventListener('keypress',(e)=>{
    const letter = (String.fromCharCode(e.charCode)).toLocaleLowerCase();
    (game1.guessedLetters(letter));
    showPuzzle();
    showStatus();
    const message = game1.showMessage();
    const messageEle = document.querySelector('#show-message')
    messageEle.textContent = message;

})
