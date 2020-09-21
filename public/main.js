function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
    // Create a new app that does the following.

    // Practice Creating Variables
    //     Create a variable that stores the numberOfCupsOfCoffee that you drink every day.
    const numberOfCupsOfCoffee = 1
    //     Create a variable called fullName and set it equal to your full name.
    const fullName = 'Isaac Rendon'
    //     Use console.log and your variables, numberOfCupsOfCoffee and fullName to output all three on one line.
    console.log(
      `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cup of coffee a day`
    )

    // Practice Getting Input From the User
    //     Using window.prompt, Ask the user for their name and store it in a variable named userName.
    const name = window.prompt(`What is your name?`)
    //     Use console.log to show a greeting to the user, using their name.
    const greetings = `Greetings ${name}!`
    console.log(greetings)

    // Converting String Input Into Numbers
    //     Input two numbers from the user.
    //     Save the first value in a variable named firstOperand
    const firstNumber = window.prompt('Enter a number')
    //     and the second value in a variable named secondOperand.
    const secondNumber = window.prompt('Enter a second number')
    //     Convert each resulting string from window.prompt to a float using parseFloat.
    const FirstOperand = parseFloat(firstNumber)
    const SecondOperand = parseFloat(secondNumber)

    // Doing Math
    //     Add the operand variables from above and save the results in a variable named sum.
    const sum = FirstOperand + SecondOperand
    //     Subtract the secondOperand variable from the firstOperand variable and save the results in a variable named difference.
    const difference = FirstOperand - SecondOperand
    //     Multiply the operand variables and save the results in a variable named product.
    const product = FirstOperand * SecondOperand
    //     Divide the firstOperand by the secondOperand and save the results in a variable named quotient.
    const quotient = FirstOperand / SecondOperand
    //     Find the remainder when one operand is divided by the other and save the results in a variable named remainder.
    const remainder = FirstOperand % SecondOperand
    //     Use console.log to present the user, in a meaningful way, each of the values for the sum, difference, quotient, product, and remainder variables. (e.g. perhaps one of your outputs is similar to If you add 4 and 5 you get 9 if 4 and 5 were the input)
    const values = `Adding your inputs results in ${sum}, if you subtract your second input from your first you get ${difference}, if you
                    multiply your inputs it equals ${product}, and if you divide your first input by the second input you will get ${quotient} and the remainder is ${remainder}`
    console.log(values)

    // Using Arrays
    //     Use this page to generate a array of random numbers. NOTE: That format isn't ready for JavaScript. In your editor you will need to format the collection of numbers as a JavaScript array.
    //     Place these numbers into a properly formatted array named numbers.
    const numbers = [0, 1, 2, 3, 6, 15, 23, 24, 30, 32, 33, 35, 45]
    //     Determine the following. Use JavaScripts for loops to your advantage.
    //         In a variable named smallest, find the smallest value in the array.
    let smallest = null
    for (let i = 0; i < numbers.length; i++) {
      if (smallest === null) {
        smallest = numbers[i]
      }
      if (numbers[i] < smallest) {
        smallest = numbers[i]
      }
    }
    console.log(smallest)
    //         In a variable named largest, find the largest value in the array.
    let largest = 0
    for (let i = 0; i < numbers.length; i++) {
      if (largest < numbers[i]) {
        largest = numbers[i]
      }
    }
    console.log(largest)

    //         In a variable named sum, find the sum of all the values in the array.
    let sumOfTheNumbers = 0
    for (let index = 0; index < numbers.length; index++) {
      const next = numbers[index]
      sumOfTheNumbers = sumOfTheNumbers + next
    }
    //         In a variable named average, find the average of all the values in the array.
    console.log(sumOfTheNumbers)

    const average = sumOfTheNumbers / numbers.length
    console.log(average)
  }
}

document.addEventListener('DOMContentLoaded', main)
