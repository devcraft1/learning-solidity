const Migrations = artifacts.require("Schedule");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
