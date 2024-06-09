// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


interface ITodoList {
	function getCurrentTokenHolding() external view returns(uint256);
	function addTask(string memory) external;
	function removeTask(uint) external;
	function markComplete(uint) external;
	function getTaskIds() external view returns(uint[] memory);
}
