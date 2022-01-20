
// Iteration 1

let hacker1 = "John"
console.log(`The drivers name is ${hacker1}`)
let hacker2 = "John"
console.log(`The navigators name is ${hacker2}`)

// Iteration 3

// 3.1

for (let i = 0; i < hacker1.length; i++) {
  let sepLetters = hacker1[i].toUpperCase()
  console.log(sepLetters)
}

// 3.2

let splitName = hacker2.split("")
console.log(splitName)
let reverseName = splitName.reverse()
console.log(reverseName)
let joinReversedName = reverseName.join("")
console.log(joinReversedName)

// 3.3


if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 2

if (hacker1 < hacker2) {
  console.log("The drivers name goes first")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator gors first definitely")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet sodales ipsum. Quisque a auctor sem. Maecenas iaculis ultrices velit blandit iaculis. Donec tincidunt sodales lectus eu vulputate. Nam sodales tortor pretium massa eleifend malesuada. Duis pellentesque ante est, vulputate imperdiet ligula tincidunt quis. Fusce arcu felis, luctus ac turpis eu, porttitor malesuada quam. In euismod fringilla maximus. Nam lacinia nunc at nulla lacinia, eget condimentum dui malesuada. Donec imperdiet, nisl vel aliquet sagittis, leo urna ultricies felis, ac feugiat lectus libero quis lectus. Cras in nisl congue, dignissim dui at, placerat neque. Aenean viverra ipsum risus, et dignissim lacus pulvinar vel. Etiam urna justo, vehicula vitae magna vitae, aliquam luctus erat. Aenean lobortis vel eros sit amet condimentum. Quisque sit amet augue quis massa iaculis ultricies. 

Ut cursus dolor eros, eget cursus nisl consequat tincidunt. In placerat risus ac leo laoreet, id elementum dui pellentesque. Praesent molestie eleifend purus, in placerat eros lacinia in. Aliquam elementum libero sed lacus efficitur vehicula. Maecenas blandit nisl est, nec varius mi vehicula sed. Phasellus ac aliquam eros. Pellentesque sit amet mauris quis dui accumsan malesuada. Quisque semper libero erat, eleifend laoreet diam dictum vel. Nam in ante scelerisque, vestibulum sem vitae, euismod mauris. Nulla nibh diam, ultrices at arcu vel, interdum dictum sapien. Nulla vel sapien odio.

Proin dictum luctus ipsum, sit amet interdum purus aliquam sed. Etiam pretium, magna a facilisis molestie, purus magna volutpat elit, sit amet fermentum orci ante quis nibh. Maecenas a ante felis. Nunc eu placerat dui, eget egestas felis. Donec ullamcorper malesuada rutrum. Aliquam erat volutpat. Phasellus quis ornare odio. Duis sed risus dui. Donec a congue nunc.`


console.log(text)

let etSearch = text.match(/\b[Ee]t\b/g).length



let wordCount = text.match(/\S+/g).length

console.log(etSearch)

console.log(wordCount)


// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!"
let joinedPhrase = phraseToCheck.toLowerCase().match(/[a-z]/gi).join("")

console.log(joinedPhrase)

let reversePhrase = phraseToCheck.toLowerCase().match(/[a-z]/gi).reverse().join("")

console.log(reversePhrase)

if (joinedPhrase === reversePhrase) {
  console.log("This is a palindrome!")
} else {
  console.log("This is not a palindrome...")
}

