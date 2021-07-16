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
let prompt = require("prompt");

prompt.start();

let mysteryNum = Math.floor(Math.random()* (100 - 1 + 1)+ 1);

function play(num){

    prompt.get(["Entrez un nombre"])

    if(num == mysteryNum){
        console.log("error")
    } else if (num < mysteryNum ){
        console.log("C'est plus!")
    } else if (num > mysteryNum){
        console.log("C'est moins!")
    } else if (num === mysteryNum){
        console.log("Bravo!")
    }

    }
    play()

    

    