import account from './account.js';

export default class AccountManager {
    constructor() {
        this.accounts = {};
    }

    getAccount(name) {
        return this.accounts[name];
    }

    addTransaction(transaction) {
        const fromAccount = this.getAccountOrAdd(transaction.from);
        fromAccount.addFromTransaction(transaction);

        const toAccount = this.getAccountOrAdd(transaction.to);
        toAccount.addToTransaction(transaction);
    }

    addTransactions(transactionList) {
        for (const t of transactionList) {
            this.addTransaction(t);
        }
    }

    getAccountOrAdd(name) {
        if(!this.accounts[name]) {
            this.accounts[name] = new account(name);
        }
        return this.accounts[name];
    }
}