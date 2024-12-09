import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { PencilIcon, TrashIcon, PlusIcon, Upload } from "lucide-react";
import axios from "axios";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from({ length: 30 }, (_, i) =>
  (new Date().getFullYear() - 15 + i).toString()
);

function WorkExp({ updateResumeDetails }) {
  const [experiences, setExperiences] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [contributions, setContributions] = useState([""]);

  const [experienceDetails, setExperienceDetails] = useState({
    employer: "",
    jobTitle: "",
    startDate: {
      month: "",
      year: "",
    },
    endDate: {
      month: null,
      year: null,
    },

    isPresent: false,
  });

  const resetFields = () => {
    setExperienceDetails({
      employer: "",
      jobTitle: "",
      startDate: { month: "", year: "" },
      endDate: { month: null, year: null },
      isPresent: false,
    });

    setContributions([""]);
  };

  const handleChange = (event) => {

    event.preventDefault();

    const newContributions = contributions.filter((contribution) => contribution.trim() !== "").map((text) => ({ id: crypto.randomUUID(), text }));

    if (editingId) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === editingId
            ? {
                ...experienceDetails,
                id: editingId,
                contributions: newContributions,
              }
            : exp
        )
      );
      setEditingId(null);
    } else {
      setExperiences([
        ...experiences,
        {
          ...experienceDetails,
          id: crypto.randomUUID(),
          contributions: newContributions,
        },
      ]);
    }

    resetFields();
  };

  const handleEdit = (experience) => {
    setEditingId(experience.id);
    setExperienceDetails({
      employer: experience.employer,
      jobTitle: experience.jobTitle,
      startDate: experience.startDate,
      endDate: experience.endDate,
      isPresent: experience.isPresent,
    });
    setContributions(experience.contributions.map((c) => c.text));
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const addContribution = () => {
    setContributions([...contributions, ""]);
  };

  const updateContribution = (index, value) => {
    const newContributions = [...contributions];
    newContributions[index] = value;
    setContributions(newContributions);
  };

  const removeContribution = (index) => {
    setContributions(contributions.filter((_, i) => i !== index));
  };

  const [isDataUploading , setIsDataUploading] = useState(false);
  const handleDataUpload = async()=>{

    const token = localStorage.getItem("AccessToken")
    if (!token) {
        toast.error("Authentication token is missing.");
        return;
      }
  
      if(!experiences){
  
        toast.error("Please fill out some details!")
      }
    setIsDataUploading(true);
    try {
      const res = await axios.post(
        "/api/v1/users/upload-details",
        { experience: experiences},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.statusCode === 200) {
        toast.success("Work Experience data ulpoaded successfully!");
      } else {
        toast.error("Failed to upload data.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsDataUploading(false);
    }
  }

  console.log("Printing the Experiences array:", experiences);

  return (
    <div className="w-full p-3">
    <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Work Experience</h1>
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
              <Label htmlFor="employer">Employer</Label>
              <Input
                id="employer"
                value={experienceDetails.employer}
                onChange={(e) =>
                  setExperienceDetails({
                    ...experienceDetails,
                    employer: e.target.value,
                  })
                }
                placeholder="Enter employer name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                value={experienceDetails.jobTitle}
                onChange={(e) =>
                  setExperienceDetails({
                    ...experienceDetails,
                    jobTitle: e.target.value,
                  })
                }
                placeholder="Enter job title"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  value={experienceDetails.startDate.month}
                  onValueChange={(month) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      startDate: { ...experienceDetails.startDate, month },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={experienceDetails.startDate.year}
                  onValueChange={(year) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      startDate: { ...experienceDetails.startDate, year },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  value={experienceDetails.endDate.month || ""}
                  onValueChange={(month) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      endDate: { ...experienceDetails.endDate, month },
                    })
                  }
                  disabled={experienceDetails.isPresent}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={experienceDetails.endDate.year || ""}
                  onValueChange={(year) =>
                    setExperienceDetails({
                      ...experienceDetails,
                      endDate: { ...experienceDetails.endDate, year },
                    })
                  }
                  disabled={experienceDetails.isPresent}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="present"
              checked={experienceDetails.isPresent}
              onCheckedChange={(checked) => {
                setExperienceDetails({
                  ...experienceDetails,
                  isPresent: checked,
                  endDate: checked
                    ? { month: null, year: null }
                    : experienceDetails.endDate,
                });
              }}
            />
            <Label htmlFor="present">I currently work here</Label>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Contributions</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addContribution}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Contribution
              </Button>
            </div>
            {contributions.map((contribution, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={contribution}
                  onChange={(e) => updateContribution(index, e.target.value)}
                  placeholder={`Contribution ${index + 1}`}
                  className="flex-1"
                  required
                />
                {contributions.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeContribution(index)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button type="submit" className="w-full bg-blue-500">
            {editingId ? "Update Experience" : "Add Experience"}
          </Button>
        </form>

        <div className="space-y-4">
          {experiences.map((experience) => (
            <Card key={experience.id}>
              <CardHeader>
                <CardTitle>
                  {experience.jobTitle} at {experience.employer}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">
                  {experience.startDate.month} {experience.startDate.year} -{" "}
                  {experience.isPresent
                    ? "Present"
                    : `${experience.endDate.month} ${experience.endDate.year}`}
                </p>
                {experience.location && (
                  <p className="text-sm text-gray-500 mb-4">
                    {experience.location}
                  </p>
                )}
                <ul className="space-y-2">
                  {experience.contributions.map((contribution) => (
                    <li key={contribution.id} className="text-sm">
                      • {contribution.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(experience)}
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(experience.id)}
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

export default WorkExp;
