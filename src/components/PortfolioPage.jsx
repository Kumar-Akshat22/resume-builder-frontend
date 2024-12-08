import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PortfolioForm from './PortfolioForm'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { getAuthorizedPortfolio, updatePortfolio } from '@/services/portfolioService'
import toast from 'react-hot-toast'
import { Preview, Web } from '@mui/icons-material'



export default function PortfolioPage() {
  const [isEditable, setIsEditable] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const {link} = useParams();
  const {data: portfolioData, isLoading, error} = useQuery({
    queryKey: ['updatePortfolio', link],
    queryFn: () => getAuthorizedPortfolio(link),
  })
  const queryClient = useQueryClient();
  const updatePortfolioMutation = useMutation({
    mutationFn: (updatedData)=>updatePortfolio(link, updatedData),
    onError: (error) => {
      toast.error(`Failed to update portfolio: ${error}`)
      setIsSaving(false);
      setIsEditable(true);
      queryClient.invalidateQueries(['updatePortfolio', link])
    },
    onSuccess: () => {
      toast.success('Portfolio updated successfully')
      setIsSaving(false);
      setIsEditable(false);
      queryClient.invalidateQueries(['updatePortfolio', link])
      queryClient.invalidateQueries(['userPortfolio'])

    },
  })

  const handleSave = (updatedData) => {
    // setPortfolioData(updatedData)
    // Here you would typically send the updated data to your backend
    if(isSaving)return;
    console.log('Saving updated portfolio data:', updatedData)
    updatePortfolioMutation.mutate(JSON.stringify(updatedData));
  }

  if(isLoading){
    // TODO: Make a intutive loading component 
    return <div>Loading...</div>
  }

  if(error){
    // TODO: Make a intutive error component 
    return <div>Error: {error.message}</div>
  }

  return (
    (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
      <div className='flex justify-between'>

      <Button onClick={() => setIsEditable(!isEditable)} className="mb-4">
        {isEditable ? 'Switch to Preview' : 'Switch to Edit'}
      </Button>
      <Link to={`/portfolio/${link}`} target='_blank'>
      <Button  className="mb-4">
        <Web/> Live Preview
      </Button>
      </Link>
      </div>
      <PortfolioForm isEditable={isEditable} isSaving={isSaving} initialData={portfolioData} onSave={handleSave} />
    </div>)
  );
}

