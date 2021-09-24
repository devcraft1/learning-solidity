const HelloWorldToString = artifacts.require('HelloWorld');

contract('HelloWorld', () => {
  it('should return a string', () => {
    const helloWorld = HelloWorldToString.deployed();
    const hello = helloWorld.hello();
    assert(hello === 'Hello world');
  });
});
