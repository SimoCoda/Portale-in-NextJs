import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { createClient } from "@/utils/supabase/supabase.server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Welcome in my wonderful site",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const supabaseClient = createClient();
  const {data} = await supabaseClient.auth.getUser();
  

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar user={data.user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
