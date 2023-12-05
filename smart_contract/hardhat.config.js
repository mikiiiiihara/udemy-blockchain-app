// https://eth-goerli.g.alchemy.com/v2/qGH_sBlIcMgeTsJqPd1QKsYFOLUA9069
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/qGH_sBlIcMgeTsJqPd1QKsYFOLUA9069",
      accounts: [
        "70126163018aea5f090856b95760235db8f059b5be3847b43cba218f9cdbad6f",
      ],
    },
  },
};
