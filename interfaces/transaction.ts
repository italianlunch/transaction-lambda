interface Transaction {
    txId: string;
    timestamp: string;
    senderKey: string;
    destinationKey: string;
    lumensAmount: number;
}

export default Transaction;
