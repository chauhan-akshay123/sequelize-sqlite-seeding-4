# Database Seeding Exercise

This project demonstrates how to seed a database with dummy data using Sequelize ORM in a Node.js and Express environment. The application includes a route to seed a `book` table in a SQLite database with an array of dummy book data.

## Project Setup

### Prerequisites
Before you start, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [SQLite](https://www.sqlite.org/) (for the database)
- [Sequelize CLI](https://sequelize.org/)

### Installation

1. **Clone this repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup SQLite database**:
   - The SQLite database will be automatically created when you run the application. The `book` table will be seeded with dummy data.

### Project Structure
```
/project-folder
  /models
    book.model.js        // Sequelize model definition for the book
  /lib
    index.js             // Sequelize instance and database connection
  /seeders
    seed_books.js        // Data seeding logic
  app.js                 // Express server and seeding route
  package.json           // Project metadata and dependencies
  database.sqlite        // SQLite database (will be generated)
```

### Seeding the Database

Once you've installed the project and set it up, you can seed the database by visiting the `/seed_db` route.

#### To run the project:

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and visit:
   ```
   http://localhost:3000/seed_db
   ```

   This will trigger the database seeding process and insert the dummy data into the `book` table.

### Dummy Data

The dummy data being seeded consists of 10 book records with the following fields:
- **title**: Title of the book
- **author**: Author of the book
- **description**: A brief description of the book
- **genre**: The genre of the book

Here’s a sample of the data being seeded:
```javascript
let bookData = [
  {
    title: 'The Great Adventure',
    author: 'John Doe',
    description: 'A thrilling adventure story about a journey through uncharted lands.',
    genre: 'Adventure',
  },
  {
    title: 'Mystery in the Shadows',
    author: 'Jane Smith',
    description: 'A gripping mystery novel set in a small town with a dark secret.',
    genre: 'Mystery',
  },
  // Additional book data...
];
```

### Error Handling

If there’s an issue during the seeding process (e.g., database connection issues), the application will respond with a `500` status code and an error message.

### Sample Response

After successful seeding, the response will be:
```json
{
  "message": "Database seeding successful."
}
```

If there's an error, you will receive:
```json
{
  "message": "Error seeding the data",
  "error": "<error-message>"
}
```

