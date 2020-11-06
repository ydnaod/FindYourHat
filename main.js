const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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
  }

  const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

 myField.print();

  