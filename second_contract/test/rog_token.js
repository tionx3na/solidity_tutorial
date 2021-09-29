const RogToken = artifacts.require("./rog_token.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("RogToken", function (accounts) {
  it("sets the total supply upon deployment", async function () {
    return RogToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 10000000, 'sets the total supply to 1,00,00,000');
    })
  });
});
