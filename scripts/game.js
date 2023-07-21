let game1;


const startGame = async ()=>{
    const puzzle = await getNewWord();
    game1 = new Hangman (puzzle, 5);
    puzzleWord = game1.getPuzzle();
    game1.showPuzzle(puzzleWord);
    document.querySelector('#show-status').textContent = '';
    document.querySelector('#show-message').textContent = '';
    document.querySelector('#choice-result').textContent = '';

}

startGame();

const resetGameButton = document.querySelector('#reset-game')
resetGameButton.addEventListener('click', ()=> startGame());

// onsole.log(game1.getPuzzle());

window.addEventListener('keypress',(e)=>{
    const letter = (String.fromCharCode(e.charCode)).toLocaleLowerCase();
    guessResult = (game1.guessedLetters(letter));
    game1.showGuessResult(guessResult);

    puzzleWord = game1.getPuzzle();
    game1.showPuzzle(puzzleWord);

    gameStatus = game1.checkStatus();
    game1.showStatus(gameStatus);

    game1.showMessage();

})
