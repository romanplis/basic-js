const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.library = {};

    for(let i = 0; i < this.alphabet.length; i++) {
      this.library[this.alphabet[i]] = i;
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let messageUpperCase = message.toUpperCase();
    let keyUpperCase = key.toUpperCase();
    
    let codeWord = "";
    let keyIndex = 0;
    for(let i = 0; i < messageUpperCase.length; i++) {
      if (this.alphabet.includes(messageUpperCase[i])) {
        codeWord += this.alphabet[(this.library[messageUpperCase[i]] + this.library[keyUpperCase[keyIndex % keyUpperCase.length]]) % this.alphabet.length];
        keyIndex++;
      } else {
        codeWord += messageUpperCase[i];
      }    

    }
    return this.direction ? codeWord : codeWord.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    let messageUpperCase = message.toUpperCase();
    let keyUpperCase = key.toUpperCase();
    
    let codeWord = "";
    let keyIndex = 0;
    for(let i = 0; i < messageUpperCase.length; i++) {
      if (this.alphabet.includes(messageUpperCase[i])) {
        codeWord += this.alphabet[(this.library[messageUpperCase[i]] - this.library[keyUpperCase[keyIndex % keyUpperCase.length]] + this.alphabet.length) % this.alphabet.length];
        keyIndex++;
      } else {
        codeWord += messageUpperCase[i];
      }    

    }
    return this.direction ? codeWord : codeWord.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};









// создаем библиотеку
// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const library = {};
// for(let i = 0; i < alphabet.length; i++) {
//   library[alphabet[i]] = i;
// }

// function encrypt(message, key) {
//   let messageUpperCase = message.toUpperCase();
//   let keyUpperCase = key.toUpperCase();
  
//   let codeWord = "";
//   let keyIndex = 0;
//   for(let i = 0; i < messageUpperCase.length; i++) {
//     if (alphabet.includes(messageUpperCase[i])) {
//       codeWord += alphabet[(library[messageUpperCase[i]] + library[keyUpperCase[keyIndex % keyUpperCase.length]]) % alphabet.length];
//       keyIndex++;
//     } else {
//       codeWord += messageUpperCase[i];
//     }    

//   }
//   return codeWord;
// }

// function decrypt(message, key) {
//   let messageUpperCase = message.toUpperCase();
//   let keyUpperCase = key.toUpperCase();
  
//   let codeWord = "";
//   let keyIndex = 0;
//   for(let i = 0; i < messageUpperCase.length; i++) {
//     if (alphabet.includes(messageUpperCase[i])) {
//       codeWord += alphabet[(library[messageUpperCase[i]] - library[keyUpperCase[keyIndex % keyUpperCase.length]] + alphabet.length) % alphabet.length];
//       keyIndex++;
//     } else {
//       codeWord += messageUpperCase[i];
//     }    

//   }
//   return codeWord;
// }
// console.log("Encripted word: ", encrypt('attack at dawn!', 'alphonse'));
// console.log("Decripted word: ", decrypt('AEIHQX SX DLLU!', 'alphonse'));
