import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function SignOut() {
  return (
    <div>
      <Button>Sign Out</Button>
      <Dialog>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Signing Out</DialogTitle>
            <DialogDescription>
              Please wait while we securely sign you out...
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center p-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignOut;
