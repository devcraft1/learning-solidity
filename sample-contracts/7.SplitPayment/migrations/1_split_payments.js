const Migrations = artifacts.require("SplitPayment");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
