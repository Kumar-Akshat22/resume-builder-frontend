import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getPortfolio } from '@/services/portfolioService'
import { useParams } from 'react-router-dom'
import PortfolioLight from '@/components/Portfolio/TemplateLight/PortfolioLight'
import PortfolioDark from '@/components/Portfolio/TemplateDark/PortfolioDark'

const Portfolio = () => {
  const [isLinkValid, setIsLinkValid] = useState(true)
  const {link} = useParams()
  const {data:portfolioData, isLoading, isError} = useQuery({
    queryKey: ['portfolio', link.split('#')[0]],
    queryFn: ()=> getPortfolio(link.split('#')[0]),
    onSuccess:res=>console.log(res),
    onError:(err)=>{console.log(err); setIsLinkValid(false)}
  })

  if(isLoading){
    return <div>Loading...</div>
  }
  if(!isLinkValid){
    return <div>Invalid Link</div>
  }
  return (
    <div>
      {
        portfolioData.template === "Template Dark 01"?
        <PortfolioDark portfolioData={portfolioData} />
        :
        <PortfolioLight portfolioData={portfolioData} />
      }
    </div>
  )
}

export default Portfolio