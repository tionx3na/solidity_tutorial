const rog_token = artifacts.require("./contracts/rog_token.sol");

module.exports = function (deployer) {
  deployer.deploy(rog_token);
};
 