/*
She is[adverb] [verb] from a [adjective] [noun]

*/

/*let varFunc = function (num){
    return `you have ${myVariable} steps to complete this program`
}
varFunc(4); */
// step 1: Create a variable to collect the adverb input
let myVariable = 4;
alert(`you have ${myVariable} steps to complete this program`)
let myAdverb = prompt('Enter an Adverb: ');

// let sentence = '<p>' + 'she is' +myAdverb= + '</p>'
let sentence = `<p> she is ${myAdverb} </p>`

// step 2: create a variable that collects  the verb input
myVariable -= 1;
alert(`you have ${myVariable} steps to complete this program`)
let myVerb = prompt('Enter a Verb: ');
sentence += `${myVerb}`

// step 3: create a variable that collects the adjective input
myVariable -= 1;
alert(`you have ${myVariable} steps to complete this program`)
let myAdjective = prompt('Enter an Adjective: ');
sentence += `${myAdjective}`

// step 4: create a variable that collects a noun input
myVariable -= 1;
alert(`you have ${myVariable} steps to complete this program`)
let myNoun = prompt('Enter a Noun: ');
sentence += `${myNoun}`

document.write(sentence);

/*;
let the user know how many prompts or message to be typed 
*/

// alert('You are done, check the console for result')

// document.write(`He is ${myAdverb} ${myVerb} from a ${myAdjective} ${myNoun}`)