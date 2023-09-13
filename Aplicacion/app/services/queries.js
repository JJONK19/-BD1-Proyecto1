const conn = require('../config/connection')
const mysql = require('mysql2/promise')
const fs = require('fs')

async function querie1(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie1.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie2(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie2.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie3(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie3.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie4(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie4.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie5(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie5.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie6(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie6.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie7(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie7.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie8(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie8.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie9(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie9.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie10(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie10.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}

async function querie11(){
    let results = ""

    //Leer el archivo
    const sql = fs.readFileSync('sql/querie11.sql', 'utf8')
    
     // Dividir el contenido del archivo SQL
     const queries = sql.split(';').filter(query => query.trim() !== '');
        
     // Ejecutar las consultas una por una
     for (const query of queries) {
        results = await conn.closableQuery(query, []);
     }

     return results
}


module.exports = {querie1, querie2, querie3, querie4, querie5, querie6, querie7, querie8, querie9, querie10, querie11}
