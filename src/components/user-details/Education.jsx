import React, { useEffect, useState } from "react";
import Save from "./Save";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { PencilIcon, TrashIcon , Upload } from 'lucide-react'
import toast from "react-hot-toast";
import axios from "axios";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - 15 + i).toString())

const degrees = [
  "B.Tech",
  "M.Tech",
  "BCA",
  "MCA",
  "Class XII",
  "Class X",
  "Others"
]

function Education() {

  const [educations, setEducations] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [educationDetails, setEducationDetails] = useState({
    degree: "",
    fieldOfStudy: "",
    schoolName: "",
    city: "",
    startDate: {
      month: "",
      year: ""
    },
    endDate: {
      month: null,
      year: null
    },
    grade: "",
    marks: "",
    isPresent: false

  });

  const resetFields = () => {

    setEducationDetails({
      degree: "",
      fieldOfStudy: "",
      schoolName: "",
      city: "",
      startDate: { month: "", year: "" },
      endDate: { month: null, year: null },
      grade: "",
      marks: "",
      isPresent: false,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(editingId){
      // setEducations(educations.filter(edu => edu.id === editingId))
      // setEducations(prev => [...prev , {...educationDetails , id:editingId}])
      // resetFields();
      setEducations(educations.map(edu => edu.id === editingId ? {...educationDetails , id:editingId} : edu))
      setEditingId(null);
    }

    else{

      const { name, value } = event.target;
      setEducations([...educations , {...educationDetails , id:crypto.randomUUID()}])

    }

    resetFields();
    toast.success('Education added');
  }

  const handleEdit = (education) => {

    // Old Logic
    // const newEducations = educations.filter((education) => education.id !== id);
    // setEducations(newEducations);
    
    // New Logic
    setEditingId(education.id);
    setEducationDetails(education)
  }

  const handleDelete = (id) => {

    setEducations(educations.filter(edu => edu.id !== id));
    toast.success("Education Deleted Successfully");


  }

  const [isDataUploading , setIsDataUploading] = useState(false);

  const handleDataUpload = async()=>{
    
    const token = localStorage.getItem("AccessToken");

    if (!token) {
      toast.error("Authentication token is missing.");
      return;
    }
    
    if (!educations) {
      toast.error("Education data is invalid.");
      return;
    }
    
    setIsDataUploading(true);
    try {
      const res = await axios.post(
        "/api/v1/users/upload-details",
        { educations: educations },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.statusCode === 200) {
        toast.success("Education data ulpoaded successfully!");
      } else {
        toast.error("Failed to upload data.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setIsDataUploading(false);
    }
  }

  //TODO: Write a function to fetch the current user's education information

  console.log("Printing the Education Array:", educations);

  return (
    <div className="p-3">

      <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Your Educational Details</h1>
              <button
                onClick={handleDataUpload}
                disabled={isDataUploading}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-base"
              >
                {isDataUploading ? "Uploading.." : "Save Data"} 
                <Upload size={18}/>
              </button>
            </div>
          </header>

      <div className="max-w-3xl mx-auto p-6 space-y-8">

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="institution" className="text-base">Institution</Label>
            <Input
              id="institution"
              value={educationDetails.schoolName}
              onChange={e => setEducationDetails({ ...educationDetails, schoolName: e.target.value })}
              placeholder="Enter institution name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={educationDetails.city}
              onChange={e => setEducationDetails({ ...educationDetails, city: e.target.value })}
              placeholder="Enter city"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Select
              value={educationDetails.degree}
              onValueChange={value => setEducationDetails({ ...educationDetails, degree: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a degree" />
              </SelectTrigger>
              <SelectContent>
                {degrees.map(degree => (
                  <SelectItem key={degree} value={degree}>
                    {degree}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy">Field of Study</Label>
            <Input
              id="fieldOfStudy"
              value={educationDetails.fieldOfStudy}
              onChange={e => setEducationDetails({ ...educationDetails, fieldOfStudy: e.target.value })}
              placeholder="Enter field of study"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="grade">Grade</Label>
            <Input
              id="grade"
              value={educationDetails.grade}
              onChange={e => setEducationDetails({ ...educationDetails, grade: e.target.value })}
              placeholder="Enter grade (e.g., 8.85/10.0)"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="marks">Marks</Label>
            <Input
              id="marks"
              value={educationDetails.marks}
              onChange={e => setEducationDetails({ ...educationDetails, marks: e.target.value })}
              placeholder="Enter marks percentage"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Start Date</Label>
            <div className="grid grid-cols-2 gap-4">
              <Select
                value={educationDetails.startDate.month}
                onValueChange={month => setEducationDetails({
                  ...educationDetails,
                  startDate: { ...educationDetails.startDate, month }
                })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={educationDetails.startDate.year}
                onValueChange={year => setEducationDetails({
                  ...educationDetails,
                  startDate: { ...educationDetails.startDate, year }
                })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
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
                value={educationDetails.endDate.month || ""}
                onValueChange={month => setEducationDetails({
                  ...educationDetails,
                  endDate: { ...educationDetails.endDate, month }
                })}
                disabled={educationDetails.isPresent}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={educationDetails.endDate.year || ""}
                onValueChange={year => setEducationDetails({
                  ...educationDetails,
                  endDate: { ...educationDetails.endDate, year }
                })}
                disabled={educationDetails.isPresent}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
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
            checked={educationDetails.isPresent}
            onCheckedChange={(checked) => {
              setEducationDetails({
                ...educationDetails,
                isPresent: checked,
                endDate: checked ? { month: null, year: null } : educationDetails.endDate
              })
            }}
          />
          <Label htmlFor="present">I presently attend here</Label>
        </div>

        <Button type="submit" className="w-full bg-blue-500">
          {editingId ? "Update Education" : "Add Education"}
        </Button>
      </form>

      <div className="space-y-4">
        {educations.map(education => (
          <Card key={education.id}>
            <CardHeader>
              <CardTitle>{education.degree + " " + education.fieldOfStudy}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">{education.schoolName}</p>
                  <p className="text-sm text-gray-500">{education.city}</p>
                </div>
                <div>
                  <p className="text-sm">
                    {education.startDate.month} {education.startDate.year} -{" "}
                    {education.isPresent
                      ? "Present"
                      : `${education.endDate.month} ${education.endDate.year}`}
                  </p>
                  <p className="text-sm">
                    Grade: {education.grade} | Marks: {education.marks}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(education)}
              >
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(education.id)}
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

export default Education;
