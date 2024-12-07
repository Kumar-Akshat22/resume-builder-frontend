import React from "react";
import {
  Lightbulb,
} from "lucide-react";


function KeySuggestion({ keySuggestions }) {
  return (
    <div>
      
        <h3 className="text-xl font-semibold text-green-500 mb-4">
          Key Suggestions
        </h3>
      <div className="flex flex-col gap-4">
        {keySuggestions.map((suggestion, index) => (
          <div key={index} className="flex items-center gap-2">
            <Lightbulb className="text-yellow-500" />
            <span className="text-gray-600 text-lg">{suggestion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeySuggestion;
