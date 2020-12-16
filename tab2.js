function Particle(x,y) { //update params
	
	this.accel = 1; //gravity
	this.grav = 0.1; //gravity
	this.velX = random(-10, 10);
	this.velY = random(0, 10);
	this.locX = x;
	this.locY = y;
	this.r1 = random(20,35);
	this.r2 = random(10,20)
	this.r3 = random(40,50)
	this.r4 = random(10,20)
	
	

	this.updateP = function() {
		this.velY*= this.accel;
		this.velY -= this.grav;
		this.velX*= this.accel;
		this.locX -= this.velX;
		this.locY -= this.velY;
    if(this.locY>height){
		 this.locY=height-15
		 this.velY=0
		 this.velX=0
		 this.accel=0
		 this.grav=0
		}

	}

	this.renderP = function() {
		noStroke();
		push();
		  colorMode(HSB)
			fill(34,72,100);
			translate(this.locX, this.locY);
			triangle(0, 0, this.r1, this.r2, this.r3, this.r4);		
		pop();
	}
}

function Explode(eX, eY) {
	this.particles = [];

	for (var i = 0; i < 1; i++) {
		this.particles.push(new Particle(eX, eY));
		}

	this.run = function() {
		for (var i = 0; i < this.particles.length; i++) {
			//update each particle per frame
			this.particles[i].updateP();
			this.particles[i].renderP();
			
		}
	}
}
