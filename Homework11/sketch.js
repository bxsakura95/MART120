// WASD controls
var w = 87; 
var a = 65;
var s = 83;
var d = 68;

// variables
var charX = 400;
var charY = 400;
var diameter = 50;
var diameter2 = 25;
var shapeX = 30;
var shapeY = 50;
var shapeC = 330;
var shapeD = 550;
var shapeE = 700;
var shapeF = 600;
var XSpeed;
var YSpeed;
var CSpeed;
var DSpeed;
var ESpeed;
var FSpeed;

var mouseClickX;
var mouseClickY;

function setup()
{
    createCanvas(800, 800);
    XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
    YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
	CSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
	DSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
	ESpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
	FSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
}

function draw()
{
    background(248,200,220);
    //borders
    rect(0,0,width,8);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,60,10,height-50);

    // exit message
    textSize(17);
    text("END", 750, 50)

    //creating character
    fill(139, 211, 230);
    circle(charX,charY,diameter);


    //key handling
    if(keyIsDown(w))
    {
        charY -= 10;   
    }
    if(keyIsDown(s))
    {
        charY += 10;   
    }
    if(keyIsDown(a))
    {
        charX -= 10;   
    }
    if(keyIsDown(d))
    {
        charX += 10;   
    }

    //creating attacking circles
    fill(0, 0, 0);
    circle(shapeX, shapeY, 75);
	fill(250, 200 , 152);
	circle(shapeC, shapeD, 50);
	fill(253, 253, 150);
	circle(shapeE, shapeF, 100);

     //setting random speed at beginning
     XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 CSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 DSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 ESpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 FSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 
    //moving the shapes
    shapeX += XSpeed;
    shapeY += YSpeed;
	shapeC -= CSpeed;
	shapeD -= DSpeed;
	shapeE += ESpeed;
	shapeF -= FSpeed;
	
    // make shapes come out the other side of the border
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
	
	if(shapeC > width)
    {
        shapeC = 0;
    }
    if(shapeC < 0)
    {
        shapeC = width;
    }
    if(shapeD > height)
    {
        shapeD = 0;
    }
    if(shapeD < 0)
    {
        shapeD = height;
    }
	
//else-if for yellow attack circle 
	if(shapeE <= 250)
     {
         shapeE += 10;
     } 
     else if(shapeE == 250 || shapeE <= 300)
     {
         shapeE += 2;
     }
     else if(shapeE > 300)
     {
        shapeE = 50;
     }
	 if(shapeF <= 200)
     {
         shapeF += 3;
     }
     else if(shapeF == 250 || shapeF <= 300)
     {
         shapeF += 1; 
     }
     else if(shapeF > 300)
     {
         shapeF = 50;
     }
     if(diameter2 <= 200)
     {
         diameter2 += 8;
     }
     else if(diameter2 == 200 || diameter2 <= 300)
     {
         diameter2 += 2;
     }
     else if(diameter2 > 300)
     {
         diameter2 = 25;
     }

    // check to see if the character found the goal
    if(charX > 750 && charY > 30)
    {
        textSize(26);
        text("That's a score!", width/2-50, height/2-50);
    }

    //create the shape based on the mouse click
    fill(177,156, 217);
    circle(mouseClickX, mouseClickY, 50);
}


function mouseClicked()
{
    mouseClickX = mouseX;
    mouseClickY = mouseY;
}

//CREDIT: I took drew major inspiration from Michael Cassens' code while designing this homework assignment!!!