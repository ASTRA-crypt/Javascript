/* primitive Data type
7 Types : String, Number, Boolen, Null, Unddefined, symbol, BigInt
symbol : used for unique value
BigInt : handle the large value 
*/


//javascript is a dynamic language
//javascript == typescript

const accountId = 1234
const scoreValue = 100.3

 

//symbols
const Id = Symbol('123')
const anotherID = Symbol('123')

console.log(anotherID == Id);

//BigInt
const bigNumber = 112453253243435244245435442442423458347532458348563485635245354535453246524364256456435643256456324756n
console.log(typeof (bigNumber));


/* primitive Data type (Refernce)
Array. Objects, Functions
*/

const heros = ['Shaktiman', 'Hanuman', 'naagraj'] //array

//objects -- Data type is known as "ObjectsFunction"
let myData = {
    name : "alex",
    age : 22,
}


//Function  --Data type is known as "FunctionObjects"
const myFunc = function(){
    console.log("Hello world");
}