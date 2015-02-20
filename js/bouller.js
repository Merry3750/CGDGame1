var Bouller = {
	function Circle(x, y, state)
	{
		this.x = x;
		this.y = y;
		this.active = true;
		this.state = state;
		this.radius = 25;
		this.color = "#FFF";
	}
	
	var b = Bouller.prototype;
	
	b.update = function(dt)
	{
		
	}
	
	b.draw = function(ctx)
	{
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill()
	}
}();