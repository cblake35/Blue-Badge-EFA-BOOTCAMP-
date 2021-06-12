// Modify this "for" loop to go over the "Foods" array backwards.

// let foods = ["apple", "orange", "rice", "bread", "tofu"]
// for (let i = 0; i < foods.length; i++){  
// }


// Goals!
// Bronze
// Console logging each element of the array but backwards.
// let foods = ["apple", "orange", "rice", "bread", "tofu"]

// for (let i = foods.length -1; i >= 0; i--) {
//     console.log(foods[i])
// }


// Silver
// Bronze + console logging each element of the array with the first letter capitalized.
// let foods = ["apple", "orange", "rice", "bread", "tofu"]

// for (let i = foods.length -1; i >= 0; i--) {
//     let newTitledFood = titleCase(foods[i]);
//     console.log(newTitledFood);
// }

// function titleCase(word) {
//     let firstLetter = word[0].toUpperCase();
//     let rest = word.slice(1);
//     let capWord = firstLetter + rest;
//     return capWord;
// }


// Gold
// Bronze + Silver + Console log only the odd indexed elements
// let foods = ["apple", "orange", "rice", "bread", "tofu"]

// for (let i = foods.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         let newTitledFood = titleCase(foods[i]);
//         console.log(newTitledFood);
//     }
// }

// function titleCase(word) {
//     let firstLetter = word[0].toUpperCase();
//     let rest = word.slice(1);
//     let capWord = firstLetter + rest;
//     return capWord;
// }





// Goals!
// let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
// let faceCards = []
// let numberedCards = []


// Bronze
// Write a loop that uses array push to fill the face card & numbered card arrays. with elements from cards.
// for (let i = 0; i < cards.length; i++) {
//     if (typeof(cards[i]) === "number") {
//         numberedCards.push(cards[i]);  
//     } else {
//         faceCards.push(cards[i]);
//     }
// }

// Silver
// Bronze + also empty the cards array as you go, so in the end you should have an empty cards array and faceCards/numberedCards filled
//for loop
// for (let i = cards.length - 1; i >= 0; i--) {
//     if (typeof(cards[i]) === "number") {
//         numberedCards.push(cards[i]); 
//         cards.splice(i, 1)
//     } else {
//         faceCards.push(cards[i]);
//         cards.splice(i, 1)
//     }
// }

//while loop
// while(cards.length > 0) {
//     let removedCard = cards.pop(); 
//     console.log(removedCard);

//     if (typeof removedCard === "number") {
//         numberedCards.push(removedCard); 
//     } else {
//         faceCards.push(removedCard);
//     }
// }


// Gold
// Bronze + Silver + Write a function that uses a switch to return the card type and use that in your code.

// while(cards.length > 0) {
//     let removedCard = cards.pop(); 
    
//     if (isFaceCard(removedCard)) {
//         numberedCards.push(removedCard);
//     } else {
//         faceCards.push(removedCard);
//     }
// }

// function isFaceCard(card) {

//     let result;

//     switch (card) {
//         case "A":
//         case "K":
//         case "Q":
//         case "J":
//             result = true;
//             break;
//         default:
//             result = false;
//             break;
//     }
//     console.log(result);
// }






