DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;

DROP TABLE IF EXISTS BookingList;
DROP TABLE IF EXISTS Feedback;
DROP TABLE IF EXISTS ServiceProviders;
DROP TABLE IF EXISTS UserRequirements;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PhoneNumber VARCHAR(20),
    Address VARCHAR(100)
);

CREATE TABLE ServiceProviders (
    ServiceProviderID INT PRIMARY KEY AUTO_INCREMENT,
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PhoneNumber VARCHAR(20),
	Skills Varchar(30),
    Wages VARCHAR(50),
    Address VARCHAR(100)
);

CREATE TABLE UserRequirements (
    UserID INT,
    Skills VARCHAR(100),
    Wages VARCHAR(50),
    Address VARCHAR(100),
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Feedback (
    SID INT,
    Ratings DOUBLE
);

CREATE TABLE BookingList (
    UserID INT,
   -- ServiceProviderID INT,--
	Username VARCHAR(50),
    NameFirst VARCHAR(50),
    NameLast VARCHAR(50),
    PhoneNumber VARCHAR(10),
	Skills VARCHAR(50),
    Wages VARCHAR(50),
    Ratings INT,
    -- FOREIGN KEY (ServiceProviderID) REFERENCES ServiceProviders(ServiceProviderID),--
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Inserting data into Users table with corrected phone numbers
INSERT INTO Users (NameFirst, NameLast, Username, Password, PhoneNumber, Address) 
VALUES 
('John', 'Doe', 'john_doe', 'password123', '1234567890', '123 Main St'),
('Jane', 'Smith', 'jane_smith', 'password456', '9876543210', '456 Elm St');


-- Inserting data into ServiceProviders table
INSERT INTO ServiceProviders (NameFirst, NameLast, Username, Password, PhoneNumber,Skills, Wages, Address) 
VALUES 
('Alice', 'Johnson', 'alice_provider', 'providerpass', '5551234567','coder', '15/hr', '789 Oak St'),
('Bob', 'Brown', 'bob_provider', 'providerpass123', '5559876543', 'web developer','20/hr', '321 Pine St');

-- Inserting data into UserRequirements table
INSERT INTO UserRequirements (UserID, Skills, Wages, Address, Date) 
VALUES 
(1, 'Cleaning', '15/hr', '123 Main St', '2024-02-12'),
(2, 'Gardening', '20/hr', '456 Elm St', '2024-02-15');

-- Inserting data into Feedback table
INSERT INTO Feedback (SID, Ratings) 
VALUES 
(1, 4.5),
(2, 4.0);

-- Inserting data into BookingList table
INSERT INTO BookingList (UserID, Username,NameFirst, NameLast, PhoneNumber,Skills, Wages, Ratings) 
VALUES 
(1,'alice_provider', 'Alice', 'Johnson', '5551234567','coder', '15/hr', 4),
(2,'bob_provider' ,'Bob', 'Brown', '5559876543','web developer', '20/hr', 3);
