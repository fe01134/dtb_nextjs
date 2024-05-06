// actions/sendEmail.ts
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sendSes } from '../lib/utils/email';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function send(prevState:any, formData) {
  // Validate form values.  Set State for the form fields

  if (
    isInvalidText(formData.get('firstName')) ||
    isInvalidText(formData.get('fromEmail')) ||
    isInvalidText(formData.get('message')) ||
    isInvalidText(formData.get('lastName'))
    ) {
      prevState = {
        message:('Invalid input'),
      };
  
    return {
      prevState, formData
    };
  };
 
 
  try{
    let response =  await sendSes(formData).then(response => {
        prevState = response;
        console.debug("response sendEmail Action");
        console.debug(response);
        console.debug("Email sent successfully or unsucess:");

        return {
          message: 'success',
        }
      });
    
    revalidatePath('/contact');
    console.debug("RevalidatePath1");
    //redirect('/contact');
  } catch (e) {
      console.debug(e);
      return {
        message: 'failed',
      }
  } finally {
    console.log("Email send attempt finished.");
    return {
      message: 'success',
    }
}




};