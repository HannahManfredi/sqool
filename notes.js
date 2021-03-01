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
