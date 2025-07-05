# Thanuja Wickramasinghe - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark futuristic theme with interactive elements and a contact form connected to a NestJS backend.

## Features

- 🎨 **Modern Design**: Dark futuristic theme with orange and purple gradients
- 📱 **Responsive**: Works perfectly on all devices
- ✨ **Interactive**: Custom cursor effects and smooth animations
- 📧 **Contact Form**: Connected to NestJS backend for email functionality
- 🚀 **Performance**: Optimized with Next.js and TypeScript

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: NestJS with Nodemailer
- **Email**: Gmail SMTP with Handlebars templates

## Getting Started

### Frontend (Portfolio Website)

```bash
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Backend (Email Service)

```bash
cd portfolio-backend
npm install
npm run start:dev
```

The backend runs on [http://localhost:3001](http://localhost:3001).

## Project Structure

```
thanujaD00/
├── my-portfolio/          # Frontend (Next.js)
│   ├── app/              # App router pages
│   ├── public/           # Static assets
│   └── components/       # React components
└── portfolio-backend/     # Backend (NestJS)
    ├── src/              # Source code
    ├── templates/        # Email templates
    └── dist/             # Compiled code
```

## Contact Form

The contact form sends emails to:
- **Admin Email**: thanujadha20@gmail.com (you receive the message)
- **Confirmation Email**: Sender receives a thank you message

## Customization

- Update personal information in the components
- Modify colors in `globals.css`
- Change email templates in `portfolio-backend/src/templates/`
- Update environment variables in `.env`

## Deployment

- **Frontend**: Deploy to Vercel, Netlify, or any static hosting
- **Backend**: Deploy to Railway, Heroku, or any Node.js hosting

## Author

**Thanuja Wickramasinghe** - Software Engineer & Full-Stack Developer
- Email: thanujadha20@gmail.com
- Location: Kandy, Sri Lanka
