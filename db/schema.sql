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

-- HOW TO RUN SQL files into the mysql server from the command line . 

-- go to `db` folder of the app.

-- start MySQL command line tool and login: `mysql -u root -p`.

-- with the `mysql>` command line tool running, enter the command `source schema.sql`.
-- this will run your schema file and all of the queries in it
-- in other words, you'll be creating your database.

-- insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

-- close out of the MySQL command line tool: `exit`.