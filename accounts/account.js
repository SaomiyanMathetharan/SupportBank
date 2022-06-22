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
        return Math.round(moneyOut * 100 - moneyIn * 100) / 100;
    }

    sumBalance(balanceSoFar, transaction) {
        const balance = Math.round(balanceSoFar * 100 + transaction.amount * 100) / 100
        return balance;
    }

    printTransactions() {
        console.log("\nTransactions from " + this.name)
        for (const ftrans of this.fromTransactions) {
            ftrans.printTransaction()
        }

        console.log("\nTransactions to " + this.name)
        for (const ttrans of this.toTransactions) {
            ttrans.printTransaction()
        }
    }
}