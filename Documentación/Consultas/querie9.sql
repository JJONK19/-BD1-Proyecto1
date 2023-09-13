-- Top 10 mesas mas frecuentadas
SELECT mesa.id AS 'Numero de Mesa', departamento.nombre as 'Departamento', count(*) AS 'Numero de Votos'
FROM votacion
JOIN mesa 
ON mesa.id = votacion.mesa
JOIN departamento
ON departamento.id = mesa.departamento
GROUP BY mesa.id
ORDER BY count(*) DESC
LIMIT 5;
