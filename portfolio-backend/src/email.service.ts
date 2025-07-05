import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendContactEmail(contactData: ContactFormData): Promise<void> {
    const { name, email, message } = contactData;

    try {
      // Send email to you (portfolio owner)
      await this.mailerService.sendMail({
        to: 'thanujadha20@gmail.com', // Your email address
        from: 'thanujadha20@gmail.com', // Your email address
        subject: `New Contact Form Message from ${name}`,
        template: 'contact-form',
        context: {
          name,
          email,
          message,
          date: new Date().toLocaleString(),
        },
      });

      // Send confirmation email to the sender
      await this.mailerService.sendMail({
        to: email,
        from: 'thanujadha20@gmail.com',
        subject: 'Thank you for contacting Thanuja Wickramasinghe',
        template: 'contact-confirmation',
        context: {
          name,
          date: new Date().toLocaleString(),
        },
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
} 