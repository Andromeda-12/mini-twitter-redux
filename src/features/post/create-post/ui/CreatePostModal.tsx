import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui';
import { CreatePostForm } from './CreatePostForm';

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreatePostModal = ({ isOpen, onOpenChange }: ModalProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Добавить пост</DialogTitle>
      </DialogHeader>

      <CreatePostForm onClose={() => onOpenChange(false)} />
    </DialogContent>
  </Dialog>
);
