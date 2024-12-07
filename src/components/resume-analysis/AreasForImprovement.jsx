import React from 'react'
import {
    AlertTriangle,
    Lightbulb,
  } from "lucide-react";
  

function AreasForImprovement({items}) {
  return (
    <div>
      
        <h3 className="text-xl font-semibold text-green-500 mb-4">
          Areas for Improvements
        </h3>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <AlertTriangle className="text-yellow-500" />
            <span className="text-gray-600 text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AreasForImprovement