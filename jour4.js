// let numbers = [];
// let somme = null;

// for (i=0; i<50; i++){
// numbers.push(Math.floor(Math.random() * (200 - 50 + 1) + 50))

// }
// console.table(numbers)

// while(numbers.indexOf()>=75){
//     console.log(numbers)
// }

// let cat = {
//     name :'Garfield',
//     age : 3,
//     IsCute : true,
// }

// let cat2 = {
//     name : 'CocaCola',
//     age : 10,
//     IsCute : false, 
// }

// let cats = [cat, cat2]

// console.table(cats)

// console.log(cat.age)

// console.log(cat2.IsCute)


// function CheckIfEven(num){
//     if (num%2 == 0){
//         console.log("even")
//     }else{
//         console.log('odd')
//     }
// }

// CheckIfEven(3)


// function compare(num1, num2){
//     if (num1>num2){
//         console.log('num1 is bigger')
//     } else if (num2>num1) {
//         console.log('num2 is bigger')
//     } else {
//         console.log('both are the same')
//     }
// }
// num1 = 2
// num2 = 1

// return compare(num1, num2)




// function format(num) {
//     let hours = Math.floor(num / 3600);
//     let restHours = num % 3600;
//     let minutes = Math.floor(restHours / 60);
//     let secondes = restHours % 60;
//     console.log(`${hours}: ${minutes} : ${secondes}`);
// }

// format(3700)

// let password = "";
// function generatePassword(num){


//     for(i=0; i<=num;i++){
//       return String.fromCharCode((Math.random() * (90 - 65 + 1) + 65)) 


//     }

// }

// console.log(generatePassword(0))


// function launchDice(numberOfDice) {
//     for (let i = 1; i <= numberOfDice; i++) {
        
//         console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));
//         joueur1 =+ i
//     joueur2 =+ i
//     }

    

//     if (joueur1<joueur2){
//         console.log("joueur2 win!")
//     } else if (joueur2 < joueur1) {
//         console.log("joueur1 win!")
//     } else {
//         console.log("egalité!")
//     }

    
// }





// launchDice(5)
// launchDice(5)
     
// function formatDate(string){
// let date = new Date();
// console.log(date.getDate(), date.getMonth(),date.getFullYear())


// }


// formatDate()


function calculateAge(date){
   result = (2021 - date)
    console.log(result)
}


calculateAge(35)


// let prompt = require("prompt");

// let schema = {
//     properties: {
        
//         email:{
//             description: "Entrez votre mail...",
//             pattern: /\@/,
//             requiered: true,
//             message: "Entrez une email valide",
//             },
//         username: {
//             description: "Entrez votre username...",
//             pattern: /[a-z0-9]+\-*/gi,
//             required: true,
//             message: "Entrez un username valide",
//         } ,

//         password: {
//             description: "Entrez votre MDP...",
//             pattern:  /[a-z0-9]{6,}\-*/gi,
//             required: true,
//             message: "Entrez un MDP valide",
//         }
// }
// }

// function chekProfile(){
//     prompt.get(schema, (err,result) => {
//         if (result !==){
//             console.log("error")
//         } else {
//             console.log("All good!")
//         }
//     }
    
    

//     )
// }

// prompt.start();
// chekProfile()
