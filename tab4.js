function Cookie(x,y) { //update params
	
	this.x=x
	this.y=y
	this.size=200
	this.level=0
	this.xspeed=random(4,6)
	this.yspeed=random(1,3)
	this.n=30
	this.lastx=0
	
	//this.smash=false
	
	
	

	this.float = function() {
		
		this.x += this.xspeed;
		this.y += this.yspeed;
		if (this.x  > width - this.size || this.x  < 0) {
			this.xspeed *=-1;
		}
		if (this.y  > height - this.size || this.y  < 0) {
				this.yspeed *=-1;
		}
	}
	
	//if hit or not
	this.hit=function(x,y){
		if(this.n<0){
			this.n=30
			}
		this.n-=1
		
		let d=dist(width-x,y,this.x+this.size/2,this.y+this.size/2)
		if(d<=125&&this.n==1){
				this.level+=1
			  return true
		}
	
 }	
	
	
	
	
	this.show=function(){
		
		if(this.level==0){
			image(img,this.x,this.y,this.size,this.size)
		}
			if(this.level==1){
			image(img1,this.x,this.y,this.size,this.size)
		}
			if(this.level==2){
			image(img2,this.x,this.y,this.size,this.size)
		}
			if(this.level==3){
			image(img3,this.x,this.y,this.size,this.size)
		}
			if(this.level==4){
			image(img4,this.x,this.y,this.size,this.size)
		}
			if(this.level==5){
			image(img5,this.x,this.y,this.size,this.size)
		}
			if(this.level==6){
			 this.xspeed=0
			 image(img6,this.x,this.y,150,150)
			 image(img7,this.x-300,this.y,150,150)
			 image(img8,this.x-100,this.y,150,150)
			 image(img9,this.x+100,this.y,150,150)
			 this.y+=5
			 if(this.y>=height-100){
					this.y=height-100
				  
	}
		}
			
	
	}
	

// 	this.renderP = function() {
// 		noStroke();
// 		push();
// 		  colorMode(HSB)
// 			fill(34,72,100);
// 			translate(this.locX, this.locY);
// 			triangle(0, 0, this.r1, this.r2, this.r3, this.r4);		
// 		pop();
// 	}
 }