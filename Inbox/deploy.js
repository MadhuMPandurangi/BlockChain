const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'ability luggage view skin vivid coach common journey all citizen supply around',
    'https://rinkeby.infura.io/v3/c7d8d9222624443bbc60073cfdb05df2'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
     .send({ gas:'1000000', from: accounts[0] });
    
    console.log('Contract deployed to', result.options.address); 
};
deploy();