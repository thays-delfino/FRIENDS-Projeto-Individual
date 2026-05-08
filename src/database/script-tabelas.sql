CREATE DATABASE friends;
USE friends;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE resultado_quiz (
    id         INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    pontuacao  INT NOT NULL,
    total      INT NOT NULL,
    data_quiz  TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);


CREATE TABLE resultado_personalidade (
    id         INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    personagem VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);