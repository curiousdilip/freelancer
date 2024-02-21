import "./global.scss";
import { Work_Sans } from "next/font/google";
import Header from "./componensts/header";
import Footer from "./componensts/footer";

export const metadata = {
  title: "Dilip Kr. Maurya",
  description:
    "A Web Developer making websites from scratch with provided designs",
  icons: {
    icon: "/img/favicon.svg",
  },
};

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-worksans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${worksans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
