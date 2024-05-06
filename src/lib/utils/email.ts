import { SES } from 'aws-sdk';

export async function sendSes(formData) {

    const fromEmail = "help@pursuitassistant.com"
    const toEmail = "carlosyells@yahoo.com"
    // Set the SES API key
    console.debug(process.env.AWS_ACCESS_KEY)
    console.debug(process.env.AWS_SECRET_ACCESS_KEY)

    const ses = new SES({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
        console.debug("Email sent successfully, message ID:", response.MessageId);
        let status:boolean = true;
        return (status );            
    })
    .catch(error => {
        console.error('Error sending email:', error);
        let status:boolean = false;
        return (status) ;
    });
  }