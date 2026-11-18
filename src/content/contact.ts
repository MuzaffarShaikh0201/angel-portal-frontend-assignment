import { image } from '../lib/asset';
import type { ContactCard, FormFieldCopy, SectionCopy } from '../types/content';
import { email, officeHours, phone } from './site';

/**
 * Contact page content. Verbatim visible copy from ascenciamalta.edu.mt/contact,
 * including the form's validation and success messages from the original page script.
 */

export const contactBanner: SectionCopy = { title: 'Contact us' };

export type ContactField = 'name' | 'email' | 'phone' | 'message';

export const contactForm = {
  title: 'Send us a message 👍🏻',
  intro:
    'For any question related to our campus, our programmes or any other subject concerning Ascencia Malta, please fill in the form below. Our teams will get back to you as soon as possible.',
  fields: {
    name: { label: 'Full Name', placeholder: 'Goladra Gomaz' },
    email: { label: 'Your Email', placeholder: 'info@ascenciamalta.mt' },
    phone: { label: 'Your Phone', placeholder: '+8250-3560 6565' },
    message: { label: 'Message', placeholder: 'How can we help you?' },
  } satisfies Record<ContactField, FormFieldCopy>,
  submit: 'Send Message',
  success: {
    title: 'Successfully Send',
    text: 'We will Contact you Soon!!!',
    dismiss: 'OK',
  },
};

/** Validation messages, in the order the checks run (first failure wins). */
export const contactFormErrors = {
  nameRequired: 'Please enter your name',
  emailRequired: 'Please enter email id',
  emailInvalid: 'Email id e.g abc@gmail.com',
  phoneRequired: 'Please Provide Contact No.',
  phoneTooShort: 'mobile number should be at least 6 digits',
  phoneTooLong: 'mobile number should not exceed 15 digits',
  messageRequired: 'Please enter message',
} as const;

/** Google Maps embed beside the form, the same query the original uses. */
export const contactMap = {
  src: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Ascencia%20Malta&t=&z=14&ie=UTF8&iwloc=B&output=embed',
  title: 'Ascencia Malta on Google Maps',
};

export const contactInfoHeading: SectionCopy = { title: 'Let us know how we can help' };

/** Icons are decorative (the card title says what each one is), so their alt is empty. */
export const contactCards: ContactCard[] = [
  {
    title: 'Call Us On',
    text: officeHours,
    value: phone.label,
    href: phone.href,
    icon: image('icon/call-calling.svg', '', 32, 32),
  },
  {
    title: 'Email Us',
    text: 'Speak to our Friendly team.',
    value: email.label,
    href: email.href,
    icon: image('icon/sms-edit.svg', '', 32, 32),
  },
  {
    title: 'Our Location',
    text: 'Visit our Ascencia Malta.',
    value: '23 Vincenzo Dimech Rd Floriana, FRN 1502, Malta',
    icon: image('icon/location-add.svg', '', 32, 32),
  },
];
