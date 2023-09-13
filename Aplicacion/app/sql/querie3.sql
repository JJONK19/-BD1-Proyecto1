-- Mostrar los candidatos a alcaldes por partido
SELECT partido.nombre AS 'Partido', candidato.nombres AS 'Candidato a Alcalde'
FROM candidato
JOIN partido
ON partido.id = candidato.partido
JOIN cargo
ON cargo.id = candidato.cargo
WHERE cargo.cargo = 'alcalde'
ORDER BY partido.nombre ASC;
