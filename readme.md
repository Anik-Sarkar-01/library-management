
# 📚 Library Management System

A simple Library Management System built with **TypeScript**, **Express**, **MongoDB**, and **Zod**. This API allows users to manage books, borrow them, and track availability and borrowing statistics.

---

## 🚀 Features

- 📘 Add, update, delete, and fetch books
- 🔎 Filter and sort books by genre, date, etc.
- 📚 Borrow books with quantity and due date
- ⚠️ Prevent borrowing if stock is insufficient
- ✅ Automatically marks books unavailable when stock reaches zero
- 📊 Aggregated summary of borrowed books with total quantity
- 🔐 Input validation using Zod
- ⚙️ Modular structure with Mongoose + TypeScript

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose)
- **Validation**: Zod
- **Testing Tool**: Postman

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Anik-Sarkar-01/library-management.git
cd library-management
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root:

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/library
```

### 4️⃣ Run the Server

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

---

## 📬 API Endpoints

### 📘 Books

| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| POST   | `/api/books`         | Create a new book                  |
| GET    | `/api/books`         | Get all books (filter, sort, limit) |
| GET    | `/api/books/:id`     | Get book by ID                     |
| PUT    | `/api/books/:id`     | Update a book                      |
| DELETE | `/api/books/:id`     | Delete a book                      |

**Example**:  
`GET /api/books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5`

## 🧪 Sample API Request (POST /api/books)

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```

---

### 📗 Borrow

| Method | Endpoint         | Description                            |
|--------|------------------|----------------------------------------|
| POST   | `/api/borrow`    | Borrow a book                          |
| GET    | `/api/borrow`    | Get borrow summary (with aggregation)  |

---

## 🧪 Sample API Request (POST /api/borrow)

```json
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```