"use strict"

class Tori {
    constructor() {
        this.words = [];
        this.game_over = false;
    };

    play(word) {
        let toMap = {};
        let resultToReturn = false;
        this.words.push(word.toUpperCase());
        if(this.words.length <= 1) {
            return;
        } else {
            if(this.game_over !== true) {
                for(let i = 1; i < this.words.length; i++) {
                    if(this.words[i - 1].slice(-1) !== this.words[i].slice(0, 1)){
                        this.game_over = true
                        this.words = [];
                        console.log("Game over");
                    };
                    if(toMap[this.words[i]]) {
                        resultToReturn = true;
                        break;
                    };
                    toMap[this.words[i]] = true;
                };
                if(resultToReturn) {
                    this.game_over = true;
                    this.words = [];
                    console.log('word already exist, Game over');
                };
            };
        };
    };

    restart() {
        this.game_over = false;
        this.words = [];
        console.log("New Game");
    }

    words() {
        return this.words;
    }
}

const game1 = new Tori();

game1.play("word");
game1.play("dram");
game1.play("month");
game1.play("Hit"); // uppercase letter already working
game1.play("trim");
game1.play("month"); // duplicate should be Game over

game1.restart();

game1.play("some");
console.log(game1.words); // ["SOME"];
