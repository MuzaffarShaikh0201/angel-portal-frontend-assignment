import { useEffect, useRef } from 'react';
import Button from '../../../components/ui/Button';
import { contactForm } from '../../../content/contact';
import styles from './SuccessDialog.module.css';

type SuccessDialogProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * "Successfully Send" popup shown after a valid submit.
 * A native modal <dialog>: it traps focus, closes on Escape and returns focus to the
 * submit button, with no extra code.
 */
function SuccessDialog({ open, onClose }: SuccessDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { title, text, dismiss } = contactForm.success;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="success-title"
      aria-describedby="success-text"
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the <dialog> itself, not its content.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.content}>
        <span className={styles.icon} aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 id="success-title" className={styles.title}>
          {title}
        </h2>
        <p id="success-text">{text}</p>
        <Button onClick={onClose} autoFocus>
          {dismiss}
        </Button>
      </div>
    </dialog>
  );
}

export default SuccessDialog;
