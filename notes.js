//NOTES && SOLUTIONS

// The syntax for creating a new table schema is:
// CREATE TABLE <table-name> (
//   <name-of-column-1> <data-type-of-column> [ADDITIONAL-INFO-ABOUT-THIS-COLUMN],
//   <name-of-column-2> <data-type-of-column> [ADDITIONAL-INFO-ABOUT-THIS-COLUMN],
//                               ...
//   <name-of-column-n> <data-type-of-column> [ADDITIONAL-INFO-ABOUT-THIS-COLUMN],
//   [OTHER-SCHEMA-DEFINITION-COMMANDS]
// );

//create table <table-name> (<name-of-column1> <data-type-of-column> [additional-info-about-this-column]);

//In SQLite, you can view the schema of a table with the .schema <table-name> command

// sqlite> .schema departments
// CREATE TABLE departments (
//   id INTEGER PRIMARY KEY,
//   name TEXT NOT NULL
// );

//PRIMARY KEY = id column

//When the value of a column is intended to refer to a column in another table, it is called a FOREIGN KEY

//sqlite> .schema teachers
// CREATE TABLE teachers (
//   id INTEGER PRIMARY KEY,
//   name TEXT NOT NULL,
//   department INTEGER,
//   FOREIGN KEY(department) REFERENCES departments(id)
// );

//FOREIGN KEY(department) because we have another table schema for departments where each department id is srored as primary key

//.tables shows all tables in a schema
//school schema has: classes, departments, teachers, classes_students, students

//By far the most common SQL command is SELECT:
//used to query the database using the following syntax SELECT <column-name> [, <additional-column-names>] FROM <table-name>; If you wish to select every column in a table you can use the * character in place of a column name to indicate 'every column'. SELECT will return the columns requested for every row in the table.

// For pleasant viewing, set the mode to column mode with the .mode column command and turn headers on with .header on.

// select name from students;
// name
// ----------
// lauren
// dan
// naomi
// kim
// sam
// chris

// select * from teachers;
// id          name        department
// ----------  ----------  ----------
// 1           fred        1
// 2           pamela      2
// 3           beth        1
// 4           sunny       2

// department is a foreign key and references primary key in departments schema
//beth is from the cs dept.
// SELECT <column-name> FROM <table-name>
//   WHERE <some-condition-to-limit-by>;
// A simple condition-to-limit-by is a value for a given column. You can evaluate this value using =, !=, <, >, <=, and >=, amongst others. Chain togeher your conditions using AND and OR, which behave logically as you are used to from your work with JavaScript.
// SELECT * FROM teachers
//   WHERE department = 1 OR department = 2;
// select name from students where name != 'naomi';
// name
// ----------
// lauren
// dan
// kim
// sam
// chris
// sqlite>
// sqlite> select name department from teachers where id > 2 or name = 'fred';
// department
// ----------
// fred
// beth
// sunny
// sqlite>
// Aside from the comparison operators above, you can also use the LIKE keyword, in conjunction with the % wildcard symbol to select rows based on patterns you write. % will match 0 or more of any character. Using NOT LIKE instead of LIKE will select rows that do not match the pattern.
// SELECT name FROM CLASSES
//   WHERE name LIKE 'c%';
// select * from students where name like '%m';
// id          name
// ----------  ----------
// 4           kim
// 5           sam