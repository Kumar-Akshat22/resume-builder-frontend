import React from 'react'
import { Card , CardContent , CardHeader , CardTitle , CardDescription , CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion , AnimatePresence } from 'framer-motion';
import { ArrowUpRight , Lightbulb , Target } from 'lucide-react';

function FeedbackCard({mockData}) {

    const keySuggestions = mockData.keySuggestions;
    const areasForImprovement = mockData.areasForImprovement;
  return (
    
        <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-indigo-100 dark:border-gray-700 shadow-xl shadow-indigo-100/20 dark:shadow-none transform transition-all duration-300'>
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <ArrowUpRight className="mr-2" /> AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="suggestions" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="suggestions" className="flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Key Suggestions
                  </TabsTrigger>
                  <TabsTrigger value="improvements" className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Areas for Improvement
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="suggestions">
                  <AnimatePresence mode="wait">
                    <motion.ul
                      key="suggestions"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 mt-4"
                    >
                      {keySuggestions.map((strength, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mr-3 mt-1">
                            <Lightbulb className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{strength}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </TabsContent>
                <TabsContent value="improvements">
                  <AnimatePresence mode="wait">
                    <motion.ul
                      key="improvements"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 mt-4"
                    >
                      {areasForImprovement.map((improvement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-1">
                            <Target className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{improvement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
    
  )
}

export default FeedbackCard