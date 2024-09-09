import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Layout from "./components/Layout";
export const metadata: Metadata = {
  title: "Top App",
  description: "Rating app for learning NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
