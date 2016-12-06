-- Drop foreign keys
--alter table Animal drop column chair;
-- End drop foreign keys

-- Empty tables
delete from Picture;
delete from Animal;
delete from Webuser;
-- Empty tables

-- Delete tables
drop table Picture;
drop table Animal;
drop table Webuser;
-- Delete tables


--------------------------------------------------------------------------------


-- Create tables with primary key and restrictions
create table Webuser (
    id          char(6)     not null,
    fullName    varchar(32) not null,
    phone       varchar(13) not null,
    email       varchar(64) not null,
    addr1       varchar(64) not null,
    addr2       varchar(16),
    city        varchar(32) not null,
    state       char(2)     not null,
    zip         char(5)     not null,
    primary key (id)
);

create table Animal (
    id          char(6)     not null,   -- 000000, etc
    name        varchar(16) not null,   -- Azula, etc
    writeUp     varchar(500)not null,   -- Sleeps all night..., etc
    species     varchar(6)  not null,   -- Canine, Feline, Other
    breed       varchar(36) not null,   -- Akita, etc
    sex         varchar(6)  not null,   -- Male, Female
    monthBorn   varchar(9)  not null,   -- January, etc
    yearBorn    char(4)     not null,   -- 2000, etc
    aSize       varchar(32) not null,   -- Extra Small (...), etc
    monthFound  varchar(9)  not null,   -- January, etc
    yearFound   char(4)     not null,   -- 2000, etc
    fixed       varchar(3)  not null,   -- Yes, No
    status      varchar(9)  not null,   -- Adopted, Fostered, Shelter
    rescuerID   char(6),                -- 000000, etc
    monthRescued varchar(9),            -- January, etc
    yearRescued char(4),                -- 2000, etc
    age         varchar(32),            -- stub
    years       int,                    -- stub
    photos      char(1),                -- stub
    primary key (id)
);

create table Picture (
    id          char(6)     not null,   -- 000000, etc
    animalID    char(6)     not null,   -- 000000, etc
    photo       varchar(64) not null,   -- images/imageName.png, etc
    primary key (id)
);
-- Create tables


-- Add foreign keys
alter table Animal add foreign key (rescuerID) references Webuser(id);
alter table Picture add foreign key (animalID) references Animal(id);
-- Add foreign keys


--------------------------------------------------------------------------------


-- Insert data
insert into Webuser values ('000000', 'Francisco Cuevas', '(123)456-7890', 'cuevas500@gmail.com', '24897 T.6 SW', null, 'Mattawa', 'WA', '99349');
insert into Animal values ('000000', 'Zuko', 'Sleeps all night, naps all day.', 'Canine', 'Cane Corso Mix', 'Male', 'July', '2012', 'Large (between 60 and 100 lbs)', 'January', '2015', 'Yes', 'Adopted', '000000', 'July', '2015', null, null, null);
insert into Animal values ('000001', 'Brownie', 'Loves snow. Loves water. Loves food.', 'Canine', 'Retriever', 'Male', 'March', '2007', 'Medium (between 30 and 60 lbs)', 'January', '2010', 'No', 'Adopted', '000000', 'March', '2010', null, null, null);
insert into Animal values ('000002', 'Azula', 'Daughter of a fire lord. Princess.', 'Canine', 'Pitbull', 'Female', 'September', '2009', 'Medium (between 30 and 60 lbs)', 'December', '2015', 'Yes', 'Fostered', null, null, null, null, null, null);
insert into Animal values ('000003', 'Bubba', 'Hi, my name is Bubba. I am a hound mix that is about 3 years old. I am very friendly and have plenty of pep in my step. I like to go for walks and am very good on a leash. I get along well with other dogs and am house/crate trained too.', 'Canine', 'Hound Mix', 'Male', 'April', '2013', 'Medium (between 30 and 60 lbs)', 'March', '2014', 'Yes', 'Sheltered', null, null, null, null, null, null);
insert into Animal values ('000004', 'Frank', 'Frank is a 5 year old, 20 pound beagle. He was picked up as a stray in King William County, along with his friend Estelle. Frank is affectionate little boy and good with adults, children, other dogs and cats. He will need some training and patience transitioning from his hunting life to his new life as a family pet. Frank needs a foster home or a forever home. Please be the family to help him make a fresh start.', 'Canine', 'Beagle', 'Male', 'May', '2011', 'Small (between 10 and 30 lbs)', 'June', '2015', 'Yes', 'Sheltered', null, null, null, null, null, null);
insert into Animal values ('000005', 'Estelle', 'Estelle is a 5 year old, 15 pound beagle. She was picked up as a stray in King William County, along with her friend Frank. Estelle is a sweet little girl and good with adults, children other dogs and cats. She is ready to make the transition from hunting dog to family pet. She will need some training but she is eager to please so she should learn quickly. Estelle needs a foster home or a forever home. Please adopt this darling girl into your family.', 'Canine', 'Beagle', 'Female', 'May', '2011', 'Small (between 10 and 30 lbs)', 'June', '2015', 'Yes', 'Sheltered', null, null, null, null, null, null);
insert into Animal values ('000006', 'Buster', 'Buster is approximately four year old a very handsome fellow who is a transfer from a shelter in Cumberland. He is a bit reserved but a very well behaved gentleman who is looking for his forever home and walks very well on a leash.', 'Canine', 'Hound Mix', 'Male', 'October', '2010', 'Small (between 10 and 30 lbs)', 'May', '2014', 'Yes', 'Sheltered', null, null, null, null, null, null);
insert into Animal values ('000007', 'Buddy', 'Hi my name is Buddy I am approximately seven years old and I am looking for a friend to help me lose some weight. I am a very friendly dog that likes to hang out with people watch TV on the couch and I love attention. I was surrendered to the rescue that due to illness could no longer take care of me.', 'Canine', 'Hound Mix', 'Male', 'November', '2008', 'Medium (between 30 and 60 lbs)', 'May', '2015', 'Yes', 'Sheltered', null, null, null, null, null, null);
insert into Picture values ('000000', '000001', 'uploads/brownie.jpeg');
insert into Picture values ('000001', '000002', 'uploads/azula.jpg');
insert into Picture values ('000002', '000000', 'uploads/zukoKiss.jpg');
insert into Picture values ('000003', '000000', 'uploads/zukoSnowBatman.jpg');
insert into Picture values ('000004', '000003', 'uploads/bubba1.jpeg');
insert into Picture values ('000005', '000003', 'uploads/bubba2.jpeg');
insert into Picture values ('000006', '000003', 'uploads/bubba3.jpeg');
insert into Picture values ('000007', '000004', 'uploads/frank.jpeg');
insert into Picture values ('000008', '000005', 'uploads/estelle.jpeg');
insert into Picture values ('000009', '000006', 'uploads/buster1.jpeg');
insert into Picture values ('000010', '000006', 'uploads/buster2.jpeg');
insert into Picture values ('000011', '000006', 'uploads/buster3.jpeg');
insert into Picture values ('000012', '000007', 'uploads/buddy1.jpeg');
insert into Picture values ('000013', '000007', 'uploads/buddy2.jpeg');
insert into Picture values ('000014', '000007', 'uploads/buddy3.jpeg');
-- Insert data


--------------------------------------------------------------------------------

-- Update data
update Animal set status='Adopted', rescuerID='000000', monthRescued='July', yearRescued='2016' where id='000002';
update Animal set name='', writeUp='', species='', breed='', sex='', monthBorn='', yearBorn='', aSize='', monthFound='', yearFound='', fixed='', status='', rescuerID='', monthRescued='', yearRescued='', age='', years='', photos='' where id='000000';
-- Update data

-- Select data examples
select * from Animal order by name;                                             -- Select all animals
select * from Animal where status!='Adopted' order by name;                     -- Select all animals that are not adopted
select * from Animal where status='Adopted' order by name;                      -- Select all animals that are adopted
select * from Webuser order by Webuser.id;                                      -- Select all web users
-- Select data examples


--------------------------------------------------------------------------------

delete from Animal where id='000008';
delete from Picture where id='000015' or id='000016' or id='000017' or id='000018' or id='000019' or id='000020' or id='000021';
select * from Picture;

delete from Webuser where id!='000000';
select * from Webuser;




























