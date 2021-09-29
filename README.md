SMART CONTRACTS

A systematic study with different smart contract projects.

TOOLS
*Truffle
*Ganache
*Prettier-solidity extension
*Mocha.

FORMAT CODE
\*install prettier-solidity extension
npm install --save-dev prettier prettier-plugin-solidity

\*create prettierrc and prettierignore files in root folder
touch .prettierrc prettierignore

_configure prettierrc file with the following:
{
"overrides": [
{
"files": "_.sol",
"options": {
"printWidth": 80,
"tabWidth": 4,
"useTabs": true,
"singleQuote": false,
"bracketSpacing": true,
"explicitTypes": "preserve"
}
}
]
}

\*Run the command below and specify the solidity file path to be formatted
npx prettier --write 'contracts/.sol'

COMPILE
\*To compile run
truffle compile.

TEST
\*To test run
truffle test.

DEV ENVIRONMENT
\*To navigate into dev env run
truffle develop

\*To deploy to Dev environment
1.Enter dev env
truffle develop
2.Run the cmd
migrate --reset

DEPLOY TO TESTNET NETWORK
\*To deploy to testnet, follow these processes below:

1.Configure your network

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = [
'enter address'
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
