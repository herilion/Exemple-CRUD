CREATE TABLE IF NOT EXISTS persona(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(80) NOT NULL,
    sexe VARCHAR(2) DEFAUL 'M',
);
INSERT INTO persona(nom,prenom,sexe)
