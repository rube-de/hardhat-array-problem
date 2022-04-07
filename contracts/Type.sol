//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Type {
    mapping (address => bool) private types;


    function setType(address[] calldata addressesToAdd, bool value) public {
        for (uint i=0; i<addressesToAdd.length; i++){
            setType(addressesToAdd, value);
        }
    }

    function setType(address account, bool value) public {
        types[account] = value;
    }
}
