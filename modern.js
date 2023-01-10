// es6 es2015

// template litaral syntax

const firstName = "John";
const age = 28;

console.log( "hi, My name is " + firstName + " and my age is " + age )
console.log( `hi, My name is ${firstName} and my age is ${age > 30 ? "greater than " : "less than" } 30` )

// short hand property
let printMe = function(){
    console.log(this.firstname, this.age)
}
let person ={
    firstName, age, printMe
}
console.log(person)

// destructuring 
let anotherPerson = {
    naMe: "foo",
    lastName: "bar",
    address:{
        city:"kolhapur",
        state: "MH"
    }
}

let{naMe, address:{city}} = anotherPerson;
console.log(naMe, city)

// destructuring Arrays
const fruits = ["Apple","kiwi", "orange"]
console.log(fruits[0])

const[,,nargi] = fruits
console.log(`coming from destru array ${nargi}`)

// alias
let{naMe: givenName} = anotherPerson;
console.log("aliased as name", givenName)

// rest opreator - ... => allipsis notation
const {naMe: gName, ...rest} = anotherPerson;;
console.log(gName, rest);

const[apple,...rem] = fruits;
console.log(apple,rem)

// spread operator
const anotherFruits = ["strawberry", "pineApple"]
const moreFruits = [...fruits, ...anotherFruits]
console.log(moreFruits)

console.log({...anotherPerson, conutry: " Indo"})
console.log({...anotherPerson.address, conutry: " Indo"})

// arrow function

let sum = function(firstNum, secondNum){
    return firstNum + secondNum;

}

// let sumArrow = (firstNum, secondNum ) => firstNum + secondNum

let sumArrow = (firstNum, secondNum ) => {
    let result;
    if(firstNum > secondNum)
        {
            result = firstNum + secondNum;
    }else{
            result = 0;
    }
    return result;
}


// optional chaining

let persone = {
    fristName: "J", lastName :"D", age: null
};
if(anotherPerson && anotherPerson.address && anotherPerson.city){
    console.log(anotherPerson.address.city)
}

// nullish coalescing opreator

// let agee = persone.age || 20;
// console.log(agee)

let agee = persone.age ?? 20;
console.log(agee)

