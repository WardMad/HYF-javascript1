let myString = "hello,this,is,a,difficult,to,read,sentence";

alert(myString);

alert(myString.length + "\n The length of myStrings variable.");



newString = myString.replace(/,/g, " ");
alert(newString);

//Arrays

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log("splice built-in method adds new item on which index you want");

let lengthOfArray = favoriteAnimals.length;
console.log("\nThe array has a length of: \n" + lengthOfArray);

//removes 3-rd item

favoriteAnimals.splice(3, 1);
alert(favoriteAnimals);

let index = favoriteAnimals.indexOf("meerkat");
alert("The item you are looking for is at index: " + index);