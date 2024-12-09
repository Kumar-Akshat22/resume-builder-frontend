import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Copy, Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import toast from 'react-hot-toast'

export default function AssetTile({ asset, onDelete }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(asset.url).then(() => {
      toast.success("Copied!")
    }).catch((err) => {
      console.error('Failed to copy: ', err)
      toast.error("Failed to copy image link")
    })
  }

  return (
    (<div
      className="flex items-center justify-between p-4 bg-card rounded-lg shadow">
      <div>
        <h3 className="font-semibold">{asset.title || asset.filename}</h3>
        <p className="text-sm text-muted-foreground">
          Created on {format(new Date(asset.createdAt), 'MMM d, yyyy')}
        </p>
      </div>
      <div className="flex space-x-2">
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">
              Preview
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div
              className="w-full h-auto max-h-[80vh] bg-muted rounded-md overflow-hidden relative">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-12 h-36 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={asset.url}
                alt={asset.title}
                className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy" />
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="outline" size="icon" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy image link</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => onDelete(asset._id)}>
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete asset</span>
        </Button>
      </div>
    </div>)
  );
}

