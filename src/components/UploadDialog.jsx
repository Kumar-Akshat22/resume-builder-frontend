import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from 'react-hot-toast'

export default function UploadDialog({ isOpen, onClose, onUpload, isUploading, setIsUploading}) {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!file){
      toast.error("Please select a file to proceed")
      return;
    }
    if (title) {
      // Use a placeholder image URL if no file is selected
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file',file)
      onUpload(formData)
      setTitle('')
      setFile(null)
    }else{
      toast.error("Title is required")
    }
  }

  return (
    (<Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Asset</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file" className="text-right">
                Image
              </Label>
              <Input
                id="file"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{isUploading?"Uploading...":"Upload"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>)
  );
}

