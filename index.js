// #region Old Practice Code

/*
let x = 5;
console.log(x + 10  );
for (let year = 2023;  year < 2025; year++) {
    console.log(year);
}
for (let year = 2023;  year < 2025; year++) {
    console.log(year);
    for(let month = 6; month < 9; month++) {
        console.log(".......", month);
    }
}

for(i= 100; i > 10; i= i-10){
    for(let j = 10; j> 4; j= j-5){
        console.log(i +" divided by " + j + " equals "+ i/j);
    }
}
let cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (let i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
for(let i =1; i<=10; i++){
    if (i===1) {
        console.log("Gold Medal");
    } else if (i=== 2){
        console.log("Silver Medal")
    }else if(i===3){
        console.log("Bronze Medal")
    }else {
        console.log(i)
    }
}
*/

// #endregion

/*for(let i =1; i<=10; i++){
    switch(i) {
    case 1: 
        console.log("Gold Medal");
        break;
    case 2:
        console.log("Silver Medal");
        break;
    case 3:
        console.log("Bronze Medal");
        break;
    default:
        console.log(i);
        
    }
}
    */


// function myFunc(){
// console.log("Hello World");
// }
// myFunc()

// function listArrayItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }
// }
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);

/*function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")*/


// console.log(greet.pop())
// console.log(greet.concat(user));  //The concat() method joins two strings: 
// console.log(greet + " " + user);

// console.log(greet.charAt(3)); // returns the character at index 3
// console.log("Wo".concat("rl").concat("d")); // 'World'
// console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho'] The split method chops up the string into an array of sub-strings:
/*
let clothes =[];
clothes.push("T-shirt");
clothes.push("Jeans");
clothes.push("Jacket");
clothes.push("Socks");
console.log(clothes); // ["T-shirt", "Jeans", "Jacket", "Socks"]
clothes.pop(); // removes the last item from the array
console.log(clothes); // ["T-shirt", "Jeans", "Jacket"]
clothes.shift(); // removes the first item from the array
console.log(clothes);
clothes.push("Hat"); // adds an item to the end of the array
console.log(clothes);
clothes.unshift("Shoes"); // adds an item to the beginning of the array
console.log("==========");

let favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
*/

// #region Old Practice Code
/*car.color = "blue";
car.convertible = false;
car.turnTheKey = function(){
    console.log("You turn the key and the car starts.");
}
car.lightsOn = function(){
    console.log("You turn the lights on.");
}
console.log(car);
car.turnTheKey();
car.lightsOn();
//typeOf operator that evaluates a parameter and returns data types as a string
let test = typeof(23>12);
console.log(test); // object*/
// let greet = "Hello";
// let user = "John";
// let car = {};
console.log("==========");

// function myFunc(a,b) {
//     c= a+b
//     console.log(c);
// }

// myFunc(5,10);

//Error handling using try and catch

// try{
//     console.log(a+b)
// }catch(err){
//  console.log(err.message)
//  console.log("Error occured");
//  console.log("The error was saved in the eror log")
// }
// console.log("My program does not stop here because the error is handled.");

// try{
//     throw new ReferenceError();
// }catch(err){
//  console.log(err.stack)
//  console.log("There was a Reference Error");
// }
// console.log("My program does not stop here because the error is handled.");

// let letters = "abc";
// console.log(letters.match(/a/));
// let ol
// console.log(ol)
// ol = "thunder"
// console.log(ol)


// function addTwoNums(a,b) {
//    try{
//     if (typeof a === "number" && typeof b === "number"){
//      console.log(a + b);
//      }
//    }catch(err){
//     console.log("Error caught:", err);
//    }
// }

// function addTwoNums(a,b) {
//     if (typeof a !== "number" || typeof b !== "number") 
//     {throw new TypeError("Both arguments must be numbers");

//     }else{
//         console.log(a + b);}
// }
// addTwoNums("5", 5);
/**
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, 1)
console.log("It still works")
console.log("==========");
*/

/** */
function consoleStyler(color, background, fontsize, txt){
    let message = "%C" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);

}