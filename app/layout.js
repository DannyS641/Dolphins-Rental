import "./globals.css";

export const metadata = {
  title: "Dolphins Courts",
  description:
    "Book premium basketball courts by the hour, day, or week. Check availability, apply promo codes, and reserve instantly.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
