require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = 'f633ce49458269cd50a64d59b7054df42d39676baab009176307700c4f30d8d7';
const ALCHEMY_URL = 'https://polygon-mumbai.g.alchemy.com/v2/WfniW8J_c3mOCze0Csl9Eco8OkHp8xtv';

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
