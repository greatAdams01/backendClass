// Everything in javascript is an Object!!!

let msg = 'Am running out of battrie'
let anotherMsg = new String('anytin')

const names = ['Adams', 'Great', 'John', 'Daivid']

for (let index = 0; index <= names.length; index++) {

  console.log(names[index])
}



// console.log(msg.length, anotherMsg.length)

// console.log(msg.includes('cook'))

// console.log(msg.toLowerCase())

const lastName = 'Adams'
const firstName = 'Great'
// const fullName = firstName.concat(lastName)

let fullName = firstName + lastName + lastName.length
console.log(fullName)
let myText = "I'm just going to quote dad \"Your my start\" "
// myText = 'I'm just going to quote dad "" '
myText = `Total count of my full name is ${ fullName.length } characters  `

console.log(myText)



fullName = ``

// console.log(fullName)