import TransactionDatabase from '../databases/transactions';
import Transaction from '../interfaces/transaction';

const testTransaction: Transaction = {
    txId: 'b56d48286e91605b279b1d6c86ffd442abac18c8d4f1f2f041d05f518ca6097e',
    timestamp: 'test',
    senderKey: 'GD5WH732DRJWCTMQLNC57UECV44WORONOZ7L3TALNRV3TGFSGIXSNKCB',
    destinationKey: 'GBQA4VPR42XS6OZKKBNPRCIVKY5MWIPMHJFQAVUJCIXWTZ3ZDE7NSBRJ',
    lumensAmount: 10,
};

const testAddTransaction = async () => {
    try {
        const dbUrl =
            'mongodb://serverless:nrzJYEtsDrRGwQG8Asuv@ds259089.mlab.com:59089/italianlunch-stage';
        const transactionDb = new TransactionDatabase();
        await transactionDb.connect(dbUrl);
        await transactionDb.add(testTransaction);
    } catch (err) {
        console.log('Error adding transaction.', err);
    }
};

const runTests = async () => {
    await testAddTransaction();
    process.exit();
};

runTests();
