const Payout = artifacts.require("Payout");

module.exports = (deployer) => {
    deployer.deploy(Payout);
};
