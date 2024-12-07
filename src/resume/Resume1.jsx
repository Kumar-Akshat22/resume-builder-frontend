import { Document, Page, StyleSheet, Text, View, Font, Link, Image } from '@react-pdf/renderer';
import React from 'react';
import roboto from './Roboto-Bold.ttf';
import ebg from './EBGaramond-VariableFont_wght.ttf';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Resume1 = ({ resumeData }) => {
  const githubLink = resumeData?.links?.github?.match(/github\.com\/([^\/]+)\/?$/)?.[1] || '';
  const linkedInLink = resumeData?.links?.linkedIn?.match(/\/([^\/]+)\/?$/)?.[1] || '';

  // Font Registration
  Font.register({
    family: 'Roboto',
    src: roboto,
  });

  Font.register({
    family: 'EBGaramond',
    src: ebg,
  });

  // Stylesheet
  const styles = StyleSheet.create({
    headerName: {
      fontWeight: 'extrabold',
      color: 'white',
      textAlign: 'center',
      paddingVertical: 6,
      fontFamily: 'Roboto',
      fontSize: 24,
    },
    header: {
      width: '100%',
      backgroundColor: 'black',
      padding: 12,
    },
    subHeader: {
      color: 'white',
      fontSize: 12,
      display: 'flex',
      flexDirection: 'row',
      gap: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      textDecoration: 'underline',
      fontSize: 16,
      fontFamily: 'EBGaramond',
      fontWeight: 'extrabold',
    },
    subHeading: {
      fontFamily: 'EBGaramond',
      fontSize: 11,
    },
    content: {
      fontSize: 11,
      color: 'black',
      paddingVertical: 2,
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'justify',
      gap: 6,
    },
    icons: {
      height: 13,
      width: 13,
    },
    multiSection: {
      display: 'flex',
      flexDirection: 'row',
    },
    leftSection: {
      width: '30%',
    },
    rightSection: {
      width: '70%',
    },
    component: {
      marginVertical: 5,
    },
    title: {
      fontFamily: 'Roboto',
      fontSize: 11,
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
  });

  return (
    <Document>
      <Page style={{ padding: '6px' }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerName}>
            {resumeData?.personalDetails?.firstName?.toUpperCase() || 'First Name'}{' '}
            {resumeData?.personalDetails?.lastName?.toUpperCase() || 'Last Name'}
          </Text>
          <View style={styles.subHeader}>
            <Link style={styles.link} href={`mailto:${resumeData?.personalDetails?.email || ''}`}>
              <Text>Email: {resumeData?.personalDetails?.email || 'example@email.com'}</Text>
            </Link>
            <Link style={styles.link} href={`tel:${resumeData?.personalDetails?.phone || ''}`}>
              <Text>Ph.: {resumeData?.personalDetails?.phone || '123-456-7890'}</Text>
            </Link>
          </View>
        </View>

        {/* Content Sections */}
        <View style={styles.multiSection}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            {/* About Me */}
            {resumeData?.personalDetails?.summary && (
              <View style={styles.component}>
                <Text style={styles.heading}>About Me</Text>
                <Text style={styles.content}>{resumeData.personalDetails.summary}</Text>
              </View>
            )}

            {/* Education */}
            {resumeData?.educations?.length > 0 && (
              <View style={styles.component}>
                <Text style={styles.heading}>Education</Text>
                {resumeData.educations.map((edu, index) => (
                  <View key={index} style={styles.component}>
                    <Text style={styles.subHeading}>
                      {edu.data?.degree || 'Degree'} in {edu.data?.fieldOfStudy || 'Field of Study'}
                    </Text>
                    <Text style={styles.content}>{edu.data?.schoolName || 'School Name'}</Text>
                    <Text style={styles.content}>
                      {edu.data?.grade || 'Grade'}: {edu.data?.marks || 'N/A'}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Links */}
            <View style={styles.component}>
              <Text style={styles.heading}>Links</Text>
              {resumeData?.links?.linkedIn && (
                <Link href={resumeData.links.linkedIn} style={styles.content}>
                  <Image src={linkedin} style={styles.icons} /> <Text>/{linkedInLink}</Text>
                </Link>
              )}
              {resumeData?.links?.github && (
                <Link href={resumeData.links.github} style={styles.content}>
                  <Image src={github} style={styles.icons} /> <Text>/{githubLink}</Text>
                </Link>
              )}
            </View>
          </View>

          {/* Right Section */}
          <View style={styles.rightSection}>
            {/* Projects */}
            {resumeData?.projects?.length > 0 && (
              <View style={styles.component}>
                <Text style={styles.heading}>Projects</Text>
                {resumeData.projects.map((project, index) => (
                  <View key={index} style={styles.component}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{project.data?.title || 'Project Title'}</Text>
                      {project.data?.liveLink && <Link href={project.data.liveLink}> [Live]</Link>}
                      {project.data?.githubLink && <Link href={project.data.githubLink}> [Github]</Link>}
                    </View>
                    {project.data?.projectDescription?.map((desc, idx) => (
                      <Text key={idx} style={styles.content}>
                        • {desc.text || 'Description'}
                      </Text>
                    ))}
                  </View>
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
