// console.log('hello from script');

// this is comment

/*
this is a mulitline comment
*/

// variables
// named storage

// declaring a variable
// let client;
// let mouse;
// let dog;
// console.log(client);

// assignment = initialization

// client = 'Mozilla';

// declaration and initialization is done at once
// let character = 'Vader';

// naming
// only $ or _ is allowed at the beginning apart from letters

// use camelCase
// let userName = 'Joe';

// variables with let can be reassigned
// userName = 'Mary';

// const cannot be reassigned
// const port = 3000;
// does not work : port = 5555;

// use const wherever possible
// never use var

// var is global scoped
// let is block scoped 
if (true) {
    let user = 'jack';
}
// console.log(user); - the variable user is not available
// here - only in the block within the {}

let phoneNumber = 6788;

// there are two types of data types - 
// objects and primitive data types
// primitive types: number, string, boolean, null, 
// undefined, symbol

phoneNumber = 'abcd';

// console.log(typeof phoneNumber);

// number and string

// numbers can be integers and floating numbers
// const distance = 788;
// const distance = 788.34;

// NaN - not number
// console.log('hello' * 3);

// Math operators
// const sum = 1 + 1;

// 3 - 1 // subtraction

// 5 * 8 // multiplication

// 4 / 2 // division

// 4 % 2 // modulo

// 3 ** 2 // exponentiation

// Expression is the combination of any values and 
// operator that results in another value
// 2 + 4 * 3;

// = -> assignment operator
// let num = 3;
// num = 5;

// shorthand operations
// x += 1 ->  x = x + 1 -> x++

// let num = 5;

// console.log('log: ', num++); 
// console.log('log: ', num);

// substract 2 
// x -= 2 x = x -2

// multiply by 3
// x *= 3 -> x = x * 3

// divide by 4
// x /= 4; // x = x /4;

// modulo 5
// x %= 5; // x = x % 5

// to the power of 6
// x **= 6; // x = x ** 6

// strings
// string is a sequence of characters
// let surname = 'miller';
// let name = 'joe';
// name = "joe";
// name = `jack`;

// backticks can embed variables
// const greeting = `Hello ${name}`;

// const greeting = 'Hello' + name;

// const greeting = 'hello';

// string properties and methods
// console.log('hello'.length);

// accessing characters

// console.log(greeting[0]);
// console.log(greeting.charAt(0));

// const user = 'joe';
// const country = 'usa';

// const greeting = 'hello' + ' ' + user + ' from ' + country;

// let greeting = `hello ${user} from ${country}`;

// greeting += '!!';

// console.log(greeting);


let firstName = 'johnny';
// const lastName = 'Doe';

// const initials = `${firstName[0]}${lastName[0]}`;
// console.log(initials);

// last character of the first name
// console.log(firstName[firstName - 1]);

// practical string methods 
// indexOf
// console.log(firstName.indexOf('n'));

// lastIndexOf
// console.log(firstName.lastIndexOf('n'));

// slice
// console.log(firstName.slice(0, 3));
// console.log(firstName.slice());

// toUpperCase
// strings are immutable
// console.log(firstName.toUpperCase());
// firstName = firstName.toUpperCase();
// console.log(firstName);

// const firstNameUpperCase = firstName[0].toUpperCase()
//     + firstName.slice(1);
// console.log(firstNameUpperCase);

// let name = 'john';


// booleans, undefined and null

// boolean operators
// boolean Expression - true or false
// 5 > 3 true 
// 3 < 1 false

// console.log(null == undefined);

// falsy : '',  0,  NaN, undefined, null

// let password = '';
// if (password) {
//     console.log('password is not set');
// }

// OR ||
// the || operator will evaluate to the first truthy expression it encounters, or to the last falsy expression
5 > 3 || 10 || "abc"; // true
false || 0 || 42 || "def"; // 42
4 < 3 || "" || 0 || NaN; // NaN

// AND &&
// the && operator will evaluate to the first falsy expression it encounters or to the last truthy expression
true && 1; // 1
42 && null && undefined && "xyz"; // null
-1 && "2" && -3; // -3

// NOT !
// the ! operator will return a boolean that is the negated value of the expression
!false; // true
!42; // false
!(4 > 2); // false


// undefined and null
// undefined is the unintentional absence of value 
// null is the intentional absence of value  

// conditionals and loops


// const age = Number(prompt("How old are you?"));
// if (age >= 18) {
//     alert("You can apply for a driving license in Germany");
// } else if (age === 17) {
//     alert("You can apply for accompanied driving");
// } else {
//     alert("You are too young to apply for a driving license");
// }

// switch (language) {
//     case "french":
//         console.log("Bonjour!");
//         break;
//     case "english":
//         console.log("Hello!");
//         break;
//     case "spanish":
//         console.log("Hola!");
//         break;
//     case "italian":
//         console.log("Ciao!");
//         break;
//     default:
//         console.log("Non recognized language");
// }

// iterations

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// let counter = 1;
// while (counter < 11) {
//     console.log(counter);
//     counter++;
// }

let password = prompt('please enter the password');
while (password !== '123') {
    password = prompt('please enter the password');
}
// this is where i am when line 261 is false
alert('password is correct')