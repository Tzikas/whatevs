console.log('my javascript')


function loopFunction(params) {
    for(let i=0; i<10; i++){
        console.log('hello ',i, params)
    }
}




let arrayOfObjects = [

    {name:'niko', points:45},
    {name:'gustavo', points:145},
    {name:'alexis', points:545},

]



let obj = {
    suspect: 'Mr Boody',
    weapon: 'gun'
}


let array = [
    'elephant',
    'dog',
    'giraffe',
    'monkey',
    'pirahna'
]

const numbers = [22, 23, 99, 68, 'a', 1, 'x', 0, '.', '?', 9, '$', 112, 223, 64, 18];


// let nothing = array.forEach(animal => {
//     animal = animal.toUpperCase()
//     console.log(animal)  
//     return animal
// })
// console.log(nothing)

// let capitalAnimals = array.map(animal=>{
//     return animal.toUpperCase()
// })


// console.log(capitalAnimals)


let multiplyByTwo = [1,2,3,4,5].map(eachNumb => eachNumb*2)

const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true



let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +  
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(accumulator, currentValue) {
      let addedBooks = [...accumulator, ...currentValue.books]
      console.log(addedBooks)
    return addedBooks
  }, [])

