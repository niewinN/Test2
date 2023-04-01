'use strict'

// function calcAge1(birthYear) {
// 	return 2037 - birthYear
// }

// calcAge1(2000)

// const name = params => {}
// const calcAverage = (score1, score2, score3) => {
// 	return (score1 + score2 + score3) / 3
// }

// function checkWinner() {
// 	const avgDolphins = calcAverage(85, 54, 41)
// 	const avgKoalas = calcAverage(23, 34, 27)

// 	if (avgDolphins > 2 * avgKoalas) {
// 		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
// 	} else if (avgKoalas > 2 * avgDolphins) {
// 		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
// 	} else {
// 		console.log(`No team wins!`)
// 	}
// }

// checkWinner()

// const bill = 100

// const bills = [125, 555, 44]
// const tips = []

// const tip1 = 0.15 * bill
// const tip2 = 0.2 * bill

// const calcTip = bill => {
// 	if (bill >= 50 && bill <= 300) {
// 		console.log(tip1)
// 		tips.push(tip1)
// 	} else {
// 		console.log(tip2)
// 	}
// 	// return tip
// }

// calcTip(100)

// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips)

// const totals = [bills[0] + tips[0]]
// console.log(totals)

// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	age: 2037 - 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// }

// const arr = [0, 2, 4, 5]
// console.log(arr.indexOf(2))

// console.log(jonas.friends.length)

// console.log(
// 	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// )

// const mark = {
// 	fullName: "Mark Miller",
// 	mass: 78,
// 	height: 1.69,
// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2
// 		return this.bmi
// 	},
// }

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 1.95,
// 	calcBMI: function () {
// 		this.bmi = this.mass / this.height ** 2
// 		return this.bmi
// 	},
// }

// mark.calcBMI()
// john.calcBMI()

// console.log(mark.bmi)

// if (mark.bmi > john.bmi) {
// 	console.log(`Mark's ${mark.bmi} is higher than John's ${john.bmi}!`)
// } else {
// 	console.log(`John's ${john.bmi} is higher than Mark's ${mark.bmi}!`)
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

console.log(bills.length)

for (let i = 0; i <= bills.length - 1; i++) {
	tips.push(calcTip(bills[i]))
	totals.push(tips[i] + bills[i])
}

console.log(tips, totals)

const calcAverage = function (arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		// sum = sum + arr[i]
		sum += arr[i]
	}
	return sum / arr.length
}

console.log(calcAverage([2, 3, 7]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))

fdgff
