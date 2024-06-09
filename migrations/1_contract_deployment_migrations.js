const Token = artifacts.require("TodoToken")
const TodoList = artifacts.require("TodoList")

module.exports = async (deployer) => {
  await deployer.deploy(Token, "TodoToken", "TT", 1000000);
  const token = await Token.deployed()
  await deployer.deploy(TodoList, token.address);
  // const todoList = await TodoList.deployed();

};
