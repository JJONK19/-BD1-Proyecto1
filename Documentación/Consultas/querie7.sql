-- Top 10 de edad de ciudadanos que realizaron su voto
SELECT ciudadano.edad AS 'Edad', count(*) AS 'Numero de Votos'
FROM votacion
JOIN ciudadano
ON votacion.dpi = ciudadano.dpi
GROUP BY ciudadano.edad
ORDER BY count(*) DESc
LIMIT 10;