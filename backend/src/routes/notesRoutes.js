import express from "express"
import { createNotes,
     deleteNotes,
     getAllNotes,
     getNotesById,
     updateNote } from "../controllers/notesController.js";
const router = express.Router();

router.get("/",getAllNotes)
router.get("/:id",getNotesById);

router.post("/",createNotes)

router.put("/:id",updateNote);

router.delete('/:id',deleteNotes);

export default router;

    