import express, { Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { z } from "zod";


export const borrowRoutes = express.Router();

const CreateBorrowZodSchema = z.object(
    {
        book: z.string(),
        quantity: z.number().int(),
        dueDate: z.coerce.date().refine(
            (date) => date > new Date(),
            { message: "Due date should be in the future" }
        )
    }
)

// create Borrow
borrowRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const body = await CreateBorrowZodSchema.parseAsync(req.body);
        const borrow = await Borrow.create(body);

        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow
        })
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
            error
        })
    }
})

// get all borrow
borrowRoutes.get('/', async (req: Request, res: Response) => {
    const borrow = await Borrow.find({});

    res.status(200).json({
        success: true,
        message: "Borrowed books summary retrieved successfully",
        data: borrow
    })
})


