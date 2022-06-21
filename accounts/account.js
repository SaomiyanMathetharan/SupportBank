export default class Account {
    constructor(name) {
        this.name = name;
        this.fromTransactions = [];
        this.toTransactions = [];
    }

    addFromTransaction(transaction) {
        this.fromTransactions.push(transaction);
    }

    addToTransaction(transaction) {
        this.toTransactions.push(transaction);
    }

    get balance() {
        const moneyOut = this.fromTransactions.reduce(this.sumBalance, 0);
        const moneyIn = this.toTransactions.reduce(this.sumBalance, 0);
        return moneyOut - moneyIn;
    }

    sumBalance(balanceSoFar, transaction) {
        return balanceSoFar + transaction.amount;
    }
}