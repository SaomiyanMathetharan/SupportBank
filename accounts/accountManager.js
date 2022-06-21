import account from './account.js';

export default class AccountManager {
    constructor() {
        this.accounts = {};
    }

    addTransaction(transaction) {
        const from = transaction.from;
        const fromAccount = this.accounts[from] || (this.accounts[from] = new account(from));
        fromAccount.addFromTransaction(transaction);

        const to = transaction.to;
        const toAccount = this.accounts[to] || (this.accounts[to] = new account(to));
        toAccount.addToTransaction(transaction);
    }

    addTransactions(transactionList) {
        transactionList.forEach(this.addTransaction);
    }
}