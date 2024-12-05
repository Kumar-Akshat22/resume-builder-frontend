import React from 'react'

function UploadModal({isOpen , onClose , children}) {
    if(!isOpen){

        return null
    }
  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <div
          className="relative z-50 w-full max-w-md mx-auto"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default UploadModal