import React from "react";

function SectionalFeedback({ mockData }) {

    const sectionFeedback = mockData.sectionFeedback;
    console.log(sectionFeedback);
  return (
    <div className="">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Section Scores</h3>
    <div className="space-y-4">
      {sectionFeedback.map((sectionData, index) => (
        <div key={index} className="space-y-2 shadow-sm rounded-lg px-4 py-2 border">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">{sectionData.section}</span>
            <span className="text-sm font-medium text-gray-600">
              {sectionData.score}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${sectionData.score >= 90 ? "bg-green-500": sectionData.score>=70 ? "bg-yellow-400": "bg-indigo-300  "}`}
              style={{ width: `${sectionData.score}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">{sectionData.feedback}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default SectionalFeedback;
