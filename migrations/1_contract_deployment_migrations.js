const Payout = artifacts.require("Payout");
const Token = artifacts.require("TodoToken")

module.exports = async (deployer) => {
    	await deployer.deploy(Payout);
	const payout = await Payout.deployed()
	await deployer.deploy(Token, payout.address, "TodoToken", "TT", 1000000);
};
