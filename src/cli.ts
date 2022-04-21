import { program } from 'commander';

import {
    Connection,
    Transaction,
    Message,
    Keypair,
    PublicKey,
    SystemProgram
} from "@solana/web3.js";
import {Buffer} from "buffer";

//const ENDPOINT = "http://127.0.0.1:8899";
const ENDPOINT = "https://api.devnet.solana.com/";
//const ENDPOINT = "https://api.mainnet-beta.solana.com/";

const simpleTransaction = (transactionHash: string) => {
    //const transactionHash = ;

    console.log("transaction hash:", transactionHash);
    const rawTransactionBuffer = Buffer.from(transactionHash, 'base64');
    console.log("Try deserialize:", rawTransactionBuffer);

    const newTrx = Transaction.populate(Message.from(rawTransactionBuffer), []);


//    const newTrx = Transaction.from(rawTransaction);
    console.log("Desirialize SIMPLE ok", newTrx);

}
program
    .command('transfer')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .action(async (directory, cmd) => {
        const connection = new Connection(ENDPOINT, "confirmed");
        //simpleTransaction();
        simpleTransaction("AQABAyiMjS2zxD/uvnsCSevTDrjYcWROSenLvB5PlslDsGx+zuNEmgfrvI3mOPklMhjOGdzTJAc4pewZpQEVt9xa2bYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHj2jvpnz0rNx7gmVg8ExaRraaeU2ftQZE86bkgi0apAAQICAAEMAgAAAADh9QUAAAAA");
        simpleTransaction("AgACBSiMjS2zxD/uvnsCSevTDrjYcWROSenLvB5PlslDsGx+zuNEmgfrvI3mOPklMhjOGdzTJAc4pewZpQEVt9xa2bYUNXyktP2nWXHeq/4kRzKpfw2uyxZ/6YI9oRG38iecKQan1RcZLFaO4IqEX3PSl4jPA1wxRbIas0TYBi6pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB49o76Z89Kzce4JlYPBMWka2mnlNn7UGRPOm5IItGqQAIEAwIDAQQEAAAABAIAAQwCAAAAAOH1BQAAAAA=");
        return;



        const transactionHash = "AgACBSiMjS2zxD/uvnsCSevTDrjYcWROSenLvB5PlslDsGx+zuNEmgfrvI3mOPklMhjOGdzTJAc4pewZpQEVt9xa2bYUNXyktP2nWXHeq/4kRzKpfw2uyxZ/6YI9oRG38iecKQan1RcZLFaO4IqEX3PSl4jPA1wxRbIas0TYBi6pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB49o76Z89Kzce4JlYPBMWka2mnlNn7UGRPOm5IItGqQAIEAwIDAQQEAAAABAIAAQwCAAAAAOH1BQAAAAA=";

        console.log("transaction hash:", transactionHash);
        const rawTransaction = Buffer.from(transactionHash, 'base64');
        console.log("Try deserialize:", rawTransaction);
        const newTrx = Transaction.from(rawTransaction);
        console.log("Desirialize ok");

        console.log(`Transaction before partial sign ${JSON.stringify(newTrx)}`)
        //
        // // make sure we have immutable array
        // const originalSignatures  = Object.assign([], newTrx.signatures) as web3.SignaturePubkeyPair[];
        // const filteredSignatures = originalSignatures.filter(item => item.signature != null);
        //
        // console.log(`Original signatures are ${JSON.stringify(originalSignatures)}`);
        //
        // newTrx.partialSign(buyer);
        //
        // filteredSignatures.forEach(sign => {
        //     newTrx.addSignature(sign.publicKey, sign.signature as Buffer);
        // });
        //
        // console.log("=============================================================");
        // console.log(`After add ${JSON.stringify(newTrx.signatures)}`);
        //
        // const serialTx = newTrx.serialize(
        //     {
        //         requireAllSignatures: false,
        //         verifySignatures: false,
        //     }
        // );
        //
        // console.log("=============================================================");
        // console.log(`Full transaction ${JSON.stringify(web3.Transaction.from(serialTx))}`)
        //
        // const id = await web3.sendAndConfirmRawTransaction(connection, serialTx, {skipPreflight: true});
        //
        //
        // console.log(`Complete transaction: ${id}`);

        return;
    })

program.parse();
