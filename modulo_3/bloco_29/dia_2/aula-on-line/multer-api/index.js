const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '/uploads')));

// file.originalname possui a extensão do arquivo
// Caso mude o nome, é preciso inidcar a extensão. Ex: ${image.png}
const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, 'uploads/'),
    filename: (req, file, callback) => callback(null, `${Date.now()} - ${file.originalname}`)
  });

// Multer é um middleware
const upload = multer({ storage });

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/files/upload', upload.single('batatinha'), (req, res) => {
    return res.status(200).json({message: "Arquivo recebido!"})
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));