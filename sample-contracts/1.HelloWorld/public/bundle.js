const contractABI = [
  {
    inputs: [],
    name: 'hello',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
    constant: true,
  },
];

const contractAddress = '0x4F6b4D74bfb15C79a8cCf346B3A4a63Ec669052F';
const web3 = new Web3('http://localhost:9545');

const helloWorld = new web3.eth.Contract(contractABI, contractAddress);

console.log(helloWorld);

document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById('hello').innerHTML = result;
    });
});
