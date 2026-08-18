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

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")