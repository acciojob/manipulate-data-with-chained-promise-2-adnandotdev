//your JS code here. If required.
function manipulateArray(){
	new Promise((resolve) =>{
			setTimeout(() => {
				resolve([1, 2, 3, 4, 5])
			}, 3000)
	})
	.then((array) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let evens = array.filter(num => num%2 === 0)
				document.getElementById("output").textContent = JSON.stringify(evens)
				resolve(evens)
			}, 1000)
		})
	})
	.then((evenNums) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let multipliedArr = evenNums.map(num => num*2)
				document.getElementById("output").textContent = JSON.stringify(multipliedArr)
				resolve(multipliedArr)
			}, 2000)
		})
	})
}
window.onload = manipulateArray()