// action/sendEmail.ts
'use server';
import { SES } from 'aws-sdk';
import { z } from 'zod'

import { redirect } from 'next/navigation';
 
function isInvalidText(text) {
  return !text || text.trim() === '';
}

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})

// Set the SES API key
console.debug(process.env.AWS_ACCESS_KEY)
console.debug(process.env.AWS_SECRET_ACCESS_KEY)

const ses = new SES({
accessKeyId: process.env.AWS_ACCESS_KEY,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
region: 'us-east-1' // e.g., 'us-east-1'
});

export async function send(prevState, formData) {
  // State for the form fields
  console.debug("Entered Email Action Props");
  //console.debug(props)
  const fromEmail = "help@pursuitassistant.com"
  const toEmail = "carlosyells@yahoo.com"

  console.debug("Props ToEmail", formData.get('firstName') );
  console.debug("firstName", formData.get('firstName'));
  console.debug("fromEmail", fromEmail);
  console.debug("to Email", toEmail);
  console.debug("message", formData.get('message')); 
  console.debug("messlastNameage", formData.get('lastName'));   

  //console.debug("before sending to email service");
  //console.debug(rawFormData);

  if (
    isInvalidText(formData.get('firstName')) ||
    isInvalidText(formData.get('fromEmail')) ||
    isInvalidText(formData.get('message')) ||
    isInvalidText(formData.get('lastName'))
    )
    return 
    {
      message:('Invalid input');
    }
    
    try {
      //Here need to write email sending functionality
      const resp = await ses.sendEmail(
        {
          Source: fromEmail,
          Destination: { ToAddresses: [toEmail] },
          Message: {
          Subject: { Data: 'Test Email from' },
          Body: { Text: { Data: `From: ${formData.get('firstName')} \n\n${formData.get('message')}` } }
        }
      }).promise();
  
      //setStatus('Email sent successfully!');
      console.debug("Email sent successfully");
      
      redirect('/contact/success');

  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
    redirect('/contact');
    //setStatus('Error sending email. Please try again.');
  };
};
