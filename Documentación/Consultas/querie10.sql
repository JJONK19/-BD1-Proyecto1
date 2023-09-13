-- Top 5 Horas mas concurridas donde se fue a votar
SELECT DATE_FORMAT(votacion.fecha_hora, '%Y-%m-%d %H:%i') AS 'Hora', count(*) AS 'Votos'
FROM votacion
GROUP BY DATE_FORMAT(votacion.fecha_hora, '%Y-%m-%d %H:%i')
ORDER BY COUNT(*) DESC
LIMIT 5;
