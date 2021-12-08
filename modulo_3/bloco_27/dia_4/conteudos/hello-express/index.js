// npm init -y
// npm install express
// npm install nodemon -D

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js",
//     "dev": "nodemon index.js"
// },

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))