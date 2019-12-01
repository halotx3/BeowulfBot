-- ########### Creation of database ##########
drop database if exists beowulf_db;
CREATE DATABASE beowulf_db;
USE beowulf_db;

-- ######### Main table for adding in Clan members details #########

CREATE TABLE svmembers
(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    usertagid int NOT NULL UNIQUE,
    dateadded DATE NOT NULL,
    lastchecked int DEFAULT 0,
    PRIMARY KEY (id)

);

