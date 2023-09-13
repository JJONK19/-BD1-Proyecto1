-- Total de votos por genero
SELECT 
CASE
    WHEN ciudadano.genero = 'M' THEN 'Hombres'
    ELSE 'Mujeres' 
END AS 'Sexo',
count(*) AS 'Votos'
FROM votacion 
JOIN ciudadano
ON ciudadano.dpi = votacion.dpi
GROUP BY ciudadano.genero
ORDER BY count(*) DESC;