import express, { Request, Response } from "express";
import { Book } from "../models/books.model";

export const booksRoutes = express.Router();

// create book
booksRoutes.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    const book = await Book.create(body);

    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: book
    })

})

// get all books
booksRoutes.get('/', async (req: Request, res: Response) => {
    const books = await Book.find({});

    res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data: books
    })
})

// get a book by id
booksRoutes.get('/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const book = await Book.findById(id);

    res.status(200).json({
        success: true,
        message: "Book retrieved successfully",
        data: book
    })
})

// update a book by id
booksRoutes.put('/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const updatedBody = req.body;
    const book = await Book.findByIdAndUpdate(id, updatedBody, { new: true });

    res.status(201).json({
        success: true,
        message: "Book updated successfully",
        data: book
    })
})

// delete a book by id
booksRoutes.delete('/:bookId', async (req: Request, res: Response) => {
    const id = req.params.bookId;
    const book = await Book.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: null
    })
})