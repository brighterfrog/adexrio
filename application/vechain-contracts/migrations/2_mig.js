const RollItVetMultiPlayerGame = artifacts.require("RollItVetMultiPlayerGame");

module.exports = function (deployer) {

    const deployed = deployer.deploy(RollItVetMultiPlayerGame).then((r) => {
        console.log('Deployed Roll It');
    });
};
