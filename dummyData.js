export const dummyData = {
  template: 'default',
  socialLinks: {
    linkedIn: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    dev: 'https://dev.to/johndoe',
    medium: 'https://medium.com/@johndoe',
    instagram: 'https://www.instagram.com/johndoe',
    github: 'https://github.com/johndoe',
    leetcode: 'https://leetcode.com/johndoe',
  },
  personalInfo: {
    profilePhotoUrl: 'https://example.com/profile-photo.jpg',
    jobProfiles: ['Software Engineer', 'Full Stack Developer'],
    userSummary: 'Passionate developer with 5+ years of experience in building web applications.',
    majorProfile: 'Full Stack Development',
    email: 'john.doe@example.com',
    phone: '+1 (123) 456-7890',
    location: 'San Francisco, CA',
    gender: 'Male',
    firstName: 'John',
    lastName: 'Doe',
  },
  skills: {
    technicalSkills: [
      { label: 'JavaScript', emoji: '🟨', logoUrl: 'https://example.com/js-logo.png' },
      { label: 'React', emoji: '⚛️', logoUrl: 'https://example.com/react-logo.png' },
      { label: 'Node.js', emoji: '🟩', logoUrl: 'https://example.com/nodejs-logo.png' },
    ],
    softSkills: [
      { label: 'Communication', emoji: '💬' },
      { label: 'Teamwork', emoji: '🤝' },
      { label: 'Problem Solving', emoji: '🧩' },
    ],
  },
  education: [
    {
      instituteName: 'University of Example',
      location: 'Example City, State',
      startDate: '2015-09-01',
      endDate: '2019-05-31',
      degree: 'Bachelor of Science',
      specialization: 'Computer Science',
      imageUrl: 'https://example.com/university-logo.png',
    },
  ],
  experience: [
    {
      jobRole: 'Senior Software Engineer',
      companyName: 'Tech Solutions Inc.',
      startDate: '2021-01-01',
      endDate: 'Present',
      description: [
        'Led a team of 5 developers in building a scalable e-commerce platform',
        'Implemented CI/CD pipelines, reducing deployment time by 50%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      jobRole: 'Full Stack Developer',
      companyName: 'Web Innovations LLC',
      startDate: '2019-06-01',
      endDate: '2020-12-31',
      description: [
        'Developed and maintained multiple client websites using React and Node.js',
        'Optimized database queries, improving application performance by 30%',
        'Collaborated with UX designers to implement responsive designs',
      ],
    },
  ],
  projects: [
    {
      title: 'Task Management App',
      description: [
        'Built a full-stack task management application using React, Node.js, and MongoDB',
        'Implemented user authentication and real-time updates using Socket.io',
        'Deployed the application on AWS using Docker containers',
      ],
      techStack: [
        { title: 'React', emoji: '⚛️' },
        { title: 'Node.js', emoji: '🟩' },
        { title: 'MongoDB', emoji: '🍃' },
      ],
      imageUrl: ['https://example.com/task-app-screenshot1.png', 'https://example.com/task-app-screenshot2.png'],
      githubUrl: 'https://github.com/johndoe/task-management-app',
      liveUrl: 'https://task-app.example.com',
      startDate: '2020-03-01',
      endDate: '2020-05-31',
    },
  ],
}

