var word = prompt('Enter a word: ');
var vowels = ["a", "e", "i", "o", "u"]
function vowelsCount(str) {
    let count = 0
    str = str.toLowerCase();
    for(let characters of str) {
        if (vowels.includes(characters)) {
            count++;
        }
    }
    return count
}    
function isPalindrome (wordStr)   {
    wordStr = wordStr.toLowerCase();
        for (let char = 0; char<wordStr.length; char+=1) {
            if (wordStr[char] !== wordStr[wordStr.length - 1 - char]) {
                return false;
            }
        }
        return true;

}  
      
var output = vowelsCount(word);
var text = ""
var isPalindrome = isPalindrome(word)
if (isPalindrome === true){
    text = "and is a palindrome"
}
else{
    text = "and is not a palindrome"
}
console.log(word + " contains "+ output + " vowels " + text);