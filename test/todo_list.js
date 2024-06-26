const TodoList = artifacts.require("TodoList");
const Token = artifacts.require("TodoToken")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("TodoList", async function([primary]) {
  it("Deployed successfully", async function() {
    const todoList = await TodoList.deployed();
    const token = await Token.deployed()
    const balance = await token.balanceOf(todoList.address)
    assert.equal(balance, '1000000000000000000000000', "Balance does not match")
  });

  it('User connected successfully', async function() {
    const todoList = await TodoList.deployed();
    const token = await Token.deployed()
    const status = await todoList.connectUser()
    const balance = await token.balanceOf(primary)
    assert.strictEqual(balance.toString(), '100', 'Transferred Amount is not correct')
  })

  it('Task added successfully', async function() {
    const todoList = await TodoList.deployed();
    const todo = await TodoList.deployed()
    const token = await Token.deployed()

    await token.approve(todo.address, 10);
    var date = new Date("07/14/2024 16:00:00"); // some mock date

    await todoList.addTask('This is my first Task', date.getTime() / 1000);
    const taskLength = await todoList.getTaskLength()
    assert.strictEqual(taskLength.toString(), '1', "Task length should be one but do not match");
  })
  it('Task persists', async function() {
    const todo = await TodoList.deployed()
    const taskLength = await todo.getTaskLength()
    assert.strictEqual(taskLength.toString(), '1', "Task length should be one but do not match");
  })

  it('Ten Tokens transferred to user', async function() {
    const todo = await TodoList.deployed()
    const token = await Token.deployed()
    const taskLength = await todo.getTaskLength()
    assert.strictEqual(taskLength.toString(), '1', "Task length should be one but do not match");

    const balance = await token.balanceOf(primary)
    assert.strictEqual(balance.toString(), '90', 'Transferred Amount is not correct')
  })
  // it('Failed to remove task', async function() {
  //   const todo = await TodoList.deployed()
  //   const taskLength = await todo.getTaskLength()
  //   console.log(taskLength.toString())
  //   await todo.addTask('This is my first Task');
  //   await todo.addTask('This is my first Task');
  //   // await todo.removeTask(0);
  //   assert.strictEqual(taskLength.toString(), '0', "Task length should be zero but do not match");

  // })
  // it('Task added succesfully', async function() {
  //   const todoList = await TodoList.deployed();
  //   await todoList.addTask('This is first Task');
  //   const taskCount = await todoList.taskCount();
  //   assert.strictEqual(taskCount.toString(), '1', `Task Count is ${taskCount.toString()} instead of '1'`);
  // })
  // it("Ten Tokens transferred to the task creator", async function() {
  //   const token = await Token.deployed()
  //   const balance = await token.balanceOf(primary)
  //   assert.strictEqual(balance.toString(), '100', "Transferred Amount is not correct")
  // })
});
