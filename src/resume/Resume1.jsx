import { Document, Page, StyleSheet, Text, View, Font, Link, Image } from '@react-pdf/renderer'
import React from 'react'
import roboto from './Roboto-Bold.ttf'
import ebg from './EBGaramond-VariableFont_wght.ttf'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import mail from '../assets/mail.png';


const Resume1 = ({resumeData}) => {
    let githubLink = resumeData.links.github.match(/github\.com\/([^\/]+)\/?$/)
    let linkedInLink = resumeData.links.linkedIn.match(/\/([^\/]+)\/?$/)

    githubLink = githubLink && githubLink[1]? githubLink[1]: null
    githubLink = linkedInLink && linkedInLink[1]? linkedInLink[1]:null
    

    Font.register({
        family: 'Roboto',
        src: roboto,

    })
    Font.register({
        family: 'EBGaramond',
        src: ebg

    })
    const styles = StyleSheet.create({
        headerName: {
            fontWeight: 'extrabold',
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingVertical: '6px',
            fontFamily: 'Roboto',
            fontSize: '24px'

        },
        header: {
            width: '100%',
            backgroundColor: 'black',
            padding: '12px'
        },
        subHeader: {
            color: 'white',
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'row',
            gap: '14px',
            justifyContent: 'center',
            alignItems: 'center',

        },
        heading: {
            textDecoration: 'underline',
            fontSize: '16px',
            fontFamily: 'EBGaramond',
            fontWeight: 'extrabold'
        },
        subHeading: {
            fontFamily: 'EBGaramond',
            fontSize: '11px'
        },
        content: {
            fontSize: '11px',
            textDecoration: 'none',
            color: 'black',
            paddingVertical: '2px',
            display:'flex',
            flexDirection:'row',
            textAlign:'justify',
            gap:'6px'

        },
        leftSection: {
            width: '30%',
            // display:'flex'
        },
        title: {
            fontFamily: 'Roboto',
            fontSize: '11px'
        },
        component: {
            margin: '10px',
            marginVertical: '5px'
        },
        skills: {

        },
        multiSection: {
            display: 'flex',
            flexDirection: "row"
        },
        rightSection: {
            width: '70%'
        },
        titleContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        link:{
            textDecoration:'none',
            color:'white',
            textDecorationStyle: 'none',
        },
        icons: {

            height: 13,
            width: 13,
            color: 'black',
            display:'flex'
        },



    })
    return (
        <Document>
            <Page style={{padding:'6px'}}>

                <View style={styles.header}>
                    <Text style={styles.headerName}>
                        {resumeData.personalDetails?.firstName?.toUpperCase()} {resumeData.personalDetails?.lastName.toUpperCase()}
                    </Text>
                    <View style={styles.subHeader}>

                        <Link style={styles.link} href={`mailto:${resumeData.personalDetails.email}`}><Text style={styles.link}>
                        {/* <Image src={mail} style={styles.icons}></Image> */}
                        Email :  
                         { resumeData.personalDetails.email}</Text></Link>
                        <Link style={styles.link} href={`tel:${resumeData.personalDetails?.phone}`}><Text style={styles.link}>Ph. :  { resumeData.personalDetails.phone} </Text></Link>
                        {/* <Text>md-muzzammil-rashid</Text> */}
                    </View>
                </View>

                <View style={styles.multiSection}>
                    {/* left section */}
                    <View style={styles.leftSection}>
                        {/* Components */}
                        {/* About Me */}
                        <View style={styles.component}>
                            <Text style={styles.heading}>About Me</Text>
                            <Text style={styles.content}>
                                {resumeData.personalDetails?.summary}
                            </Text>
                        </View>

                        {/* Education */}
                        <View style={styles.component}>
                            <Text style={styles.heading}>Education</Text>
                            {
                                resumeData.educations.map(edu=>(

                                        <View key={edu.data.schoolName} style={styles.subComponent}>
                                    <Text style={styles.subHeading}>{edu.data.degree} in {edu.data.fieldOfStudy}</Text>
                                    <Text style={styles.content}>{edu.data.schoolName}</Text>
                                    <Text style={styles.content}>{edu.data.grade} : {edu.data.marks}</Text>
                                    <Text style={styles.content}>20{edu.data.startDate.year}-{edu.data.endDate.year||'Present'}<br/><br/>
                                    &nbsp;
                                    </Text>
                    
                                    <Text >&nbsp;</Text>
                                 </View>
                                ))
                            }
                        

                        </View>
                        {/* Links */}
                        <View style={styles.component}>
                            <Text style={styles.heading}>Links</Text>
                            {
                                resumeData.links.linkedIn ?
                                
                                <Link href={resumeData.links.linkedIn} style={styles.content}>
                                    <Image src={linkedin} style={styles.icons}></Image>
                                    <Text> /{linkedInLink?githubLink:''}</Text>
                                    </Link>:''
                            }
                            {
                                resumeData.links.github ?
                                <Link href={resumeData.links.github} style={styles.content}>
                                <Image src={github} style={styles.icons}></Image>
                                <Text> /{githubLink?githubLink:""}</Text>
                                </Link>:''
                        }
                            {/* } */}
                            {/* {
                                resumeData.links.website ?
                                <Link href='https://www.linkedin.com/md-muzzammil-rashid' style={styles.content}>linkedin/md-muzzammil-rashid</Link>:''
                            } */}

                        </View>

                        {/* Skills */}
                        <View style={styles.component}>
                            <Text style={styles.heading}>Skills</Text>
                            <View style={styles.skills}>
                                {
                                    resumeData.skills.map(skill=>(
                                        <Text style={styles.content}> • {skill.text}</Text>
                                    ))
                                }
                            </View>

                        </View>
                        {/* Related CourseWork */}
                            {/* <View style={styles.component}>
                                <Text style={styles.heading}>Related CourseWork</Text>
                                <View style={styles.relatedCourse}>
                                    <Text style={styles.content}> • Machine Learning </Text>
                                    <Text style={styles.content}> • Data Structures & Algorithm </Text>
                                    <Text style={styles.content}> • Design & Analysis of Algorithm </Text>
                                    <Text style={styles.content}>• Database Management System</Text>
                                    <Text style={styles.content}> • Operating System </Text>
                                    <Text style={styles.content}> • Web Development </Text>
                                    <Text style={styles.content}> • Artificial Intelligence </Text>

                                </View>
                            </View> */}

                    </View>
                    {/* Right Section */}
                    <View style={styles.rightSection}>
                        {/* Projects */}
                        <View style={styles.component}>

                                    <Text style={styles.heading}>Projects</Text>

                                
                            {
                                resumeData.projects.map(project => (

                                    <View key={project.data.title} style={styles.component}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>{project.data.title}  
                                            {
                                                project.data.liveLink?
                                                <Link href={project.data.liveLink} style={styles.content}> [Live] </Link>:' '
                                            }
                                            {
                                                project.data.githubLink?
                                                <Link href={project.data.githubLink} style={styles.content}> [Github] </Link>:" "
                                            }
                                        </Text>
                                        
                                        {/* <Text style={styles.content}>12-02-2023</Text> */}
                                    </View>
                                    {/* Tech Stack */}
                                    {/* <Text style={styles.content}> Tech Stack : {res}</Text> */}

                                    {/* Discription */}

                                    {
                                        project.data.projectDescription?.map(des=>(
                                            <Text style={styles.content}> • {des.text} </Text>
                                        ))
                                    }
                                    

                                </View>
                                ))
                            }

                        </View>

                        {/* Experiance */}
                        <View style={styles.component}>
                            <Text style={styles.heading}>Experience</Text>

                            {
                                resumeData.experience.map(exp=>(

                                    <View style={styles.component}>
                                        <Text style={styles.title}>{exp.data.employer}</Text>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.content}>{exp.data.jobTitle}</Text>
                                        <Text style={styles.content}>{exp.data.startDate.month + " "+ exp.data.startDate.year} - {exp.data.endDate.month?exp.data.endDate.month + " "+exp.data.endDate.year?exp.data.endDate.year:'':"Present"}</Text>
                                    </View>
                                    {/* Description */}
                                    {
                                        exp.data.contributions.map(contribution=>(

                                            <Text style={styles.content}> • {contribution.text}</Text>
                                        ))
                                    
                                     }
                                </View>
                        ))
                            }
       

                        </View>
                        {/* Certifications */}
                        <View style={styles.component}>
                            <Text style={styles.heading}>Courses and Certification</Text>
                            <View style={styles.component}>
                                {
                                    resumeData.certificatons.map(cert=>(

                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>{cert.data.title} </Text>
                                        {/* <Text style={styles.content}>April 2019 - July-2019</Text> */}
                                        <Text>&nbsp;</Text>
                                    </View>
                                    ))
                                }
                                
                                
                            </View>
                           

                        </View>

                    </View>
                </View>


            </Page>
        </Document>
    )
}

export default Resume1