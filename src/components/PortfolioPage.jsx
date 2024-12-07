import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PortfolioForm from './PortfolioForm'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { getAuthorizedPortfolio, updatePortfolio } from '@/services/portfolioService'
import toast from 'react-hot-toast'



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
      <Button onClick={() => setIsEditable(!isEditable)} className="mb-4">
        {isEditable ? 'Switch to Preview' : 'Switch to Edit'}
      </Button>
      <PortfolioForm isEditable={isEditable} isSaving={isSaving} initialData={portfolioData} onSave={handleSave} />
    </div>)
  );
}

