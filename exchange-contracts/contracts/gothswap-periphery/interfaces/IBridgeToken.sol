pragma solidity >=0.5.0;

import "../../gothswap-core/interfaces/IGothSwapERC20.sol";

interface IBridgeToken is IGothSwapERC20 {
    function swap(address token, uint256 amount) external;
    function swapSupply(address token) external view returns (uint256);
}