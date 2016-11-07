// SUPERHERO BACON
var hero = "Baconator";
var gender = null;
var age = 116;
var weapon = "pig";
var pronoun;
var xp;

if(gender == male){
	pronoun = "his";
}else if (gender == female){
	pronoun = "her";
}else if (gender == null){
	pronoun = "it";
}else{
	pronoun = "their";
}

if(age <= 18){
	xp = "is just beginning";
}else if (21 < age < 40){
	xp = "has seen a few battles";
}else if (age > 40){
	xp = "has lived through many epic battles";
}

console.log(hero + " is our lovable hero, who " + xp + " with his trusty " + weapon + "!!!");

// PHISH
var count;
var animal = "pig";

function animalHouse(a,b){
	count = a + b;
	console.log(count);
}
animalHouse(4,13)

if(count > 2){
	console.log('We have to many ' + animal + 's');
}else{
	console.log('Welcome to the club')
}

//AVENGAS
var hero = 'Hawkeye'

function avengersAssemble(avenger){
	if(avenger == 'ironman')
		console.log("I already told you, I don't want to join your super secret boy band.");
}else if(avenger == 'Hawkeye'){
	console.log("One Shot One Kill.")
}else if(avenger == 'Thor'){
	console.log("I AM GOD")
}else if(avenger == 'Captain America'){
	console.log("UH MERICAAAA!!!")
}else{
	console.log("avenger dead")
}
avengersAssemble(hero)

//Lights Out
var lights = true

if (lights == true){
	console.log("And then there was light")
}else{
	console.log("Lights out")
}

//Vroom Vroom
var carType = ["Toyota","Lamborghini","Tesla"]
var color = ["red","blue","black"]
var num = 17
function car(a,b){
if(color[1] == "blue"){
	if(carType[0] == "Toyota"){
		console.log("We have " + num + " " + color[1] + " " + carType[0])
	}else{
		console.log("We don't have any " + color[1] + " " + carType[0] + " in stock")
	}	
}else if(color[0] == "red"){
	if(carType[1] == "Lamborghini"){
		console.log("We have " + num + " " + color[0] + " " + carType[1])
	}else{
		console.log("We don't have any " + color[0] + " " + carType[1] + " in stock")
    }
}else if(color[2] == "black"){
	if(carType[2] == "Tesla"){
		console.log("We have " + num + " " + color[2] + " " + carType[2])
	}else{
		console.log("We don't have any " + color[2] + " " + carType[2] + " in stock")
	}
}
}
car("blue","Toyota")