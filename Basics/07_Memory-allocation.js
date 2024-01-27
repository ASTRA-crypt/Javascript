// Memory working on javascript

/*merory are two type:
1.Stack -- primitive type
2.Heap  -- Non-premitive type


*/

let Name = "Alex"
let anotherName = Name

anotherName = "Alpha"
console.log(Name);
console.log(anotherName);


let Alex = {
    Name : "Alex",
    age : 22,
    email : "alex@google.com"
}

let Alpha = Alex
console.log(Alpha);

Alpha.email = "Alpha@google.com"
console.log(Alpha.email);
console.log(Alex.email);
