// Context This

// #1 Function Context

function showThis() {
	console.log(this)
}

showThis() // In non-strict mode, this will log the global object (Window in browsers). In strict mode, it will log undefined.

console.log('-------------------')

// #2 Object Method Context

const person = {
	name: 'Islombek',
	lastname: 'Matkarimov',
	age: 17,
	sayHello: function () {
		console.log('#1', this)

		function showThis2() {
			console.log('#2', this)
		}
		showThis2()

		const showThis3 = () => {
			console.log('#3', this)
		}
		showThis3()
	},
}

// 1. person object
// 2. global object (Window in browsers) or undefined in strict mode
// 3. person object (arrow functions do not have their own this, they inherit it from the surrounding context)

person.sayHello() // Logs the person object, then logs the global object (or undefined in strict mode).

console.log('-------------------')

// #3 Constructor Function Context

function Person(name, age) {
	this.name = name
	this.age = age
	this.isHuman = true
	this.greeting = function () {
		console.log(this)
	}
}

const firstPerson = new Person('Islombek', 17)
console.log(firstPerson) // Logs the newly created firstPerson object
firstPerson.greeting() // Logs the firstPerson object

console.log('-------------------')

// #4 Explicit Context Binding with call and apply

function greetng(isMarried) {
	console.log(this + 'Married: ' + isMarried)
}

const user = {
	name: 'Islombek',
}

greetng.call(user, false) // Logs the user object
greetng.apply(user, [false]) // Logs the user object

console.log('-------------------')

// #5 Explicit Context Binding with bind

function calc(number) {
	return this * number
}

const double = calc.bind(2) // Creates a new function where 'this' is bound to 2
const triple = calc.bind(3) // Creates a new function where 'this' is bound to 3

console.log(double(10)) // Logs 20
console.log(triple(10)) // Logs 30

console.log('-------------------')

const btn = document.querySelector('button')

btn.addEventListener('click', function (event) {
	console.log(this) // Logs the button element
	this.style.backgroundColor = 'red' // 'this' refers to the button element, not recommended
	event.target.style.color = 'white' // event.target is the same as this in this context, recommended
})

btn.addEventListener('click', () => {
	console.log(this) // Logs the surrounding context (likely the Window object)
})

console.log('-------------------')