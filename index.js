#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter The Amount Of Second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter valid number";
        }
        else if (input > 60) {
            return "seconds must be in 60";
        }
        else {
            return true;
        }
    },
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time has expired");
            clearInterval(interval); // Interval ko band karna
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 60); // Change here
        const Seconds = Math.floor(timeDiff % 60); // Change here
        console.log(`${minute.toString().padStart(2, "0")}:${Seconds.toString().padStart(2, "0")}`); // Change here
    }, 1000);
}
startTime(input);
