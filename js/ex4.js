var words = [];
var count = 0;
var stop = "stop";
while (true) {
    var word = prompt("Please enter a word: ");
    if (word.toLowerCase() === stop) {
        if (count === 0) {
            console.log("No words to display, " + word + " was the first word entered.");
        } else {
            console.log("You entered the following words:");
            for (var i in words) {
                console.log(words[i]);
            }
        }
        break;
    }
    words.push(word);
    count++;
};