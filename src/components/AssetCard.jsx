import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

export default function AssetCard({ asset, onDelete }) {
  const [imageLoaded, setImageLoaded] = useState(false)


  const handleCopy = () => {
    navigator.clipboard.writeText(asset.url).then(() => {
      toast.success("Copied!")
    }).catch((err) => {
      console.error('Failed to copy: ', err)
      toast({
        title: "Error",
        description: "Failed to copy image link",
        variant: "destructive",
      })
    })
  }

  return (
    (<Card>
      <CardHeader>
        <CardTitle>{asset.title || asset.filename}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-48 bg-muted rounded-md overflow-hidden relative">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={asset.url}
            alt={asset.title}
            className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Created on {format(new Date(asset.createdAt), 'MMM d, yyyy')}
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => onDelete(asset._id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>)
  );
}

