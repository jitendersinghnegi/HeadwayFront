import type { Metadata } from "next";
import "./../globals.css";
import { Header } from "@/components/header";
import{ Footer } from "@/components/footer";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
export const metadata: Metadata = {
  title: "Headway Social LLP",
  description: "Experience the world through stays, food & travel.",
};

export default async function LocaleLayout({
  children,params
}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col font-sans bg-white text-gray-900"
      >
        
          <NextIntlClientProvider><Header />{children}<Footer /></NextIntlClientProvider>
        
      </body>
    </html>
  );
}
