import React, { useEffect } from "react";
import { useState } from "react";
import { mockCourse } from "@/utils/dummyCourse";
import ReactPlayer from "react-player";

const CourseModuleView = ({ course, initialModule, initialModuleIndex = 0 }) => {
  const [currentModuleData, setCurrentModuleData] = useState(initialModule);
  const [activeIndex, setActiveIndex] = useState(initialModuleIndex);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchModuleDetails = async () => {
    // GET /api/course/:id/:moduleNo
  };

  const handleModuleSelection = (idx) => {
    setActiveIndex(idx);
    setShowQuiz(false);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const handleOptionSelect = (questionIndex , option)=>{

    setSelectedAnswers({...selectedAnswers , [questionIndex]:option})
  }

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    currentModuleData.assessment.mcqQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) score++;
    });
    return score;
  };

  useEffect(() => {
    if (showQuiz) {
      document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showQuiz]);
  
  useEffect(()=>{
    setCurrentModuleData(course.modules[activeIndex])
  } , [activeIndex])

  console.log("Course Data: ", course);

  if (!course || !currentModuleData)
    return <div className="p-4">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen p-4 overflow-y-auto bg-white border-r shadow w-72">
        <h2 className="mb-4 text-xl font-semibold">{course.title}</h2>
        <nav className="space-y-2">
          {course.modules.map((mod, idx) => (
            <button
              key={idx}
              onClick={() => handleModuleSelection(idx)}
              className={`block w-full text-left px-3 py-2 rounded-md transition ${
                idx === activeIndex
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              {idx + 1}. {mod.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="mb-2 text-2xl font-bold">{currentModuleData.title}</h2>
        <p className="mb-4 text-gray-700">{currentModuleData.description}</p>

        {/* Video Player */}
        <div className="relative flex justify-center mb-6 overflow-hidden aspect-video">
          <ReactPlayer
            url={currentModuleData.video}
            controls
            width={"100%"}
            height={"100%"}
            onEnded={() => setShowQuiz(true)}
          />
        </div>

        {/* Quiz Section */}
        {/* Quiz Section */}
        {showQuiz && (
          <div className="p-6 bg-white border rounded-md shadow-md" id="quiz-section">
            <h3 className="mb-4 text-xl font-semibold">
              {currentModuleData.assessment.title}
            </h3>
            <p className="mb-6 text-gray-600">
              {currentModuleData.assessment.description}
            </p>
            <form className="space-y-6">
              {currentModuleData.assessment.mcqQuestions.map((q, qIdx) => (
                <div key={qIdx} className="space-y-2">
                  <p className="font-medium text-gray-800">
                    {qIdx + 1}. {q.question}
                  </p>
                  <div className="ml-4 space-y-1">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = q.correctAnswer === opt;
                      const isSelected = selectedAnswers[qIdx] === opt;
                      let optStyle = "text-gray-800";

                      if (isSubmitted) {
                        if (isSelected && isCorrect) {
                          optStyle = "text-green-600 font-semibold";
                        } else if (isSelected && !isCorrect) {
                          optStyle = "text-red-600 font-semibold line-through";
                        } else if (isCorrect) {
                          optStyle = "text-green-600";
                        }
                      }

                      return (
                        <label key={optIdx} className={`block ${optStyle}`}>
                          <input
                            type="radio"
                            name={`question-${qIdx}`}
                            value={opt}
                            disabled={isSubmitted}
                            checked={isSelected}
                            onChange={() => handleOptionSelect(qIdx, opt)}
                            className="mr-2"
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!isSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitQuiz}
                  className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Submit Quiz
                </button>
              ) : (
                <div className="mt-6 text-lg font-semibold text-blue-700">
                  Score: {calculateScore()} /{" "}
                  {currentModuleData.assessment.mcqQuestions.length}
                </div>
              )}
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseModuleView;
