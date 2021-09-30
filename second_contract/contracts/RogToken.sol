// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RogToken {
    //Name
    //Symbol
    string public name = "RogToken";
    string public symbol = "ROG";
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply; //1 crore tokens initialized
        //allocate the initial supply to an address
    }
}