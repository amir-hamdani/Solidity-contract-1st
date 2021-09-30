const ERC721TOKEN = artifacts.require("ERC721TOKEN.sol");




module.exports = function (deployer) {
  deployer.deploy(ERC721TOKEN,"Ettricative Photos","EP",10);
};