import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PortfolioCard from "./PortfolioCard";
import PortfolioImage from "./Images/Portfolio.png";
const PortfolioGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log("Inside Portfolio Grid Componenet");
  async function getPortfolios() {
    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return mock data
    return [
      { id: 1, title: "John's Portfolio", image: PortfolioImage },
      { id: 2, title: "Sarah's Designs", image: "../assets/Protfolio.png" },
      { id: 3, title: "Tech Innovator", image: "../assets/Protfolio.png" },
      { id: 4, title: "Creative Minds", image: "../assets/Protfolio.png" },
      { id: 5, title: "Digital Artist", image: "../assets/Protfolio.png" },
      {
        id: 6,
        title: "Web Developer",
        image: "/placeholder.svg?height=200&width=300",
      },
    ];
  }

  const portfolios = [
    { id: 1, title: "John's Portfolio", image: PortfolioImage },
    { id: 2, title: "Sarah's Designs", image: PortfolioImage },
    { id: 3, title: "Tech Innovator", image: PortfolioImage },
  ];

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
        
        portfolios.map((portfolio) => (<PortfolioCard key={portfolio.id} portfolio={portfolio} />))
        
      
      }
    </div>
  );
};

export default PortfolioGrid;
