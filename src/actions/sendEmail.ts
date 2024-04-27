// action/sendEmail.ts
'use server';
import { NextApiRequest, NextApiResponse } from 'next';
import { SES } from 'aws-sdk';
import { z } from 'zod'
 
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

export default async function send(props:any) {
 // State for the form fields
 console.debug("Entered Email Action Props");
 console.debug(props)

 const toEmail = "help@pursuitassistant.com"
    
    try {
      //Here need to write email sending functionality
      const resp = await ses.sendEmail(
        {
          Source: props.fromEmail,
          Destination: { ToAddresses: [props.toEmail] },
          Message: {
          Subject: { Data: 'Subject Line' },
          Body: { Text: { Data: `From: ${props.firstName} \n\n${props.message}` } }
        }
      }).promise();
  
      //setStatus('Email sent successfully!');
      console.debug("Email sent successfully");
      return (
        { message: "Success"}
      )

  } catch (error) {
    console.error('Error sending email:', error);
    return (
    { message: "Error"}
    //setStatus('Error sending email. Please try again.');
    )
  };
};
