import "./globals.css";

export const metadata = {
  title: "Mouser BOM Tool",
  description: "Upload CSV to get Mouser pricing data"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
