import BookingClient from "../components/BookingClient";

export const metadata = {
  title: "Dolphins Courts — Premium Court Rentals",
  description:
    "Book premium basketball courts by the hour, day, or week. Check availability, apply promo codes, and reserve instantly.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dolphins Courts — Premium Court Rentals",
    description:
      "Book premium basketball courts by the hour, day, or week. Availability + promo codes + instant booking.",
    type: "website",
  },
};

export default function Page() {
  return <BookingClient />;
}
