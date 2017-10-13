function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price);
}

var GalaxyS6 = new Phone("Samsung", "2250", "silver");
var iPhone6S = new Phone("Apple", "3697", "black");
var One = new Phone("OnePlus", "2557", "white");

GalaxyS6.printInfo();
iPhone6S.printInfo();
One.printInfo();