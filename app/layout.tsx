import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Raleway } from "next/font/google";
import { Providers } from "./providers";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "KOD Sportsbook",
  description: "Knights of Degen Sportsbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className + " p-4"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
