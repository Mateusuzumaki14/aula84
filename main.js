var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var roverW=100;
var roverH=90;
var roverX=10;
var roverY=10;
var backgroundimg="mars.jpg"
var roverimg="rover.png"
var roverimgTag=""
function add(){
    backgroundimgTag=new Image()
    backgroundimgTag.onload=uploadBackground;
    backgroundimgTag.src=backgroundimg


    roverimgTag=new Image()
    roverimgTag.onload=uploadRover;
    roverimgTag.src=roverimg

}
function uploadBackground(){
    ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height)
    
}
function uploadRover(){
    ctx.drawImage(roverimgTag,roverX,roverY,roverW,roverH)
    
}

window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="38"){
        up()
    }

    if(keyPressed=="40"){
        down()
    }

    if(keyPressed=="37"){
        left()
    }
    
    if(keyPressed=="39"){
        right()
    }



}

function up(){
    if(roverY >=0){

        roverY=roverY-10
        uploadBackground()
        uploadRover()
    }
}
function down(){
    if(roverY <=500){

        roverY=roverY+10
        uploadBackground()
        uploadRover()
    }
}
function right(){
    if(roverX <=600){

        roverX=roverX-10
        uploadBackground()
        uploadRover()
    }
}function left(){
    if(roverX >=0){

        roverX=roverX+10
        uploadBackground()
        uploadRover()
    }
}
