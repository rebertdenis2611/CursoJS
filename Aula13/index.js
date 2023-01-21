//                01234567  
let umaString = ('Um texto');
//                  01234567  
let outraString = ('O rato roeo a roupa do rei de roma.')
/*console.log(umaString[4]);
console.log(umaString.charAt(4));
console.log(umaString.concat(' Olá mundo.'));
console.log(umaString.indexOf('x'));
console.log(umaString.indexOf('texto', 3));
console.log(umaString.lastIndexOf('texto', 2));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/m/));
console.log(umaString.replace('Um', 'outra'));
console.log(umaString.replace(/Um/, 'outra'));
console.log(outraString.replace(/r/g, '#'));
console.log(outraString.length);
console.log(outraString.slice(2, 5));
console.log(outraString.slice(-5, -1));
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));
*/
console.log(outraString.split(' ', 2))
console.log(outraString.toLocaleLowerCase())
console.log(outraString.toLocaleUpperCase())

console.log(umaString.indexOf('texto', 2));

console.log(umaString.lastIndexOf('texto'));
console.log(umaString.match(/[a-z]/g))
