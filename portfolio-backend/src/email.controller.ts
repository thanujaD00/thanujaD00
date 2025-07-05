import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { EmailService, ContactFormData } from './email.service';

@Controller('contact')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendContactEmail(@Body() contactData: ContactFormData) {
    try {
      // Validate the input data
      if (!contactData.name || !contactData.email || !contactData.message) {
        throw new HttpException(
          'Name, email, and message are required',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        throw new HttpException(
          'Please provide a valid email address',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Send the email
      await this.emailService.sendContactEmail(contactData);

      return {
        success: true,
        message: 'Email sent successfully!',
      };
    } catch (error) {
      console.error('Error in email controller:', error);
      
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        'Failed to send email. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
} 