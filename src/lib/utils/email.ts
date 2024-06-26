import { SES } from 'aws-sdk';

export async function sendSes(formData) {

    const fromEmail = "help@pursuitassistant.com"
    const toEmail = "carlosyells@yahoo.com"
    // Set the SES API key
    console.debug("debugging keys again");
    console.debug(process.env.NEXT_PUBLIC_AWS_ACCESS_KEY);
    console.debug(process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY);

    console.debug("formData");
    console.debug(formData);

    const ses = new SES({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1' // e.g., 'us-east-1'
    });

    //@param onfulfilled — The callback to execute when the Promise is resolved.
    //@param onrejected — The callback to execute when the Promise is rejected.

    //Call AWS SES email service.
    const response = ses.sendEmail(
        {
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        Message: {
        Subject: { Data: 'Test Email from' },
        Body: { Text: { Data: `From: ${formData.get('firstName')} \n\n${formData.get('message')}` } }
        }
    }).promise().then(response => {
        console.debug("Email promise");
        console.debug(response);
        console.debug("Email sent successfully, message ID:", response.MessageId);
        return ({
            message: 'success',
          } );            
    })
    .catch(error => {
        console.error('Error sending email:', error);  
        return ({
            message: 'error',
          }) ;
    });
  }