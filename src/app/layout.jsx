import "./globals.css";

export const metadata = {
  title: "AmplifyYOU",
  description: "amplifyYOU is a program designed to help by Brenda Unu, a personal brand strategist, author, and speaker, to help",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}