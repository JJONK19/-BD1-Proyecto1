-- Mostrar numero de diputados por partido
SELECT partido.nombre AS 'Partido', count(*) AS 'Numero de Diputados'
FROM candidato
JOIN partido
ON candidato.partido = partido.id
JOIN cargo
ON candidato.cargo = cargo.id
WHERE cargo.cargo LIKE 'diputado%'
GROUP BY partido.nombre
ORDER BY partido.nombre ASC;