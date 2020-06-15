import styles from './ErrorPopup.module.scss';
import React, { useState, useEffect } from 'react';
import { ErrorRequest } from '../../types/types';

interface ErrorPopupProps {
  error: ErrorRequest | null;
  onClose: () => void;
}

export default function ErrorPopup(props: ErrorPopupProps): JSX.Element {
  const { error, onClose } = props;
  const [visible, setVisible] = useState(!!error);

  const visibleStyles = visible ? styles.visible : '';
  const popupStyles = [styles.popup, visibleStyles].join(' ');

  function hidePopup(): void {
    console.log('hhhhh');
    setVisible(false);
    onClose();
  }

  useEffect(() => {
    if (!error) return;
    setVisible(true);
  }, [error]);

  return (
    <div className={popupStyles}>
      <button className={styles.close} onClick={hidePopup}>✕</button>
      <p>{error?.message}</p>
    </div>
  );
}