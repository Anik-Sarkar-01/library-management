import { model, Schema } from "mongoose";
import { IBooks } from "../interfaces/books.interface";

const BookSchema = new Schema<IBooks>({
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
}, {
    versionKey: false,
    timestamps: true,
}
);

export const Book = model<IBooks>('Book', BookSchema);
