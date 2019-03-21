import { Book } from './Book';

export enum Gender {Men="Men", Woman="Woman"}

export class User {

    name: string;
    age: number;
    gender: Gender;
    description: string;
    books: Array<Book> = new Array();
    constructor (name: string, age:number, gender:Gender) {
        this.name = name;
        this.age=age;
        this.gender=gender;
        document.getElementById("users").innerHTML += 
        `<h2>New user</h2>
        <div>Name: ${this.name}</div>
        <div>Age: ${this.age} - Gender:${this.gender}</div>`;
    }

    addBook(book: Book){
        this.books.push(book);
    }

}