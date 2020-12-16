let stage=0
let eatnumber=0
let timer=15
let video;
let poseNet;
let poses = [];
let img,img1,img2,img3,img4,img5,img6,img7,img8,img9
let sound,drum

let fortune=[]
let pickfortune=[]
let n=30 //detect framerate
let cookie=[]
let explode=[]
let smash=false
let bcheight
let angle=0
let nosex,nosey





function preload(){
	img=loadImage('FC.png')
	img1=loadImage('FC1.png')
	img2=loadImage('FC2.png')
	img3=loadImage('FC3.png')
	img4=loadImage('FC4.png')
	img5=loadImage('FC5.png')
	img6=loadImage('bc1.png')
	img7=loadImage('bc2.png')
	img8=loadImage('bc3.png')
	img9=loadImage('bc4.png')
	img10=loadImage('mouth.png')
	img11=loadImage('mouth1.png')
	
	

	fortune=loadStrings('fortunecookie.txt')
	sound=loadSound('snap.mp3')
	drum=loadSound('drum.mp3')
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  textFont('Georgia')

  
  
	
	pickfortune.push(random(fortune),random(fortune),random(fortune),random(fortune),random(fortune))
  console.log(pickfortune)
	
	nosex=width/2
	nosey=height/2
	
  video = createCapture(VIDEO);
	video.size(windowWidth, windowHeight);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
		})
	for(let i=0;i<3;i++){
		cookie.push(new Cookie(random(200,800),random(100,height/2)))
	}
	
}
function modelReady() {
  select('#status').html('Model Loaded');
}


function draw(){
 //mirror
 
 background(255)
	crunch()
	
 
if(stage==0){
	countdown()
	drawFC()
	floating()
	hit()

}
if(stage==1){
	
  
	drawFortune()
	restart()
}
 


	
} 

function hit(){

  push()
	if (poses.length <= 0) return;
	let pose = poses[0].pose;
	translate(width,0); 
  scale(-1.0,1.0);
	fill(255,0,0)
	nosex = lerp(pose.nose.x-50, nosex, .5);
	nosey = lerp(pose.nose.y-50, nosey, .5);
	
  //drawmouth
	if(frameCount%15==0){
	image(img11,nosex,nosey,100,100)
	}
	else{
	image(img10,nosex,nosey,100,100)
	}
 	// ellipse(pose.nose.x,pose.nose.y,50,50)
  //ellipse(width-pose.nose.x,pose.nose.y,50)

  pop()
	
	
	for(let char of cookie){
		if (char.hit(pose.nose.x,pose.nose.y)){
			if(pose.nose.confidence>.1){
				sound.play()
		  	smash =true
				for(let i=0;i<10;i++){
					explode.push(new Explode(char.x,char.y))
				}
				if(char.level==6){
					eatnumber+=1
				}
			}
		}
	}
	
console.log(eatnumber)

	
}

function crunch(){
	
	if(smash){
 	 for(let i=0;i<explode.length;i++){
			explode[i].run()
		}
	}
}

function floating(){
  
	for(let char of cookie){
		char.float()
	}

}

function drawFC(){
	
	for(let char of cookie){
		char.show()
	}
	
	textAlign(CENTER)
	textSize(20)
	fill(0)
	text('Eat them in ',width/2,height*0.3+50)
	
}


function drawFortune(){

  
	//fortune

	fill(0)
	textAlign(CENTER)
	
	
	if(eatnumber==0){
		textSize(35)
		fill(240)
		noStroke()
  	rectMode(CENTER)
		rect(width/2,height/2+50,900,200)
		fill(0)
 		text('No fortune until you break it',width/2,height/2+100,900,200)
	}
	if(eatnumber==1){
		textSize(35)
		fill(240)
		noStroke()
  	rectMode(CENTER)
		rect(width/2,height/2+50,900,200)
		fill(0)
		text(pickfortune[0],width/2,height/2+100,900,200)
	}
	if(eatnumber==2){
		textSize(25)
		fill(240)
		noStroke()
  	rectMode(CENTER)
		rect(width/2,height/2+50,900,100)
		rect(width/2,height/2+160,900,100)
		fill(0)
		text(pickfortune[0],width/2,height/2+70,900,100)
		text(pickfortune[1],width/2,height/2+180,900,100)
	}
		if(eatnumber==3){
		fill(240)
		noStroke()
  	rectMode(CENTER)
		rect(width/2,height/2-20,900,80)
		rect(width/2,height/2+80,900,80)
		rect(width/2,height/2+180,900,80)
		fill(0)
		text(pickfortune[0],width/2,height/2,900,80)
		text(pickfortune[1],width/2,height/2+100,900,80)
		text(pickfortune[2],width/2,height/2+200,900,80)
		
	}
		if(eatnumber==4){
		fill(240)
		noStroke()
  	rectMode(CENTER)
		rect(width/2,height/2-40,900,60)
		rect(width/2,height/2+30,900,60)
		rect(width/2,height/2+100,900,60)
		rect(width/2,height/2+170,900,60)
		fill(0)
		textSize(20)
		text(pickfortune[0],width/2,height/2-20,900,60)
		text(pickfortune[1],width/2,height/2+50,900,60)
		text(pickfortune[2],width/2,height/2+120,900,60)
		text(pickfortune[3],width/2,height/2+190,900,60)
	}
		if(eatnumber==5){
		fill(240)
		noStroke()
  	rectMode(CENTER)
		rect(width/2,height/2-40,900,50)
		rect(width/2,height/2+20,900,50)
		rect(width/2,height/2+80,900,50)
		rect(width/2,height/2+140,900,50)
		rect(width/2,height/2+200,900,50)
		fill(0)
		textSize(15)
		text(pickfortune[0],width/2,height/2-30,900,50)
		text(pickfortune[1],width/2,height/2+30,900,50)
		text(pickfortune[2],width/2,height/2+90,900,50)
		text(pickfortune[3],width/2,height/2+150,900,50)
		text(pickfortune[4],width/2,height/2+210,900,50)
	}
	
	
	//restart button
	fill(0)
	noStroke()
	textSize(20)
	text('Eat me to restart',width/2,height*.25)
	image(img,width/2-20,height*.25-70,50,50)

}

function countdown(){
	if (frameCount % 60 == 0 ){
	timer--
	}
	if(timer<=0){
	stage=1
	}
	textSize(200)
	text(timer,width/2,height/2+100)
	textSize(20)
	text('sec',width/2+100,height/2+100)
	//console.log(stage)
}


function restart(){
	if (poses.length <= 0) return;
  let pose2 = poses[0].pose;
  
	//mouth
	push()

	translate(width,0); 
  scale(-1.0,1.0);
	fill(255,0,0)
	noStroke()
	nosex = lerp(pose2.nose.x-50, nosex, .5);
	nosey = lerp(pose2.nose.y-50, nosey, .5);
	image(img10,nosex,nosey,100,100)
	
	pop()
	
	
  
	if(pose2.nose.confidence>.5){
		if(nosey<height*0.25&&nosex>width/2-40&&nosex<width/2+40){
			stage=0
			timer=15
			eatnumber=0
			pickfortune=[]
			pickfortune.push(random(fortune),random(fortune),random(fortune),random(fortune),random(fortune))
			explode=[]
			cookie=[]
				
			for(let i=0;i<3;i++){
				cookie.push(new Cookie(random(200,800),random(100,height/2)))
				cookie.level=0
			}
			smash=false
		}
	}

	//console.log(pose2.leftWrist.confidence)
	

}