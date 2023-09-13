-- Mostra la cantidad de votos nulos
SELECT count(*) AS 'Votos Nulos'
FROM voto 
WHERE candidato = -1;