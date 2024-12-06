import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PortfolioCard from "./PortfolioCard";
import PortfolioImage from "./Images/Portfolio.png";
import { useQuery } from "react-query";
import { getPortfolios } from "@/services/portfolioService";
const PortfolioGrid = () => {

  const {data:portfolios, isLoading} = useQuery({
    querykey:['userPortfolio'],
    queryFn: ()=>getPortfolios()
  })


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <Card className="overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <CardContent className="p-4">
            <Skeleton className="h-4 w-2/3 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
          <CardFooter className="flex justify-between p-4">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </CardFooter>
        </Card>
      ) 
      : 
        Array.isArray(portfolios) && portfolios.length === 0 ?
        <div className="text-center">
          <p className="text-gray-600">No portfolios found</p>
        </div>
        :
        Array.isArray(portfolios) && portfolios.map((portfolio) => (<PortfolioCard key={portfolio.link} portfolio={portfolio} />))
        
      
      }
    </div>
  );
};

export default PortfolioGrid;
