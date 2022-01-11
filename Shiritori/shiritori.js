"use strict"

class Tori {
    constructor() {
        this.words = [];
        this.game_over = false;
    };

    play(word) {
        if(this.words.length < 1) {
            this.words.push(word);
        } else {
            let current = 0;
            let previousLetter = this.words[current].slice(-1);
            this.words.push(word);
            this.words.slice(1).forEach(function(word) {
                if(word.slice(0, 1) === previousLetter) {
                    console.log("yes");
                    current++;
                }
            })
        }
    }
}




const game1 = new Tori();

game1.play("word");
game1.play("dram");
game1.play("such");
console.log(game1.words)