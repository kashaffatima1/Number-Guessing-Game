#! /usr/bin/env node
import inquirer from "inquirer";
let roundnumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: 'number',
    name: 'guessednumber',
    message: 'Guess a number b/w 1 to 4',
});
if (userInput.guessednumber === roundnumber) {
    console.log(`Congratulations! you guessed correctly`);
}
else {
    console.log(`Sorry! try next time. correct awnser is: ${roundnumber}`);
}
