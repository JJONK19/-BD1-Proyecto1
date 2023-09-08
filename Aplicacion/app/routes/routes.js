const express = require('express');
const router = express.Router();

// Main route
router.get('/', (req, res) => {
  res.send('Server working');
});

// Consulta 1
router.get('/consulta1', (req, res) => {
  res.send('Consulta1');
});

// Consulta 2
router.get('/consulta2', (req, res) => {
    res.send('Consulta2');
});

// Consulta 3
router.get('/consulta3', (req, res) => {
  res.send('Consulta3');
});

// Consulta 4
router.get('/consulta4', (req, res) => {
    res.send('Consulta4');
});

// Consulta 5
router.get('/consulta5', (req, res) => {
    res.send('Consulta5');
});

// Consulta 6
router.get('/consulta6', (req, res) => {
    res.send('Consulta1');
});

// Consulta 7
router.get('/consulta7', (req, res) => {
    res.send('Consulta7');
});

// Consulta 8
router.get('/consulta8', (req, res) => {
    res.send('Consulta8');
});

// Consulta 9
router.get('/consulta9', (req, res) => {
    res.send('Consulta9');
});

// Consulta 10
router.get('/consulta10', (req, res) => {
    res.send('Consulta10');
});

// Consulta 11
router.get('/consulta11', (req, res) => {
    res.send('Consulta11');
});

// Carga masiva de datos a la tabla temporal
router.get('/cargartabtemp', (req, res) => {
    res.send('Carga Masiva');
});

// Eliminar el modelo de datos
router.get('/eliminarmodelo', (req, res) => {
    res.send('Eliminar modelo');
});

// Crear el modelo de la base de datos
router.get('/crearmodelo', (req, res) => {
    res.send('Crear modelo');
});
  
module.exports = router;
