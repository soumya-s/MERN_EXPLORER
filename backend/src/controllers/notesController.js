import Note from "../models/Notes.js"
export async function getAllNotes(req,res) {
    try{
        const notes = await Note.find().sort({createdAt:-1});//newwest first
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in controller",error);
        res.status(500).json({message:"Internal Server error"});
    }
    
}

// export function getAllNotes(req,res){
//     res.status(200).send("You got 20 notes");
// }
export async function createNotes(req,res){
    try{
        console.log("content",req.body);
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }catch(error){
        console.log("Error in notes creation");
        res.status(500).json({mesage:"Server error"});
    }
    
}
    
    export async function updateNote(req,res){
       try{
            const {title,content}= req.body;
           const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title,content},
            {
                new:true,   
            }
        );
           if(!updatedNote){
                return res.status(404).json({message:"Note not found"});
           }
            
            res.status(200).json(updatedNote);
        }catch(error){
            console.error("Error in updating",error);
            res.status(500).json({message:"Internal server error"});
        }   
}

export async function deleteNotes(req,res){
try{
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote){
        return res.status(404).json({message:"Note not found"});
    }
    res.status(200).json({message:"Note deleted successfully"});
}
    catch(error){
      console.log("error in deleting",error);
      res.status(500).json({message:"Internal Server Error"})  ;
    }
}
export async function getNotesById(req,res){
try{
    const getNote = await Note.findById(req.params.id);
    if(!getNote){
        return res.status(404).json({message:"Note not found"});

    }
    res.status(200).json(getNote);
}
catch(error){
    console.error("Error in controller",error);
    res.status(500).json({message:"Internal server error"});
}
}