var Web3 = require('web3');
var web3 = new Web3();

// docker run -it -p 8545:8545 -p 30303:30303 ethereum/client-go --rpc --rpcaddr "0.0.0.0"
web3.setProvider(new web3.providers.HttpProvider('http://37.247.52.181:8780'));

var coinbase = "0xD3a33636677fFF0BE34EC503b9E848b296E0972A";
var balance = web3.eth.getBalance(coinbase);


console.log(balance); // instanceof BigNumber
console.log(balance.toString(20)); // String version
console.log(balance.toNumber()); // Number
