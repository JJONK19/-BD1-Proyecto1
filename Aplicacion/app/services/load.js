const conn = require('../config/connection')
const mysql = require('mysql2/promise')
const fs = require('fs')
const candidatosData = '../data/candidatos.csv'
const cargosData = '../data/cargos.csv'
const ciudadanosData = '../data/ciudadanos.csv'
const departamentosData = '../data/departamentos.csv'
const mesasData = '../data/mesas.csv'
const partidosData = '../data/partidos.csv'
const votacionesData = '../data/votaciones.csv'