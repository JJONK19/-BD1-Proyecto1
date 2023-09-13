-- Cantidad de Candidatos por partido 
SELECT partido.nombre AS 'Partido', count(*) AS 'Numero de Candidatos'
FROM candidato
JOIN partido
ON candidato.partido = partido.id
GROUP BY partido.nombre
ORDER BY partido.nombre;