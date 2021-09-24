const SimpleContract = artifacts.require('SimpleContract');

contract('SimpleContract', () => {
  it('should deploy a smart contract', async () => {
    const simpleContract = await SimpleContract.deployed();
    // console.log(simpleContract.address);
    assert(simpleContract.address !== '');
  });
});
