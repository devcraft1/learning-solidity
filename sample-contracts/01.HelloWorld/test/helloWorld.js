const HelloWorld = artifacts.require('HelloWorld');

contract('Hello world', () => {
  it('should return hello world', async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hello();
    assert(result === 'hello world');
  });
});
