import Navigation from "components/Navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Exo_2, Raleway } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { locales } from "../../config";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body
        className={`${raleway.variable} ${exo2.variable} bg-neutral-950 text-neutral-200 min-h-screen antialiased flex font-body`}
      >
        <Navigation />
        <main className="container max-w-7xl mx-auto h-full flex-1 flex flex-col gap-40 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
