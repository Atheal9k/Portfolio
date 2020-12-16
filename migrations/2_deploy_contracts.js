const VicToken = artifacts.require("./VicToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(FlightToken);
  const vicToken = await VicToken.deployed()

};
