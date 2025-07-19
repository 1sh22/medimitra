# MediMitra

MediMitra is a full-stack doctor appointment platform that enables patients to connect with verified doctors, book appointments, and consult via secure video calls. The platform is built with Next.js, Prisma, Neon, Clerk, and Vonage, and features a modern, responsive UI.

<img width="1440" height="711" alt="Screenshot 2025-07-19 at 6 48 14 PM" src="https://github.com/user-attachments/assets/d9b0e3c3-232f-4151-91f6-8a96f9e2c286" />



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

<img width="1440" height="691" alt="Screenshot 2025-07-19 at 6 48 55 PM" src="https://github.com/user-attachments/assets/5f2770ee-6c07-4de6-b821-ab0f3308b2bd" />


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



<img width="1438" height="677" alt="Screenshot 2025-07-19 at 6 49 34 PM" src="https://github.com/user-attachments/assets/d7802380-a566-4e65-9a46-438152deede2" />
<img width="1440" height="667" alt="Screenshot 2025-07-19 at 6 50 56 PM" src="https://github.com/user-attachments/assets/5a51b709-e134-48cd-8879-a0329bd861f8" />
