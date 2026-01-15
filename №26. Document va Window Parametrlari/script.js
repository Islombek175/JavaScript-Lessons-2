const box = document.querySelector('.box'),
	btn = document.querySelector('button')

btn.addEventListener('click', () => {
	// box.style.height = box.scrollHeight + 'px'
	// console.log(box.scrollTop)
})

console.log(box.getBoundingClientRect())
// Element haqqida ma'lumotlar(width, height, top, bottom, right, left)

console.log(getComputedStyle(box)) // Element ning barcha style lari

// -------------------------------------

// const width = box.clientWidth
// const height = box.clientHeight

// Clinet ga ko'rinadigan

// -------------------------------------

// const width = box.offsetWidth
// const height = box.offsetHeight

// Butun, to'liq

// -------------------------------------

// const width = box.scrollWidth
// const height = box.scrollHeight

// Scroll dan tepadagi va pastdagi masofa

// console.log(width)
// console.log(height)
