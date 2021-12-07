// npm init -y
// npm install mocha chai sinon -D


// Alterar arquivo package.json:
// "scripts": {
//   "start" : "node index.js",
//   "test": "mocha tests"
// },

const fs = require('fs/promises');

const readFile = async (fileName) => {
  try {
    const data = await fs.readFile(fileName); // Harry Potter
    return data.toString();
  
  } catch (err) {
    return null
  }
}

module.exports = readFile;