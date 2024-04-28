import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./Nav/page";
import Footer from "./Footer/Page";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "zpsc",
  description: "Zero Plastic Straw Community (zpsc)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={roboto.className}>
              <Nav/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
