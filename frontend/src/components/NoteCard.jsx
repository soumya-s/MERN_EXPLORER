import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/util"; // Assuming you have a util.js file for date formatting

const NoteCard =({note}) =>{
    return <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 
    border-t-4 border-solid border-[#00FF9D]"> NoteCard
        <div className="card-body">
            <h2 className="card-title text-base-content">{note.title}</h2>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60"> {formatDate((note.createdAt))} </span>
                <div className="flex items-center gap-1">
                <PenSquareIcon  className="size-4 text-primary"  />
                <button className="btn btn-ghost btn-sm">
                <Trash2Icon className="size-4 text-error" />
                </button>

            </div>
            </div>
        </div>

    
    </Link>

};
export default NoteCard;