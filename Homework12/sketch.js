// WASD controls
var w = 87; 
var a = 65;
var s = 83;
var d = 68;


// variables
var charX = 700;
var charY = 700;
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

mouseClickX = mouseX;
mouseClickY = mouseY;

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
	//set background color
    background(248,200,220);
	
	 //call borderDraw - sets the borders
    borderDraw();

    //call createChar - creates your character
	createChar();
	
	//call moveChar - moves your character
	moveChar();
	
	//call exitMesg - displays exit message
	exitMesg();
	
	//call attckCircles - displays attacking circles
	attackCircles();
	
	//call randomSpeed - sets random speed at beginning
	randomSpeed();
	
	//call otherSide - makes circles come back from the other side of screen
	otherSide();
	
	//call moveCircles - makes the circles move
	moveCircles();
	
	//call yellowAttack - calls the yellow circle
	yellowAttack();
	
	//call charGoal - checks to see if character has reached goal
	charGoal();
	
	mouseClicked();
	
	
	
	function borderDraw()
	{
	rect(0,0,width,8);
    rect(0,60,10,height);
    rect(0, height-10,width,10);
    rect(width-10,7,10,height);
	}

	function createChar()
	{
	fill(139, 211, 230);
    circle(charX,charY,diameter);
	}

	
	function randomSpeed()
	{
     //setting random speed at beginning
     XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 CSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 DSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 ESpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	 FSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	}
	
	function moveCircles()
	{
    //moving the circles
    shapeX += XSpeed;
    shapeY += YSpeed;
	shapeC -= CSpeed;
	shapeD -= DSpeed;
	shapeE += ESpeed;
	shapeF -= FSpeed;
	}
	
	function otherSide()
	{
	//makes the circles come out the other side
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
	}
	
	function exitMesg()
	{
	//shows where the ending position is
	t1 = "END";
	t2 = 20;
	t3 = 20;
	t4 = 50;
    textSize(t2);
    text(t1, t3, t4);
	}

	function attackCircles()
	{
	//creating attacking circles
    fill(0, 0, 0);
    circle(shapeX, shapeY, 75);
	fill(250, 200 , 152);
	circle(shapeC, shapeD, 50);
	fill(253, 253, 150);
	circle(shapeE, shapeF, 100);
	}
	
	function yellowAttack()
	{
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
         shapeF += 5; 
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
         diameter2 += 50;
     }
	}
 
	function charGoal()
	{
    // check to see if the character found the goal
    if(charX <= 45 && width && charY <= 60 && height)
    {
        textSize(26);
        text("That's a score!", width/2-50, height/2-50);
    }
	}

    //create the shape based on the mouse click
	
	function mouseClicked()
	{
	fill(177,156, 217);
    circle(mouseClickX, mouseClickY, 50);
	}
}



	function moveChar()
	{
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
}

//CREDIT: I took drew major inspiration from Michael Cassens' code while designing this homework assignment!!!