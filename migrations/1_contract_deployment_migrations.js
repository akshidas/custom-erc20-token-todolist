const Token = artifacts.require("TodoToken")
const TodoList = artifacts.require("TodoList")

module.exports = async (deployer) => {
  await deployer.deploy(TodoList);
  const todoList = await TodoList.deployed();
  await deployer.deploy(Token, todoList.address, "TodoToken", "TT", 1000000);
  const token = await Token.deployed()
  const status = await todoList.setToken(token.address)
  if (status) {
    console.log('Contract initiated successfully')
    const balance = await token.balanceOf(todoList.address)
    console.log(await balance.toString(), 'Tokens transfered to', todoList.address)
  } else {
    console.log('Failed to set token to contract')
  }
};
