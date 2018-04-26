import { Collection } from 'mongodb';

import Transaction from '../interfaces/transaction';
import { getCollection } from './mongo';

class TransactionsDatabase {
    transactions: Collection;

    async connect(dbUrl: string) {
        this.transactions = await getCollection(dbUrl, 'transactions');
    }

    async add(transaction: Transaction): Promise<void> {
        await this.transactions.insert(transaction, { w: 1 });
    }
}

export default TransactionsDatabase;
