import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Ubuntu } from "next/font/google";

import QueryClientWrapper from "@/lib/QueryClientProvider";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const ubuntu = Ubuntu({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teamlyf",
  description: "Teamlyf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <QueryClientWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
