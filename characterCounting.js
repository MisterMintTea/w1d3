var word = "lighthouse in the house";
word = word.split("");
// console.log(word);

var obj = {};

word.forEach(function(el) {
    var check = obj.hasOwnProperty(el);
    if (check) {
        obj[el] += 1;
    } else {
        obj[el] = 1
    }
})

delete obj[" "];



console.log(obj);
// 1) Write a function
// 2) Returns all unique characters that exist in a string
// 3) Pass it through a function
// 4) Return instances of each letter in the string
// 5) Return an object with the stats.
