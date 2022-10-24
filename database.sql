CREATE TABLE IF NOT EXISTS persona(
    id SERIAL PRIMARY KEY,
    prenom VARCHAR(80) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    sexe VARCHAR(2) DEFAULT 'M'
);
INSERT INTO persona(nom,prenom,sexe)
VALUES
('Heritier','LIONGE','M'),
('Anette','BWEMERE','F'),
('Alexandre','CHAMBU','M');
