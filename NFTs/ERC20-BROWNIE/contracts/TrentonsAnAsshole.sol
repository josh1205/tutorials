// contracts/OurToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TrentonsAnAsshole is ERC20 {
    
    //Initial supply is in wei
    constructor(uint256 initialSupply) public ERC20("TrentonsAnAsshole", "TAA") {
        _mint(msg.sender, initialSupply);
    }
}