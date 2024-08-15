import "./global.scss";
import { Work_Sans } from "next/font/google";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Dilip Kumar | Frontend Web Developer",
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-96YN1MPY3C"></Script>
      <Script dangerouslySetInnerHTML={{
        __html: `    window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-96YN1MPY3C');`
      }}>
      </Script>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "https://www.dilipmaurya.in/",
            "name": "Dilip Kumar | Frontend Web Developer",
            "logo": "https://www.dilipmaurya.in/img/logo.svg",
            "description": "Hi my name is Dilip Kumar Maurya and I am a Frontend Web developer based in New Delhi, India.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 98997 42615",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.facebook.com/curiousdilip",
              "https://twitter.com/curiousdilip",
              "https://www.github.com/curiousdilip",
              "https://www.linkedin.com/in/curiousdilip/",
            ]
          })
        }}
      > </Script>
      <body>
        {children}
      </body>
    </html>
  );
}
