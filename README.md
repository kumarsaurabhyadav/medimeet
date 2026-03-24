# 🏥 MediMeets - Telemedicine Platform

A comprehensive telemedicine platform built with Next.js that connects patients with verified healthcare providers through secure video consultations, appointment scheduling, and a flexible credit-based payment system.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Key Features Breakdown](#key-features-breakdown)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

MediMeets is a modern telemedicine platform that enables patients to:
- Browse and book appointments with verified doctors
- Conduct secure video consultations from anywhere
- Manage healthcare using a flexible credit system
- Access their appointment history and medical notes

For doctors, the platform provides:
- Professional profile management
- Availability scheduling system
- Earnings tracking and payout management
- Patient appointment management

## ✨ Features

### Patient Features
- 🔐 **Secure Authentication** via Clerk
- 👤 **User Onboarding** with role selection (Patient/Doctor)
- 🏥 **Doctor Directory** with specialty filtering
- 📅 **Appointment Booking** with real-time availability
- 🎥 **Video Consultations** powered by Vonage Video API
- 💳 **Credit System** with flexible subscription packages
- 📝 **Appointment History** with notes and details
- 📊 **Credit Management** and transaction history

### Doctor Features
- ✅ **Doctor Verification** system (Pending → Verified → Rejected)
- 📋 **Profile Management** with specialty, experience, and credentials
- 📅 **Availability Management** with customizable time slots
- 📊 **Appointments Dashboard** with patient information
- 💰 **Earnings Tracking** with monthly statistics
- 💸 **Payout System** with PayPal integration
- 📈 **Performance Analytics**

### Admin Features
- 👨‍⚕️ **Doctor Verification Management**
- ✅ **Verified Doctors List**
- 💵 **Payout Approval System**
- 👥 **User Management**

## 🛠 Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icons
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Next.js Server Actions** - Backend API
- **Prisma** - ORM for database management
- **PostgreSQL** - Database
- **Clerk** - Authentication & User Management
- **Vonage Video API** - Video conferencing

### Development Tools
- **Turbopack** - Fast bundler
- **ESLint** - Code linting
- **TypeScript/JavaScript** - Programming language

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** database (local or cloud)
- **Clerk Account** (for authentication)
- **Vonage Account** (for video calls)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medimeets
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables))

4. **Set up the database** (see [Database Setup](#database-setup))

5. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

6. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/medimeets?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Clerk Sign-in/Sign-up URLs (optional)
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/onboarding"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/onboarding"

# Vonage Video API
NEXT_PUBLIC_VONAGE_APPLICATION_ID="your-vonage-app-id"
VONAGE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"

# Node Environment
NODE_ENV="development"
```

### Getting API Keys

1. **Clerk**: Sign up at [clerk.com](https://clerk.com) and create a new application
2. **Vonage**: Sign up at [vonage.com](https://vonage.com) and create a Video API application
3. **PostgreSQL**: Use local PostgreSQL or a cloud service like [Supabase](https://supabase.com) or [Neon](https://neon.tech)

## 💾 Database Setup

1. **Create a PostgreSQL database**

   ```bash
   # Using psql
   createdb medimeets
   
   # Or use your database provider's console
   ```

2. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev
   ```

   This will:
   - Create all tables (User, Appointment, Availability, CreditTransaction, Payout)
   - Set up relationships and indexes
   - Create necessary enums

3. **Optional: Seed the database** (if seed script exists)

   ```bash
   npx prisma db seed
   ```

## ▶️ Running the Project

### Development Mode

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.0.101:3000 (your local IP)

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run linter
npm run lint

# View Prisma Studio (database GUI)
npx prisma studio
```

## 📁 Project Structure

```
medimeets/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/              # Sign-in page
│   │   └── sign-up/              # Sign-up page
│   ├── (main)/                   # Main application routes
│   │   ├── admin/                # Admin dashboard
│   │   │   └── _components/     # Admin components
│   │   ├── appointments/         # Patient appointments
│   │   ├── doctor/               # Doctor dashboard
│   │   │   ├── _components/     # Doctor components
│   │   │   └── verification/    # Doctor verification
│   │   ├── doctors/              # Doctor listing
│   │   │   └── [speciality]/    # Filtered by specialty
│   │   ├── onboarding/           # User onboarding
│   │   ├── pricing/             # Pricing page
│   │   └── video-call/          # Video call interface
│   ├── layout.js                 # Root layout
│   ├── page.jsx                  # Homepage
│   └── globals.css               # Global styles
├── actions/                      # Server actions
│   ├── admin.js                 # Admin actions
│   ├── appointments.js           # Appointment actions
│   ├── credits.js                # Credit system actions
│   ├── doctor.js                 # Doctor actions
│   ├── onboarding.js            # Onboarding actions
│   └── payout.js                # Payout actions
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── appointment-card.jsx     # Appointment display
│   ├── doctor-card.jsx         # Doctor profile card
│   ├── header.jsx               # Navigation header
│   └── pricing.jsx             # Pricing component
├── hooks/                       # Custom React hooks
│   └── use-fetch.jsx           # API call hook
├── lib/                         # Utilities and config
│   ├── prisma.js               # Prisma client
│   ├── schema.js               # Zod schemas
│   ├── specialities.js        # Medical specialties list
│   ├── data.js                # Static data
│   └── generated/             # Generated Prisma client
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/           # Database migrations
├── public/                    # Static assets
├── middleware.js             # Next.js middleware
├── next.config.mjs          # Next.js config
├── package.json            # Dependencies
└── README.md              # This file
```

## 🔑 Key Features Breakdown

### 1. User Onboarding

When a new user signs up, they must choose their role:
- **Patient**: Direct access to doctor directory
- **Doctor**: Must complete profile with:
  - Medical specialty
  - Years of experience
  - Credential document URL
  - Professional description
  - Verification status set to `PENDING`

### 2. Credit System

- **Credit Packages**: Flexible subscription packages via Clerk Billing
- **Consumption**: Each appointment costs **2 credits**
- **Earnings**: Doctors earn **$8 per credit** (after $2 platform fee)
- **Tracking**: Complete transaction history for all users

### 3. Appointment Booking

1. Patient browses doctors by specialty
2. Views doctor profile and availability
3. Selects available time slot
4. Books appointment (credits deducted)
5. Receives confirmation with video call details

### 4. Video Consultations

- Powered by **Vonage Video API**
- Secure, encrypted video calls
- Session management with tokens
- Automatic session creation on appointment booking

### 5. Doctor Verification

1. Doctor submits profile → Status: `PENDING`
2. Admin reviews credentials → Status: `VERIFIED` or `REJECTED`
3. Only verified doctors can:
   - Set availability
   - Accept appointments
   - Earn credits

### 6. Payout System

- Doctors can request payouts for available credits
- **Platform Fee**: $2 per credit (20%)
- **Doctor Earnings**: $8 per credit (80%)
- Admin approval required
- PayPal integration for payments

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**

2. **Import project in Vercel**
   - Connect your repository
   - Add environment variables
   - Deploy

3. **Set up PostgreSQL**
   - Use Vercel Postgres or external service
   - Update `DATABASE_URL`

4. **Configure environment variables** in Vercel dashboard

### Other Platforms

The application can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 🧪 Testing

```bash
# Run linter
npm run lint

# Check Prisma schema
npx prisma validate

# Format code (if configured)
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Notes

- **Database**: Ensure PostgreSQL is running and accessible
- **Clerk**: Configure redirect URLs in Clerk dashboard
- **Vonage**: Set up webhooks for video session management
- **Prisma**: Remember to generate client after schema changes (`npx prisma generate`)

## 🐛 Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check `DATABASE_URL` format
   - Ensure PostgreSQL is running
   - Verify database exists

2. **Clerk authentication errors**
   - Verify API keys are correct
   - Check redirect URLs in Clerk dashboard
   - Ensure middleware is properly configured

3. **Prisma client errors**
   - Run `npx prisma generate`
   - Check if migrations are up to date

4. **Vonage video errors**
   - Verify application ID and private key
   - Check API quota/limits

## 📄 License

This project is private and proprietary.

## 👥 Support

For support, email support@medimeets.com or create an issue in the repository.

---

**Made with ❤️ for better healthcare accessibility**
