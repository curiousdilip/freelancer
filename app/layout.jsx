import "./global.scss";
import { Work_Sans } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: {
    default: "Dilip Kumar | Web Developer",
    template: "%s | Dilip Kumar Maurya",
  },
  icons: {
    icon: "/img/favicon.svg",
  },
  description:
    "Hi my name is Dilip Kumar Maurya and I am a Web developer based in New Delhi, India.",
  robots: "follow, index",
  applicationName: "Dilip Kumar ",
  referrer: "origin-when-cross-origin",
  keywords: ["Dilipmaurya", "curiousdilip", "mauryaji"],
  authors: [{ name: "Dilip Kumar", url: "https://www.dilipmaurya.in" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dilipmaurya.in"),
  alternates: {
    canonical: "https://www.dilipmaurya.in",
    "/projects": "https://www.dilipmaurya.in/projects",
  },
  openGraph: {
    images: {
      default: "/img/profilecardimg.jpeg",
      template: "%s",
    },
    url: "https://www.dilipmaurya.in",
    siteName: "Dilip Kumar | Web Developer",
    locale: "en_US",
    type: "website",
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
