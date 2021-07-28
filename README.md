# Expense Tracker

Simple expense tracker. Takes inputs of name, category, and a numeric amount (as cost). List of expenses is shown below the input form once the user clicks the 'Add' button.

Data is persistent through a psql database (setup instructions below)

# Getting Started

1. Clone the repo with `git clone` to your desired directory
2. `cd` into the cloned repo directory and install dependencies with `npm install`
3. Run the server with the `nodemon` command
4. `cd` into the `client` folder and install dependencies with `npm install`
5. Run the client with `npm start`

### Database Setup

Since this is a locally run project, we will need to setup a local database to demonstrate the apps usage.

To do this please enter psql in a new terminal using the `psql` command.  
Then run the database script using

> `\i database.sql`

The `database.sql` file includes what psql commands will be run to:

1. Create the DB
2. Connect to the DB
3. Create Table within DB
4. Seed table with seed data

# Info

Please ensure there are no conflicts on existing ports.

- Server runs on localhost:5000
- Client runs on localhost:3000
