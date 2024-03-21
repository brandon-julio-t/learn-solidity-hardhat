import { BigNumberish, ContractFactory } from 'ethers';
import { assert } from 'chai';
import hre from 'hardhat';

describe('ModifyVariable', async () => {
  it('should change x to 1337', async () => {
    const contract = await hre.viem.deployContract<string>('ModifyVariable', [10, 'initial name']);

    await contract.write.modifyToLeet();

    const newX = await contract.read.x();
    assert.equal(newX, 1337n);
  });

  it('can change name', async () => {
    const contract = await hre.viem.deployContract<string>('ModifyVariable', [10, 'initial name']);

    const oldName = await contract.read.name();

    await contract.write.setName(['new name']);

    const newName = await contract.read.name();

    assert.equal(oldName, 'initial name');
    assert.equal(newName, 'new name');
  });
});
