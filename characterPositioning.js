var word = "lighthouse in the house";
word = word.split("");
// console.log(word);

var obj = {};

word.forEach(function(el, i) {
   var check = obj.hasOwnProperty(el);
   if (check) {
       obj[el].push(word.indexOf(el, i));

   } else {
       obj[el] = [word.indexOf(el)];
   }
})

delete obj[" "];

console.log(obj);