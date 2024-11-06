const express = require("express");
const app = express();
let { book } = require("./models/book.model");
let { sequelize } = require("./lib/index");

app.use(express.json());

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
  {
    title: 'The Last Horizon',
    author: 'Robert Brown',
    description: 'A science fiction novel exploring the concept of time travel and alternate dimensions.',
    genre: 'Science Fiction',
  },
  {
    title: 'Love and Loss',
    author: 'Emily White',
    description: 'A poignant love story about two people navigating life’s challenges.',
    genre: 'Romance',
  },
  {
    title: 'Tech Revolution',
    author: 'Chris Green',
    description: 'An insightful book on the future of technology and its impact on society.',
    genre: 'Non-fiction',
  },
  {
    title: 'Secrets of the Universe',
    author: 'Ava Williams',
    description: 'An exploration of the mysteries of the universe and the fundamental laws of physics.',
    genre: 'Science',
  },
  {
    title: 'The Forgotten Kingdom',
    author: 'Liam Johnson',
    description: 'A historical fiction novel about a lost civilization and its rediscovery.',
    genre: 'Historical Fiction',
  },
  {
    title: 'Journey to the Unknown',
    author: 'Sophia Davis',
    description: 'A fantasy novel where the main character embarks on an epic quest in a magical realm.',
    genre: 'Fantasy',
  },
  {
    title: 'The Art of Mindfulness',
    author: 'Olivia Brown',
    description: 'A self-help book focused on mindfulness techniques for personal growth and well-being.',
    genre: 'Self-Help',
  },
  {
    title: 'The Silent Ocean',
    author: 'Noah Miller',
    description: 'A thriller novel set on a sinking ship, where survival becomes the ultimate goal.',
    genre: 'Thriller',
  },
];

// Defining a route to seed the data
app.get("/seed_db", async (req, res) => {
  try{
    
    await sequelize.sync({ force: true });

    await book.bulkCreate(bookData);

    res.status(200).json({ message: "Database seeding successful." });
  } catch(error){
    res.status(500).json({ message: "Error seeding the data", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on Port : 3000");
});