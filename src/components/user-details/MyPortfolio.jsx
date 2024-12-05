import React, { useState } from 'react'
import PortfolioGrid from './PortfolioGrid'
import PortfolioDataUpload from './PortfolioDataUpload';

const MyPortfolio = () => {

    const [isModalOpen , setIsModalOpen] = useState(false);

    const handleGeneratePortfolio = (data) =>{

        console.log('User Data for generating portfolio' , data);
    }


  return (
    <div>
        <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Generator</h1>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            Create your Portfolio
          </button>
        </div>
      </header>

      <div className='max-w-7xl flex justify-center'>

      <PortfolioDataUpload isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} onSubmit={handleGeneratePortfolio} baseUrl={'http://localhost:5173/portfolio/'}/>
        
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            
          <PortfolioGrid />
      </div>



    </div>
  )
}

export default MyPortfolio