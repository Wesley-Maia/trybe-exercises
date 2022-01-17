const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()} - ${file.originalname}`);
  },
});


const upload = multer({ storage });

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/upload', upload.single('arquivo'), (req, res) => {
  return res.status(200).json({ message: "Arquivo recebido!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
