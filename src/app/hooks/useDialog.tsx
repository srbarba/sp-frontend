import { useState } from 'react';

export const useDialog = () => {
  const [dialog, setDialog] = useState({
    title: 'Default Title',
    message: 'default Message',
    show: false
  });

  const handleClose = () => {
    setDialog({ show: false, title: dialog.title, message: dialog.message });
  };

  return { setDialog, ...dialog, handleClose };
};
