import moment from "moment";

export default class Transaction {
    constructor(date, from, to, narrative, amount) {
        this.date = moment(date, "DD/MM/YY");
        this.from = from;
        this.to = to;
        this.narrative = narrative;
        this.amount = parseFloat(amount);
    }

    printTransaction() {
        console.log("Date: " + this.date.format("DD/MM/YY"));
        console.log("From: " + this.from);
        console.log("To: " + this.to);
        console.log("Narrative: " + this.narrative);
        console.log("Amount: " + this.amount + "\n");

    }
}