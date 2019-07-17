const { add } =  require('../src/add');
const fetch = require('node-fetch')
const axios = require('axios')

// jest.mock('node-fetch');
jest.mock('axios')

test('add two numbers together', ()=>{
  const myData =  {"id" : "sap", "ok": true }
  axios.get.mockResolvedValue(myData)
  return add().then(response => {
    // expect(response.id).toBe('sap')
  })
});