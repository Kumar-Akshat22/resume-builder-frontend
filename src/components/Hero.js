import React from 'react'
import { Link } from 'react-router-dom'
import Extra from './Extra'
import { PDFRenderer, PDFViewer } from '@react-pdf/renderer'
import RoverResume from '../resume/RoverResume'

function Hero() {
  return (
    <section className='w-full border max-w-[1440px] mx-auto flex flex-col items-center'>

            <div>
                <button>Create Your Resume</button>
            </div>

            <div>
              <PDFViewer className='w-full min-h-screen'>
                <RoverResume/>
              </PDFViewer>
            </div>
    </section>
  )
}

export default Hero