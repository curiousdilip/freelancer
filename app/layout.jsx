import "./global.scss";
export const metadata = {
  title: "Dilip Kr. Maurya",
  description:
    "A Web Developer making websites from scratch with provided designs",
  icons: {
    icon: "/img/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
