import 'dotenv/config';

import '@nomicfoundation/hardhat-toolbox-viem';
import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
  },
};

export default config;
