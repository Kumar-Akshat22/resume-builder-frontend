import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  LinkIcon,
  Upload
} from "lucide-react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa6";
import axios from "axios";

function Projects({ updateResumeDetails }) {
  const [projects, setProjects] = useState([]);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    shortDescription: "",
    liveLink: "",
    githubLink: "",
  });

  const resetFields = () => {
    setProjectDetails({
      title: "",
      shortDescription: "",
      liveLink: "",
      githubLink: "",
    });
  };

  const [editingId, setEditingId] = useState(null);
  const [descriptionPoints, setDescriptionPoints] = useState([]);
  const [selectedProjectID, setSelectedProjectID] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();

    const projectDescription = descriptionPoints
      .filter((point) => point.trim() !== "")
      .map((text) => ({ id: crypto.randomUUID(), text }));

    if (editingId) {
      setProjects(
        projects.map((project) =>
          project.id === editingId
            ? { ...projectDetails, id: editingId, projectDescription }
            : project
        )
      );

      setEditingId(null);
    } else {
      setProjects([
        ...projects,
        { ...projectDetails, id: crypto.randomUUID(), projectDescription },
      ]);
    }

    resetFields();
    setDescriptionPoints([""]);
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setProjectDetails({
      title: project.title,
      shortDescription: project.shortDescription,
      liveLink: project.liveLink,
      githubLink: project.githubLink,
    });

    setDescriptionPoints(project.projectDescription.map((desc) => desc.text));
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const addDescription = () => {
    if (descriptionPoints.length < 4) {
      setDescriptionPoints([...descriptionPoints, ""]);
    }
  };

  const updateDescription = (index, value) => {
    const newPoints = [...descriptionPoints];
    newPoints[index] = value;
    setDescriptionPoints(newPoints);
  };

  const removeDescriptionPoints = (index) => {
    setDescriptionPoints(descriptionPoints.filter((_, i) => i !== index));
  };

  const addProject = () => {
    if (projectDetails.title && projectDetails.shortDescription) {
      setProjects([...projects, { id: Date.now(), data: projectDetails }]);
      resetFields();
      toast.success("Project added");
    } else {
      toast.error("Please fill out some details");
    }
  };



  const [isDataUploading , setIsDataUploading] = useState(false);
  const handleDataUpload = async() => {

    const token = localStorage.getItem("AccessToken");

    if (!token) {
      toast.error("Authentication token is missing.");
      return;
    }

    if(!projects){

      toast.error("Please fill out some details!")
    }
    setIsDataUploading(true);
    try {
      const res = await axios.post(
        "/api/v1/users/upload-details",
        { projects: projects },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.statusCode === 200) {
        console.log(res);
        toast.success("Project data ulpoaded successfully!");
      } else {
        toast.error("Failed to upload data.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsDataUploading(false);
    }
  };


  console.log("Printing the Projects Array", projects);

  return (
    <div className="w-full p-3">
      <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Showcase Your Projects</h1>
              <button
                onClick={()=>(handleDataUpload())}
                disabled={isDataUploading}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-base"
              >
              {
                isDataUploading ? "Uploadiing..." : "Save Data "
              }
                
                <Upload size={18}/>
              </button>
            </div>
          </header>

      <div className="max-w-3xl mx-auto p-6 space-y-8">

        <form onSubmit={handleChange} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                value={projectDetails.title}
                onChange={(e) =>
                  setProjectDetails({ ...projectDetails, title: e.target.value })
                }
                placeholder="Enter project name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input
                id="shortDescription"
                value={projectDetails.shortDescription}
                onChange={(e) =>
                  setProjectDetails({ ...projectDetails, shortDescription: e.target.value })
                }
                placeholder="Brief description of your project"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="liveLink">Live Link</Label>
              <Input
                id="liveLink"
                value={projectDetails.liveLink || ""}
                onChange={(e) =>
                  setProjectDetails({ ...projectDetails, liveLink: e.target.value })
                }
                placeholder="https://your-project.com"
                type="url"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubLink">GitHub Link</Label>
              <Input
                id="githubLink"
                value={projectDetails.githubLink}
                onChange={(e) =>
                  setProjectDetails({ ...projectDetails, githubLink: e.target.value })
                }
                placeholder="https://github.com/username/repo"
                type="url"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Project Description (Add max 4 points)</Label>
              {descriptionPoints.length < 4 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addDescription}
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Point
                </Button>
              )}
            </div>
            {descriptionPoints.map((point, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={point}
                  onChange={(e) =>
                    updateDescription(index, e.target.value)
                  }
                  placeholder={`Description point ${index + 1}`}
                  className="flex-1"
                  required
                />
                {descriptionPoints.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeDescriptionPoints(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button type="submit" className="w-full bg-blue-500">
            {editingId ? "Update Project" : "Add Project"}
          </Button>
        </form>

        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">
                  {project.shortDescription}
                </p>
                <ul className="space-y-2">
                  {project.projectDescription.map((desc) => (
                    <li key={desc.id} className="text-sm">
                      • {desc.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(project)}
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(project.id)}
                >
                  <TrashIcon className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
