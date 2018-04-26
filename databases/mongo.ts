import { MongoClient } from 'mongodb';

const getCollection = async (mongoUrl: string, collectionName: string) => {
    const client = (await MongoClient.connect(mongoUrl)).db();
    return client.collection(collectionName);
};

export { getCollection };
