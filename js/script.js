const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.wrapper')

console.log(btns[0].classList.value)
console.log(btns[0].classList.item(0))

btns[1].classList.add('blue') // class qo'shish
btns[1].classList.remove('blue') // class ni o'chirish
btns[2].classList.toggle('yellow') // agar yo'q bo'lsa qo'shadi, yo'q bo'lsa olib tashlaydi

// btns[0].addEventListener('click', () => {
// 	if (btns[0].classList.contains('red')) {
// 		console.log('element contain red class')
// 	}
// })

btns.forEach(item => {
	item.addEventListener('click', () => {
		// har bir button ga hodisa
		item.classList.toggle('blue')
		console.log('CLICKED')
	})
})

const button = document.createElement('button')
button.textContent = 6
button.classList.add('blue')
wrapper.append(button)

// ------DELEGATSIYA------
wrapper.addEventListener('click', event => {
	if (event.target && event.target.tagName === 'BUTTON') {
		// element button bo'lsa
		console.log('CLICK')
	}

	if (event.target && event.target.matches('button.red')) {
		// agar button.red elementi bo'lsa
		console.log('CLICKED RED')
	}
})
