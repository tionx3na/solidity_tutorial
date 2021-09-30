const RogToken = artifacts.require("./contracts/RogToken.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("RogToken", function (accounts) {
  var tokenInstance;
  it('initializes the contract with correct values', function() {
    return RogToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'RogToken', 'Has the correct name');
      return tokenInstance.symbol();
    }).then(function(symbol) {
      assert.equal(symbol, "ROG", 'has the correct symbol');
    })
  })
  it("sets the total supply upon deployment", async function () {
    return RogToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 10000000, 'sets the total supply to 1,00,00,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 10000000, 'it allocates the initial supply to admin account.')
    })
  });
});