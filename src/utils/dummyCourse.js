export const mockCourse = {
    _id: "course123",
    title: "Introduction to Web Development",
    description: "A beginner-friendly course to learn web development fundamentals.",
    modules: [
      {
        title: "HTML Basics",
        description: "Learn the building blocks of web pages using HTML.",
        video: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        assessment: {
          title: "HTML Quiz",
          description: "Test your HTML knowledge.",
          mcqQuestions: [
            {
              question: "What does HTML stand for?",
              options: [
                "Hyperlinks and Text Markup Language",
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyper Tool Multi Language"
              ],
              correctAnswer: "Hyper Text Markup Language"
            },
            {
              question: "Which tag is used to create a hyperlink in HTML?",
              options: ["<a>", "<link>", "<href>", "<hyper>"],
              correctAnswer: "<a>"
            }
          ]
        }
      },
      {
        title: "CSS Fundamentals",
        description: "Learn how to style web pages with CSS.",
        video: "https://www.youtube.com/watch?v=yfoY53QXEnI",
        assessment: {
          title: "CSS Quiz",
          description: "Test your CSS knowledge.",
          mcqQuestions: [
            {
              question: "Which CSS property controls the text size?",
              options: ["font-style", "text-size", "font-size", "text-style"],
              correctAnswer: "font-size"
            },
            {
              question: "Which value is used for absolute positioning in CSS?",
              options: ["relative", "static", "fixed", "absolute"],
              correctAnswer: "absolute"
            }
          ]
        }
      },
      {
        title: "JavaScript Basics",
        description: "Start programming with JavaScript.",
        video: "https://www.youtube.com/watch?v=upDLs1sn7g4",
        assessment: {
          title: "JavaScript Quiz",
          description: "Test your JavaScript basics.",
          mcqQuestions: [
            {
              question: "Which keyword is used to declare a variable in JavaScript?",
              options: ["var", "int", "string", "letvar"],
              correctAnswer: "var"
            },
            {
              question: "What is the output of `typeof null`?",
              options: ["null", "undefined", "object", "string"],
              correctAnswer: "object"
            }
          ]
        }
      }
    ]
  };