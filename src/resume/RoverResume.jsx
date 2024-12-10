import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Font,
  Link,
  Image,
} from "@react-pdf/renderer";
import React from "react";
import roboto from "./Roboto-Bold.ttf";
import ebg from "./EBGaramond-VariableFont_wght.ttf";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import globe from "../assets/globe.png";

const Resume1 = ({ resumeData }) => {
  const githubLink =
    resumeData?.links?.github?.match(/github\.com\/([^\/]+)\/?$/)?.[1] || "";
  const linkedInLink =
    resumeData?.links?.linkedIn?.match(/\/([^\/]+)\/?$/)?.[1] || "";

  // Font Registration
  Font.register({
    family: "Roboto",
    src: roboto,
  });

  Font.register({
    family: "EBGaramond",
    src: ebg,
  });

  // Stylesheet
  const styles = StyleSheet.create({
    // Header Section
    headerName: {
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
      paddingVertical: 10,
      fontFamily: "Roboto",
      fontSize: 26, // Prominent name size
      letterSpacing: 1.2,
    },
    icons: {
      height: 13,
      width: 13,
      color: "black",
    },
    headerLink: {
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    header: {
      width: "100%",
      backgroundColor: "black",
      padding: 18,
      marginBottom: 15,
    },
    subHeader: {
      color: "white",
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
      marginTop: 6,
    },

    // Links Section
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: 11,
      wordWrap: "break-word", // Ensures long links wrap correctly
      lineHeight: 1.4, // Proper spacing between lines
      marginBottom: 4, // Added spacing for readability
    },
    leftSection: {
      width: "35%", // Proportional width for proper balance
      paddingRight: 12,
      borderRight: "1px solid #ddd",
    },
    rightSection: {
      width: "65%",
      paddingLeft: 12,
    },

    // Skills Section
    skills: {
      display: "flex",
      flexDirection: "column",
      gap: 0, // Space between skills
      marginTop: 10, // Separation from the above content
    },

    // Chip Styling for Skills
    chip: {
      backgroundColor: "#f0f0f0", // Light gray background
      borderRadius: 16, // Rounded edges
      paddingVertical: 4,
      paddingHorizontal: 12,
      marginRight: 8, // Space between chips horizontally
      marginBottom: 8, // Space between chips vertically (if wrapping occurs)
      fontSize: 11,
      fontFamily: "Roboto",
      fontWeight: "500",
      color: "black",
      textAlign: "center",
    },

    // Chips Container for Skills
    chipsContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap", // Allows chips to wrap to the next line if they overflow
      gap: 6, // Space between rows
      marginTop: 10,
    },

    // Section Headings
    heading: {
      textDecoration: "underline",
      fontSize: 16,
      fontFamily: "EBGaramond",
      fontWeight: "bold",
      marginBottom: 8,
    },
    subHeading: {
      fontFamily: "EBGaramond",
      fontSize: 13,
      marginBottom: 6,
      fontWeight: "500",
    },

    // Content Styling
    content: {
      fontSize: 12,
      color: "black",
      lineHeight: 1.5,
      textAlign: "justify",
      paddingVertical: 4,
      marginBottom: 2,
    },

    // MultiSection Layout
    multiSection: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      marginTop: 10,
    },

    // General Improvements
    component: {
      marginBottom: 12,
    },
    title: {
      fontFamily: "Roboto",
      fontSize: 13,
      fontWeight: "bold",
      marginBottom: 4,
    },
  });

  return (
    <Document>
      <Page style={{ padding: "6px" }}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerName}>
            {resumeData.profileInfo?.firstName?.toUpperCase() &&
            resumeData.profileInfo?.lastName?.toUpperCase()
              ? `${resumeData.profileInfo.firstName.toUpperCase()} ${resumeData.profileInfo.lastName.toUpperCase()}`
              : "Full Name"}
          </Text>
          <View style={styles.subHeader}>
            {resumeData.profileInfo?.email && (
              <Link
                style={styles.link}
                href={`mailto:${resumeData.profileInfo.email}`}
              >
                <Text style={styles.link}>
                  Email: {resumeData.profileInfo.email}
                </Text>
              </Link>
            )}
            {resumeData.profileInfo?.phone && (
              <Link
                style={styles.link}
                href={`tel:${resumeData.profileInfo.phone}`}
              >
                <Text style={styles.link}>
                  Ph.: {resumeData.profileInfo.phone}
                </Text>
              </Link>
            )}
          </View>
        </View>

        {/* Main Sections */}
        <View style={styles.multiSection}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            {/* About Me */}
            {resumeData.profileInfo?.about && (
              <View style={styles.component}>
                <Text style={styles.heading}>About Me</Text>
                <Text style={styles.content}>
                  {resumeData.profileInfo.about}
                </Text>
              </View>
            )}

            {/* Education */}
            {resumeData.educations?.length > 0 && (
              <View style={styles.component}>
                <Text style={styles.heading}>Education</Text>
                {resumeData.educations.map((edu, index) => (
                  <View key={index} style={styles.subComponent}>
                    <Text style={styles.subHeading}>
                      {edu.degree} in {edu.fieldOfStudy}
                    </Text>
                    <Text style={styles.content}>{edu.schoolName}</Text>
                    {edu.grade && (
                      <Text style={styles.content}>
                        {edu.grade}: {edu.marks}
                      </Text>
                    )}
                    <Text style={styles.content}>
                      {edu.startDate?.month} {edu.startDate?.year} -{" "}
                      {edu.endDate?.year
                        ? `${edu.endDate?.month || ""} ${edu.endDate?.year}`
                        : "Present"}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Links */}
            {resumeData.profileInfo?.links && (
              <View style={styles.component}>
                <Text style={styles.heading}>Links</Text>
                {resumeData.profileInfo.links.linkedIn && (
                  <Link
                    href={resumeData.profileInfo.links.linkedIn}
                    style={styles.headerLink}
                  >
                    <Image src={linkedin} style={styles.icons} />
                    <Text>{resumeData.profileInfo.links.linkedIn}</Text>
                  </Link>
                )}
                {resumeData.profileInfo.links.github && (
                  <Link
                    href={resumeData.profileInfo.links.github}
                    style={styles.headerLink}
                  >
                    <Image src={github} style={styles.icons} />
                    <Text>{resumeData.profileInfo.links.github}</Text>
                  </Link>
                )}
                {resumeData.profileInfo.links.portfolio && (
                  <Link
                    href={resumeData.profileInfo.links.portfolio}
                    style={styles.headerLink}
                  >
                    <Image src={globe} style={styles.icons} />
                    <Text>{resumeData.profileInfo.links.portfolio}</Text>
                  </Link>
                )}
              </View>
            )}

            {/* Skills */}
            {resumeData.skills && (
              <View style={styles.component}>
                <Text style={styles.heading}>Skills</Text>
                <View style={styles.chipsContainer}>
                  {resumeData.skills.languages?.map((skill, index) => (
                    <Text key={index} style={styles.chip}>
                      {skill}
                    </Text>
                  ))}
                  {resumeData.skills.frameworks?.map((framework, index) => (
                    <Text key={index} style={styles.chip}>
                      {framework}
                    </Text>
                  ))}
                  {resumeData.skills.technologies?.map((technology, index) => (
                    <Text key={index} style={styles.chip}>
                    {technology}
                    </Text>
                  ))}
                  {resumeData.skills.tools?.map((tool, index) => (
                    <Text key={index} style={styles.chip}>
                      {tool}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Right Section */}
          <View style={styles.rightSection}>
            {/* Projects */}
            {resumeData.projects?.length > 0 && (
              <View style={styles.component}>
                <Text style={styles.heading}>Projects</Text>
                {resumeData.projects.map((project, index) => (
                  <View key={index} style={styles.component}>
                    <Text style={styles.title}>
                      {project.title}
                      {project.liveLink && (
                        <Link href={project.liveLink} style={styles.content}>
                          [Live]
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link href={project.githubLink} style={styles.content}>
                          [GitHub]
                        </Link>
                      )}
                    </Text>
                    {project.projectDescription?.map((desc, index) => (
                      <Text key={index} style={styles.content}>
                        • {desc.text}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            )}

            {/* Experience */}
            {resumeData.experience?.length > 0 && (
              <View style={styles.component}>
                <Text style={styles.heading}>Experience</Text>
                {resumeData.experience.map((exp, index) => (
                  <View key={index} style={styles.component}>
                    <Text style={styles.title}>{exp.employer}</Text>
                    <Text style={styles.content}>
                      {exp.jobTitle} ({exp.startDate?.month}{" "}
                      {exp.startDate?.year} -{" "}
                      {exp.endDate?.year
                        ? `${exp.endDate?.month} ${exp.endDate?.year}`
                        : "Present"}
                      )
                    </Text>
                    {exp.contributions?.map((contribution, index) => (
                      <Text key={index} style={styles.content}>
                        • {contribution.text}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            )}

            {/* Certifications */}
            {resumeData.certifications?.length > 0 && (
              <View style={styles.component}>
                <Text style={styles.heading}>Courses and Certifications</Text>
                {resumeData.certifications.map((cert, index) => (
                  <Text key={index} style={styles.title}>
                    {cert.title}{" "}
                    {cert.certificationLink && (
                      <Link href={cert.certificationLink}>[Certificate]</Link>
                    )}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Resume1;
