class Console {
    constructor(...args) {
        this.args = args;
        this.historyList = [];
    };

    log(...args) {
        const res = args.length <= 1 ? 
            `${this.args[0]}` + ": " + JSON.stringify(args[0]) : 
                JSON.stringify(typeof args[1] === "number" ?
                     args : 
                        args[1]).slice(1, -1);
        this.historyList.push(res);
        return res;
    };

    history(min, max) {
        const res = min < max ?
            this.historyList.slice(min, max) :
                 this.historyList;
        return res;
    };

    clearHistory() {
        return this.historyList = [];
    }
};

const myConsole = new Console("Regular");
const myFancy = new Console("Fancy");

console.log(myConsole.log([0, 1, 2, 3]));
console.log(myFancy.log({a:1, b: 2}));
console.log(myConsole.log("HASH :", 1, 2, 3));
console.log(myConsole.log("RGB :", 5, 2, 3));
console.log(myConsole.historyList);
console.log(myConsole.history(1, 3)) // history range
console.log(myConsole.clearHistory());
console.log(myConsole.historyList); // history was cleared