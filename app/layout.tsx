import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Business Risk Scanner — Early Warning for Payment Processor Risks",
  description: "Monitor your Stripe account health and get alerted before chargebacks, disputes, or suspicious patterns trigger account suspension."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e9eba100-04df-42b8-8467-763bc2ba1aae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
