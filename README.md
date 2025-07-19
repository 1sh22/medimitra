# MediMitra

MediMitra is a full-stack doctor appointment platform that enables patients to connect with verified doctors, book appointments, and consult via secure video calls. The platform is built with Next.js, Prisma, Neon, Clerk, and Vonage, and features a modern, responsive UI.

## Features

- Patient and doctor onboarding with role-based access
- Doctor verification and profile management
- Secure authentication using Clerk
- Book, view, and manage appointments
- Doctor availability scheduling
- Video consultations powered by Vonage
- Credit-based appointment system
- Admin dashboard for verification and payouts
- Responsive design with Tailwind CSS

## Tech Stack

- Next.js (App Router)
- Prisma ORM
- PostgreSQL (Neon)
- Clerk (Authentication)
- Vonage (Video API)
- Tailwind CSS
- React Hook Form & Zod (Validation)
- Shadcn UI

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- PostgreSQL database (Neon or local)
- Clerk account (for authentication)
- Vonage Video API credentials

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR-USERNAME/medimitra.git
   cd medimitra
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` (or create `.env.local`).
   - Fill in your database, Clerk, and Vonage credentials.

   Example:
   ```
   DATABASE_URL=your_postgres_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_app_id
   VONAGE_PRIVATE_KEY=path_to_your_vonage_private_key
   ```

4. **Run database migrations:**
   ```sh
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

6. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app directory (pages, layouts, API routes)
- `/components` - Reusable UI components
- `/actions` - Server actions for business logic
- `/prisma` - Prisma schema and migrations
- `/lib` - Utility functions and Prisma client
- `/public` - Static assets

## Customization

- Update the branding, colors, and content in `/components` and `/app`.
- Adjust the Prisma schema in `/prisma/schema.prisma` as needed.
- Add or modify environment variables in `.env.local`.

