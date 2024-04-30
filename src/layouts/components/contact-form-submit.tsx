'use client';

import { useFormStatus } from 'react-dom';

export default function ContactFormSubmit() {
  const { pending } = useFormStatus();

  return (

    <button disabled={pending} className="btn btn-primary">
      {pending ? 'Submitting...' : 'Contact Us'}
    </button>
  );
}