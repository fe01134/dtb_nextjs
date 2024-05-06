import { SESClient } from "@aws-sdk/client-ses";

// Set the SES API key
console.debug("debugging keys again");
console.debug(process.env.NEXT_PUBLIC_AWS_ACCESS_KEY);
console.debug(process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY);


// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = new SESClient({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: REGION 
    });
export { sesClient };
