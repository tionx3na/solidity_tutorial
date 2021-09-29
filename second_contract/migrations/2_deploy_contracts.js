const RogToken = artifacts.require("./contracts/RogToken.sol");

module.exports = function (deployer) {
  deployer.deploy(RogToken, 10000000);
};