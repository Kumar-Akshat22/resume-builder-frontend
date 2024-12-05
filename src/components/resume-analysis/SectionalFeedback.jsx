import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "../ui/badge";

function SectionalFeedback({ mockData }) {

    const sectionFeedback = mockData.sectionFeedback;
    console.log(sectionFeedback);
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sectionFeedback.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{section.section}</span>
                <Badge variant={section.score >= 80 ? "default" : "secondary"}>
                  {section.score}%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{section.feedback}</p>
              <h4 className="font-semibold mb-2">Key Improvements:</h4>
              <ul className="list-disc list-inside text-sm">
                {section.keyImprovements.map((improvement, idx) => (
                  <li key={idx}>{improvement}</li>
                ))}
              </ul>
              <Progress value={section.score} className="mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>
  );
}

export default SectionalFeedback;
