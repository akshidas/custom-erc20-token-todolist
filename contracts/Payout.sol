// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract Payout {
    function payout(
        address _tokenAddress,
        address _recipient,
        uint256 amount
    ) external {
        IERC20 customToken = IERC20(_tokenAddress);

        require(amount > 0, "Amount is invalid");

        customToken.transferFrom(msg.sender, _recipient, amount);
    }

    function payoutFromContract(
        address _tokenAddress,
        address _recipient,
        uint256 amount
    ) external {
        IERC20 customToken = IERC20(_tokenAddress);

        require(amount > 0, "Amount is invalid");

        customToken.transfer(_recipient, amount);
    }
}
