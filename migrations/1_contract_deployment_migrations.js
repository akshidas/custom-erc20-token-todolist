const Token = artifacts.require("TodoToken")
const TodoList = artifacts.require("TodoList")

module.exports = async (deployer) => {
   	await deployer.deploy(TodoList);
	const todoList = await TodoList.deployed()
	await deployer.deploy(Token, todoList.address, "TodoToken", "TT", 1000000);
};
