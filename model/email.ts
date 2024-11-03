// model/place.ts
class Email {
    private firstName : string;
    private lastName : string;
    private fromEmail : string;
    private message : string;
  
    constructor(firstName : string, lastName: string, fromEmail: string, message: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fromEmail = fromEmail;
      this.message = message;
    }
  
    get_firstName(): string {
      return this.firstName;
    }
  
    get_lastName(): string {
      return this.lastName;
    }
  
    get_fromEmail(): string {
      return this.fromEmail;
    }
  
    get_Message(): string {
      return this.message;
    }
   
    static createEmail(firstName: string, lastName: string, fromEmail: string, message: string): Email {
      return new Email(firstName, lastName, fromEmail, message);
    }
    
  };
  
  export default Email ;
    