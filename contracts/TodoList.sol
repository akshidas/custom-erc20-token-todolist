// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../interfaces/IERC20.sol";
import "../interfaces/ITodoList.sol";

contract TodoList is ITodoList {
	address private owner;
	uint public taskCount = 0;
    uint[] private availableTaskIds;
    mapping(uint => Task) public tasks;
    IERC20 private token;

    struct Task {
        uint id;
        string content;
        bool completed;
        address owner;
    }

    event TaskAdded(string message);
    event Toggling(uint id, string content, bool completed);
    event Toggled(uint id, string content, bool completed);
    event Removed(uint id, string message);
    event TokenTransferred(string message, address user);

    constructor() {
    	owner = msg.sender;
    }

    function setToken(address _token) public  {
    	require(msg.sender == owner, "Get lost, I have nothing to do with you!!!");
    	token = IERC20(_token);
    }

    function getCurrentTokenHolding() public view returns(uint256) {
    	return token.balanceOf(address(this));
    }

    function addTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false, msg.sender);
        availableTaskIds.push(taskCount);
        emit TaskAdded("A New Task has been added");
        token.transfer(msg.sender, 10);
        emit TokenTransferred("10 TT transfered", msg.sender);
    }

    function removeTask(uint _id) public {
        if (taskExists(_id)) {
            delete tasks[_id];
            for (uint i = 0; i < availableTaskIds.length; i++) {
                if (availableTaskIds[i] == _id) {
                    availableTaskIds[i] = 0;
                    break;
                }
            }
            emit Removed(_id, "Task removed");
        }
    }

    function markComplete(uint _id) public {
        if (taskExists(_id)) {
            Task storage task = tasks[_id];
            emit Toggling(task.id, task.content, task.completed);
            task.completed = !task.completed;
            emit Toggled(task.id, task.content, task.completed);
        }
    }

    function taskExists(uint _id) private view returns (bool) {
        Task memory task = tasks[_id];
        require(_id > 0 && task.id == _id, "Task Does not exist");

        return true;
    }

    function getTaskCount() private view returns (uint) {
        uint _taskCount = 0;
        for (uint i = 0; i < availableTaskIds.length; i++) {
            if (availableTaskIds[i] > 0) {
                _taskCount++;
            }
        }

        return _taskCount;
    }

    function getTaskIds() public view returns (uint[] memory) {
        uint[] memory ids = new uint[](getTaskCount());
        uint index = 0;
        for (uint i = 0; i < availableTaskIds.length; i++) {
            if (availableTaskIds[i] > 0) {
                ids[index] = availableTaskIds[i];
                index++;
            }
        }
        return ids;
    }
}
