var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

const rover = {
    properties: {
        direction: "N",
        colonne: 0,
        ligne: 0,
    }
}

function turnLeft (rover){
    
     return Object.defineProperty(rover,{
        direction: "W"
    })
    
    
}

function turnRight(rover){
    return {
        direction: "E"
    }
}

function moveForward(rover){
    
    return{
        colonne: 1
    }
}

turnLeft();

console.log(rover)