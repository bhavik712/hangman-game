let puzzleWord;
let gameStatus;
let message;
let guessResult;
class Hangman {

    constructor (word,remainingGuesses){
    this.word = word.toLowerCase();
    this.remainingGuesses = remainingGuesses;
    this.guessedletters = [];
    this.status = 'Playing'
    this.wordArray = this.word.split('');
    }

    getPuzzle(){
        let puzzle = '';
        this.wordArray.forEach((letter)=>{
            if(this.guessedletters.includes(letter)|| letter === ' '){
              puzzle += letter;
            }
            else{
              puzzle += '*';
            }
          })
    

    return puzzle;

    }
    showPuzzle(puzzleWord){
        const puzzleEle = document.querySelector('#puzzle-word')
        puzzleEle.textContent = puzzleWord;
    }
    guessedLetters(letter){
        if(this.status === 'Playing'){
    
            let isUnique = !this.guessedletters.includes(letter) ;
            if(isUnique){
                this.guessedletters.push(letter);
                 guessResult = (`you entered ${letter}`)
            }
            else{
                 guessResult; (`${letter} is already guessed`);
            }
            let isNotMatched = !this.word.toLowerCase().includes(letter);
            if(isUnique && isNotMatched){
                this.remainingGuesses--;
            }
        }
        return guessResult;
        
    }
    showGuessResult(guessResult){
        const showGuessResultEle = document.querySelector('#choice-result');
        showGuessResultEle.textContent = guessResult;
    }
    checkStatus(){
        if(!this.remainingGuesses){
            this.status = 'Lost';
        }
        else{
            const isWordGuessed = this.wordArray.every((letter)=> this.guessedletters.includes(letter))
            this.status = isWordGuessed ? 'Won' : 'Playing';
            }
        return this.status;
    }
    showStatus(gameStatus) {
        const statusEle = document.querySelector('#show-status');
        statusEle.textContent = gameStatus;
    
    }
    showMessage(){
        if(this.status === 'Playing'){
            message = (`You have ${this.remainingGuesses} chance left`);
        }
        else if(this.status === 'Lost'){
            message =  (`better luck! next time. word was ${this.word}`);
        }
        else{
            message = ('You did it dear!');
        }
        const messageEle = document.querySelector('#show-message');
        messageEle.textContent = message;

    }
    
}

const getNewWord = async () => {
    const response =  await fetch ('https://puzzle.mead.io/puzzle?wordCount=1')
    if(response.status === 200){
        const data = await response.json();
        return data.puzzle;
     
    }else{
        throw new Error('unable to fatch the data')

    }
}


