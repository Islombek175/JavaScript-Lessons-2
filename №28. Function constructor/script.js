const num = new Number(3)

const str = new String('3')

console.log(num, str)

function Person(firstname, lastName) {
	// Constructor
	this.firstname = firstname
	this.lastName = lastName
	this.hello = function () {
		console.log(`Hello ${this.firstname} ${this.lastName}`)
	}
}

Person.prototype.convertAge = function (age) {
	console.log(`${this.firstname} age is: ${age} `)
}

const firstPerson = new Person('Islombek', 'Matkarimov') // Constructor orqali, Object yaratish

const secondPerson = new Person('Sunnatbek', 'Isroilov')

firstPerson.hello()
secondPerson.hello()

console.log(firstPerson)
console.log(secondPerson)

firstPerson.convertAge(17)
