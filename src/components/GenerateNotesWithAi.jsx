import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { FileText, PlusCircle, X } from "lucide-react";
import LoadingScreen from "./ui/LoadingScreen";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { Sparkles } from "lucide-react";
import toast from "react-hot-toast";
import { fetchAllNotes, createNote } from "@/services/notesService";

const GenerateNotesWithAi = () => {
  const [notesData, setNotesData] = useState([]);
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchNotesDetails = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetchAllNotes();
      console.log("Notes Details: ", response);
      setNotesData(response); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert comma-separated topics string into an array
    const topicsArray = topics
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    if (!title || !subject || !language || topicsArray.length === 0) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    try {
      setLoading(true);
      const response = await createNote(title, topicsArray, subject, language);
      console.log("Note created successfully:", response);
      // Here, you can handle what to do after the note is created (e.g., show a success message, reset the form, etc.)
      toast.success("Note generated successfully!");
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error generating notes", err);
      toast.error("Failed to generate notes");
    } finally {
      setLoading(false);
    }
  };
  // Trigger fetch when modal closes or when component mounts
  useEffect(() => {
    if (!isModalOpen) {
      fetchNotesDetails(); // Fetch new notes data when modal is closed
    }
  }, [isModalOpen]); // Dependency on modal open state
  return (
    <div className="container p-0 mx-auto space-y-6">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Generate notes with AI
          </h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 text-black bg-white hover:bg-slate-50"
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Generate Your Notes
          </Button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 bg-white shadow-2xl rounded-xl">
            <div className="flex items-start justify-between">
              <h2 className="mb-4 text-2xl font-bold">Generate Notes</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter notes title"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Topics
                </label>
                <input
                  type="text"
                  value={topics}
                  onChange={(e) => setTopics(e.target.value)}
                  placeholder="Enter topics for notes"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject name"
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Language
                </label>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder="Enter language"
                  required
                  className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {loading ? (
                  <div>
                    <Loader className="animate-spin" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Generate Notes <Sparkles size={16} />{" "}
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <LoadingScreen />
      ) : notesData.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-xl text-muted-foreground">
            You haven't created any notes yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-3">
          {notesData.map((notes) => (
            <motion.div
              key={notes.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative max-w-sm p-4 bg-white shadow-lg rounded-xl">
                <CardHeader className="p-0">
                  <div className="flex items-center justify-center aspect-video bg-muted">
                    <FileText
                      className="absolute mx-auto text-stone-600"
                      size={64}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="mb-2 text-lg">{notes.title}</CardTitle>
                  <p className="text-sm text-gray-500">{notes.subject}</p>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <Button
                    onClick={() => navigate(`/note/${notes._id}`)}
                    variant="outline"
                  >
                    View Notes
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenerateNotesWithAi;
