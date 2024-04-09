import React from 'react';
import { Document, Image, Link, Page, Text, View, Svg } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function RoverResume() {

    // Creat the layout of the Resume
    const styles = StyleSheet.create({

        page: {

            display: 'flex',
            flexDirection: 'column',
            gap: 2,
        },

        section: {

            margin: 0,
            padding: 8,

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
            color:'#0B60B0',
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

        headerLinkText:{

            fontSize:10,
            color:'#0a52cf',

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
            color:'#0B60B0',

        },

        content: {

            fontSize: 11,
            marginTop: 4,

        },

        jobSection:{

            display:'flex',
            flexDirection:'column',
            gap:15,


        },
        
        companyDescription:{

            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',

        },


        contentTitle:{

            fontWeight:700,
            fontSize:12,
            fontStyle: 'italic'


        },

        bulletSection:{

            display:'flex',
            flexDirection:'column',
            gap: 3,
            marginTop: 5,
        },


        bullet: {

            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            gap:2,
        },

        bulletDot: {

            fontSize: 13,
            verticalAlign: 'super',
            paddingTop: 3,
            lineHeight: 0.5,

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
                        Kumar Akshat
                    </Text>

                    <View style={styles.headerLinks}>


                        <Link src='mailto:kakshat247@gmail.com' style={styles.headerLink}>
                            <Image src={mail} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>kakshat247@gmail.com</Text>
                        </Link>

                        <Link src='https://www.linkedin.com/in/kumar-akshat/' style={styles.headerLink}>
                            <Image src={linkedin} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>LinkedIn</Text>
                        </Link>

                        <Link src='https://github.com/Kumar-Akshat22' style={styles.headerLink}>
                            <Image src={github} style={styles.icons}></Image>
                            <Text style={styles.headerLinkText}>GitHub</Text>
                        </Link>

                    </View>
                </View>


                <View style={styles.section}>

                    <Text style={styles.subheading}>
                        Experience
                    </Text>

                    <View style={styles.jobSection}>

                        <View>

                        
                            {/* Job 1 */}
                            <View style={styles.companyDescription}>

                                <Text style={styles.contentTitle}>
                                    Google
                                </Text>

                                <Text style={styles.contentTitle}>April'24 - Present</Text>

                            </View>

                            <Text style={styles.content}>
                                Full Stack Web Developer
                            </Text>
                            

                            <View style={styles.bulletSection}>
                                <BulletPoints text='Developed web applications using React'></BulletPoints>
                                <BulletPoints text='Collaborated with team members on project tasks'></BulletPoints>
                                <BulletPoints text='Specialized in creating content related to NumPy and contributed 25+ articles to the companys website.'></BulletPoints>
                                <BulletPoints text='Significantly enhanced my communication skills as I used to seek my mentor’s review for my writing.'></BulletPoints>
                                
                            </View>

                        </View>
                        
                        <View>

                            {/* Job 2 */}
                            <View style={styles.companyDescription}>

                                <Text style={styles.contentTitle}>
                                    Microsoft
                                </Text>

                                <Text style={styles.contentTitle}>April'22 - Dec'23</Text>

                            </View>

                            <Text style={styles.content}>
                                Cloud Engineer
                            </Text>
                            

                            <View style={styles.bulletSection}>
                                <BulletPoints text='Developed web applications using React'></BulletPoints>
                                <BulletPoints text='Collaborated with team members on project tasks'></BulletPoints>
                                <BulletPoints text='Specialized in creating content related to NumPy and contributed 25+ articles to the companys website.'></BulletPoints>
                                
                                
                            </View>

                        </View>

                    </View>

                </View>

                <View style={styles.section}>

                    <Text style={styles.subheading}>
                        Education
                    </Text>

                    <Text style={styles.content}>
                        Bachelor of Science in Computer Science
                    </Text>

                    <Text style={styles.content}>
                        University of XYZ, Graduation Year
                    </Text>

                </View>

                <View style={styles.section}>

                    <Text style={styles.subheading}>
                        Skills
                    </Text>

                    <Text style={styles.content}>
                        - JavaScript (React, Node.js)
                    </Text>

                    <Text style={styles.content}>
                        - HTML, CSS
                    </Text>

                    <Text style={styles.content}>
                        - MongoDB, MySQL
                    </Text>

                </View>

                <View>

                </View>

            </Page>
        </Document>
    )
}

export default RoverResume