import React, { useEffect, useState } from "react";
import RoverResume from "../resume/RoverResume";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";

function GenerateResume({resumeData}) {


  return (
    <div className="w-full h-screen">
      <div className="max-w-[1140px] mx-auto p-4">
          <PDFViewer className="w-full min-h-screen">
            <RoverResume resumeDetails={resumeData} />
          </PDFViewer>
  
      </div>
    </div>
  );
}

export default GenerateResume;
