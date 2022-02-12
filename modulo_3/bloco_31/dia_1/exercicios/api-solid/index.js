const express = require('express');
const bodyParser = require('body-parser');
const plantsModule = require('./plants');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

// retorna todas as plantas
app.get("/plants", (req, res) => {
  const plants = plantsModule.getPlants();
  res.send(plants);
});

// retorna uma planta com o id
app.get("/plant/:id", (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});

// deleta uma planta com o id
app.delete("/plant/:id", (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);
  res.send(plant);
});

// sobrescreve a planta com id
app.post("/plant/:id", (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsModule.editPlant(id, newPlant);
  res.send(plant);
});

// cria uma planta nova
app.post("/plant", (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

// retorna uma planta que precisa de sol com o id
app.get("/sunny/:id", (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
