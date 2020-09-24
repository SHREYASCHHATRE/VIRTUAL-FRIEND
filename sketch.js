var dog,happydog,database,foodS,normaldog
 
 
function preload(){
  happydog=loadImage("happydog.png")
  normaldog=loadImage("Dog.png")
}

function setup(){
  createCanvas(500,500)
  dog=createSprite(250,250)
  dog.addImage(normaldog)
  dog.addImage(happydog) 
  database=firebase.database()
  var foodstock=database.ref("food")
  foodstock.on("value",readstock)
}
  
function draw(){
  background(46,139,87)

  if(keyDown(RIGHT_ARROW)){
    writeStocks(foodS)
    dog.changeAnimation(happydog)
  }
}
 
function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
     food:x
  })
}

  
  
  
  
  
  
  
  
  
  
  
  
  
 