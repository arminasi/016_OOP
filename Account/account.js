"use strict"

class Account {
    constructor(name, balance = 0) {
        this._id        = Account.incrementId();
        this._name      = name;
        this._balance   = balance;
    };

    get id() {
        return this._id;
    };

    set id(value) {
        if(typeof value !== "number") {
            throw new Error("Id should be number");
        }
    };

    get name() {
        return this._name;
    };

    set name(value) {
        if(typeof value !== "string") {
            throw new Error("Name should be string");
        };
    };

    get balance() {
        return this._balance;
    };

    set balance(value) {
        if(typeof value !== "number") {
            throw new Error("Balance should be number");
        }
    };

    static incrementId() {
        if (!this._id) {
            this._id = 1;
        } else 
            this._id++
        return this._id;
    }

    static identifyAccounts(savingAcc, anotherAcc) {
        if(savingAcc._id === anotherAcc._id) {
            return true;
        } else
            return false;
    }

    credit(amount) {
        amount += this._balance;
    };

    debit(amount) {
        if((this._balance - amount) >= 0) {
            this._balance - amount;
        } else
            console.log("Amount exceeded balance."); 
    };

    transferTo(otherUser, amount) {
        if(this._balance - amount >= 0) {
            this._balance -= amount;
            otherUser._balance += amount;
        } else
            console.log(`${this._name} haven't ${amount} balance.`);
    };

    toString() {
        console.log(`${this._name} account balance is $${this._balance}.`)
    }
}

const user1 = new Account("Vera", 100);
const user2 = new Account("Linda", 100);
const another = user1;

console.log(Account.identifyAccounts(user1, another)); // true because id is same.
console.log(Account.identifyAccounts(user2, another)); // false because different id.
console.log(another);
user1.transferTo(user2, 50);
user2.transferTo(user1, 40);
user1.transferTo(user2, 300)
console.log(user1);
console.log(user2);
console.log(user2.toString());