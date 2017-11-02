DROP DATABASE IF EXISTS ice_cream_db;
CREATE database ice_cream_db;

USE ice_cream_db;

CREATE TABLE ice_cream (
    id INT(10) AUTO_INCREMENT,
    ice_cream_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);