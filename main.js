canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

backgroundImg = "parkingLot.jpg"; 
greencarImage = "car2.png";

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y = 225;

function add() {
    backgroundImgTag = new Image;
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImg;

    greencarImageTag = new Image
    greencarImageTag.onload = uploadGreenCar;
    greencarImageTag.src = greencarImage;

}   

function uploadBackground(){

	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar(){

	ctx.drawImage(greencarImageTag, greencar_x, greencar_y, greencar_width, greencar_height,);

}

window.addEventListener("keydown", myKeyDown);
console.log(myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
			
}

function left() {
    
    if (greencar_x >= 0) {
        
        greencar_x = greencar_x - 10; 
        console.log("Quando a seta para esquerda for pressionada, X = " + greencar_y + "Y = " + greencar_y);
        uploadBackground();
        uploadGreenCar();
        
    }
}

function right() {
    
    if (greencar_x <= 700) {
        
        greencar_x = greencar_x + 10; 
        console.log("Quando a seta para esquerda for pressionada, X = " + greencar_y + "Y = " + greencar_y);
        uploadBackground();
        uploadGreenCar();
    }
}

function up() {
        
    if (greencar_y >= 0) {
        
        greencar_y = greencar_y - 10; 
        console.log("Quando a seta para cima for pressionada, X = " + greencar_x + "Y = " + greencar_x);
        uploadBackground();
        uploadGreenCar();

    }
}

function down() {
    
    if (greencar_y <= 500) {
        
        greencar_y = greencar_y + 10; 
        console.log("Quando a seta para baixo for pressionada, X = " + greencar_x + "Y = " + greencar_x);
        uploadBackground();
        uploadGreenCar();
        
    }
}