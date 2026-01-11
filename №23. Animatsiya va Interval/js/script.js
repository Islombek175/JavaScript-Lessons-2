const btn = document.querySelector('#btn'),
	car = document.querySelector('.car')

const moveCar = () => {
	let position = 0

	const animationId = setInterval(moving, 1)

	function moving() {
		if (position === 1000) {
			clearInterval(animationId)
		} else {
			position++
			car.style.left = position + 'px'
		}
	}
}

btn.addEventListener('click', moveCar)
