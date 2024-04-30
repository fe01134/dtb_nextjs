// action/sendEmail.ts
'use server';
import { NextApiRequest, NextApiResponse } from 'next';
import { SES } from 'aws-sdk';
import { z } from 'zod'

import { redirect } from 'next/navigation';
 
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

export async function send(props:any) {
  // State for the form fields
  console.debug("Entered Email Action Props");
  //console.debug(props)
  const fromEmail = "help@pursuitassistant.com"
  const toEmail = "carlosyells@yahoo.com"

  console.debug("Props ToEmail", props.get('toEmail') );
  console.debug("firstName", props.get('firstName'));
  console.debug("fromEmail", fromEmail);
  console.debug("to Email", toEmail);
  console.debug("message", props.get('message')); 
  console.debug("messlastNameage", props.get('lastName'));   

  //console.debug("before sending to email service");
  //console.debug(rawFormData);
    
    try {
      //Here need to write email sending functionality
      const resp = await ses.sendEmail(
        {
          Source: fromEmail,
          Destination: { ToAddresses: [toEmail] },
          Message: {
          Subject: { Data: 'Test Email from' },
          Body: { Text: { Data: `From: ${props.get('firstName')} \n\n${props.get('message')}` } }
        }
      }).promise();
  
      //setStatus('Email sent successfully!');
      console.debug("Email sent successfully");
      
      redirect('/success');

  } catch (error) {
    console.error('Error sending email:', error);
    redirect('/contact');
    //setStatus('Error sending email. Please try again.');
  };
};
