import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "58e8c9d7790a7e",
      pass: "fb123dffcb7fb1"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData)  {
        await transport.sendMail({
            from: 'Equipe Feedget <eae@feedget.com>',
            to: 'Raphael Rodrigues <raphaelrcbarbosa@gmail.com>',
            subject,
            html: body,
        });
    
    }
}