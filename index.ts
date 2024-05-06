#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0033,
    GBP: 0.0029,
    INR: 0.30,
    AUD: 0.0055,
    SAR: 0.013,
}
let userAns = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Select the currency you want to convert from.",
            type: "list",
            choices: ["PKR", "USD", "EUR", "GBP", "INR", "AUD", "SAR"]
        },
        {
            name: "to",
            message: "Select the currency you want to convert.",
            type: "list",
            choices: ["PKR", "USD", "EUR", "GBP", "INR", "AUD", "SAR"]
        },
        {
            name: "usrAmount",
            message: "Enter the amount.",
            type: "number",
        },
    ]
)
let answer = currency[userAns.from]
let answer1 = currency[userAns.to]
let result = userAns.usrAmount / answer * answer1
console.log(result.toFixed(2));
