const { myAsync, myAsyncPear } = require('../src/testingAsyncCode')

describe('Testing an async function using promise', () => {
  test('it resolves to a message', ()=> {
    return myAsync().then(resolvedMessage => {
      expect(resolvedMessage).toEqual('Yes there are 2 apples')
    });
  });
});

describe('Testing an asyncPear function using async await', () => {
  test('it resolves to a message', async ()=> {
    let resolvedValue = await myAsyncPear()
    expect(resolvedValue).toEqual('Yes there a pear')
  });
});

