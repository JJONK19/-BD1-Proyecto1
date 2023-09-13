const express = require('express');
const router = express.Router();
const createModel = require('../services/create')
const deleteModel = require('../services/delete')
const loadData = require('../services/load')
const queries = require('../services/queries');
const e = require('express');

// Main route
router.get('/', (req, res) => {
  res.send('Server working')
})

// Consulta 1
router.get('/consulta1', async (req, res) => {
  try {
    const results = await queries.querie1()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (1)' });
  }
})

// Consulta 2
router.get('/consulta2', async(req, res) => {
  try {
    const results = await queries.querie2()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (2)' });
  }
})

// Consulta 3
router.get('/consulta3', async(req, res) => {
  try {
    const results = await queries.querie3()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (3)' });
  }
})

// Consulta 4
router.get('/consulta4', async(req, res) => {
  try {
    const results = await queries.querie4()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (4)' });
  }
})

// Consulta 5
router.get('/consulta5', async(req, res) => {
  try {
    const results = await queries.querie5()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (5)' });
  }
})

// Consulta 6
router.get('/consulta6', async(req, res) => {
  try {
    const results = await queries.querie6()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (6)' });
  }
})

// Consulta 7
router.get('/consulta7', async(req, res) => {
  try {
    const results = await queries.querie7()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (7)' });
  }
})

// Consulta 8
router.get('/consulta8', async(req, res) => {
  try {
    const results = await queries.querie8()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (8)' });
  }
})

// Consulta 9
router.get('/consulta9', async(req, res) => {
  try {
    const results = await queries.querie9()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (9)' });
  }
})

// Consulta 10
router.get('/consulta10', async(req, res) => {
  try {
    const results = await queries.querie10()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (10)' });
  }
})

// Consulta 11
router.get('/consulta11', async(req, res) => {
  try {
    const results = await queries.querie11()
    res.json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error: Query Error (11)' });
  }
})

// Carga masiva de datos a la tabla temporal
router.get('/cargartabtemp', (req, res) => {
    loadData() 
      .then(() => {
        res.status(200).json({
            body: { message: 'Message: Data loaded successfully.' },
        })
      })
      .catch(error => {
        console.log('Error: ', error)
        res.status(500).json({
            body: { message: 'Error: Data not loaded. ', error },
        })
      })
})

// Eliminar el modelo de datos
router.get('/eliminarmodelo', (req, res) => {
    deleteModel() 
      .then(() => {
        res.status(200).json({
            body: { message: 'Message: Model deleted successfully.' },
        })
      })
      .catch(error => {
        console.log('Error: ', error)
        res.status(500).json({
            body: { message: 'Error: Model not deleted. ', error },
        })
      })
})

// Crear el modelo de la base de datos
router.get('/crearmodelo', (req, res) => {
    createModel() 
      .then(() => {
        res.status(200).json({
            body: { message: 'Message: Model created successfully.' },
        })
      })
      .catch(error => {
        res.status(500).json({
            body: { message: 'Error: Model not created. ', error },
        })
      })
})

  
module.exports = router;
