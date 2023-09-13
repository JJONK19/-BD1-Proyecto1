-- Mostrar el presidemte, vicepresidente y el partido al que pertenecen
SELECT Partido,
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
    (SELECT candidato.nombres AS 'Nombre', cargo.cargo AS 'Cargo', partido.nombre AS 'Partido'
    FROM candidato
    JOIN cargo 
    ON candidato.cargo = cargo.id
    JOIN partido
    ON candidato.partido = partido.id
    WHERE cargo.cargo = 'vicepresidente' or cargo.cargo = 'presidente'
    ) resultado 
GROUP BY Partido 
ORDER BY Partido ASC;