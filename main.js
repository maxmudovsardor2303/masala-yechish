// 1-masala 

// function item (params){
//     let count = 0
//     for(let i = 0; i <= params; i++){
//         if(params % i  === 0){
//             count += 1
//         }
//     }
//     if(count == 2){
//         console.log("Tub son");
//     }else{
//         console.log("Tub son emas");
//     }
// }
// item(11)


// 2-masala 

// let input = 8;
// let num = input / 2;
// let count = 0;
// for (let i = 0; i <= num; i++) {
//     if (input > 0) {
//         count++;
//     }
//     input = input / 2;
// }
// console.log(count); 


// 3-masala 

// function number(params) {
//     let count = 0
//     for(let i = 0; i < params; i++){
//         if(params % i === 0){
//             count += i
//         }
//     }
//     if (params == count ) {
//         console.log("Mukammal son");
//     }
//     else{
//         console.log("Mukammal son emas");
//     }
// }
// number(6)


// // 4-masala 
// function item(params) {
//     return Math.abs(params).toString().length;
// }
// console.log(item(123));   
// console.log(item(-456));  
// console.log(item(7890));  


// 5-masala 


// function countWordsWithA(str) {
//     let words = str.trim().split(/\s+/);
//     let count = 0;
//     for (let word of words) {
//         if (word.includes('a') || word.includes('A')) {
//             count++;
//         }
//     }
//     return count;
// }
// let inputString = "Assalomu alaykum, dunyo!"; 
// console.log(countWordsWithA(inputString)); 
// inputString = "Bugun havo juda yomon"; 
// console.log(countWordsWithA(inputString)); 



// 6-masala 

// function shortestWord(sentence) {
//     let words = sentence.trim().split(/\s+/);
//     let shortest = words[0];
//     for (let word of words) {
//         if (word.length < shortest.length) {
//             shortest = word;
//         }
//     }
//     return shortest;
// }

// let inputSentence = "assalomu alekum"; 
// console.log(shortestWord(inputSentence)); 

// inputSentence = "assalomu alaykum, dunyo!"; 
// console.log(shortestWord(inputSentence)); 


// 7-masala 

// function getType(input) {
//     if (typeof input === 'number') {
//         return "son";
//     } else if (typeof input === 'string') {
//         return "string";
//     } else {
//         return 0;
//     }
// }
// console.log(getType(123)); 
// console.log(getType("hello")); 
// console.log(getType(true)); 


// 8-masala 

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// let inputString = "hello";
// console.log(reverseString(inputString));



// 9-masala 

// function countDigits(str) {
//     let count = 0;
//     for (let char of str) {
//         if (!isNaN(parseInt(char))) {
//             count++;
//         }
//     }
//     return count;
// }

// let inputString = "Hello123World456";
// console.log(countDigits(inputString)); 


// // 10-masala 
// function reverseNumber(num) {
//     let reversed = parseInt(num.toString().split('').reverse().join(''));
//     if (num < 0) {
//         reversed *= -1;
//     }
//     return reversed;
// }

// let inputNumber = 12345;
// console.log(reverseNumber(inputNumber)); 

// inputNumber = -9876;
// console.log(reverseNumber(inputNumber)); 
