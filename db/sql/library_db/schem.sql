DROP DATABASE IF EXISTS libraryDBv2;
CREATE DATABASE libraryDBv2;
USE libraryDBv2;


-- CREATE TABLE tableNaMe(field CONSTRAINTS, TABLE CONSTRAINT)

create table author (
    author_id tinyint unsigned auto_increment not null,
    author varchar(20),
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint pk_author primary key (author_id)
);

create table book (
    book_id tinyint unsigned auto_increment not null,
    title varchar(40) not null,
    author_id tinyint unsigned not null,
    publisher_id tinyint unsigned not null,
    copyright_year year,
    edition enum  ('1st edition', '2nd edition', '3rd'),
    binding enum ('papercover', 'hardcover', 'softcover') default 'papercover',
    rating enum ('1','2','3','4','5') default '1',
    language enum('English', 'Quenya') default 'english',
    qty tinyint unsigned not null,
    num_pages smallint unsigned not null,
    constraint pk_book primary key (book_id),
    constraint fk_author foreign key (author_id) references author (author_id),
    constraint fk_publisher foreign key (publisher_id) references publisher (publisher_id),
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp
);


create table publisher (
    publisher_id tinyint unsigned auto_increment not null,
    publisher varchar(40),
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint pk_publisher primary key (publisher_id)
);


create table genre (
    genre_id tinyint unsigned auto_increment not null,
    genre varchar(50),
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint pk_genre primary key (genre_id)
);

create table format (
    format_id tinyint unsigned auto_increment not null,
    format varchar(40) not null,
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint pk_format primary key (format_id)
);


create table book_to_genre (
    book_id tinyint unsigned not null,
    genre_id tinyint unsigned not null,
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint fk_book_bg foreign key (book_id) references book (book_id),
    constraint fk_genre_bg foreign key (genre_id) references genre (genre_id)
);




create table book_to_format (
    book_id tinyint unsigned not null,
    format_id tinyint unsigned not null,
    date_created timestamp default current_timestamp,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint fk_book_bf foreign key (book_id) references book (book_id),
    constraint fk_format_bf foreign key (format_id) references format (format_id)
);

alter table publisher
add column img_url mediumtext; 
add 



set @num:= 0;
update author set id = @num:= (@num + 1);
alter table book auto_increment = 1;

alter table book 
modify edition_year smallint;