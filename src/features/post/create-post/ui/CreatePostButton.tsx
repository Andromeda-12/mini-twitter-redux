import { useState } from 'react';
import { Button } from '@/shared/ui';
import { CreatePostModal } from './CreatePostModal';

export const CreatePostButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <CreatePostModal
          isOpen={isOpen}
          onOpenChange={() => setIsOpen(false)}
        />
      )}

      <Button onClick={() => setIsOpen(true)}>Создать пост</Button>
    </>
  );
};
