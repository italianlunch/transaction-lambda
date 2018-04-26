import TransactionsDatabase from './databases/transactions';

export async function addTransaction(event: any, context: any, callback: any) {
    context.callbackWaitsForEmptyEventLoop = false;

    const transactionsDb = new TransactionsDatabase();
    try {
        const dbUrl = process.env.DB_URL;
        await transactionsDb.connect(dbUrl);
        await transactionsDb.add(JSON.parse(event.body));
        callback(null, {
            statusCode: 200,
            body: JSON.stringify('Ok'),
        });
    } catch (e) {
        console.log('ERROR', e);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify('Error'),
        });
    }
}
