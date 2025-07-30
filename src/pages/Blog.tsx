import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "reduce-international-payment-fees-suppliers",
    title: "How to Reduce International Payment Fees for Suppliers by 88%",
    excerpt: "Discover proven strategies to cut supplier payment costs dramatically while maintaining fast, secure international transfers.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Cost Reduction",
    image: "/money.png",
    keywords: ["international payment fees", "supplier payments", "cost reduction", "B2B payments"]
  },
  {
    slug: "best-b2b-payment-platform-small-businesses",
    title: "Best B2B Payment Platform for Small Businesses in 2024",
    excerpt: "Compare top B2B payment solutions and find the perfect platform for your small business's vendor and supplier payments.",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Platform Comparison",
    image: "/hero2.png",
    keywords: ["B2B payment platform", "small business payments", "vendor payments", "payment solutions"]
  },
  {
    slug: "supplier-payment-automation-vs-manual-processing",
    title: "Supplier Payment Automation vs Manual Processing: ROI Analysis",
    excerpt: "Comprehensive analysis of automation benefits, cost savings, and efficiency gains for B2B payment processing.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Automation",
    image: "/hero-image.jpg",
    keywords: ["payment automation", "manual processing", "ROI analysis", "efficiency"]
  },
  {
    slug: "cross-border-payment-solutions-vendors",
    title: "Cross Border Payment Solutions for Vendors: Complete Guide",
    excerpt: "Everything you need to know about sending payments to international vendors, suppliers, and contractors efficiently.",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "International Payments",
    image: "/background-section1.png",
    keywords: ["cross border payments", "international vendors", "global payments", "foreign suppliers"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>B2B Payment Insights | Fluida Blog - Supplier Payment Tips & Guides</title>
        <meta name="description" content="Unlock B2B payment secrets with expert guides and actionable strategies. Learn proven methods to cut supplier payment costs by 88%, optimize international transfers, and streamline your business payments. Free insights from payment industry experts." />
        <meta name="keywords" content="B2B payment blog, supplier payment tips, international payment guides, payment cost reduction, vendor payment strategies" />
        <link rel="canonical" href="https://getfluida.com/blog" />
        <meta property="og:title" content="B2B Payment Insights | Fluida Blog" />
        <meta property="og:description" content="Expert insights on B2B payments, supplier payment optimization, and cost reduction strategies." />
        <meta property="og:url" content="https://getfluida.com/blog" />
      </Helmet>
      
      <TopBanner />
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              B2B Payment Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guides, cost-saving strategies, and industry insights to optimize your supplier payments and reduce international transfer fees.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-pulse-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div>
                  <span className="inline-block bg-pulse-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center bg-pulse-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pulse-600 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-pulse-600 font-semibold hover:text-pulse-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on B2B Payment Trends
            </h3>
            <p className="text-gray-600 mb-6">
              Get weekly insights on cost reduction strategies, payment automation, and industry best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
              />
<button type="submit" disabled={isSubmitting} className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 md:ml-4 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Submitting..." : "Start now"}
            </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;