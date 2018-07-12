//1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function sumOfNumbers(a, b, c) {
    return a + b + c
}

var z = sumOfNumbers(7, 3, 5);
console.log(z);
/*2. Create a function named colorCar that receives a color,
and prints out, 'a red car' for example.*/

function colorCar(r) {

    alert("a " + r + " car");

}
colorCar("red");

/* 3. Create an object and a function that takes the object as a parameter
  and prints out all of its properties and values.*/

// short way
var data = { name: "Korina", age: 32, country: "Italy" };

function info(data) {

    alert(Object.entries(data));
}

info(data);

//second option
var obj = { model: 'BMW', color: 'metallic', fuel: "diesel" };

function carModel() {

    for (var [key, value] of Object.entries(obj)) {
        console.log(key + "  - " + value);
    }
}

carModel();

/*4.  Create a function named vehicleType that receives a color, 
and a code, 1 for car, 2 for motorbike.And prints 'a blue motorbike'
 for example when called as vehicleType("blue", 2)*/

function vehicleType(color, code, ) {

    if (code === 1) {
        console.log("a " + color + " car");

    } else {
        console.log("a " + color + " motorbike");
    }

}

vehicleType("white", 1);
vehicleType("blue", 2);


/*5. Can you write the following without the
if statement, but with just as a single line with console.log(...); ?*/

// (found short hand!)


console.log(3 === 3 ? 'yes' : 'no');

/* 6. Create a function called vehicle, like before, but takes another
 parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'*/

function vehicle(color, code, age) {
    if (age > 4) {
        console.log("a " + color + " used car")
    } else {
        console.log("a " + color + " unused car")
    }
}

vehicle("blue", 1, 5);

/*7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more. */

var arraysOfVehicles = ["motorbike", "caravan", "bike", "bicycle"];

/*8. How do you get the third element from that list? */
console.log(arraysOfVehicles[3]);


var arraysOfVehicles = ["motorbike", "caravan", "bike", "bicycle"];

/*9. Change the function vehicle to use the list of question 7. 
So that vehicle("green", 3, 1) prints "a green new bike". */

function vehicle(color, code, age) {
    if (age > 4) {
        console.log("a " + color + " used car")
    } else if (age < 2) {

        console.log("a " + color + " new " + arraysOfVehicles[2]);

    } else {
        console.log("a " + color + " unused car");
    }

}
vehicle("blue", 1, 5);
vehicle("green", 3, 1);


/*10. Use the list of vehicles to write an advertisement. 
So that it prints something like: "Amazing Joe's Garage, we service cars,
   motorbikes, caravans and bikes.". (Hint: use a for loop.) */


//with for loop i couldn't have one string with all vehicles.
var arraysOfVehicles = ["motorbike", "caravan", "bike", "bicycle"];


var x = arraysOfVehicles.join("s, ");
console.log("Amazing Joe's Garage, we service cars, " + x + "s" + ".");

/*11. What if you add one more vehicle to the list,
 can you have that added to the advertisement without changing the code for question 10? */


function pushItem() {
    arraysOfVehicles.push("scooter");
    console.log(arraysOfVehicles);
}
pushItem();

/*12. Create an empty object. */

var emptyObject = {};

/*13. Create an object that contains the teachers that 
you have had so far for the different modules */
/* 14.Add a property to the object you just created that contains the languages 
that they have taught you.*/

var teachers = {

    Philipp: "HTML and CSS",
    Unmesh: "Bush/Terminal",
    Bonan: "Github",
    Mauro: "Java Script"
}

console.log(teachers.Mauro);
console.log(teachers.Unmesh);

/*15. Write some code to test two arrays for equality using == and ===.Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;*/
console.log("both returns false , i think cause arrays is objects...");

//Like this wil work, it returns true.
let xx = [1, 2, 3].toString();
let yy = [1, 2, 3].toString();

let zz = xx === yy;

console.log(zz)
    /**16. Take a look at the following code:  */

let o1 = { foo: 'bar' };
let o2 = { foo: 'barmen' };
let o3 = o2;

console.log(o3);
console.log(o1);
/*17. What does the following code return? (And why?) */

let bar = 42;
var x = typeof typeof bar;

console.log(x); //returns string????

//"typeof x returns a string representation of the type of x. So, naturally, typeof typeof x is 'string'.")
//check the explanation below:
" https://stackoverflow.com/questions/43171010/typeof-typeof-x-returns-string-and-not-object-since-type-of-null-is-object"