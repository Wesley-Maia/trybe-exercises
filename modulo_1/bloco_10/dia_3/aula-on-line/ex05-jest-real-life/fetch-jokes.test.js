/* 
instale o node-fetch :
npm i node-fetch
 */

const fetch = require('node-fetch');
const fetchJokePromise = require('./fetch-jokes');

// test('consegue acessar uma piada', () => {
//   // return fetchJokePromise()
//   //    .then((data) => expect(data.joke).toEqual("My joke...???"));

//   return fetchJokePromise()
//     .then((data) => expect(typeof(data.joke)).toBe('string'));
// });


jest.mock('node-fetch');

test('consegue acessar uma piada', () => {
  const data = {
    "id": "7h3oGtrOfxc",
    "joke": "Whiteboards ... are remarkable.",
    "status": 200
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  return fetchJokePromise()
    .then((data) => expect(data.joke).toEqual("Whiteboards ... are remarkable."));
});
