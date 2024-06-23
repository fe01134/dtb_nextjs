import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient";

// Reference SES v3
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-sending-email.html
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/migrating.html#using_v3_commands

export async function sendSes(formData) {

    const fromAddress = "help@pursuitassistant.com";
    const toAddress = "carlosyells@yahoo.com";

    const createSendEmailCommand = (toAddress, fromAddress) => {
      return new SendEmailCommand({
        Destination: {
          /* required */
          CcAddresses: [
            /* more items */
          ],
          ToAddresses: [
            toAddress,
            /* more To-email addresses */
          ],
        },
        Message: {
          /* required */
          Body: {
            /* required */
            Html: {
              Charset: "UTF-8",
              Data: "HTML_FORMAT_BODY",
            },
            Text: {
              Charset: "UTF-8",
              Data: "TEXT_FORMAT_BODY",
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "EMAIL_SUBJECT",
          },
        },
        Source: fromAddress,
        ReplyToAddresses: [
            toAddress
        ],
      });
    };
    
    const run = async () => {
      const sendEmailCommand = createSendEmailCommand(
        toAddress,
        fromAddress,
      );
    
      try {
        return await sesClient.send(sendEmailCommand);
      } catch (caught) {
        if (caught instanceof Error && caught.name === "MessageRejected") {
          /** @type { import('@aws-sdk/client-ses').MessageRejected} */
          const messageRejectedError = caught;
          console.error('Error sending email:', messageRejectedError);
          return ({
            message: 'error',
          });
        }
        throw caught;
      }
    };
}