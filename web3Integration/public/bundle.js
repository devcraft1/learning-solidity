const contractABI = [];
const contractAddress = '0x4f6b4d74bfb15c79a8ccf346b3a4a63ec669052f';
const web3 = new Web3('http://localhost:9545');
const simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

const showAccounts = web3.eth.getAccounts().then((x) => {
  if (x.length <= 10) {
    return x;
  } else {
    return x;
  }
});

console.log(showAccounts);
