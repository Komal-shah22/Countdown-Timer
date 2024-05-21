import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
const responce = await inquirer.prompt([
    {
        name: "userinput",
        type: "number",
        message: chalk.bold.italic.blue.bgWhite("<<<====please enter amount of second====>>> "),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.bold.italic.red("please enter valid number");
            }
            else if (input > 60) {
                return chalk.bold.italic.red("second must be in 60");
            }
            else {
                return true;
            }
        }
    }
]);
let input = responce.userinput;
function startTime(val) {
    const iniTime = new Date().setSeconds(new Date().getSeconds() + val);
    const interValTime = new Date(iniTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(interValTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.bold.italic.green.underline("xxxx TIMER HAS EXPIRED xxxx"));
            process.exit();
        }
        const minuts = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minuts.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
