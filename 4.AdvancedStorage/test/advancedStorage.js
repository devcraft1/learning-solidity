const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
  it('should add an element to an array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    await advancedStorage.add(10);
    const result = await advancedStorage.ids(0);
    assert(result.toNumber() === 10);
  });

  it('should get an element of the ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    await advancedStorage.add(20);
    const result = await advancedStorage.get(1);
    assert(result.toNumber() === 20);
  });

  it('should get the ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    const rawIds = await advancedStorage.getAll();
    const ids = rawIds.map((id) => id.toNumber());
    assert.deepEqual(ids, [10, 20]);
  });

  it('should get length of ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    const result = await advancedStorage.getLength();
    assert(result.toNumber() === 2);
  });
});
