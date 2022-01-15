let hacker1 = "John"
console.log(`The drivers name is ${hacker1}`)
let hacker2 = "John"
console.log(`The navigators name is ${hacker2}`)

for (let i = 0; i < hacker1.length; i++) {
  let sepLetters = hacker1[i].toUpperCase()
  console.log(sepLetters)
}

let splitName = hacker2.split("")
console.log(splitName)
let reverseName = splitName.reverse()
console.log(reverseName)
let joinReversedName = reverseName.join("")
console.log(joinReversedName)


if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

if (hacker1 < hacker2) {
  console.log("The drivers name goes first")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator gors first definitely")
} else {
  console.log("What?! You both have the same name?")
}




