module.exports = (multiply, addition)



let result = null;
function multiply(number){
    for(i=0; i<=10; i++){
        result = number*i
        console.log(result)
    }

    // if (number=undefined){
    //     console.log(error)
    // }
}

let add = null;
function addition(num1){
    for(i=0; i<=10; i++){
        add = num1+i
        console.log(add)
    }
}

multiply(3)
addition(6)