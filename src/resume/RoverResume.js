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
                        {resumeData?.personalDetails.firstName + " " + resumeData?.personalDetails.lastName}
                    </Text>

                    <View style={styles.headerLinks}>


                        <Link src={`mailto:${resumeData?.personalDetails.email}`} style={styles.headerLink}>
                            <Image src={mail} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>Email</Text>
                        </Link>

                        <Link src={`${resumeData?.links.linkedIn}`} style={styles.headerLink}>
                            <Image src={linkedin} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>LinkedIn</Text>
                        </Link>

                        <Link src={`${resumeData?.links.github}`} style={styles.headerLink}>
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
                                                    {exp.data.employer}
                                                </Text>

                                                <Text style={styles.contentTitle}>

                                                    {exp.data.startDate.month}
                                                    '
                                                    {exp.data.startDate.year} -
                                                    {
                                                        (exp.data.endDate.month && exp.data.endDate.year) === ''
                                                            ?
                                                            ' Present '
                                                            :
                                                            ` ${exp.data.endDate.month}'${exp.data.endDate.year} `

                                                    }
                                                </Text>

                                            </View>

                                            <Text style={styles.content}>
                                                {exp.data.jobTitle}
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
                    resumeData.educationDetails
                        ?
                        <View style={styles.section}>
                            <Text style={styles.subheading}>
                                Education
                            </Text>

                            <View style={styles.educations}>


                                {
                                    resumeData.educationDetails.map((educationDetails, index) => (

                                        <View key={index} style={styles.educationSection}>
                                            {/* Education Title */}
                                            <View style={styles.companyDescription}>

                                                <Text style={styles.contentTitle}>
                                                    {educationDetails.educationDetails.degree} {educationDetails.educationDetails.fieldOfStudy} - {educationDetails.educationDetails.schoolName}, {educationDetails.educationDetails.city}
                                                </Text>

                                                <Text style={styles.contentTitle}>March'20 - April'21</Text>

                                            </View>

                                            <View style={styles.educationGrade}>
                                                <Text style={styles.content}>{educationDetails.educationDetails.grade}:</Text>
                                                <Text style={styles.content}>{educationDetails.educationDetails.marks}</Text>

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

                    resumeData.project
                        ?
                        <View style={styles.section}>

                            <Text style={styles.subheading}>
                                Projects
                            </Text>

                            <View>
                                {
                                    resumeData.project.map((projectDetails, index) => (

                                        <View key={index} style={styles.projectSection}>

                                            <View style={styles.projectContent}>

                                                <View style={styles.companyDescription}>
                                                    
                                                    {/* Title of the Project */}
                                                    <Text style={styles.contentTitle}>{projectDetails.projectDetails.title}</Text>

                                                    {/* Project Links */}
                                                    <View style={styles.projectLinks}>
                                                        <Link src={`${projectDetails.projectDetails.liveLink}`} style={styles.headerLink}>
                                                            <Text style={styles.headerLinkText}>[Website]</Text>
                                                        </Link>

                                                        <Link src={`${projectDetails.projectDetails.githubLink}`} style={styles.headerLink}>
                                                            <Text style={styles.headerLinkText}>[GitHub]</Text>
                                                        </Link>
                                                    </View>

                                                </View>

                                                {/* Single Line Description of Project */}
                                                <Text style={styles.contentTitle}>{projectDetails.projectDetails.shortDescription}</Text>

                                                {/* Bullet Points */}
                                                {
                                                    projectDetails.projectDetails.projectDescription
                                                    ?

                                                    <View style={styles.bulletSection}>

                                                    {
                                                        projectDetails.projectDetails.projectDescription.map((description)=>(
                                                            
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
                <View style={styles.section}>

                    <Text style={styles.subheading}>
                        Achievements
                    </Text>

                    <View style={styles.projectSection}>

                        {/* Achievement - 1 */}
                        <View>
                            <Text style={styles.contentTitle}>QuizInit Coding Competition</Text>

                            {/* Bullet Points */}
                            <View style={styles.achievementBulletSection}>

                                <BulletPoints text='Secured 3rd Rank in the QuizInit coding competition organized by the coding club of my college'></BulletPoints>

                            </View>
                        </View>

                        {/* Achievement - 2 */}
                        <View>
                            <Text style={styles.contentTitle}>Smart India Hackathon</Text>

                            {/* Bullet Points */}
                            <View style={styles.achievementBulletSection}>

                                <BulletPoints text='Participated at the college level of the Smart India Hackathon with a team of 5 members.'></BulletPoints>

                            </View>
                        </View>

                    </View>

                </View>

                {/* Certifications */}
                <View style={styles.section}>
                    <Text style={styles.subheading}>
                        Certifications
                    </Text>

                    {/* Multiple Certifications */}
                    <View style={styles.certificationSection}>

                        {/* Cartification - 1 */}
                        <View>

                            {/* Title and Link */}
                            <View style={styles.certificationTitle}>
                                <Text style={styles.contentTitle}>
                                    Machine Learing - iNeuron.ai
                                </Text>

                                <Link src='mailto:kakshat247@gmail.com' style={styles.headerLink}>
                                    <Text style={styles.headerLinkText}>[Link]</Text>
                                </Link>

                            </View>

                            {/* Bullet Points */}
                            <View style={styles.achievementBulletSection}>

                                <BulletPoints text='Completed the Machine Learning Course from iNeuron.ai'></BulletPoints>

                            </View>

                        </View>

                        {/* Cartification - 2 */}
                        <View>

                            {/* Title and Link */}
                            <View style={styles.certificationTitle}>
                                <Text style={styles.contentTitle}>
                                    MERN Stack Development - CodeHelp
                                </Text>

                                <Link src='www.google.com' style={styles.headerLink}>
                                    <Text style={styles.headerLinkText}>[Link]</Text>
                                </Link>

                            </View>

                            {/* Bullet Points */}
                            <View style={styles.achievementBulletSection}>

                                <BulletPoints text='Completed the MERN Stack Development Course from CodeHelp'></BulletPoints>

                            </View>

                        </View>


                    </View>
                </View>

            </Page>
        </Document >
    )
}

export default RoverResume