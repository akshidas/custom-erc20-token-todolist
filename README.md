
The Dapp Todo is a simple app where the user can add a todo by staking some tokens which they will get at the time of registration to the service and using these tokens the user can create a new task, edit, mark as complete and much more. So basically when a user creates/edits a task they need to pay an predefined amount tokens and they will get some rewards based on the speed in which they complete the task.

### When user connects
1. A new user comes to the system and connect
2. Check if the user already exist or not
3. If the user exists no need to do anything and continue with the flow
4. If there is no user with the specified address add the address to the address array and also transfer 100 Tokens to the user

### When user purchase tokens
1. A user can purchase [[Tokens]] with [[Ethereum]] based on a conversion rate set by the system.
2. The ETH send by the user will be send to the owner address of the [[Smart Contract]].
3. After the ETH is received by the owner the contract will transfer equivalent amount of [[Tokens]] to the user.
### Adding a TODO
1. When a user adds a new todo he/she need to send some tokens to the contract for the task to be added.
2. And by following the [[#How to calculate the reward rate]] a reward is calculated for the user.

### How to calculate the reward rate
The speed is calculated by converting the time of completion and time of creation to microseconds and then comparing the total difference between them which is basically finding out how much time actually passed by after creating the task and the time of completion and the return will be based on this percentage.
##### The percentage is calculated by finding
$c - currentTime$
$s = startTime$
$e = endTime$
$totalTime = e -s$
$elapsedTime = c - s$

$percentageOfTimeElapsed = (elapsedTime / totalTime) x 100$

and if the $percentageOfTimeElapsed$ is denoted $pe$ by  of time elapsed is:

- $pe$ <= 10% give the user 15 tokens
- 10% < $pe$ <= 20% give the user 14 tokens
- 20% < $pe$ <= 30% give the user 13 tokens
- 30% < $pe$ <= 40% give the user 12 tokens
- 40% < $pe$ < 50%  give the user 11 tokens
- $pe$ = 50% give the user 10 tokens
- 50% < $pe$ <= 60% give the user 9 tokens
- 60% < $pe$ <= 70% give the user 7 tokens
- 70% < $pe$ <= 80% give the user 5 tokens
- 80% < $pe$ <= 90% give the user 3 tokens
- 90% < $pe$ <= 100% give the user 1 tokens
- 100% < $pe$ give the user 0 tokens

#project #dapp #solidity #todo


### Creating New Tokens
New tokens will be created when a user successfully completes a new task before the dead line. For each completed task the tokens created will depend upon the result of [[#The percentage is calculated by finding]] and the newly created tokens will be send to the user who has completed the task.

### Burning of Tokens
When the user fails to complete a task before the deadline the tokens send by the user will be burnt up, thus maintaining a way in which the tokens will only be created when the users successfully completes a task and removed from existence when they fail to complete the task.
