// let fs = require("fs");

// fs.readFile("./jour7.txt", function(error, data){
//     console.log(data.toString())
// })

// let array = [1,2,3,4,5];
// let double = array.map(function(num){
//     return num * 2;
// });

// console.log(double)

// let longNames = [
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     },
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ]

// let shortNames = longNames.map(function(element){
//     return {
//         name: `${element.firstName} ${element.lastName}`
//     }
// })

// console.log(shortNames)

// let array = [1, "toto", 34, "javascript", 8];

// let numbers = array.filter(function(element){
//     return parseInt(element) === element;
// })


// console.log(numbers)

// let numbers = [1,2,3,4,5,6,7,8];
// let even = numbers.filter(function(element){
//     return element % 2 === 0;
// })

// console.log(even)

// let cake = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ];


// let chocolateCake = cake.filter(function (element){
//     return element.flavor === "chocolate";
// }) .map(function(element){
//     element.status = "Sold Out!"
//     return element; 
// })


// console.log(chocolateCake)

// let prompt = require("prompt")
// let randomWords = require("random-words")

// let wordLength = 5;

// var mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
// while (mysteryWord.length !== wordLength) {
//   mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
// }

// let schema = {
//     properties: {
//         letter: {
//             description: "Entrez une lettre...",
//             pattern: /^[a-z]{1}$/,
//             required: true,
//         },
//     },
// };

// let letters = [];

// function displayMysteryWord(){
//     return mysteryWord
//     .split("")
//     .map(function (letter){
//         if (letters.indexOf(letter)=== -1) {
//             return "_";
//         } else {
//             return letter;
//         }
//     })
//     .join(" ");
// }

// function numberOfMissingLetters(){
//     let missingLetters = mysteryWord.split("").filter(function (letter){
//         return letters.indexOf(letter) === -1;
//     });

//     return missingLetters.length;
// }

// function guess(remainingTry){
//     console.log(`Find the mystery word: ${displayMysteryWord()}`);

//     prompt.get(schema, (err, result) => {
//         letters.push(result.letter);

//         if(numberOfMissingLetters() === 0){
//             console.log(`Bravo tu as reussis!${mysteryWord}`)
//         } else {
//             remainingTry--;
//             if (remainingTry === 0){
//                 console.log(`Ahhh quel dommage! Le mot etait ${mysteryWord}`)
//             } else {
//                 console.log(`Ouch! Plus que ${remainingTry} ${remainingTry === 1 ? "chance" : "chances"}`)
//                 guess(remainingTry);
//             } 
//         }
//     });
// }

// prompt.start();
// guess(10);