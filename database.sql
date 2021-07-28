-- Drop existing database of same name (IF IT EXISTS)
DROP DATABASE expense_track_db;

CREATE DATABASE expense_track_db;

\c expense_track_db

CREATE TABLE expenses(
  expense_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  cost INT
);

INSERT INTO expenses (name, category, cost) VALUES 
('Breakfast', 'Food', 20),
('Lunch', 'Food',13),
('Dinner', 'Food',30),
('Snack', 'Food',5),
('Desert', 'Food',10),
('New Car', 'Transportation', 20000),
('Uber Ride', 'Transportation', 17.534);

SELECT * FROM expenses;