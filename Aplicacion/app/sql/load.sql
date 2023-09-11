-- Llenar tabla Cargo
INSERT INTO cargo (id, cargo) 
SELECT id, cargo 
FROM cargoTemp;

-- Llenar Partido
INSERT INTO partido (id, nombre, siglas, fundacion) 
SELECT id_partido, nombre_partido, siglas, fundacion
FROM partidoTemp;

-- Llenar Ciudadano
INSERT INTO ciudadano (dpi, nombres, apellidos, direccion, telefono, edad, genero) 
SELECT dpi, nombres, apellidos, direccion, telefono, edad, genero
FROM ciudadanoTemp;

-- Llenar Departamento
INSERT INTO departamento (id, nombre) 
SELECT id, nombre
FROM departamentoTemp;

-- Llenar Mesa
INSERT INTO mesa (id, departamento) 
SELECT id_mesa, id_departamento
FROM mesaTemp;

-- Llenar tabla Candidato
INSERT INTO candidato (id, nombres, fecha_nacimiento, partido, cargo) 
SELECT id, nombres, fecha_nacimiento, partido_id, cargo_id 
FROM candidatoTemp;

-- LLenar Votaciones
INSERT INTO votacion (id, fecha_hora, dpi, mesa) 
SELECT id_voto, fecha_hora, dpi_ciudadano, mesa_id
FROM votacionTemp
GROUP BY id_voto, dpi_ciudadano, mesa_id, fecha_hora;

INSERT INTO voto (voto, candidato) 
SELECT id_voto, id_candidato
FROM votacionTemp;
