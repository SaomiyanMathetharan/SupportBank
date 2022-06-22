import getTransactionList from "./csvToTransactionList.js";
import AccountManager from "./accounts/accountManager.js";
import {doCommand, getCommand} from "./command.js";

const accountManager = new AccountManager();

// Parse csv
getTransactionList().then(transactionList => {
    accountManager.addTransactions(transactionList);
    // ask for input
    const command = getCommand();
    doCommand(command, accountManager);
});






