import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, RefreshCw, FileText, CheckCircle2 } from "lucide-react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";

function ResumePreview({ file }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex flex-col space-y-3 mt-5">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Hold On, Generating your Resume
          </h1>
          <Skeleton className="h-[325px] w-[100%] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    Resume Preview
                  </h2>
                </div>

                <div
                  className="border rounded-lg overflow-hidden"
                  style={{ height: "70vh" }}
                >
                  {file ? (
                    <div>
                      <iframe
                        src={file}
                        title="PDF Preview"
                        width="100%"
                        height={600}
                        style={{ border: "1px solid #ccc" }}
                      ></iframe>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <FileText className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ResumePreview;
