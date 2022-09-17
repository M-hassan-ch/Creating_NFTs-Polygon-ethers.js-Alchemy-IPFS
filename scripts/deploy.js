
const hre = require("hardhat");

async function main() {
  
  const contract = await hre.ethers.getContractFactory("MyNFT");
  const lock = await contract.deploy();

  await lock.deployed();

  console.log(
    `Contract deployed to ${lock.address}`
  );
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
