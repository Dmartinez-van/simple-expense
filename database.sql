CREATE DATABASE expense_track_db;

--\c into database

CREATE TABLE expenses(
  expense_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  amount INT
);

INSERT INTO expenses (name, category, amount) VALUES 
('Breakfast', 'Food', 20),
('Lunch', 'Food',13),
('Dinner', 'Food',30),
('Snack', 'Food',5),
('Desert', 'Food',10),
('New Car', 'Transportation', 20000),
('Uber Ride', 'Transportation', 17.23);
