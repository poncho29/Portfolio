"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onOpenChange: (open: boolean) => void;
}

export default function Modal({
  isOpen,
  title = "",
  description = "",
  children,
  onOpenChange
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="p-4 bg-transparent">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        { children }
      </DialogContent>
    </Dialog>
  )
}