const conn = require('../config/connection')
const mysql = require('mysql2/promise')
const fs = require('fs')

async function createModel(){
    //Leer el archivo
    const sql = fs.readFileSync('sql/delete.sql', 'utf8')

    //Ejecutar la consulta
    await conn.closableQuery(sql, [])    
}

module.exports = createModel