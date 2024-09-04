const express = require('express');
const app = express();
const db = require('./db');
db.setUpDB();

const CityController = require('./controllers/CityController');
const cityController = new CityController(new (require('./services/CityService'))());

app.use(express.json());

app.get('/cities', async (req, res) => {
  await cityController.getAllCities(req, res);
});

app.get('/cities/:name', async (req, res) => {
  await cityController.getCityByName(req, res);
});

app.post('/cities', async (req, res) => {
  await cityController.createCity(req, res);
});

app.put('/cities/:name', async (req, res) => {
  await cityController.updateCity(req, res);
});

app.delete('/cities/:name', async (req, res) => {
  await cityController.deleteCity(req, res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app };