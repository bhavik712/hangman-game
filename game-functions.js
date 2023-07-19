class Hangman {

    constructor (word,remainingGuesses){
    this.word = word;
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
    guessedLetters(letter){
        if(this.status === 'Playing'){
    
            let isUnique = !this.guessedletters.includes(letter) ;
            if(isUnique){
                this.guessedletters.push(letter);
            }
            else{
                return ('ohh already guessed character');
            }
            let isNotMatched = !this.word.toLowerCase().includes(letter);
            if(isUnique && isNotMatched){
                this.remainingGuesses--;
            }
        }
        
    }
    calculateStatus(){
        if(!this.remainingGuesses){
            this.status = 'Lost';
        }
        else{
            let finished = true;
            finished = this.wordArray.every((letter)=> this.guessedletters.includes(letter))
    
            this.status = finished ? 'Won' : 'Playing';
            }
        return this.status;
    }
    showMessage(){
        if(this.status === 'Playing'){
            return (`You have ${this.remainingGuesses} chance left`);
        }
        else if(this.status === 'Lost'){
            return (`better luck! next time. word was ${this.word}`);
        }
        else{
            return ('You did it dear!');
        }
    }

}
