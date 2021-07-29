// function calculate(num1, num2, ope) {

//     switch (ope) {
//         case 1 :

//             console.log(num1-num2);
//             break;
//         case 2:
//            console.log(num1+num2);

//             break
//         case 3:
//             console.log(num1*num2);
//             break
//         case 4:
//             console.log(num1/num2);
//             break;
//         default:
//             console.log("error")
//     }


// }

// calculate(5,4,2)

// let result = null;
// function multiply(number){
//     for(i=0; i<=10; i++){
//         result = number*i
//         console.log(result)
//     }

//     // if (number=undefined){
//     //     console.log(error)
//     // }
// }

// multiply(1208)


// let ext = require("./external.js");

// console.log(ext);





// let prompt = require("prompt");

// let mysteryNum = Math.floor(Math.random() * 100 + 1);

// let schema = {
//     properties: {
//         number: {
//             description: "Quel est le nombre mystère?",
//             pattern: /^\d{1,3}$/,
//             required: true,
//             message: "Entrez un nombre entre 1 et 100"
//         }
//     }

// }

// function play() {

//     prompt.get(schema, (err, result) => {

//         var number = parseInt(result.number);
//         if (number < mysteryNum) {
//             console.log("C'est plus!" + mysteryNum)
//         } else if (number > mysteryNum) {
//             console.log("C'est moins!" + mysteryNum)
//         } else if (number === mysteryNum) {
//             console.log("Bravo!")
//         }

//     })
// }

// prompt.start();

// play();

// let colors = require("colors");
// let prompt = require("prompt");

// let mysteryWord = "frite";

// let schema = {
//     properties: {
//         word: {
//             description: "Vous avez 6 tentatives pour trouver ce mot en 5 lettres",
//             pattern: /^\w{5,5}$/,
//             requiered: true,
//             message: "Quel dommage, c'est perdu!"
//         }
//     }
// }

// function motus() {
//     prompt.get(schema, (err, result) => {
        
//             if (result.word === mysteryWord) {
//                 console.log("Yeah")
//             } else {
//                 let answer = result.word.split("");
//                 let letters = {}
//                 for (let i = 0; i<5; i++){
//                     let letter = result.word[i];
//                     if(letter === mysteryWord[i]){
//                         answer[i] = letter.red;
//                         letters[letter] = i +1;
//                     }
//                 }

//                 for (let i = 0;i < 5; i++){
//                     let letter = result.word[i];
//                     if (mysteryWord.indexOf(letter) > -1){
//                         if (letters.hasOwnProperty(letter)){
//                             if (mysteryWord.indexOf(letter, letters[letter]) >-1){
//                                 answer[i] = letter.yellow;
//                                 letters[letter] = i+1;
//                             }
//                         } else {
//                             answer[i] = letter.yellow;
//                             letters[letter] = i+1;
//                         }
//                     }
//                 }
//                 console.log(answer.join(""));
//                 motus();
                
//             }
//         }
    
//     )}
        
//         prompt.start()
//         motus();



        //     if (word === mystery) {
        //                 console.log("Bravo!!!")
        // } else if (word=== mystery) {
        //      console.log(word.charAt(0))
        //  } 
        