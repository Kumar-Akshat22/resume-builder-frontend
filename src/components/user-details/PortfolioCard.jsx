import React from 'react'
import { motion } from 'framer-motion';
import { Card , CardContent , CardFooter } from '../ui/card';
import { Button } from '../ui/button';

function PortfolioCard({portfolio}) {
    console.log('Inside Portfolio Card Componenet');
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold text-foreground mb-2">{portfolio.title}</h2>
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <Button variant="outline" >Edit Portfolio</Button>
          <Button className='bg-indigo-500 hover:bg-indigo-700 text-white'>View Portfolio</Button>
        </CardFooter>
      </Card>
    </motion.div>
    </div>
  )
}

export default PortfolioCard