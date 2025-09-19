import { Helmet } from "react-helmet-async";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

const Press = () => {
  const pressItems = [
    {
      title: "Rewriting the Way Money Moves with Stablecoins",
      publication: "Foundation Capital",
      date: "2024",
      description: "Featured in Foundation Capital's comprehensive analysis of how stablecoins are revolutionizing global payments, highlighting Fluida's innovative approach to reducing cross-border payment costs.",
      url: "https://foundationcapital.com/rewriting-the-way-money-moves-with-stablecoins/",
      type: "VC Insight",
      language: "English"
    },
    {
      title: "Come nasce in Valtellina una startup buona per la Silicon Valley: successi e (piccoli) fallimenti",
      publication: "EconomyUp",
      date: "2024",
      description: "Featured coverage of Fluida as one of four innovative fintech startups developed in The Liquid Factory's first batch, highlighting our B2B cross-border payment platform using stablecoins.",
      url: "https://www.economyup.it/startup/come-si-costruisce-una-startup-buona-per-la-silicon-valley-successi-e-piccoli-fallimenti/",
      type: "Feature Article",
      language: "Italian"
    },
    {
      title: "Fluida Startup Profile",
      publication: "C14 Startup Database",
      date: "2024",
      description: "Comprehensive startup profile showcasing Fluida's innovative approach to reducing international payment costs by 88% through advanced fintech solutions.",
      url: "https://www.c14.so/a083fb31-53a0-4ee9-bf92-3d964b0074d6",
      type: "Startup Database",
      language: "English"
    }
  ];

  const stats = [
    { icon: Users, label: "Media Mentions", value: "3+" },
    { icon: Award, label: "Recognition Programs", value: "The Liquid Factory" },
    { icon: ExternalLink, label: "International Coverage", value: "Multi-Language" }
  ];

  return (
    <>
      <Helmet>
        <title>Press & Media Coverage | Fluida</title>
        <meta name="description" content="Latest press coverage and media mentions of Fluida's revolutionary B2B payment platform. Read about our journey in reducing international payment costs by 88%." />
        <meta name="keywords" content="Fluida press, media coverage, fintech news, B2B payments, startup news, payment platform" />
        <link rel="canonical" href="https://getfluida.com/press" />
        <meta property="og:title" content="Press & Media Coverage | Fluida" />
        <meta property="og:description" content="Latest press coverage and media mentions of Fluida's revolutionary B2B payment platform." />
        <meta property="og:url" content="https://getfluida.com/press" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <TopBanner />
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Press & Media Coverage
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Discover how Fluida is transforming B2B payments and gaining recognition in the global fintech ecosystem.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                      <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Press Coverage */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Media Coverage</h2>
                
                <div className="space-y-8">
                  {pressItems.map((item, index) => (
                    <article key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                              {item.type}
                            </span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                              {item.language}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </div>
                            <div className="font-semibold text-orange-600">
                              {item.publication}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-6">
                            {item.description}
                          </p>
                          
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                          >
                            Read Full Article
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Press Kit */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Press Kit</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Need additional information about Fluida? Contact our press team for high-resolution images, executive bios, and company facts.
                </p>
                
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Inquiries</h3>
                  <p className="text-gray-600 mb-6">
                    For interviews, product demonstrations, or additional information:
                  </p>
                  <a
                    href="mailto:press@getfluida.com"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Contact Press Team
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Press;