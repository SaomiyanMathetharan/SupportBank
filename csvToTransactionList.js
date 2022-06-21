import {createReadStream} from 'fs';
import csvParser from 'csv-parser';
import transaction from './accounts/transaction.js'
import moment from 'moment';

const filePath = './Transactions2014.csv'

// need to deal with reject
export default function getTransactionList() {
    return new Promise( (resolve,reject) => {
    const transactions = [];
    createReadStream(filePath)
        .pipe(csvParser())
        .on("data", (data) => {
                const date = moment(data.Date, "DD/MM/YY");
                const from = data.From;
                const to = data.To;
                const narrative = data.Narrative;
                const amount = data.Amount;
                transactions.push(new transaction(date, from, to, narrative, amount));
            }
        )
        .on("end", () => {
            resolve(transactions)
        });
    });
}


