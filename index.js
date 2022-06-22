import getTransactionList from "./csvToTransactionList.js";
import AccountManager from "./accounts/accountManager.js";
import {getCommand} from "./command.js";

// Initialise accountManager
const accountManager = new AccountManager();

// Parse csv
getTransactionList().then(transactionList => {
    accountManager.addTransactions(transactionList);
    // ask for input
    const command = getCommand();

    // deal with input
    if (command === "list all") {
        const accounts = accountManager.accounts;
        for (const [key, account] of Object.entries(accounts)) {
            console.log('Name: ' + account.name);
            console.log('Amount owed:' + account.balance);
        }
    }
});






