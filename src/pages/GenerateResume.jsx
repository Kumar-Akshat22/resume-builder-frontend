import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Download,
  RefreshCw,
  FileText,
  CheckCircle2,
  LayoutTemplate,
} from "lucide-react";
import Template1 from "@/assets/Template-1.png";
import Template2 from "@/assets/Template-2.png";
// import RoverResume from "../resume/RoverResume";
// import Resume1 from "../resume/Resume1";
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
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getResumeById } from "@/services/resumeService";
import { FaRegFileLines } from "react-icons/fa6";

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
const Resume1 = ({ data }) => (
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

const RoverResume = ({ data }) => (
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
  const { resumeId } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState("Resume1");
  const [isLoading , setIsLoading] = useState(false)



  const templates = [
    {
      id: "Resume1",
      name: "Classic Resume",
      image: Template1,
    },
    {
      id: "RoverResume",
      name: "Two Column",
      image: Template2,
    },
  ];

  const mockData = {
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
  };

  // const handleDownload = async () => {
  //   if (!resumeData) {
  //     console.log("No Resume data available for download");
  //     return;
  //   }

  //   try {
  //     const blob = await pdf(<Resume1 resumeData={resumeData} />).toBlob();
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = "resume.pdf";
  //     link.click();
  //     URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.log("Error generating PDF", error);
  //     toast.error("Failed to download the Resume");
  //   }
  // };

  // const {
  //   data: resumeData,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["resume", resumeId],
  //   queryFn: () => getResumeById(resumeId),
  //   onError: (error) => {
  //     console.error("Error in fetching resume data", error);
  //     toast.error("Failed to fetch Resume data");
  //   },
  // });

  // useEffect(() => {
  //   console.log("resume data", resumeData);
  // }, [resumeData]);
  // if (error) {
  //   toast.error("Failed to fetch Resume data");
  //   return (
  //     <div>
  //       <h1 className="text-4xl font-bold text-gray-800 mb-8">
  //         Failed to fetch Resume data : {error.data}
  //       </h1>
  //       <Button
  //         className="w-full"
  //         onClick={() => {
  //           window.location.href = "/";
  //         }}
  //       >
  //         Return to Home
  //       </Button>
  //     </div>
  //   );
  // }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200 gap-8 overflow-hidden">
      <div className="w-1/4 h-full overflow-y-auto">
        <Card className="rounded-none">
          <CardContent className="p-6">
            <div className="flex items-center mb-4 gap-2">
              <LayoutTemplate />
              <h2 className="text-2xl font-semibold">Choose a Template</h2>
            </div>
            <div className="space-y-6">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedTemplate === template.id
                      ? "ring-2 ring-blue-500"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardContent className="p-2">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-5/6 object-cover rounded-md mb-4"
                    />
                  </CardContent>
                  <h3 className="text-lg font-medium text-center">
                    {template.name}
                  </h3>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {isLoading ? (
        <div className="flex-1 flex flex-col space-y-6 p-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Hold On, Fetching your Resume...
          </h1>
          <Skeleton className="h-[325px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            {" "}
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
        </div>
      ) : (
        <div className="flex-1 p-4">
          <Card className="flex-1 h-full overflow-hidden">
            <CardContent className="p-6 h-full flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-gray-800">
                    Your Resume is Ready!
                  </h1>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
                <div className="flex-1 border rounded-lg overflow-hidden">
                  {mockData ? (
                    <PDFViewer width="100%" height="100%">
                      {selectedTemplate === "Resume1" ? (
                        <Resume1 data={mockData} />
                      ) : (
                        <RoverResume data={mockData} />
                      )}
                    </PDFViewer>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <FileText className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default GenerateResume;
