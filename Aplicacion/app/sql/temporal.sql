-- Tabla temporal para Candidatos
CREATE TEMPORARY TABLE candidatoTemp (
  id INT,
  nombres VARCHAR(50),
  fecha_nacimiento DATE,
  partido_id INT,
  cargo_id INT
);

-- Tabla temporal para Cargos
CREATE TEMPORARY TABLE cargoTemp (
    id INT,
    cargo VARCHAR(40)
);

-- Tabla temporal para Ciudadanos
CREATE TEMPORARY TABLE ciudadanoTemp (
  dpi VARCHAR(13),
  nombres VARCHAR(20),
  apellidos VARCHAR(20),
  direccion VARCHAR(40),
  telefono VARCHAR(10),
  edad INT,
  genero VARCHAR(1)
);

-- Tabla temporal para Departamentos
CREATE TEMPORARY TABLE departamentoTemp (
    id INT,
    nombre VARCHAR(20)
);

-- Tabla temporal para Mesas
CREATE TEMPORARY TABLE mesaTemp (
    id_mesa INT,
    id_departamento INT
);

-- Tabla temporal para Partido
CREATE TEMPORARY TABLE partidoTemp (
  id_partido INT,
  nombre_partido VARCHAR(50),
  siglas VARCHAR(10),
  fundacion DATE
);

-- Tabla temporal para Votacioens
CREATE TEMPORARY TABLE votacionTemp (
  id_voto INT,
  id_candidato INT,
  dpi_ciudadano VARCHAR(13),
  mesa_id INT,
  fecha_hora TIMESTAMP
);