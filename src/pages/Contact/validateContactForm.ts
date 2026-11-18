import { contactFormErrors, type ContactField } from '../../content/contact';

export type ContactFormValues = Record<ContactField, string>;

export type ContactFormError = {
  field: ContactField;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_MIN_DIGITS = 6;
const PHONE_MAX_DIGITS = 15;

/**
 * Checks the fields top to bottom and returns the first problem, or null when the form is valid.
 * One error at a time, with the same messages as the original form. Two fixes over the original
 * script: an empty phone gets "Please Provide Contact No." (the original checked length first, so
 * that message never showed), and the phone limits count digits, as the messages say, so
 * spaces, "+" and "-" don't count towards them.
 */
export function validateContactForm(values: ContactFormValues): ContactFormError | null {
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const phoneDigits = phone.replace(/\D/g, '').length;
  const message = values.message.trim();

  if (!name) return { field: 'name', message: contactFormErrors.nameRequired };
  if (!email) return { field: 'email', message: contactFormErrors.emailRequired };
  if (!EMAIL_PATTERN.test(email)) {
    return { field: 'email', message: contactFormErrors.emailInvalid };
  }
  if (!phone) return { field: 'phone', message: contactFormErrors.phoneRequired };
  if (phoneDigits < PHONE_MIN_DIGITS) {
    return { field: 'phone', message: contactFormErrors.phoneTooShort };
  }
  if (phoneDigits > PHONE_MAX_DIGITS) {
    return { field: 'phone', message: contactFormErrors.phoneTooLong };
  }
  if (!message) return { field: 'message', message: contactFormErrors.messageRequired };

  return null;
}
