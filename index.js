const min = 1;
const max = 100;
const random = Math.floor(Math.random() * (max - min + 1)) + min

let attempts = 0
let running = true
let guess;

while (running) {
      guess = window.prompt(`guess a number between ${min} and ${max}`)
      guess = Number(guess)
      if (isNaN(guess)) {
            window.alert("NOT A NUMBER!")

      }
      else if (guess < min || guess > max) {
            window.alert("pls enter a valid number")
      }
      else {
            attempts++
            if (guess < random) {
                  window.alert("TRY AGAIN !. GUESS TOO LOW!")
            }
            else if (guess > random) {
                  window.alert("TRY AGAIN! GUESSS TO HIGH")
            }
            else {
                  window.alert(`Correct!The random number is ${random}. Attempted ${attempts} times`)
            } random
            running = false
      }

}

// let username = window.prompt("Enter your username")
// username = username.trim()
// let letter = username.charAt(0)
// letter = letter.toUpperCase()
// let extraChars = username.slice(1)
// extraChars = extraChars.toLowerCase()
// username = letter + extraChars
// console.log(username)