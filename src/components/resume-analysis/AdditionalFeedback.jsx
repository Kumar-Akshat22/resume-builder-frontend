import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

function AdditionalFeedback({ mockData }) {
  console.log(mockData);
  const grammarErrors = mockData.grammarErrors;
  const repetitiveWords = mockData.repetitiveWords;

  return (
    <div>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Additional Feedback
          </h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Grammar Errors:
            </h3>
            <div className="space-y-2">
              {grammarErrors.map((error, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-indigo-50 border border-yellow-100"
                >
                  <p className="mt-2 text-md text-gray-700 font-medium">{error}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Repetitive Words:</h3>
              <div className="flex flex-wrap gap-2">
                {repetitiveWords.map((word, index) => (
                  <Badge key={index} variant="secondary" className="bg-yellow-100 text-base text-black cursor-pointer">
                    {word}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdditionalFeedback;
