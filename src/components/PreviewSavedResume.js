import React from 'react'
import Resume1 from '../resume/Resume1'
import { PDFViewer } from '@react-pdf/renderer'
import RoverResume from '../resume/RoverResume'

const PreviewSavedResume = () => {
  return (
    <div className="w-full h-screen">
    <div className="max-w-[1140px] mx-auto p-4">
    {

        <PDFViewer className="w-full min-h-screen">
          
          {
              localStorage.getItem('resumeName'=='roverResume')?
              <RoverResume resumeData={JSON.parse(localStorage.getItem('savedResume'))} />:

              <Resume1 resumeData={JSON.parse(localStorage.getItem('savedResume'))}/>
          }
    
        </PDFViewer>
    }

    </div>
  </div>  )
}

export default PreviewSavedResume