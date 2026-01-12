const now = new Date() // hozirgi date
const firstDate = new Date(0) // birinchi JS date
const someDate = new Date('2018-09-13') // ma'lum bir date belgilash
const parse = Date.parse('2018-09-13') // date -> millisekund

console.log(now)
console.log(now.getHours(), 'hour') // hozirgi soat
console.log(now.getMonth(), 'month') // hozirgi oy
console.log(now.getDate(), 'date') // hozirgi sana
console.log(now.getTime()) // hozirgi millisekund

now.setFullYear(2047) // o'zgartirish kiritish
console.log(now)

console.log(firstDate)

console.log(someDate)
console.log(parse)

function loop() {
	let startDate = new Date()

	for (let i = 0; i <= 10000000; i++) {}

	let endDate = new Date()

	console.log(`Loop has worked for ${endDate - startDate} milliseconds`)
}

loop()
