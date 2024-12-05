import React, { useEffect, useState } from 'react';
import { Document, Image, Link, Page, Text, View, Svg, Font } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import RobotoBold from '../assets/roboto-font/Roboto-Bold.ttf';
import RobotoItalic from '../assets/roboto-font/Roboto-Italic.ttf';
import RobotoLight from '../assets/roboto-font/Roboto-Light.ttf';



function RoverResume({ resumeData }) {

    console.log("resume data", resumeData);


    Font.register({

        family: 'Roboto',
        fonts: [

            {
                src: RobotoBold,
                fontWeight: 'bold',
            },

            {
                src: RobotoItalic,
                fontStyle: 'italic',
            },

            {
                src: RobotoLight,
            }
        ]
    })

    // Creat the layout of the Resume
    const styles = StyleSheet.create({

        page: {

            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            padding: 10,
            fontFamily: 'Roboto',
        },

        section: {

            margin: 0,
            padding: 4,

        },

        header: {

            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5

        },

        heading: {

            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 4,
            textAlign: 'center',
            color: '#0B60B0',
        },

        headerLinks: {

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 13,

        },

        headerLink: {

            fontSize: 12,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,

        },

        headerLinkText: {

            fontSize: 10,
            color: '#0a52cf',

        },

        icons: {

            height: 13,
            width: 13,
            color: 'red',
        },


        subheading: {

            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
            borderBottom: '0.5 solid #000',
            color: '#0B60B0',

        },

        content: {

            fontSize: 11,
            marginTop: 4,

        },

        jobSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            marginTop: 7,


        },

        companyDescription: {

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

        },

        educations: {

            display: 'flex',
            flexDirection: 'column',
            gap: 7,

        },

        educationSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 0,
        },

        educationGrade: {

            display: 'flex',
            flexDirection: 'row',
            gap: 5,

        },

        skillsSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 5,
        },

        projectSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 3,
        },

        projectContent: {

            display: 'flex',
            flexDirection: 'column',
            gap: 3,

        },

        projectLinks: {

            display: 'flex',
            flexDirection: 'row',
            gap: 2,


        },

        certificationSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 2,
        },

        certificationTitle: {

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },

        contentTitle: {

            fontWeight: 700,
            fontSize: 12,
            fontStyle: 'italic'


        },

        bulletSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            marginTop: 5,
        },

        achievementBulletSection: {

            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            marginTop: 2,
        },


        bullet: {

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
        },

        bulletDot: {

            fontSize: 13,

        },

        bulletText: {

            fontSize: 12,
            maxWidth: '95%',
        }
    });


    const BulletPoints = ({ text }) => {

        return (
            <View style={styles.bullet}>

                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{text}</Text>

            </View>
        )
    }

    return (

        <Document>
            <Page size='A4' style={styles.page}>

                {/* Header of the Resume */}
                <View style={styles.header}>

                    <Text style={styles.heading}>
                        {resumeData.personalDetails?.firstName + " " + resumeData.personalDetails?.lastName}
                    </Text>

                    <View style={styles.headerLinks}>


                        <Link src={`mailto:${resumeData.personalDetails?.email}`} style={styles.headerLink}>
                            <Image src={mail} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>Email</Text>
                        </Link>

                        <Link src={`${resumeData.links?.linkedIn}`} style={styles.headerLink}>
                            <Image src={linkedin} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>LinkedIn</Text>
                        </Link>

                        <Link src={`${resumeData.links?.github}`} style={styles.headerLink}>
                            <Image src={github} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>GitHub</Text>
                        </Link>

                    </View>
                </View>

                {/* Experience Section */}

                {
                    resumeData.experience
                        ?
                        <View style={styles.section}>
                            <Text style={styles.subheading}>
                                Experience
                            </Text>

                            <View>


                                {
                                    resumeData.experience.map((exp, index) => (

                                        <View key={index} style={styles.jobSection}>


                                            {/* Job 1 */}
                                            <View style={styles.companyDescription}>

                                                <Text style={styles.contentTitle}>
                                                    {exp.data?.employer}
                                                </Text>

                                                <Text style={styles.contentTitle}>

                                                    {exp.data.startDate?.month}
                                                    '
                                                    {exp.data.startDate?.year} -
                                                    {
                                                        (exp.data.endDate?.month && exp.data.endDate?.year) === ''
                                                            ?
                                                            ' Present '
                                                            :
                                                            ` ${exp.data.endDate?.month}'${exp.data.endDate?.year} `

                                                    }
                                                </Text>

                                            </View>

                                            <Text style={styles.content}>
                                                {exp.data?.jobTitle}
                                            </Text>


                                            {exp.data.contributions
                                                ?
                                                <View style={styles.bulletSection}>
                                                    {
                                                        exp.data.contributions.map((contribution) => (<BulletPoints key={contribution.id} text={contribution.text}></BulletPoints>))
                                                    }

                                                </View>
                                                :
                                                ''
                                            }




                                        </View>
                                    ))
                                }

                            </View>
                        </View>

                        :
                        ''
                }

                {/* Education Section */}

                {
                    resumeData.educations
                        ?
                        <View style={styles.section}>
                            <Text style={styles.subheading}>
                                Education
                            </Text>

                            <View style={styles.educations}>


                                {
                                    resumeData.educations.map((education, index) => (

                                        <View key={index} style={styles.educationSection}>
                                            {/* Education Title */}
                                            <View style={styles.companyDescription}>

                                                <Text style={styles.contentTitle}>
                                                    {education.data?.degree} {education.data?.fieldOfStudy} - {education.data?.schoolName}, {education.data?.city}
                                                </Text>

                                                <Text style={styles.contentTitle}>
                                                    {education.data.startDate?.month}
                                                    '
                                                    {education.data.startDate?.year} -
                                                    {
                                                        (education.data.endDate?.month && education.data.endDate?.year) === ''
                                                            ?
                                                            ' Present '
                                                            :
                                                            ` ${education.data.endDate?.month}'${education.data.endDate?.year} `

                                                    }
                                                </Text>

                                            </View>

                                            <View style={styles.educationGrade}>
                                                <Text style={styles.content}>{education.data?.grade}:</Text>
                                                <Text style={styles.content}>{education.data?.marks}</Text>

                                            </View>
                                        </View>

                                    ))
                                }
                            </View>

                        </View>
                        :
                        ''
                }

                {/* Skills Section */}
                <View style={styles.section}>

                    <Text style={styles.subheading}>
                        Skills
                    </Text>

                    <View style={styles.skillsSection}>

                        <View style={styles.educationGrade}>
                            <Text style={styles.contentTitle}>Languages:</Text>
                            <Text style={styles.contentTitle}>JavaScript, Go, HTML, CSS</Text>
                        </View>

                        <View style={styles.educationGrade}>
                            <Text style={styles.contentTitle}>Frameworks:</Text>
                            <Text style={styles.contentTitle}>React, Redux, NestJS</Text>
                        </View>

                        <View style={styles.educationGrade}>
                            <Text style={styles.contentTitle}>Tools & Technologies:</Text>
                            <Text style={styles.contentTitle}>Git , Postman</Text>
                        </View>

                    </View>

                </View>

                {/* Projects Section */}

                {

                    resumeData.projects
                        ?
                        <View style={styles.section}>

                            <Text style={styles.subheading}>
                                Projects
                            </Text>

                            <View>
                                {
                                    resumeData.projects.map((project, index) => (

                                        <View key={index} style={styles.projectSection}>

                                            <View style={styles.projectContent}>

                                                <View style={styles.companyDescription}>

                                                    {/* Title of the Project */}
                                                    <Text style={styles.contentTitle}>{project.data?.title}</Text>

                                                    {/* Project Links */}
                                                    <View style={styles.projectLinks}>
                                                        <Link src={`${project.data?.liveLink}`} style={styles.headerLink}>
                                                            <Text style={styles.headerLinkText}>[Website]</Text>
                                                        </Link>

                                                        <Link src={`${project.data?.githubLink}`} style={styles.headerLink}>
                                                            <Text style={styles.headerLinkText}>[GitHub]</Text>
                                                        </Link>
                                                    </View>

                                                </View>

                                                {/* Single Line Description of Project */}
                                                <Text style={styles.contentTitle}>{project.data?.shortDescription}</Text>

                                                {/* Bullet Points */}
                                                {
                                                    project.data.projectDescription
                                                        ?

                                                        <View style={styles.bulletSection}>

                                                            {
                                                                project.data.projectDescription.map((description) => (

                                                                    <BulletPoints key={description.id} text={description.text}></BulletPoints>
                                                                ))
                                                            }

                                                        </View>

                                                        :
                                                        ''

                                                }

                                            </View>
                                        </View>

                                    ))
                                }
                            </View>



                        </View>

                        :
                        ''
                }


                {/* Achievements Section */}
                {
                    resumeData.achievements
                        ?
                        <View style={styles.section}>
                            <Text style={styles.subheading}>
                                Achievements
                            </Text>

                            <View>
                                {
                                    resumeData.achievements.map((achievement, index) => (

                                        <View key={index} style={styles.projectSection}>


                                            {/* Achievement */}
                                            <View>
                                                <Text style={styles.contentTitle}>{achievement.data.achievementTitle}</Text>

                                                {/* Bullet Points */}
                                                <View style={styles.achievementBulletSection}>

                                                    {
                                                        achievement.data.achievementPoints.map((point) => (

                                                            <BulletPoints key={point.id} text={point.text}></BulletPoints>
                                                        ))
                                                    }

                                                </View>
                                            </View>
                                        </View>

                                    ))


                                }

                            </View>
                        </View>
                        :
                        ''
                }


                {/* Certifications */}
                {
                    resumeData.certifications
                        ?
                        <View style={styles.section}>
                            <Text style={styles.subheading}>
                                Certifications
                            </Text>

                            <View>
                                {
                                    resumeData.certifications.map((certification, index) => (

                                        <View key={index} style={styles.projectSection}>

                                            {/* Multiple Certifications */}
                                            <View style={styles.certificationSection}>

                                                {/* Cartification - 1 */}
                                                <View>

                                                    {/* Title and Link */}
                                                    <View style={styles.certificationTitle}>
                                                        <Text style={styles.contentTitle}>
                                                            {certification.data?.title}
                                                        </Text>

                                                        <Link src={`${certification.data?.certificationLink}`} style={styles.headerLink}>
                                                            <Text style={styles.headerLinkText}>[Link]</Text>
                                                        </Link>

                                                    </View>

                                                    {/* Bullet Points */}
                                                    <View style={styles.achievementBulletSection}>

                                                        <BulletPoints text={certification.data?.certificateDescription}></BulletPoints>

                                                    </View>

                                                </View>
                                            </View>
                                        </View>

                                    ))
                                }
                            </View>
                        </View>

                        :
                        ''
                }

            </Page>
        </Document >
    )
}

export default RoverResume