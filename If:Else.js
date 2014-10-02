
// Create an array of foods. Then create an if/else statement that prints "You have no food" 
// if they array is empty, "You have one food" if there is exactly 1 item in the list, and 
// 	"You have lots of food" otherwise.

food = ["spaghetti", "tacos", "burritos", "sushi", "naan"] 
	if (food.length == 0) {
	console.log("You have no food");
	} else if (food.length == 1) {
	console.log("You have one food"); 
	} else {
	console.log("You have lots of food");
	}

