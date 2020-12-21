


var dog , happyDog , foodS , foodStock, database;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(500,500);
    database = firebase.database;

    foodStock=database.ref('Food')
    foodStock.on("value",readStock);




   
}
function draw(){
background(46,139,87)

if(keyWentDown){
    writeStock(foodS);
}
drawSprites()
Text("Note:Press UP arrow key to feed drago milk",250,100)
}

function readStock(data){
    foodS=data.val()
}

function writeStock(x){

    database.ref('/')({
        food:x
    })
}



