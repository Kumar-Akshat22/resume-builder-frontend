import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Grid, List } from 'lucide-react'
import AssetCard from './AssetCard'
import AssetTile from './AssetTile'
import UploadDialog from './UploadDialog'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteAsset, getAssets, uploadAssets } from '@/services/assetsService'
import toast from 'react-hot-toast'

export default function Assets() {
  const [viewMode, setViewMode] = useState('card')
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const {data:assets} = useQuery({
    queryKey: 'assets',
    queryFn: () => getAssets()
  })
  const handleAddAsset = (newAsset) => {
    setIsUploadDialogOpen(false)
  }
  const deleteAssetMutation = useMutation({
    mutationFn: (id)=>deleteAsset(id),
    onSuccess: ()=>{
      toast.success("Asset deleted successfully")
      queryClient.invalidateQueries('assets')
    },
    onError: (error) => {
      toast.error(`Failed to delete asset: ${error.message}`)
    }
  })
  const handleDeleteAsset = (id) => {
    deleteAssetMutation.mutate(id);
  }

  const queryClient = useQueryClient();
  const uploadAssetMutation = useMutation({
    mutationFn: (newAsset)=>uploadAssets(newAsset),
    onSuccess: ()=>{
      toast.success("File successfully uploaded")
      setIsUploadDialogOpen(false)
      setIsUploading(false)
      queryClient.invalidateQueries('assets')
    },
    onError: (error) => {
      toast.error(`Failed to upload file: ${error.message}`)
    }
  })

  return (
    (<div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Assets</h1>
        <div className="flex space-x-2">
          <Button
            onClick={() => setViewMode('card')}
            variant={viewMode === 'card' ? 'default' : 'outline'}>
            <Grid className="w-4 h-4 mr-2" />
            Card
          </Button>
          <Button
            onClick={() => setViewMode('tile')}
            variant={viewMode === 'tile' ? 'default' : 'outline'}>
            <List className="w-4 h-4 mr-2" />
            Tile
          </Button>
          <Button onClick={() => setIsUploadDialogOpen(true)}>Upload Asset</Button>
        </div>
      </div>
      <Card>
        <CardContent className="p-6">
          {viewMode === 'card' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(assets) && assets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} onDelete={handleDeleteAsset} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {Array.isArray(assets) && assets.map((asset) => (
                <AssetTile key={asset._id} asset={asset} onDelete={handleDeleteAsset} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      <UploadDialog
        isUploading={isUploading}
        setIsUploading={setIsUploading}
        isOpen={isUploadDialogOpen}
        onClose={() => setIsUploadDialogOpen(false)}
        onUpload={(file)=>{setIsUploading(true);uploadAssetMutation.mutate(file)}} />
    </div>)
  );
}

