import {question} from 'readline-sync';

export function getCommand() {
    let command;
    do {
        command = parseCommand(askCommand());
    } while(command === null);

    return command;
}

export function doCommand(command, accountManager) {
    switch (command){
        case "list all":
            const accounts = accountManager.accounts;
            for (const [key, account] of Object.entries(accounts)) {
                console.log('Name: ' + account.name);
                console.log('Amount owed:' + account.balance);
            }
            break;
        default:
            const name = command;
            const acc = accountManager.getAccount(name);
            if (acc === undefined) {
                console.log("Error: account not found. Make sure the name is spelt correctly (including case");
            } else {
                acc.printTransactions();
            }
    }
}

function askCommand() {
    console.log('The following commands are available:');
    console.log('"list all" - outputs the names of each person, and the total amount they owe, or are owed. ' +
        'Positive balance indicates money they owe, negative indicates money they are owed.');
    console.log('"list < name >" - prints a list of every transaction, with the date and narrative, ' +
        'for that account under < name > (NOTE: Case Sensitive)');
    return question('What would you like to do?\n').trim();
}

function parseCommand(command) {
    if (command === "list all") {
        return command;
    } else if (command.startsWith("list ")) {
        return command.slice(5);
    } else {
        console.log("Sorry, I don't understand. Please try again.\n");
        return null;
    }
}
