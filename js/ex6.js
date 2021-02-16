var rand_num = Math.floor(Math.random() * 100);
console.log("Random number generated is " + rand_num)

var counter = 1;
while (true) {
    var input_num = parseInt(prompt("Enter a number between 1 and 100."));
    if (input_num === rand_num) {
        console.log("you guessed correct number after " + counter + " attempts");
        break;  
    } 
    else {
        if (input_num < rand_num) {
            console.log("Too low, guess again");
        }
        if (input_num > rand_num) {
            console.log("Too High, guess again");
        }
        counter++; 
    }
};