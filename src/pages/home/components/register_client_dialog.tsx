import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import RegisterClientForm from './register_client_form'


interface RegisterClientDialogProps {
  open: boolean
  onOpenChange: () => void
}

function RegisterClientDialog({ open, onOpenChange }: RegisterClientDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register a new Client</DialogTitle>
        </DialogHeader>
        <RegisterClientForm onOpenChange={onOpenChange}/>
      </DialogContent>
    </Dialog>

  )
}

export default RegisterClientDialog