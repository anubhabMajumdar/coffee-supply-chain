const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "https://ropsten.infura.io/v3/<KEY>";
const metamaskKey = "<KEY>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(metamaskKey, infuraKey),
      network_id: 4,       // rinkeby's id
      // gas: 4500000,        // rinkeby has a lower block limit than mainnet
      // gasPrice: 10000000000,
    },
    ropsten: {
      provider: () => new HDWalletProvider(metamaskKey, infuraKey),
      network_id: 3,       // rinkeby's id
      gas: 4000000,        // rinkeby has a lower block limit than mainnet
      // gasPrice: 10000000000,
    },
  },
  
  compilers: {
     solc: {
       version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};
