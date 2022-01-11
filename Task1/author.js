"use strict"

class Author {
    constructor (name, email, gender) {
        this._name = name;
        this.email = email;
        this.gender = gender.toLowerCase();
    };

    get name() {
        return this._name;
    }

    set name(value) {
        if(typeof value === "number") {
            throw new Error ("name should be string");
        };
    }

    toString() {
        if (this.gender === "male") {
            return `Mr. ${this.name}`;
        } else if(this.gender === "female") {
            return `Ms. ${this.name}`;
        };
    };
};

class Book extends Author{
    constructor(title, author, price, quantity) {
        super(toString, gender)
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    };
};

const author1 = new Author("J. K. Rowling", "abs@mail.com", "female");
console.log(author1.toString());