CREATE DATABASE PROJECTDB;
USE PROJECTDB;


CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE 
    -- Other user profile details
);

CREATE TABLE JobListings (
    JobID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    RequiredSkills TEXT,
    Location VARCHAR(100),
    Deadline DATE
    -- Other job-related details
);

CREATE TABLE skills (
    UserID INT,
    SkillName VARCHAR(50) NOT NULL,
    PRIMARY KEY (UserID,SkillName),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE Applications (
    ApplicationID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    JobID INT,
    Status VARCHAR(20),
    DateApplied DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (JobID) REFERENCES JobListings(JobID)
);

CREATE TABLE Messages (
    MessageID INT PRIMARY KEY AUTO_INCREMENT,
    SenderID INT,
    ReceiverID INT,
    MessageText TEXT,
    Timestamp DATETIME,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID)
);

CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    JobID INT,
    Rating DECIMAL(2,1),
    Comment TEXT,
    Timestamp DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (JobID) REFERENCES JobListings(JobID)
);

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    CategoryName VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE JobCategories (
    JobID INT,
    CategoryID INT,
    PRIMARY KEY (JobID, CategoryID),
    FOREIGN KEY (JobID) REFERENCES JobListings(JobID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

CREATE TABLE SavedJobs (
    UserID INT,
    JobID INT,
    PRIMARY KEY (UserID, JobID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (JobID) REFERENCES JobListings(JobID)
);

CREATE TABLE SalaryInfo (
    JobID INT PRIMARY KEY,
    MinimumSalary DECIMAL(10,2),
    MaximumSalary DECIMAL(10,2),
    PaymentFrequency VARCHAR(50),
    FOREIGN KEY (JobID) REFERENCES JobListings(JobID)
);


-- Users
INSERT INTO Users (Username, Password, Email)
VALUES ('JohnDoe', 'password123', 'john@example.com'),
       ('JaneSmith', 'pass456', 'jane@example.com');

-- JobListings
INSERT INTO JobListings (Title, Description, RequiredSkills, Location, Deadline)
VALUES ('Customer Support Representative', 'Handle customer inquiries via phone and email', 'Communication', 'CityA', '2023-12-10'),
       ('Software Developer', 'Develop and maintain software applications', 'IT & Software, Problem Solving', 'CityB', '2023-12-15');

-- Skills
-- INSERT INTO Skills (SkillName)
-- VALUES ('Communication'),
--        ('Problem Solving');

-- Applications
INSERT INTO Applications (UserID, JobID, Status, DateApplied)
VALUES (1, 1, 'Pending', '2023-12-05'),
       (2, 2, 'Submitted', '2023-12-03');

-- Messages
INSERT INTO Messages (SenderID, ReceiverID, MessageText, Timestamp)
VALUES (1, 2, 'Hi Jane, I saw your application. Good luck!', '2023-12-06 08:00:00'),
       (2, 1, 'Thank you, John!', '2023-12-06 08:30:00');

-- Reviews
INSERT INTO Reviews (UserID, JobID, Rating, Comment, Timestamp)
VALUES (1, 2, 4.5, 'Great company to work for!', '2023-12-20 12:00:00'),
       (2, 1, 5.0, 'Excellent communication skills!', '2023-12-21 10:00:00');

-- Categories
INSERT INTO Categories (CategoryName)
VALUES ('Customer Service'),
       ('IT & Software');

-- JobCategories
INSERT INTO JobCategories (JobID, CategoryID)
VALUES (1, 1),
       (2, 2);

-- SavedJobs
INSERT INTO SavedJobs (UserID, JobID)
VALUES (1, 2),
       (2, 1);

-- SalaryInfo
INSERT INTO SalaryInfo (JobID, MinimumSalary, MaximumSalary, PaymentFrequency)
VALUES (1, 50000.00, 70000.00, 'Monthly'),
       (2, 60000.00, 90000.00, 'Yearly');