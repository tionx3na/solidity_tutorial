// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RogToken {
    //constructor
    //set the total number of tokens
    //read the total number of tokens

    uint256 public totalSupply;

    constructor() public {
        totalSupply = 10000000; //1 crore tokens initialized

    }
}