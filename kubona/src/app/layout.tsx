import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";

const poppins= Poppins({ subsets: ['latin'], weight: ['400', '600']})


export const metadata: Metadata = {
  title: "Kubona",
  description: "Website para alguer se salões de eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${poppins.className} bg-[#fdfdfd] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
