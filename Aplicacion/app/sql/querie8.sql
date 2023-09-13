-- Top 10 de candidatos para vice/presidente
SELECT MAX(tabla.Partido) AS 'Partido', MAX(tabla.Presidente) AS 'Presidente', MAX(tabla.Vicepresidente) AS 'Vicepresidente', count(*) AS 'Votos'
FROM voto 
JOIN (
    SELECT Partido,
    MAX(CASE
            WHEN Cargo = 'presidente' THEN IDPresidente 
        END)
    AS 'ID',
    MAX(CASE
            WHEN Cargo = 'presidente' THEN Nombre 
        END)
    AS 'Presidente',
    MAX(CASE
            WHEN Cargo = 'vicepresidente' THEN Nombre 
        END) 
    AS 'Vicepresidente'
    FROM 
        -- Crear una tabla derivada con la lista de candidatos que son presidente/vicepresidente
        (SELECT candidato.id AS 'IDPresidente', candidato.nombres AS 'Nombre', cargo.cargo AS 'Cargo', partido.nombre AS 'Partido'
        FROM candidato
        JOIN cargo 
        ON candidato.cargo = cargo.id
        JOIN partido
        ON candidato.partido = partido.id
        WHERE cargo.cargo = 'vicepresidente' or cargo.cargo = 'presidente'
        ) resultado 
    GROUP BY Partido
) AS tabla
ON tabla.ID = voto.candidato
GROUP BY tabla.ID
ORDER BY count(*) DESC
LIMIT 10;
