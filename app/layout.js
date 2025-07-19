import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediMitra: Connect with Doctors",
  description: "Connect with Doctors Anytime, Anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12 mt-12 border-t border-emerald-900/20">
              <div className="container mx-auto px-4 text-gray-200 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                {/* About Us */}
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">About MediMitra</h3>
                  <p className="text-muted-foreground text-sm">
                    MediMitra is dedicated to making healthcare accessible, simple, and secure for everyone. Book appointments, consult with doctors, and manage your health journey all in one place.
                  </p>
                </div>
                {/* FAQ */}
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">FAQ</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li><strong>How do I book an appointment?</strong> <br />Sign up, choose a doctor, and select an available slot.</li>
                    <li><strong>How do I become a doctor on MediMitra?</strong> <br />Complete onboarding and submit your credentials for verification.</li>
                    <li><strong>How are video consultations conducted?</strong> <br />All appointments are securely conducted via our integrated video platform.</li>
                  </ul>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
