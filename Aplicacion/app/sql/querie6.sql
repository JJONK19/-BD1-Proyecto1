-- Mostra la cantidad de votos nulos
SELECT count(distinct voto) AS 'Votantes Nulos'
FROM voto 
WHERE candidato = -1;