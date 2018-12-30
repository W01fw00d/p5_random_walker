function setup() {
  createCanvas(400, 400);
	walker = new Walker();
}

function draw() {
  background(220);
	walker.display();
	walker.walk();
}

function Walker() {
	this.x = width / 2;
	this.y = height / 2;
	
	this.walk = function() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5); 
	}
	
	this.display = function() {
		fill(255);
		
		walkerWidht = random(50, 60);
		walkerHeight = random(50, 60);
		
		ellipse(this.x, this.y, walkerWidht, walkerHeight);
	}
}