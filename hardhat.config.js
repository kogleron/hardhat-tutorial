/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const { task } = require('hardhat/config');
require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task(
  'accounts',
  'Prints the list of accounts',
  /**
   * @param taskArgs
   * @param {import('hardhat/types').HardhatRuntimeEnvironment} hre
   */
  async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (let i = 0; i < accounts.length; i += 1) {
      console.log(accounts[i].address);
    }
  },
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
    },
    ganache: {
      url: 'http://127.0.0.1:7545',
      accounts: 'remote',
    },
  },
};
