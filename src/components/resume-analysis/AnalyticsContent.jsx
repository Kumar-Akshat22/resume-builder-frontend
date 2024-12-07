import React from "react";
import ResumeScore from "./ResumeScore";
import AdditionalFeedback from "./AdditionalFeedback";
import SectionalFeedback from "./SectionalFeedback";
import KeySuggestion from "./KeySuggestion";
import AreasForImprovement from "./AreasForImprovement";

function AnalyticsContent({ activeSection, data }) {
  const renderAnalyticsContent = () => {
    switch (activeSection) {
      case "score":
        return <ResumeScore score={data.score} />;
      case "suggestions":
        return <KeySuggestion keySuggestions={data.keySuggestions} />;
      case "suggestions":
        return <KeySuggestion keySuggestions={data.keySuggestions} />;
      case "improvements":
        return <AreasForImprovement items={data.areasForImprovement} />;

      case "repetitive":
        return <AdditionalFeedback mockData={data} />;

        case "sections":
            return <SectionalFeedback mockData={data} />

            default:
                return null
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {renderAnalyticsContent()}
    </div>
  );
}

export default AnalyticsContent;
