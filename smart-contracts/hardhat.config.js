require("@nomiclabs/hardhat-waffle");
require('dotenv').config()


module.exports = {
  solidity: "0.8.4",
  networks: {
    matic: {
      url: process.env.SPEEDY_NODE,
      accounts:[process.env.ACCOUNT]
    }
  }
};
