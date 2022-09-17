import contract from './artifacts/contracts/MyNFT.sol/MyNFT.json' assert { type: "json" };
import {ethers} from 'ethers';

const PRIVATE_KEY = 'f633ce49458269cd50a64d59b7054df42d39676baab009176307700c4f30d8d7';
const PUBLIC_KEY = '0x7E14ACE3647aF483F0945982BD158F61BB2909e4';
const CONTRACT_ADDRESS ="0x416C174E836400a07962590BDcDe63221fF1393D";
const ALCHEMY_URL = 'https://polygon-mumbai.g.alchemy.com/v2/WfniW8J_c3mOCze0Csl9Eco8OkHp8xtv';
const tokenURI = 'https://gateway.pinata.cloud/ipfs/QmbCeNxR3fSAAh8E5R6gyWn1FoDeWSwtjKzUa2AwiVhsXQ';

// const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const etherInterface = new ethers.utils.Interface(contract.abi);

// Get latest nonce
const nonce = await provider.getTransactionCount(PUBLIC_KEY, "latest");

// Get gas price
const gasPrice = await provider.getGasPrice();

// Get network
const network = await provider.getNetwork();
const { chainId } = network;

//Transaction   object
const transaction = {
   from: PUBLIC_KEY,
   to: CONTRACT_ADDRESS,
   nonce,
   chainId,
   gasPrice:2000000000,
   data: etherInterface.encodeFunctionData("mintNFT", 
         [ PUBLIC_KEY, tokenURI ]) 
};

//Estimate gas limit
const estimatedGas = await provider.estimateGas(transaction);
transaction["gasLimit"] = estimatedGas;
// transaction["gasLimit"] = 1000000;

//Sign & Send transaction
const signedTx = await wallet.signTransaction(transaction);
const transactionReceipt = await provider.sendTransaction(signedTx);
await transactionReceipt.wait();
const hash = transactionReceipt.hash;
console.log("Your Transaction Hash is:", hash);

// Get transaction receipt
const receipt = await provider.getTransactionReceipt(hash);
const { logs } = receipt;

// Get token ID
const tokenInBigNumber = ethers.BigNumber.from(logs[0].topics[3]);
const tokenId = tokenInBigNumber.toNumber();
console.log("Token ID minted:", tokenId);