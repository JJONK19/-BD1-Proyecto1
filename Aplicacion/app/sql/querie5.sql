-- Cantidad de votos por departamentos
SELECT departamento.nombre AS 'Departamento', count(*) AS 'Numero de Votos'
FROM votacion
JOIN mesa
ON votacion.mesa = mesa.id
JOIN departamento
ON mesa.departamento = departamento.id
GROUP BY departamento.nombre
ORDER By departamento.nombre;
