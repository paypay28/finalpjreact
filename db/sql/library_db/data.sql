INSERT INTO author(author)VALUES('Angie Thomas');

INSERT INTO author(author)
VALUES
    ('Colleen Hoover'),
    ('Haper Lee'),
    ('John Green'),
    ('J.R.R Tolkien'),
    ('Rebecca Yarros'),
    ('Suzanne Collins'),
    ('F.Scoot Fitzgerald'),
    ('Lois Lowry'),
    ('S.E. Hinton')
    ;



INSERT INTO publisher(publisher)
VALUES
    ('BlazerBray'),
    ('Atria Books'),
    ('Harper Lee'),
    ('John Green'),
    ('J.R.R. Tolkien'),
    ('Rebecca Yarro'),
    ('Suzanne Collins'),
    ('F.Scoot Fitgerald'),
    ('Lois Lowry'),
    ('S.E. Hinton');


INSERT INTO format (format)
VALUES
    ("Hardcover"),
    ("Paperback"),
    ("E-book"),
    ("audiobook");








Insert into genre (genre)
values
('Urban Fiction'),
('Romance Fiction'),
('Southern Gothic'),
('YoungAdultFiction'),
('Fantasy Fiction'),
('YoungAdultFiction'),
('Science fiction/Young adult'),
('Romance Fiction'),
('Dystopian'),
('YoungAdultFiction');



INSERT INTO book_to_genre (book_id, genre_id)
VALUES
(1, 1),
(11, 2),
(12, 3),
(13, 4),
(14, 5),
(15, 6),
(16, 7),
(17, 8),
(18, 9),
(19, 10);

INSERT INTO  book_to_format (book_id, format_id)
VALUES
(1, 2),
(11, 2),
(12, 3),
(13, 1),
(14, 2),
(15, 1),
(16, 1),
(17, 2),
(18, 2),
(19, 2);



    I


INSERT INTO book(
title, 
author_id,
publisher_id, 
copyright_year, 
edition,
binding,
rating,
language,
qty,
num_pages,
edition_year
)
VALUES
('The Hate You Give', 1, 1, 2017, null, 2, 5, 'english', 8, 480, 2017  );


INSERT INTO book(
title, 
author_id,
publisher_id, 
copyright_year, 
edition,
binding,
rating,
language,
qty,
num_pages,
edition_year
)
VALUES
('It Ends With Us', 2, 2,2017,null,'hardcover',3,'english',26,373,2024),
('To Kill a Mocking Bird', 3, 3,1960,null,'softcover',5,'english',45,281,1960),
('The Fault In Our Stars', 4,4,2012,null,'hardcover',4,'english',78,313,2012),
('The Hobbit', 5,5,1937,null,'hardcover',3,'Quenya',4,310,1937),
('Fourth Wing', 6,6,2023,null,'hardcover',2,'english',5,512,2023),
('The Hunger Games', 7, 7,2008,null,'hardcover',5,'english',4,374,2008),
('The Great Gastsby',8,8,1925,null,'hardcover',3,'english',5,180,1925),
('The Giver', 9,9,1993,null,'hardcover',4,'english',4,208,1993),
('The Outsiders',10,10,1967,null,'hardcover',5,'english',8,192,1967);


--UPDATE table
--SET field ='data'
-- WHERE field (key) = arg


SELECT book.title,
CASE
    WHEN ar.fName IS NULL THEN''
    ELSE ar.lName
    END lName,
CASE
    WHEN b.book IS NULL THEN ''
    ELSE b.book
    END book,
    book.yr_copyright
    FROM Book b
    LEFT OUTER JOIN book  ON book.author_id = book.author_id
    LEFT OUTER JOIN author ON author.book_id = a.author_id;
