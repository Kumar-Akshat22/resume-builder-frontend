import axios from "axios";
import toast from "react-hot-toast";
import { notesEndpoints } from "./apis";

const fetchAllNotes = async (searchTerm = "") => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const res = await axios.get(`${notesEndpoints.GET_NOTES}`);
    result = res?.data;
  } catch (error) {
    console.error("Error fetching NOTES:", error);
    toast.error("Failed to fetch NOTES");
    throw error;
  }

  toast.dismiss(toastId);
  return result;
};

const createNote = async (title, topics, subject, language) => {
  try {
    const response = await axios.post(`${notesEndpoints.CREATE_NOTE}`, {
      title,
      topics,
      subject,
      language,
    });
    return response.data; // Return the data for further use
  } catch (error) {
    console.error("Error creating note:", error);
    throw new Error("Failed to generate or save note");
  }
};

const fetchParticularNotesDetails = async (noteId) => {
  try {
    const res = await axios.get(`/api/v1/notes/getNoteById/${noteId}`);
    return res.data;
  } catch (err) {
    console.error("API error - getNoteById:", err);
    throw new Error("Failed to fetch note details");
  }
};

export { fetchAllNotes, createNote , fetchParticularNotesDetails };
