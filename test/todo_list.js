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
  it('Task added succesfully', async function() {
    const todoList = await TodoList.deployed();
    await todoList.addTask('This is first Task');
    const taskCount = await todoList.taskCount();
    assert.strictEqual(taskCount.toString(), '1', `Task Count is ${taskCount.toString()} instead of '1'`);
  })
  it("Ten Tokens transferred to the task creator", async function() {
    const token = await Token.deployed()
    const balance = await token.balanceOf(primary)
    assert.strictEqual(balance.toString(), '10', "Transferred Amount is not correct")
  })
});
