// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.7;

contract Bank{
    uint256 TotalAmount=0;
    mapping(address=> uint256) public depositMoney;

    function deposit(uint256 amount) public payable{
        payable(address(this)).send(amount);
        depositMoney[msg.sender]=depositMoney[msg.sender]+amount;
        TotalAmount=TotalAmount+ amount;
    }

    function withDraw() public {
        require(depositMoney[msg.sender]>0,"Insufficient Amount");
        payable(msg.sender).send(depositMoney[msg.sender]);
        depositMoney[msg.sender]=0;
        TotalAmount=TotalAmount-depositMoney[msg.sender];
    }

    function balanceAmount() public view returns(uint256){
        return depositMoney[msg.sender];
    }
    function totalAmount() public view returns(uint256){
        return TotalAmount;
    }
    
}