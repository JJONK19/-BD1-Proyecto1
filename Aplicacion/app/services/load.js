const conn = require('../config/connection')
const mysql = require('mysql2/promise')
const fs = require('fs')
const csv = require('csv-parser')
const moment = require('moment')

async function loadData(){
    //Crear la conexion
    const connection = await mysql.createConnection(conn.config.connection)

    //Leer el archivo
    let sql = fs.readFileSync('sql/temporal.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     let queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Crear las tablas temporales
     for (const query of queries) {
        await conn.unclosableQuery(connection, query, []);
     }

     // Llenar tablas temporales 
     let lines = ""
     let read = []

     const candidatosData = fs.readFileSync('data/candidatos.csv', 'utf8')
     lines = candidatosData.split('\n')
     for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.length === 0) {
            continue
        }

        const fields = line.split(',')
        const id = parseInt(fields[0].trim())
        const nombres = fields[1].trim()
        const fecha_nacimiento = new Date(fields[2].split("/").reverse().join("/").trim())
        const partido_id = parseInt(fields[3].trim())
        const cargo_id = parseInt(fields[4].trim())

        const query = `INSERT INTO candidatoTemp (id, nombres, fecha_nacimiento, partido_id, cargo_id) VALUES (?, ?, ?, ?, ?)`
        await conn.unclosableQuery(connection, query, [id, nombres, fecha_nacimiento, partido_id, cargo_id])
    }

    const cargosData = fs.readFileSync('data/cargos.csv', 'utf8')
    lines = cargosData.split('\n')
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.length === 0) {
            continue
        }

        const fields = line.split(',')
        const id = parseInt(fields[0].trim())
        const cargo = fields[1].trim()
        
        const query = `INSERT INTO cargoTemp (id, cargo) VALUES (?, ?)`
        await conn.unclosableQuery(connection, query, [id, cargo])
    }

    const ciudadanosData = fs.readFileSync('data/ciudadanos.csv', 'utf8')
     lines = ciudadanosData.split('\n')
     for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.length === 0) {
            continue
        }

        const fields = line.split(',')
        const dpi = fields[0].trim()
        const nombres = fields[1].trim()
        const apellidos = fields[2].trim()
        const direccion = fields[3].trim()
        const telefono = fields[4].trim()
        const edad = parseInt(fields[5].trim())
        const genero = fields[6].trim()

        const query = `INSERT INTO ciudadanoTemp (dpi, nombres, apellidos, direccion, telefono, edad, genero) VALUES (?, ?, ?, ?, ?, ?, ?)`
        await conn.unclosableQuery(connection, query, [dpi, nombres, apellidos, direccion, telefono, edad, genero])
    }
    
    const departamentosData = fs.readFileSync('data/departamentos.csv', 'utf8')
    lines = departamentosData.split('\n')
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.length === 0) {
            continue
        }

        const fields = line.split(',')
        const id = parseInt(fields[0].trim())
        const nombre = fields[1].trim()
        
        const query = `INSERT INTO departamentoTemp (id, nombre) VALUES (?, ?)`
        await conn.unclosableQuery(connection, query, [id,nombre])
    }
    
    const mesasData = fs.readFileSync('data/mesas.csv', 'utf8')
    lines = mesasData.split('\n')
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.length === 0) {
            continue
        }

        const fields = line.split(',')
        const id_mesa = parseInt(fields[0].trim())
        const id_departamento = parseInt(fields[1].trim())
        
        const query = `INSERT INTO mesaTemp (id_mesa, id_departamento) VALUES (?, ?)`
        await conn.unclosableQuery(connection, query, [id_mesa, id_departamento])
    }
    
    read = await new Promise((resolve, reject) => {
        const read = [];
        fs.createReadStream('data/partidos.csv')
          .pipe(csv({ headers: ['id_partido', 'nombrePartido', 'Siglas', 'Fundacion'] }))
          .on('data', (row) => {
            read.push(row);
          })
          .on('end', () => {
            resolve(read);
          })
          .on('error', (error) => {
            reject(error);
          });
    });

    for (let i = 1; i < read.length; i++) {
        const line = read[i]
        const id_partido = parseInt(line['id_partido'].trim())
        const nombre_partido = line['nombrePartido'].trim()
        const siglas = line['Siglas'].trim()
        const fundacion = new Date(line['Fundacion'].split("/").reverse().join("/").trim())

        const query = `INSERT INTO partidoTemp (id_partido, nombre_partido, siglas, fundacion) VALUES (?, ?, ?, ?)`
        await conn.unclosableQuery(connection, query, [id_partido, nombre_partido, siglas, fundacion])   
    }

    const votacionesData = fs.readFileSync('data/votaciones.csv', 'utf8')
    lines = votacionesData.split('\n')
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.length === 0) {
            continue
        }

        const fields = line.split(',')
        const id_voto = parseInt(fields[0].trim())
        const id_candidato = parseInt(fields[1].trim())
        const dpi_ciudadano = fields[2].trim()
        const mesa_id = parseInt(fields[3].trim())
        let fecha_hora = moment(fields[4].trim(), 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss')

        const query = `INSERT INTO votacionTemp (id_voto, id_candidato, dpi_ciudadano, mesa_id, fecha_hora) VALUES (?, ?, ?, ?, ?)`
        await conn.unclosableQuery(connection, query, [id_voto, id_candidato, dpi_ciudadano, mesa_id, fecha_hora])
    }

    //Llenar las tablas del modelo
    sql = fs.readFileSync('sql/load.sql', 'utf8')
    
    queries = sql.split(';').filter(query => query.trim() !== '');
        
    for (const query of queries) {
        await conn.unclosableQuery(connection, query, []);
    }

    // Cierra la conexión
    await connection.end()
}

module.exports = loadData