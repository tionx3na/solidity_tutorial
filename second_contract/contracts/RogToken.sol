// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RogToken {
    //Name
    //Symbol
    string public name = "RogToken";
    string public symbol = "ROG";
    uint8 public constant decimals = 18; // 18 is the maximum deciaml place of etherum
    uint256 public totalSupply;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;


    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply; //1 crore tokens initialized
        //allocate the initial supply to an address
    }
    // Transfer
    //return a boolean
    //transfer event
    function transfer(address _to, uint256 _value) public returns(bool success) {
        //Exception if account doesn't have enough balance
        require(balanceOf[msg.sender] >= _value); //runs only if this condition is true.

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require((_value <= balanceOf[_from]));
        require(_value <= allowance[_from][msg.sender]);
        
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
        
    }
}