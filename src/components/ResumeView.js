import React from 'react'
import { Link } from 'react-router-dom'
import { PDFRenderer, PDFViewer } from '@react-pdf/renderer'
import RoverResume from '../resume/RoverResume'

function ResumeView() {
  return (
    <div className='w-full'>
      <div className='max-w-[1140px] mx-auto p-4'>
              <PDFViewer className='w-full min-h-screen'>
                <RoverResume/>
              </PDFViewer>
      </div>
    </div>
  )
}

export default ResumeView