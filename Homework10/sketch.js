var redColor = 211;
var blueColor = 224;
var greenColor = 233;

//rectangle 1 movement
var x = 180;
var y = 230;
var a = 80;
var b = 50;

//rectangle 2 movement
var c = 40;
var d = 230;
var e = 80;
var f = 50;

//line 1 movement
var g =180;
var h =250;
var i =120;
var j =250;

//circle 1 movement
var k =80;
var l =230;
var m =50;

//circle 2 movement
var n =220;
var o =230;
var p =50;

//pupil 1 movement
var q =220;
var r =227;

//pupil 2 movement
var s =80;
var t =227;

//freckle movement
var u =90;
var v =320;

//text size
var sizeDirection = 3;
var size = 32;
var count = 0;


function setup() {
	
  createCanvas(300,500);
  
/*movement variables - I had to make multiple so they wouldn't
affect each other below! */
  movementa = floor(random() * 10) +1;
  movementb = floor(random() * 10) +1;
  movementc = floor(random() * 10) +1;
  movementd = floor(random() * 10) +1;
  movemente = floor(random() * 10) +1;
  movementf = floor(random() * 10) +1;
  movementg = floor(random() * 10) +1;
  movementh = floor(random() * 10) +1;
  

}

function draw() {
	
  background(redColor,greenColor,blueColor);
  fill(222, 165, 164);
  circle(150, 250, 290);
  fill(255, 255, 255);
  circle(k, l, m);
  circle(n, o, p);
  circle(k, l, 25);
  circle(n, o, 25);
  rect(x,y,a,b);
  rect(c,d,e,f);
  triangle(140, 310, 140, 230, 170, 270);
  point(u, v);
  line(g, h, i, j);
  line(260, 250, 300, 270);
  line(40, 250, 5, 280);
  line(40, 2300, 40, 165);
  line(30, 2300, 30, 168);
  line(20, 2300, 20, 186);
  line(10, 2300, 10, 210);
  line(35, 147, 60, 200);
  line(80, 130, 60, 200);
  line(75, 147, 120, 200);
  line(120, 200, 124, 140);
  line(164, 200, 125, 145);
  line(200, 145, 164, 203);
  line(200, 145, 250, 200);
  line(250, 200, 230, 125);
  line(240, 145, 240, 3000);
  line(250, 150, 250, 3000);
  line(260, 155, 260, 3000);
  line(270, 168, 270, 3000);
  line(280, 190, 280, 3000);
  line(290, 220, 290, 3000);
  line(70, 330, 120, 370);
  strokeWeight(7);
  fill(63, 127, 155);
  text('Brenna Bibler', 42, 480);
 
 //rectangle 1 movement
  if(y >= 250 || y <= 0)
    {
       movementa *= -1;
    }
	
     y -= movementa;

//rectangle 2 movement
	if(d >= 250 || d <= 0)
    {
       movementb *= -1;
    }
     d -= movementb;

/*line 1 movement (or vibration, if you will. 
I'm going for a more chaotic look.*/
	if(h >= 250 || h <= 0)
	{
		movementc *= -1;
    }
     h -= movementc;
	 
	if(j >= 250 || j <= 0)
    {
       movementd *= -1;
    }
     j -= movementd;
	 
//circle 1 movement
	if(k >= 300 || k <= 0)
    {
       movemente *= -1;
    }

     k += movemente;

//circle 2 movement
	if(n >= 300 || n <= 0)
    {
       movementf *= -1;
    }

     n += movementf;
	
//freckle movement
	if(v >= 500 || v <= 300)
    {
       movementh *= -1;
    }

     u += movementh;
	 v += movementh;
	 
//text size
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
	text('Line by Line', 30, 50);




}