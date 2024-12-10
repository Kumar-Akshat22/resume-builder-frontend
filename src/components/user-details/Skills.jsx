import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Upload } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

function Skills({ updateResumeDetails }) {
  const [skills, setSkills] = useState({
    languages: [],
    frameworks: [],
    tools: [],
    technologies: [],
  });

  const [newSkill, setNewSkill] = useState({
    languages: "",
    frameworks: "",
    tools: "",
    technologies: "",
  });

  const handleAddSkill = (category) => {

    const skillToAdd = newSkill[category].trim();

    if(skills[category].includes(skillToAdd)){
        toast.error("Skill already exists");
    }
    else if (skillToAdd) {
      setSkills((prevSkills) => ({
        ...prevSkills,
        [category]: [...prevSkills[category], skillToAdd],
      }));

      setNewSkill((prev) => ({ ...prev, [category]: "" }));
      toast.success("Skill has been added");
    }
  };

  const handleRemoveSkill = (category, skillToRemove) => {
    setSkills((prevSkills) => ({
      ...prevSkills,
      [category]: prevSkills[category].filter(
        (skill) => skill !== skillToRemove
      ),
    }));
    toast.success("Skill has been removed");
  };

  const handleKeyPress = (e, category) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill(category);
    }
  };

  const [isDataUploading, setIsDataUploading] = useState(false);

  const handleDataUpload = async () => {

    const token = localStorage.getItem("AccessToken");

    if (!token) {
      toast.error("Authentication token is missing.");
      return;
    }

    if(!skills){

      toast.error("Please fill out some details!")
    }

    setIsDataUploading(true);
    try {
      console.log("Inside try block");
      const res = await axios.post(
        "/api/v1/users/upload-details",
        { skills: skills },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.statusCode === 200) {
        console.log(res);
        toast.success("Skills data ulpoaded successfully!");
      } else {
        toast.error("Failed to upload data.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsDataUploading(false);
    }
  };

  const renderSkillsSection = (category, title) => (
    <div className="space-y-4">
      <Label htmlFor={category} className="text-lg">{title}</Label>
      <div className="flex flex-wrap gap-2 mb-2">
        {skills[category].map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm py-1 px-2 bg-green-300">
            {skill}
            <button
              onClick={() => handleRemoveSkill(category, skill)}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          id={category}
          value={newSkill[category]}
          onChange={(e) =>
            setNewSkill({ ...newSkill, [category]: e.target.value })
          }
          onKeyPress={(e) => handleKeyPress(e, category)}
          placeholder={`Add ${title.toLowerCase()}`}
          className="flex-grow"
        />
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 transition-all duration-200" onClick={() => handleAddSkill(category)}>
          Add
        </Button>
      </div>
    </div>
  );

  console.log(skills);

  return (
    <div className="p-3">
    <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Add your Skills</h1>
          <button
            onClick={() => (handleDataUpload())}
            disabled={isDataUploading}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-base"
          >
            {isDataUploading ? "Uploadiing..." : "Save Data "}

            <Upload size={18} />
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <Card className="p-4">
          <CardContent className="space-y-6">
            {renderSkillsSection("languages", "Programming Languages")}
            {renderSkillsSection("frameworks", "Frameworks")}
            {renderSkillsSection("tools", "Tools")}
            {renderSkillsSection("technologies", "Technologies")}
          </CardContent>
        </Card>
      </div>
      </div>
  );
}

export default Skills;
