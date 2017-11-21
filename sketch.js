var capture;
var mic;
var myImg,myImg2,myImg3;

function preload(){
    myImg=loadImage('./assets/Glasses-High-Quality-PNG.png');
    myImg2=loadImage('./assets/Moustache-PNG-Clipart.png');
}

function setup() {
	createCanvas(640, 480);
	capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();
    
    mic = new p5.AudioIn();
    mic.start();
    

}

function draw() {

	var myImage = capture.loadPixels();
	
	image(myImage, 0, 0, 640, 480);
    
    var vol = mic.getLevel();
    
    
    if(mouseIsPressed) {
     if(mouseButton == 'left') {
      image(myImg,230,150,170,140);
      filter(GRAY)
     } else if (mouseButton == 'right') {
      image(myImg2,240,270,140,40);
      filter(GRAY)
     }
        
   
}
}