-- Tabla Cargo
CREATE TABLE IF NOT EXISTS cargo (
    id INT PRIMARY KEY,
    cargo VARCHAR(40) NOT NULL
); 

-- Tabla Partido
CREATE TABLE IF NOT EXISTS partido (
  id INT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  siglas VARCHAR(10) NOT NULL,
  fundacion DATE NOT NULL
);

-- Tabla Ciudadanos
CREATE TABLE IF NOT EXISTS ciudadano (
  dpi VARCHAR(13) PRIMARY KEY,
  nombres VARCHAR(20) NOT NULL,
  apellidos VARCHAR(20) NOT NULL, 
  direccion VARCHAR(40) NOT NULL,
  telefono VARCHAR(10) NOT NULL,
  edad INT NOT NULL,
  genero VARCHAR(1) NOT NULL
);

-- Tabla Departamentos
CREATE TABLE IF NOT EXISTS departamento (
    id INT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);

-- Tabla Mesas
CREATE TABLE IF NOT EXISTS mesa (
    id INT PRIMARY KEY,
    departamento INT NOT NULL,
    FOREIGN KEY (departamento) REFERENCES departamento(id)
);

-- Tabla Candidatos
CREATE TABLE IF NOT EXISTS candidato (
  id INT PRIMARY KEY,
  nombres VARCHAR(50)  NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  partido INT NOT NULL,
  cargo INT NOT NULL,
  FOREIGN KEY (partido) REFERENCES partido(id),
  FOREIGN KEY (cargo) REFERENCES cargo(id)
);

-- Tabla Votacioens
CREATE TABLE IF NOT EXISTS votacion (
  id INT PRIMARY KEY,
  fecha_hora TIMESTAMP NOT NULL,
  dpi VARCHAR(13) NOT NULL,
  mesa INT NOT NULL,
  FOREIGN KEY (dpi) REFERENCES ciudadano(dpi),
  FOREIGN KEY (mesa) REFERENCES mesa(id)
);

-- Tabla Voto
CREATE TABLE IF NOT EXISTS voto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  voto INT NOT NULL,
  candidato INT NOT NULL,
  FOREIGN KEY (voto) REFERENCES votacion(id),
  FOREIGN KEY (candidato) REFERENCES candidato(id)
); 
