// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

interface IMiniChefV2 {
    struct UserInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    struct PoolInfo {
        uint128 accRewardPerShare;
        uint64 lastRewardTime;
        uint64 allocPoint;
    }

    function poolLength() external view returns (uint256);
    function updatePool(uint256 pid) external returns (IMiniChefV2.PoolInfo memory);
    function userInfo(uint256 _pid, address _user) external view returns (uint256, uint256);
    function deposit(uint256 pid, uint256 amount, address to) external;
    function withdraw(uint256 pid, uint256 amount, address to) external;
    function harvest(uint256 pid, address to) external;
    function withdrawAndHarvest(uint256 pid, uint256 amount, address to) external;
    function emergencyWithdraw(uint256 pid, address to) external;

    function disableMigrator() external;
    function migrate(uint256 _pid) external;

    function addFunder(address _funder) external;
    function removeFunder(address _funder) external;
    function fundRewards(uint256 funding, uint256 duration) external;
    function resetRewardsDuration(uint256 duration) external;
    function extendRewardsViaFunding(uint256 funding, uint256 minExtension) external;
    function extendRewardsViaDuration(uint256 extension, uint256 maxFunding) external;
}
