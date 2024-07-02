// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TodoToken is ERC20 {
	constructor(address _owner, string memory name, string memory symbol, uint initialSupply) ERC20(name, symbol) {
		require(initialSupply > 0, "Initial Supply must be greater than 0");
		_mint(_owner, initialSupply * 10**18);
	}

    function rewardForAddingTask(address _owner, uint quantity) public {
        _mint(_owner, quantity);
    }
}
