import React, { useEffect, useState } from "react";
import {
  Document,
  Image,
  Link,
  Page,
  Text,
  View,
  Svg,
  Font,
} from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import RobotoBold from "../assets/roboto-font/Roboto-Bold.ttf";
import RobotoItalic from "../assets/roboto-font/Roboto-Italic.ttf";
import RobotoLight from "../assets/roboto-font/Roboto-Light.ttf";

function RoverResume({ resumeData }) {
  console.log("resume data", resumeData);

  Font.register({
    family: "Roboto",
    fonts: [
      {
        src: RobotoBold,
        fontWeight: "bold",
      },

      {
        src: RobotoItalic,
        fontStyle: "italic",
      },

      {
        src: RobotoLight,
      },
    ],
  });

  // Creat the layout of the Resume
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: 10,
      fontFamily: "Roboto",
    },

    section: {
      margin: 0,
      padding: 4,
    },

    header: {
      padding: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 5,
    },

    heading: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 4,
      textAlign: "center",
      color: "#0B60B0",
    },

    headerLinks: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 13,
    },

    headerLink: {
      fontSize: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },

    headerLinkText: {
      fontSize: 10,
      color: "#0a52cf",
    },

    icons: {
      height: 13,
      width: 13,
      color: "red",
    },

    subheading: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
      borderBottom: "0.5 solid #000",
      color: "#0B60B0",
    },

    content: {
      fontSize: 11,
      marginTop: 4,
    },

    jobSection: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      marginTop: 7,
    },

    companyDescription: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    educations: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
    },

    educationSection: {
      display: "flex",
      flexDirection: "column",
      gap: 2,

    },

    educationGrade: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
    },

    skillsSection: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
    },

    skillsGrid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "10px",
    },
    skillCategory: {
      marginBottom: "10px",
      width: "48%", // Adjust width for two-column layout
    },
    skillCategoryTitle: {
      fontWeight: "bold",
      fontSize: 12,
      marginBottom: "5px",
    },
    skillItems: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "5px",
    },
    skillItem: {
      fontSize: 10,
      padding: "2px 6px",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
    },

    projectSection: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
    },

    projectContent: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
    },

    projectLinks: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
    },

    certificationSection: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },

    certificationTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    contentTitle: {
      fontWeight: 700,
      fontSize: 12,
    },

    bulletSection: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      marginTop: 5,
    },

    achievementBulletSection: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      marginTop: 2,
    },

    bullet: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },

    bulletDot: {
      fontSize: 13,
    },

    bulletText: {
      fontSize: 12,
      maxWidth: "95%",
    },
  });

  const BulletPoints = ({ text }) => {
    return (
      <View style={styles.bullet}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.bulletText}>{text}</Text>
      </View>
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header of the Resume */}
        <View style={styles.header}>
          {resumeData?.profileInfo?.firstName &&
            resumeData?.profileInfo?.lastName && (
              <Text style={styles.heading}>
                {`${resumeData?.profileInfo?.firstName} ${resumeData?.profileInfo?.lastName}`}
              </Text>
            )}

          <View style={styles.headerLinks}>
            {resumeData?.profileInfo?.email && (
              <Link
                src={`mailto:${resumeData?.profileInfo?.email}`}
                style={styles.headerLink}
              >
                <Image src={mail} style={styles.icons}></Image>
                <Text style={styles.headerLinkText}>Email</Text>
              </Link>
            )}

            {resumeData?.profileInfo?.links?.linkedIn && (
              <Link
                src={resumeData?.profileInfo?.links?.linkedIn}
                style={styles.headerLink}
              >
                <Image src={linkedin} style={styles.icons}></Image>
                <Text style={styles.headerLinkText}>LinkedIn</Text>
              </Link>
            )}

            {resumeData?.profileInfo?.links?.github && (
              <Link
                src={resumeData?.profileInfo?.links?.github}
                style={styles.headerLink}
              >
                <Image src={github} style={styles.icons}></Image>
                <Text style={styles.headerLinkText}>GitHub</Text>
              </Link>
            )}
          </View>
        </View>

        {/* Experience Section */}
        {resumeData?.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subheading}>Experience</Text>
            {resumeData?.experience.map(
              (exp, index) =>
                exp?.employer &&
                exp?.jobTitle && (
                  <View key={index} style={styles.jobSection}>
                    <View style={styles.companyDescription}>
                      <Text style={styles.contentTitle}>{exp?.employer}</Text>
                      <Text style={styles.contentTitle}>
                        {`${exp?.startDate?.month || ""} ${
                          exp?.startDate?.year || ""
                        } - ${
                          exp?.endDate?.month && exp?.endDate?.year
                            ? `${exp?.endDate?.month} ${exp?.endDate?.year}`
                            : "Present"
                        }`}
                      </Text>
                    </View>
                    <Text style={styles.content}>{exp.jobTitle}</Text>
                    {exp?.contributions?.length > 0 && (
                      <View style={styles.bulletSection}>
                        {exp?.contributions?.map(
                          (contribution, idx) =>
                            contribution?.text && (
                              <BulletPoints
                                key={idx}
                                text={contribution?.text}
                              />
                            )
                        )}
                      </View>
                    )}
                  </View>
                )
            )}
          </View>
        )}

        {/* Education Section */}
        {resumeData?.educations?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subheading}>Education</Text>
            {resumeData?.educations?.map(
              (education, index) =>
                (education?.degree || education?.schoolName) && (
                  <View key={index} style={styles.educationSection}>
                    <View style={styles.companyDescription}>
                      <Text style={styles.contentTitle}>
                        {education?.degree && education?.fieldOfStudy
                          ? `${education?.degree} in ${education?.fieldOfStudy}`
                          : ""}
                        {education?.schoolName
                          ? ` - ${education?.schoolName}, ${education?.city}`
                          : ""}
                      </Text>
                      <Text style={styles.contentTitle}>
                        {`${education?.startDate?.month || ""} ${
                          education?.startDate?.year || ""
                        } - ${
                          education?.endDate?.month && education?.endDate?.year
                            ? `${education?.endDate?.month} ${education?.endDate?.year}`
                            : "Present"
                        }`}
                      </Text>
                    </View>
                    {(education?.grade || education?.marks) && (
                      <View style={styles.educationGrade}>
                        <Text style={styles.content}>{"Grade: "}{education?.grade}</Text>
                        <Text style={styles.content}>{"Percentage: "}{education?.marks + "%"}</Text>
                      </View>
                    )}
                  </View>
                )
            )}
          </View>
        )}

        {/* Projects Section */}
        {resumeData?.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subheading}>Projects</Text>
            {resumeData?.projects.map(
              (project, index) =>
                project?.title && (
                  <View key={index} style={styles.projectSection}>
                    <View style={styles.companyDescription}>
                      <Text style={styles.contentTitle}>{project?.title}</Text>
                      <View style={styles.projectLinks}>
                        {project?.liveLink && (
                          <Link
                            src={project?.liveLink}
                            style={styles.headerLink}
                          >
                            <Text style={styles.headerLinkText}>[Website]</Text>
                          </Link>
                        )}
                        {project?.githubLink && (
                          <Link
                            src={project?.githubLink}
                            style={styles.headerLink}
                          >
                            <Text style={styles.headerLinkText}>[GitHub]</Text>
                          </Link>
                        )}
                      </View>
                    </View>
                    {project?.shortDescription && (
                      <Text style={styles.contentTitle}>
                        {project?.shortDescription}
                      </Text>
                    )}
                    {project?.projectDescription?.length > 0 && (
                      <View style={styles.bulletSection}>
                        {project?.projectDescription?.map(
                          (description, idx) =>
                            description.text && (
                              <BulletPoints key={idx} text={description.text} />
                            )
                        )}
                      </View>
                    )}
                  </View>
                )
            )}
          </View>
        )}

        {/* Skills Section */}
        {resumeData?.skills &&
          Object.values(resumeData?.skills).flat().length > 0 && (
            <View style={styles.section}>
              <Text style={styles.subheading}>Skills</Text>
              <View style={styles.skillsGrid}>
                {/* Languages */}
                {resumeData?.skills?.languages?.length > 0 && (
                  <View style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>Languages:</Text>
                    <View style={styles.skillItems}>
                      {resumeData?.skills?.languages?.map(
                        (language, index) =>
                          language && (
                            <Text key={index} style={styles.skillItem}>
                              {language}
                            </Text>
                          )
                      )}
                    </View>
                  </View>
                )}

                {/* Frameworks */}
                {resumeData?.skills?.frameworks?.length > 0 && (
                  <View style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>Frameworks:</Text>
                    <View style={styles.skillItems}>
                      {resumeData?.skills?.frameworks.map(
                        (framework, index) =>
                          framework && (
                            <Text key={index} style={styles.skillItem}>
                              {framework}
                            </Text>
                          )
                      )}
                    </View>
                  </View>
                )}

                {/* Tools */}
                {resumeData?.skills?.tools?.length > 0 && (
                  <View style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>Tools:</Text>
                    <View style={styles.skillItems}>
                      {resumeData?.skills?.tools?.map(
                        (tool, index) =>
                          tool && (
                            <Text key={index} style={styles.skillItem}>
                              {tool}
                            </Text>
                          )
                      )}
                    </View>
                  </View>
                )}

                {/* Technologies */}
                {resumeData?.skills?.technologies?.length > 0 && (
                  <View style={styles.skillCategory}>
                    <Text style={styles.skillCategoryTitle}>Technologies:</Text>
                    <View style={styles.skillItems}>
                      {resumeData?.skills?.technologies?.map(
                        (technology, index) =>
                          technology && (
                            <Text key={index} style={styles.skillItem}>
                              {technology}
                            </Text>
                          )
                      )}
                    </View>
                  </View>
                )}
              </View>
            </View>
          )}

        {/* Achievements Section */}
        {resumeData?.achievements?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subheading}>Achievements</Text>
            {resumeData?.achievements.map(
              (achievement, index) =>
                achievement?.achievementTitle && (
                  <View key={index} style={styles.projectSection}>
                    <Text style={styles.contentTitle}>
                      {achievement?.achievementTitle}
                    </Text>
                    {achievement?.achievementPoints?.length > 0 && (
                      <View style={styles.achievementBulletSection}>
                        {achievement?.achievementPoints.map(
                          (point, idx) =>
                            point.text && (
                              <BulletPoints key={idx} text={point.text} />
                            )
                        )}
                      </View>
                    )}
                  </View>
                )
            )}
          </View>
        )}

        {/* Certifications Section */}
        {resumeData?.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subheading}>Certifications</Text>
            {resumeData?.certifications?.map(
              (certification, index) =>
                certification?.title && (
                  <View key={index} style={styles.certificationSection}>
                    <View style={styles.certificationTitle}>
                      <Text style={styles.contentTitle}>
                        {certification?.title}
                      </Text>
                      {certification?.certificationLink && (
                        <Link
                          src={certification?.certificationLink}
                          style={styles.headerLink}
                        >
                          <Text style={styles.headerLinkText}>[Link]</Text>
                        </Link>
                      )}
                    </View>
                    {certification?.certificateDescription && (
                      <View style={styles.achievementBulletSection}>
                        <BulletPoints
                          text={certification?.certificateDescription}
                        />
                      </View>
                    )}
                  </View>
                )
            )}
          </View>
        )}
      </Page>
    </Document>
  );
}

export default RoverResume;
