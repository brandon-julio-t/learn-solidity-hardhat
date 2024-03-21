import 'dotenv/config';

import { ContractFactory, JsonRpcProvider, Wallet } from 'ethers';
import hre from 'hardhat';

async function main() {
  const url = process.env.SEPOLIA_URL;
  const privateKey = process.env.PRIVATE_KEY ?? '';

  const artifacts = await hre.artifacts.readArtifact('Faucet');
  const provider = new JsonRpcProvider(url);
  const wallet = new Wallet(privateKey, provider);

  const factory = new ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  const faucet = await factory.deploy();

  console.log('Faucet address:', await faucet.getAddress());

  await faucet.waitForDeployment();
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
