// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0;

contract FirstContract {
    string value;
    
    constructor() {
        value = "Constructor value";
    }
    
    function get() public view returns(string memory){
        return value;
    }
    
    function set(string memory _value) public {
        value = _value;
    }
}
