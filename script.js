"use strict"

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

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips)

const totals = [bills[0] + tips[0]]
console.log(totals)
