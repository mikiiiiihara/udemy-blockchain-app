// スマートコントラクトを実装
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    // 仮想通貨の受け渡しのためのデータ構造
    struct TransferStruct {
        // 送る人
        address sender;
        // 受け取る人
        address receiver;
        // 通貨量
        uint amount;
    }
    
    TransferStruct[] transactions;
    
    event Transfer(address from, address receiver, uint amount);

    function addToBlockChain(address payable receiver, uint amount) public {
        transactions.push(TransferStruct(msg.sender, receiver, amount));

        emit Transfer((msg.sender), receiver, amount);
    }
}