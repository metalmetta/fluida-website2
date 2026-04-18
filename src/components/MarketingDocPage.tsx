import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MarketingDocPageProps {
  title: string;
  description: string;
  canonicalPath: string;
  children: React.ReactNode;
}

const MarketingDocPage: React.FC<MarketingDocPageProps> = ({
  title,
  description,
  canonicalPath,
  children,
}) => {
  const canonical = `https://getfluida.com${canonicalPath}`;
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Navbar />
      <main className="section-container max-w-3xl mx-auto px-4 py-24 md:py-28 prose prose-gray prose-lg">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingDocPage;
