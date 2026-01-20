class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	greeting() {
		return `Hello, my name is ${this.name}`
	}
}

// Creating an instance of the Person class

class StatusPerson extends Person {
	constructor(isMarried) {
		super()
		this.isMarried = isMarried
	}
	get() {
		return `This person ${this.name} is married: ${this.isMarried}`
	}
}

const firstPerson = new Person('Islombek', 17)
const secondPerson = new Person('Aziz', 18)

console.log(firstPerson)
console.log(secondPerson)

console.log(firstPerson.greeting())
console.log(secondPerson.greeting())

console.log('-----------------------')

const thirdPerson = new StatusPerson('Muhammad', 20, true)
console.log(thirdPerson)

console.log(`=======================`)

// Rest Operator

function logger(a, b, ...rest) {
	console.log(a, b)
	console.log(rest)
	return rest
}

// rest will be an array of the remaining arguments

logger(2, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

const calc = (a, b = 2) => {
	return a + b
}
console.log(calc(5))
