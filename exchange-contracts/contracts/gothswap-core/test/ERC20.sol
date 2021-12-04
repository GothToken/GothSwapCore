pragma solidity =0.5.16;

import '../GothSwapERC20.sol';

contract ERC20 is GothSwapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
