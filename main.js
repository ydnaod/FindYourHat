const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let charPosition;
let game = true;

class Field {
    constructor(field){
        this._field = field;
    }
    
    print(){

        let stringField = '';
        for(let i=0; i < this._field.length; i++)
        {
            for(let x=0; x < this._field[i].length; x++)
            {
                stringField += this._field[i][x];
            }
            stringField += '\n';
        }
        console.log(stringField);
    }

    moveCharacter(dir, charPos){
        if(dir === 'u' && charPos[0] === 0){
            console.log('Invalid instructions');
            return;
        }
        else if(dir === 'l' && charPos[1] === 0){
            console.log('Invalid instructions');
            return;
        }
        else if(dir === 'r' && charPos[0] === this._field.length){
            console.log('Invalid instructions');
            return;
        }
        else if(dir === 'd' && charPos[0] === this._field.length){
            console.log('Invalid instructions');
            return;
        }
        else if((dir === 'u') && ((this._field[charPos[0] -1][charPos[1]] === '░') || (this._field[charPos[0] -1][charPos[1]] === '*'))){
            charPosition = [charPos[0] - 1, charPos[1]];
            this._field[charPos[0] - 1][charPos[1]] = '*';
            return;
        }
        else if((dir === 'd') && ((this._field[charPos[0] +1][charPos[1]] === '░') || (this._field[charPos[0] +1][charPos[1]] === '*'))){
            charPosition = [charPos[0] + 1, charPos[1]];
            this._field[charPos[0] + 1][charPos[1]] = '*';
            return;
        }
        else if((dir === 'l') && ((this._field[charPos[0]][charPos[1] - 1] === '░') || (this._field[charPos[0]][charPos[1] -1] === '*'))){
            charPosition = [charPos[0], charPos[1] - 1];
            this._field[charPos[0]][charPos[1] - 1] = '*';
            return;
        }
        else if((dir === 'r') && ((this._field[charPos[0]][charPos[1] + 1] === '░') || (this._field[charPos[0]][charPos[1] +1] === '*'))){
            charPosition = [charPos[0], charPos[1] + 1];
            this._field[charPos[0]][charPos[1] + 1] = '*';
            return;
        }
        else if((dir === 'u') && (this._field[charPos[0] -1][charPos[1]] === 'O')){
            this.hole();
        }
        else if((dir === 'd') && (this._field[charPos[0] +1][charPos[1]] === 'O')){
            this.hole();
        }
        else if((dir === 'l') && (this._field[charPos[0]][charPos[1] - 1] === 'O')){
            this.hole();
        }
        else if((dir === 'r') && (this._field[charPos[0]][charPos[1] + 1] === 'O')){
            this.hole();
        }
        else if((dir === 'u') && (this._field[charPos[0] -1][charPos[1]] === '^')){
            this.hat();
        }
        else if((dir === 'd') && (this._field[charPos[0] +1][charPos[1]] === '^')){
            this.hat();
        }
        else if((dir === 'l') && (this._field[charPos[0]][charPos[1] - 1] === '^')){
            this.hat();
        }
        else if((dir === 'r') && (this._field[charPos[0]][charPos[1] + 1] === '^')){
            this.hat();
        }
        else {
            {
                console.log('Please use u, l, d, or r');
                return;
            }
        }
    }

    hat(){
        console.log('You found your hat! Yay!');
        game = false;
    }

    hole(){
        console.log('You fell in a hole! Oops.');
        game = false;
    }

    runGame(){
        for(let i=0; i < this._field.length; i++)
        {
            for(let x=0; x < this._field[i].length; x++)
            {
                if(this._field[i][x] === '*'){
                    charPosition = [i, x];
                }
            }
            console.log(charPosition);
        }
        while(game === true){
            myField.print();
            let direction = prompt('Pick a direction to move in: ');
            this.moveCharacter(direction, charPosition);
          }
    }

  }

  const myField = new Field([
    ['░', '░', 'O'],
    ['*', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.runGame();
 

  