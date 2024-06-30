// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../interfaces/IERC20.sol";

contract TodoList {
    address private owner;
    IERC20 private token;

    uint public totalUsers = 0;
    uint256 public totalTasks = 0;

    mapping(address => uint) private users;
    mapping(uint256 => Task) private tasks;
 
    uint private constant AMOUNT_FOR_NEW_USER = 100;
    uint private constant AMOUNT_FOR_NEW_TASK = 10;


    struct Task {
        uint id;
        uint user_id;
        string content;
        bool completed;
        uint256 startTime;
        uint256 endTime;
    }

    event TaskAdded(string message);
    event Toggling(uint id, string content, bool completed);
    event Toggled(uint id, string content, bool completed);
    event TokenTransferred(uint amount, string message, address user);
    event UserAdded(address userAddress, string message);

    constructor() {
        owner = msg.sender;
    }

    function setToken(address _token) public {
        require(
            msg.sender == owner,
            "Get lost, I have nothing to do with you!!!"
        );
        token = IERC20(_token);
    }

    function getUserIdFromAddress() private view returns(uint) {
        return users[msg.sender];
    }

    function isUserConnected() public view returns (bool) {
        return getUserIdFromAddress() > 0;
    } 

    function connectUser() public returns (bool) {

        require(!isUserConnected(), "User Already connected");
        totalUsers+= 1;

        users[msg.sender] = totalUsers;

        emit UserAdded(msg.sender, "User Added");
        token.transfer(msg.sender, AMOUNT_FOR_NEW_USER);
        emit TokenTransferred(AMOUNT_FOR_NEW_USER, "TT transfered", msg.sender);
        return true;
    }

    function addTask(string memory _content, uint256 endTime) public {
        bool status = token.transferFrom(
            msg.sender,
            address(this),
            AMOUNT_FOR_NEW_TASK
        );
        require(status == true, "Failed to deposit Tokens");

        totalTasks += 1;
        Task memory task = Task(
            totalTasks,
            getUserIdFromAddress(),
            _content,
            false,
            block.timestamp,

            endTime
        );

        tasks[totalTasks] = task;
        emit TaskAdded("A New Task has been added");
    }

    function getTaskLenghtOfUser() public view returns(uint) {
        uint userId = getUserIdFromAddress();
        uint _taskCount = 0;
        for (uint256 i = 1; i <= totalTasks; i++) {
            Task memory task = tasks[i];
            if(task.user_id == userId) {
                _taskCount +=1;
            }
        }
        return _taskCount;
    }

    function getTaskOfUser() public view returns(uint[] memory){
        uint userId = getUserIdFromAddress();
        uint taskLength = getTaskLenghtOfUser();
        uint[] memory taskIds = new uint[](taskLength);
        uint _taskCount = 0;
        uint index = 1;
        while(_taskCount  < taskLength){
            Task memory task = tasks[index];
            if(task.user_id == userId) {
                taskIds[_taskCount] = index;
                _taskCount +=1;
            }
            index++;
        }
        return taskIds;
    }
//    function getTask(uint index) public view returns (Task memory) {
//        Task[] memory myTasks = users[msg.sender];
 //       uint _taskCount = getTaskLength();
  //      require(
   //         index < _taskCount,
    //        "Task with the specified index does not exist"
     //   );
      //  return myTasks[index];
    //}

/**
    function markComplete(uint index) public {
        Task[] storage _tasks = users[msg.sender];
        require(index < _tasks.length, "Index Overshot");

        Task storage task = _tasks[index];
        emit Toggling(task.id, task.content, task.completed);
        task.completed = !task.completed;
        emit Toggled(task.id, task.content, task.completed);
    }
*/

}
