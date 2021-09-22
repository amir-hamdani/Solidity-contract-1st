const ERC20 = artifacts.require("ERC20.sol");

module.exports = function (deployer) {
  deployer.deploy(ERC20,(web3.utils.toWei("4","ether")),"0xe928ebc45ef7bafbafb2e76bd6edcbfc632c19f5",60);
};
// 2_ERC20.js
// ==========

//    Deploying 'ERC20'
//    -----------------
//    > transaction hash:    0xf4ccc30183d11cc0b9d5c365cb19e73730ea61deb4da5e9c3305bdc4806f8052
//    > Blocks: 2            Seconds: 21
//    > contract address:    0xc36195be3641B62E3FD9B43DA3678f23fe0f67f7   > block number:        11087033
//    > block timestamp:     1632339784
//    > account:             0x39602393131d0732C6ABF4dcd90390dE0DCe3c03   > balance:             3.726041866210673258
//    > gas used:            2547652 (0x26dfc4)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.05095304 ETH

//    Pausing for 2 confirmations...
//    ------------------------------
//    > confirmation number: 1 (block: 11087034)
//    > confirmation number: 2 (block: 11087035)

//    > Saving migration to chain.
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:          0.05095304 ETH


// Summary
// =======
// > Total deployments:   2
// > Final cost:          0.05595612 ETH 