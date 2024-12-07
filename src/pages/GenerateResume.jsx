import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, RefreshCw, FileText, CheckCircle2 } from "lucide-react";
import RoverResume from "../resume/RoverResume";
import Resume1 from "../resume/Resume1";  
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";
import axios from "axios";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

// Define the Resume component
const Resume = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.subtitle}>{data.title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        {data.experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>
              {exp.company} - {exp.position}
            </Text>
            <Text style={styles.text}>{exp.duration}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>{data.education.degree}</Text>
        <Text style={styles.text}>
          {data.education.school}, {data.education.year}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>{data.skills.join(", ")}</Text>
      </View>
    </Page>
  </Document>
);

function GenerateResume() {
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [resumeName, setResumeName] = useState(localStorage.getItem(resumeName))

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   const res = await axios.get("/api/v1/users/get-user-info", {
  //     headers: { Authorization: localStorage.getItem("AccessToken") },
  //   });

  //   console.log(res.data);
  //   if (res.data.statusCode === 200) {
  //     setResumeData(res.data.data.resumeDetails);
  //     toast.success("Successfully Fetched the Resume Data");
  //     setIsLoading(false);
  //     console.log(res.data.resumeData);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchResumeData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setResumeData({
      name: "John Doe",
      title: "Software Engineer",
      experience: [
        {
          company: "Tech Corp",
          position: "Senior Developer",
          duration: "2018 - Present",
          description: "Led development of multiple high-impact projects.",
        },
        {
          company: "Startup Inc",
          position: "Junior Developer",
          duration: "2015 - 2018",
          description:
            "Contributed to the development of innovative web applications.",
        },
      ],
      education: {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        year: "2015",
      },
      skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
    });
    setIsLoading(false);
  };

  useEffect(() => {
    setIsClient(true);
    fetchResumeData();
  }, []);

  const handleDownload = async () => {
    if (!resumeData) {
      console.log("No Resume data available for download");
      return;
    }

    try {
      const blob = await pdf(<Resume data={resumeData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error generating PDF", error);
      toast.error("Failed to download the Resume");
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      fetchResumeData();
    }, 2000);
  };

  console.log(resumeData);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">


      {isLoading ? (
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Hold On, Generating your Resume
          </h1>
          <Skeleton className="h-[325px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              Your Resume is Ready!
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    Resume Preview
                  </h2>
                  <div className="space-x-4">

                    <Button
                      onClick={handleDownload}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>

                <div
                  className="border rounded-lg overflow-hidden"
                  style={{ height: "70vh" }}
                >
                  {isClient && resumeData ? (
                    <PDFViewer width="100%" height="100%">
                      <Resume data={resumeData} />
                    </PDFViewer>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <FileText className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default GenerateResume;
