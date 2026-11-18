import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '../../../components/ui/Button';
import { contactForm, type ContactField } from '../../../content/contact';
import {
  validateContactForm,
  type ContactFormError,
  type ContactFormValues,
} from '../validateContactForm';
import SuccessDialog from './SuccessDialog';
import styles from './ContactForm.module.css';

const EMPTY_VALUES: ContactFormValues = { name: '', email: '', phone: '', message: '' };

const FIELD_TYPES: Record<Exclude<ContactField, 'message'>, string> = {
  name: 'text',
  email: 'email',
  phone: 'tel',
};

const AUTOCOMPLETE: Record<ContactField, string> = {
  name: 'name',
  email: 'email',
  phone: 'tel',
  message: 'off',
};

function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [error, setError] = useState<ContactFormError | null>(null);
  const [isSent, setIsSent] = useState(false);
  const fieldRefs = useRef<Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement>>>(
    {},
  );

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = event.target.name as ContactField;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (error?.field === field) setError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const problem = validateContactForm(values);
    setError(problem);

    if (problem) {
      fieldRefs.current[problem.field]?.focus();
      return;
    }

    setValues(EMPTY_VALUES);
    setIsSent(true);
  }

  function renderField(field: ContactField) {
    const { label, placeholder } = contactForm.fields[field];
    const id = `contact-${field}`;
    const errorId = `${id}-error`;
    const hasError = error?.field === field;
    const shared = {
      id,
      name: field,
      value: values[field],
      placeholder,
      autoComplete: AUTOCOMPLETE[field],
      onChange: handleChange,
      className: styles.control,
      'aria-invalid': hasError || undefined,
      'aria-describedby': hasError ? errorId : undefined,
    };

    return (
      <div
        className={`${styles.field} ${field === 'name' || field === 'email' ? styles.half : ''}`}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {field === 'message' ? (
          <textarea
            {...shared}
            rows={5}
            ref={(node) => {
              fieldRefs.current[field] = node ?? undefined;
            }}
          />
        ) : (
          <input
            {...shared}
            type={FIELD_TYPES[field]}
            ref={(node) => {
              fieldRefs.current[field] = node ?? undefined;
            }}
          />
        )}
        {hasError && (
          <p id={errorId} className={styles.error}>
            {error.message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h2 id="contact-form-title" className={styles.title}>
        {contactForm.title}
      </h2>
      <p>{contactForm.intro}</p>

      <form
        className={styles.form}
        aria-labelledby="contact-form-title"
        noValidate
        onSubmit={handleSubmit}
      >
        {renderField('name')}
        {renderField('email')}
        {renderField('phone')}
        {renderField('message')}
        <div className={styles.actions}>
          <Button type="submit">
            {contactForm.submit}
            <SendIcon />
          </Button>
        </div>
      </form>

      <SuccessDialog open={isSent} onClose={() => setIsSent(false)} />
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
      <path d="M13.0364 2.63798C11.6702 1.79536 10.0512 1.33203 8.37891 1.33203C3.82654 1.33203 0 4.72368 0 9.06641C0 10.589 0.473 12.0486 1.37148 13.3092L0.116359 17.2497C-0.0162422 17.6659 0.295539 18.0898 0.730598 18.0898C0.83007 18.0898 0.930188 18.0669 1.02257 18.0198L4.83957 16.0791C4.99413 16.1456 5.15062 16.2076 5.3087 16.265C4.42496 14.8857 3.95312 13.3023 3.95312 11.6445C3.95312 6.70755 8.10726 2.91208 13.0364 2.63798Z" />
      <path d="M20.6285 15.8873C21.527 14.6267 22 13.1671 22 11.6445C22 7.30022 18.1718 3.91016 13.6211 3.91016C9.06873 3.91016 5.24219 7.30181 5.24219 11.6445C5.24219 15.9888 9.07036 19.3789 13.6211 19.3789C14.8421 19.3789 16.0588 19.1301 17.1602 18.6571L20.9774 20.598C21.2091 20.7157 21.4889 20.6829 21.6869 20.5146C21.885 20.3463 21.9626 20.0755 21.8837 19.8278L20.6285 15.8873ZM11 12.2891C10.644 12.2891 10.3555 12.0005 10.3555 11.6445C10.3555 11.2886 10.644 11 11 11C11.356 11 11.6445 11.2886 11.6445 11.6445C11.6445 12.0005 11.356 12.2891 11 12.2891ZM13.5781 12.2891C13.2222 12.2891 12.9336 12.0005 12.9336 11.6445C12.9336 11.2886 13.2222 11 13.5781 11C13.9341 11 14.2227 11.2886 14.2227 11.6445C14.2227 12.0005 13.9341 12.2891 13.5781 12.2891ZM16.1562 12.2891C15.8003 12.2891 15.5117 12.0005 15.5117 11.6445C15.5117 11.2886 15.8003 11 16.1562 11C16.5122 11 16.8008 11.2886 16.8008 11.6445C16.8008 12.0005 16.5122 12.2891 16.1562 12.2891Z" />
    </svg>
  );
}

export default ContactForm;
