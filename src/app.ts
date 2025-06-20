import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
const app: Application = express();

app.use(express.json())


const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    copies: {
        type: Number,
        min: 0,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Book = model('Book', BookSchema);


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to library management app!')
})

// create book
app.post('/api/books', async (req: Request, res: Response) => {
    const body = req.body;
    const book = await Book.create(body);

    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book
    })

})

// get all books
app.get('/api/books', async (req: Request, res: Response) => {
    const books = await Book.find({});

    res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books
    })
})

// get a book by id
app.get('/api/books/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const book = await Book.findById(id);

    res.status(200).json({
        success: true,
        message: "Book retrieved successfully",
        data: book
    })
})

// update a book by id
app.patch('/api/books/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const updatedBody = req.body;
    const book = await Book.findByIdAndUpdate(id, updatedBody, { new: true });

    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: book
    })
})


export default app;