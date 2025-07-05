import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

const templateDir = join(__dirname, '..', 'src', 'templates');
console.log('Template directory path:', templateDir);

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for 587
        auth: {
          user: process.env.GMAIL_ADDRESS || 'thanujadha20@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD || 'aimy pgfb bfuh rkhr',
        },
      },
      defaults: {
        from: '"Thanuja Portfolio" <thanujadha20@gmail.com>',
      },
      template: {
        dir: templateDir,
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
