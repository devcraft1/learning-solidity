# Smart Contracts
Get a sample of your smart contract and learn how to do complex Dapp algorithms. 
# Prerequisite
To Run these examples please follow following steps

## Installation
1. Install **Geth** (https://ethereum.github.io/go-ethereum/downloads/)
2. Install **Truffle** ```npm install -g truffle```
3. Start Test Network - There are three options
   - Use Test network using following comming
     - ```Geth --testnet``` **OR** 
     - ```Geth --rinkeby```
   - Create Private network 
   - Use ganache-cli
     - npm install -g ganache-cli
     - Run ganache-cli using following command
       - ```ganache-cli```
       - This will create Test network

# Compile, Deploy and Test Project
1. Go to project folder e.g
   - ```cd 01_HelloWorld```

2. Inside that folder Compile with following command
   - ```truffle.cmd compile``` on Windows
   - ```truffle compile```

3. Deploy Contract with following command
   - ```truffle.cmd migrate```  on Windows
   - ```truffle migrate```


4. Test Contract with following command
   - ```truffle.cmd test```  on Windows
   - ```truffle test```

Additional
  
   1. compile : truffle compile
   2. test 
   Test unit/integration logics : truffle test
   Test under dev environment  : truffle develop 
   Test migration in dev environment : truffle --reset
   3. deployment
   configure truffle-config.js file 

   Example:
   Configure your network

   const HDWalletProvider = require('@truffle/hdwallet-provider'); const privateKeys = [ 'enter address' ]; 
   module.exports = { networks: { bscTestnet: { provider: () => new HDWalletProvider( privateKeys, ' https://data-seed-prebsc-1-s2.binance.org:8545/'; ), network_id: 97, confirmations: 10, timeoutBlocks: 200, skipDryRun: true, }, }, }

   Deploy to network : truffle migrate --reset --network bscTestnet.

   check network explorer for details eg bscTestnet explorer.