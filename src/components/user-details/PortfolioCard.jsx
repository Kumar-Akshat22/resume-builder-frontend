import React from 'react'
import { motion } from 'framer-motion';
import { Card , CardContent , CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import DarkTheme from "./Images/darkPortfolio.png";
import LightTheme from "./Images/lightPortfolio.png";

function PortfolioCard({portfolio}) {
    console.log('Inside Portfolio Card Componenet');
    const navigate = useNavigate();

    const handleOpenPortfolio = ()=>{

      navigate(`/portfolio/${portfolio?.url}`)
    }
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <img
          src={portfolio.template=="Template Dark 01"?DarkTheme:LightTheme}
          alt={portfolio.url}
          width={300}
          height={200}
          className="w-full h-48 object-contain"
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold text-foreground mb-2">{portfolio.url}</h2>
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <Button variant="outline" onClick={()=>navigate(`/dashboard/portfolio/${portfolio.url}/edit`)}>Edit </Button>
          <Button className='bg-indigo-500 hover:bg-indigo-700 text-white' onClick={handleOpenPortfolio}>Live Preview</Button>
        </CardFooter>
      </Card>
    </motion.div>
    </div>
  )
}

export default PortfolioCard