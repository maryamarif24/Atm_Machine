// import inquirer from inquirer;

// const currentBalance : number = 10000;
// console.log("Your current balance is ", currentBalance);


// const pinNumber = 123456;

import inquirer from "inquirer";

let myBalance: number = 10000;
let myPin: number = 12345;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin:",
            type: "number",
        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin code!");    

    let operationAns = await inquirer.prompt(
        [
            {
                name: "Operation",
                message: "Please select Option:",
                type: "list",
                choices: ["Withdraw", "Check Balance"],
            }
        ]
    );
    
    if (operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your Amount:",
                    type: "number",
                }
            ]
        );

        myBalance -= amountAns.amount

        console.log("Your Remaining Balance is:" + myBalance);
        
        
    } else if (operationAns.Operation === "Check Balance") {
        console.log("Your Balance is:" + myBalance);
    }
} 

else {
    console.log("Incorrect Pin code!");
    
}