Simple Storage
A simple storage example.

Compile
truffle compile.

Test
truffle test.

Dev environment
truffle develop

Deploy to Dev environment
1.Enter dev env
truffle develop 
2.Run the cmd
migrate --reset

Deploy to testnet
1.Configure your network 

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = [
  '<enter address>'
];
module.exports = {
  networks: {
    bscTestnet: {
      provider: () =>
        new HDWalletProvider(
          privateKeys,
          ' https://data-seed-prebsc-1-s2.binance.org:8545/';
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
}

2.Run the cmd
truffle migrate --reset --network bscTestnet