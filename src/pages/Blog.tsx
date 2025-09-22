import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { getFeaturedPost, getRegularPosts, getAllPosts, BlogPost } from "@/data/blog/posts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get data from the centralized blog data
  const featuredPost = getFeaturedPost();
  const regularPosts = getRegularPosts();
  const allPosts = getAllPosts();
  
  // Get unique categories for filter
  const categories = ["All", ...Array.from(new Set(allPosts.map(post => post.category)))];
  
  // Filter posts based on search and category
  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
      
      <main className="pt-40 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="section-title text-gray-900 mb-4">
              B2B Payment Insights
            </h1>
            <p className="section-subtitle text-gray-600 mx-auto">
              Expert strategies to reduce costs, optimize payments, and scale your business globally
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-pulse-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-pulse-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                  <div>
                    <span className="inline-block bg-pulse-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Featured
                    </span>
                    <h2 className="section-title text-2xl lg:text-3xl text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center bg-pulse-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pulse-600 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Counter */}
          <div className="mb-8">
            <p className="text-gray-600">
              {searchQuery || selectedCategory !== "All" 
                ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
                : `${filteredPosts.length} Articles`
              }
            </p>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-pulse-600 hover:text-pulse-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Newsletter CTA */}
          <NewsletterSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Extracted Blog Card Component for reusability
const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-display font-bold text-xl text-gray-900 mb-3 line-clamp-2 hover:text-pulse-600 transition-colors">
        <Link to={`/blog/${post.slug}`}>
          {post.title}
        </Link>
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
        className="inline-flex items-center text-pulse-600 font-semibold hover:text-pulse-700 transition-colors group"
      >
        Read More
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </article>
);

// Extracted Newsletter Section
const NewsletterSection: React.FC = () => (
  <div className="mt-20 bg-gradient-to-r from-pulse-50 to-orange-50 rounded-2xl p-8 text-center">
    <h3 className="section-title text-2xl lg:text-3xl text-gray-900 mb-4">
      Stay tuned on B2B Payment Trends
    </h3>
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Enter your email address"
        required
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-gray-900 placeholder-gray-500"
      />
      <button 
        type="submit" 
        className="bg-pulse-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-pulse-600 hover:shadow-lg hover:shadow-pulse-500/25"
      >
        Subscribe
      </button>
    </form>
    <p className="text-sm text-gray-500 mt-4">
      No spam. Unsubscribe anytime.
    </p>
  </div>
);

export default Blog;