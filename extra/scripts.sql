-- DROP FOREIGN KEYs
-- ALTER TABLE Animal DROP column chair;
-- End DROP FOREIGN KEYs

-- Empty TABLEs
DELETE FROM Picture;
DELETE FROM Animal;
DELETE FROM Webuser;
DELETE FROM Admin;
-- Empty TABLEs

-- DELETE TABLEs
DROP TABLE Picture;
DROP TABLE Animal;
DROP TABLE Webuser;
DROP TABLE Admin;
-- DELETE TABLEs


--------------------------------------------------------------------------------


-- CREATE TABLEs with PRIMARY KEY and restrictions
CREATE TABLE Admin (
    id      char(6)     NOT NULL,
    user    varchar(32) NOT NULL,
    pass    varchar(13) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Webuser (
    id          char(6)     NOT NULL,
    fullName    varchar(32) NOT NULL,
    phone       varchar(13) NOT NULL,
    email       varchar(64) NOT NULL,
    addr1       varchar(64) NOT NULL,
    addr2       varchar(16),
    city        varchar(32) NOT NULL,
    state       char(2)     NOT NULL,
    zip         char(5)     NOT NULL,
    ts          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE Animal (
    id          char(6)     NOT NULL,   -- 000000, etc
    name        varchar(16) NOT NULL,   -- Azula, etc
    writeUp     varchar(500)NOT NULL,   -- Sleeps all night..., etc
    species     varchar(6)  NOT NULL,   -- Canine, Feline, Other
    breed       varchar(36) NOT NULL,   -- Akita, etc
    sex         varchar(6)  NOT NULL,   -- Male, Female
    monthBorn   varchar(9)  NOT NULL,   -- January, etc
    yearBorn    char(4)     NOT NULL,   -- 2000, etc
    aSize       varchar(32) NOT NULL,   -- Extra Small (...), etc
    monthFound  varchar(9)  NOT NULL,   -- January, etc
    yearFound   char(4)     NOT NULL,   -- 2000, etc
    fixed       varchar(3)  NOT NULL,   -- Yes, No
    status      varchar(9)  NOT NULL,   -- Adopted, Fostered, Shelter
    rescuerID   char(6),                -- 000000, etc
    monthRescued varchar(9),            -- January, etc
    yearRescued char(4),                -- 2000, etc
    age         varchar(32),            -- stub
    years       int,                    -- stub
    photos      char(1),                -- stub
    ts          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (rescuerID) REFERENCES Webuser(id),
    CONSTRAINT chk_status CHECK (status='SHELTERED' OR status='FOSTERED' OR status='ADOPTED')
);

CREATE TABLE Picture (
    id          char(6)     NOT NULL,   -- 000000, etc
    animalID    char(6)     NOT NULL,   -- 000000, etc
    photo       varchar(64) NOT NULL,   -- images/imageName.png, etc
    ts          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (animalID) REFERENCES Animal(id)
);
-- CREATE TABLEs


--------------------------------------------------------------------------------


-- Insert data
INSERT INTO Admin VALUES ('000000', 'user', 'pass');
INSERT INTO Webuser VALUES ('000000', 'Francisco Cuevas', '(123)456-7890', 'francisco.cuevas@richmond.edu', '24897 T.6 SW', NULL, 'Mattawa', 'WA', '99349', (SELECT now()));
INSERT INTO Animal VALUES ('000000', 'Zuko', 'Sleeps all night, naps all day.', 'Canine', 'Cane Corso Mix', 'Male', 'July', '2012', 'Large (between 60 and 100 lbs)', 'January', '2015', 'Yes', 'ADOPTED', '000000', 'July', '2015', NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000001', 'Brownie', 'Loves snow. Loves water. Loves food.', 'Canine', 'Retriever', 'Male', 'March', '2007', 'Medium (between 30 and 60 lbs)', 'January', '2010', 'No', 'ADOPTED', '000000', 'March', '2010', NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000002', 'Azula', 'Daughter of a fire lord. Princess.', 'Canine', 'Pitbull', 'Female', 'September', '2009', 'Medium (between 30 and 60 lbs)', 'December', '2015', 'Yes', 'FOSTERED', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000003', 'Bubba', 'Hi, my name is Bubba. I am a hound mix that is about 3 years old. I am very friendly and have plenty of pep in my step. I like to go for walks and am very good on a leash. I get along well with other dogs and am house/crate trained too.', 'Canine', 'Hound Mix', 'Male', 'April', '2013', 'Medium (between 30 and 60 lbs)', 'March', '2014', 'Yes', 'SHELTERED', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000004', 'Frank', 'Frank is a 5 year old, 20 pound beagle. He was picked up as a stray in King William County, along with his friend Estelle. Frank is affectionate little boy and good with adults, children, other dogs and cats. He will need some training and patience transitioning FROM his hunting life to his new life as a family pet. Frank needs a foster home or a forever home. Please be the family to help him make a fresh start.', 'Canine', 'Beagle', 'Male', 'May', '2011', 'Small (between 10 and 30 lbs)', 'June', '2015', 'Yes', 'SHELTERED', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000005', 'Estelle', 'Estelle is a 5 year old, 15 pound beagle. She was picked up as a stray in King William County, along with her friend Frank. Estelle is a sweet little girl and good with adults, children other dogs and cats. She is ready to make the transition FROM hunting dog to family pet. She will need some training but she is eager to please so she should learn quickly. Estelle needs a foster home or a forever home. Please adopt this darling girl into your family.', 'Canine', 'Beagle', 'Female', 'May', '2011', 'Small (between 10 and 30 lbs)', 'June', '2015', 'Yes', 'SHELTERED', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000006', 'Buster', 'Buster is approximately four year old a very handsome fellow who is a transfer from a shelter in Cumberland. He is a bit reserved but a very well behaved gentleman who is looking for his forever home and walks very well on a leash.', 'Canine', 'Hound Mix', 'Male', 'October', '2010', 'Small (between 10 and 30 lbs)', 'May', '2014', 'Yes', 'SHELTERED', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT now()));
INSERT INTO Animal VALUES ('000007', 'Buddy', 'Hi my name is Buddy I am approximately seven years old and I am looking for a friend to help me lose some weight. I am a very friendly dog that likes to hang out with people watch TV on the couch and I love attention. I was surrendered to the rescue that due to illness could no longer take care of me.', 'Canine', 'Hound Mix', 'Male', 'November', '2008', 'Medium (between 30 and 60 lbs)', 'May', '2015', 'Yes', 'SHELTERED', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT now()));
INSERT INTO Picture VALUES ('000000', '000001', 'uploads/brownie.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000001', '000002', 'uploads/azula.jpg', (SELECT now()));
INSERT INTO Picture VALUES ('000002', '000000', 'uploads/zukoKiss.jpg', (SELECT now()));
INSERT INTO Picture VALUES ('000003', '000000', 'uploads/zukoSnowBatman.jpg', (SELECT now()));
INSERT INTO Picture VALUES ('000004', '000003', 'uploads/bubba1.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000005', '000003', 'uploads/bubba2.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000006', '000003', 'uploads/bubba3.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000007', '000004', 'uploads/frank.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000008', '000005', 'uploads/estelle.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000009', '000006', 'uploads/buster1.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000010', '000006', 'uploads/buster2.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000011', '000006', 'uploads/buster3.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000012', '000007', 'uploads/buddy1.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000013', '000007', 'uploads/buddy2.jpeg', (SELECT now()));
INSERT INTO Picture VALUES ('000014', '000007', 'uploads/buddy3.jpeg', (SELECT now()));
-- Insert data

--------------------------------------------------------------------------------

-- Update data
update Animal set status='ADOPTED', rescuerID='000000', monthRescued='July', yearRescued='2016' where id='000002';
update Animal set name='', writeUp='', species='', breed='', sex='', monthBorn='', yearBorn='', aSize='', monthFound='', yearFound='', fixed='', status='', rescuerID='', monthRescued='', yearRescued='', age='', years='', photos='' where id='000000';
-- Update data

-- SELECT data examples
SELECT * FROM Animal order by name;                                             -- SELECT all animals
SELECT * FROM Animal where status!='ADOPTED' order by name;                     -- SELECT all animals that are not adopted
SELECT * FROM Animal where status='ADOPTED' order by name;                      -- SELECT all animals that are adopted
SELECT * FROM Webuser order by Webuser.id;                                      -- SELECT all web users
-- SELECT data examples


--------------------------------------------------------------------------------

-- Add FOREIGN KEYs
ALTER TABLE Animal add FOREIGN KEY (rescuerID) REFERENCES Webuser(id);
ALTER TABLE Picture add FOREIGN KEY (animalID) REFERENCES Animal(id);
-- Add FOREIGN KEYs

DELETE FROM Animal where id='000008';
DELETE FROM Picture where id='000015' or id='000016' or id='000017' or id='000018' or id='000019' or id='000020' or id='000021';
SELECT * FROM Picture;

DELETE FROM Webuser where id!='000000';
SELECT * FROM Webuser;

# Clear testing
DELETE FROM Picture where id='111111';
DELETE FROM Animal where id='111111';
DELETE FROM Webuser where id='111111';




ALTER TABLE Webuser ADD ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;





















