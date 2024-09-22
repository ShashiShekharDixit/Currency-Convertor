import inquirer from "inquirer";

let Convertion = {
    "PKR": {
        "USD" : 0.0044,
        "GBP" : 0.0037,
        "PKR" : 1
    },
    "GBP": {
        "USD" : 1.21,
        "GBP" : 1,
        "PKR" : 271.79
    },
    "USD": {
        "USD" : 1,
        "GBP" : 0.83,
        "PKR" : 225.50
    }
}
const answer : {
    from: "PKR" | "USD" |"GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
}
   = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["USD","PKR","GBP"],
        message: "Select the currency you want to convert from "
    },
    {
        type: "list",
        name: "to",
        choices: ["USD","PKR","GBP"],
        message: "Select the currency you want to convert "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount : "
    },
]);
const {from, to, amount} = answer;

    if(from && to && amount){
    let result = Convertion[from][to] * amount;
    console.log(`Your currency Conversion from ${from} to ${to} is : ${result}`);
    }else{
    console.log("Invalid input");
}