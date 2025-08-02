import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchParticularNotesDetails } from "@/services/notesService";

const NoteViewer = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteData = await fetchParticularNotesDetails(noteId);
        setNote(noteData);
        document.title = `View Note: ${noteData.title}`;
      } catch (err) {
        setError("Failed to load the note. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [noteId]);

  if (loading) return <div className="p-6 text-gray-600">Loading note...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!note) return <div className="p-6">Note not found.</div>;

  return (
    <div className="p-6">
      <div className="flex flex-col items-start justify-between gap-4 mb-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{note.title}</h1>
          <p className="text-sm text-gray-500">
            {note.subject} • {note.language}
          </p>
        </div>
        <a
          href={`/api/v1/notes/stream/${note._id}?download=true`}
          download
          className="px-4 py-2 text-white transition bg-blue-600 rounded shadow hover:bg-blue-700"
        >
          Download PDF
        </a>
      </div>

      <div className="w-full overflow-hidden border rounded">
        <iframe
          src={`/api/v1/notes/stream/${note._id}`}
          className="w-full h-[80vh]"
          title="PDF Viewer"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default NoteViewer;
