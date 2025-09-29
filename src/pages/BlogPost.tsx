import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts, type BlogPost as BlogPostType } from "@/data/blog/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  const relatedPosts = slug ? getRelatedPosts(slug) : [];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-pulse-600 hover:text-pulse-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} | Fluida Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://getfluida.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://getfluida.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDescription,
            "image": post.image,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fluida",
              "logo": {
                "@type": "ImageObject",
                "url": "https://getfluida.com/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date
          })}
        </script>
      </Helmet>
      
      <TopBanner />
      <Navbar />
      
      <article className="pt-40 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-pulse-600 hover:text-pulse-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block bg-pulse-100 text-pulse-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="section-title text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
              <Clock className="w-4 h-4 mr-2" />
              <span className="mr-4">{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </header>

          {/* Social Sharing */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <SocialShare 
              url={`https://getfluida.com/blog/${post.slug}`}
              title={post.title}
              description={post.metaDescription}
            />
            <div className="text-sm text-gray-500">
              Share this article
            </div>
          </div>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              // Handle headings
              if (trimmed.startsWith('# ')) {
                return <h1 key={index} className="font-display font-bold text-3xl text-gray-900 mt-8 mb-4">{trimmed.slice(2)}</h1>;
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={index} className="font-display font-semibold text-2xl text-gray-900 mt-6 mb-3">{trimmed.slice(3)}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={index} className="font-display font-semibold text-xl text-gray-900 mt-4 mb-2">{trimmed.slice(4)}</h3>;
              }

              // Handle lists
              const lines = trimmed.split('\n');
              if (lines.some(line => line.trim().startsWith('- '))) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-1 my-4">
                    {lines.map((line, lineIndex) => {
                      const lineContent = line.trim();
                      if (lineContent.startsWith('- ')) {
                        return (
                          <li key={lineIndex} className="text-gray-700">
                            <span dangerouslySetInnerHTML={{ 
                              __html: lineContent.slice(2)
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                                .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                            }} />
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                );
              }

              // Handle checkboxes
              if (trimmed.includes('✅')) {
                return (
                  <div key={index} className="space-y-2 my-4">
                    {lines.map((line, lineIndex) => {
                      if (line.trim().startsWith('✅')) {
                        return (
                          <div key={lineIndex} className="flex items-start">
                            <span className="text-green-600 mr-2">✅</span>
                            <span className="text-gray-700">{line.trim().slice(2)}</span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                );
              }

              // Handle call-to-action
              if (trimmed.startsWith('👉')) {
                return (
                  <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                    <p className="text-blue-800 font-medium">{trimmed.slice(2)}</p>
                  </div>
                );
              }

              // Handle tables (simple approach)
              if (trimmed.includes('|') && trimmed.includes('---')) {
                const tableRows = lines.filter(line => line.includes('|'));
                if (tableRows.length > 1) {
                  return (
                    <div key={index} className="overflow-x-auto my-6">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            {tableRows[0].split('|').slice(1, -1).map((header, headerIndex) => (
                              <th key={headerIndex} className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                                {header.trim()}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tableRows.slice(2).map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.split('|').slice(1, -1).map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-gray-300 px-4 py-2 text-gray-700">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
              }

              // Handle regular paragraphs
              return (
                <p key={index} className="text-gray-700 leading-relaxed my-4">
                  <span dangerouslySetInnerHTML={{ 
                    __html: trimmed
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
                  }} />
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-pulse-50 to-orange-50 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Ready to Reduce Your Payment Costs?
            </h3>
            <p className="text-gray-600 mb-6">
              See how much you could save with Fluida's B2B payment platform.
            </p>
            <a 
              href="https://app.getfluida.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pulse-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pulse-600 transition-colors"
            >
              Pay now
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <span className="text-xs text-pulse-600 font-medium">
                          {relatedPost.category}
                        </span>
                        <h4 className="font-display font-semibold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-pulse-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Press Mentions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Fluida in the News</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">EconomyUp Coverage</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Featured as an innovative fintech startup in Italy's leading economy publication.
                </p>
                <a
                  href="https://www.economyup.it/startup/come-si-costruisce-una-startup-buona-per-la-silicon-valley-successi-e-piccoli-fallimenti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Read the article →
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Startup Database</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive profile showcasing our mission to reduce cross-border payment costs.
                </p>
                <a
                  href="https://www.c14.so/a083fb31-53a0-4ee9-bf92-3d964b0074d6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  View our profile →
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Foundation Capital</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Featured in Foundation Capital's insights on rewriting the way money moves with stablecoins.
                </p>
                <a
                  href="https://foundationcapital.com/rewriting-the-way-money-moves-with-stablecoins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Read the insight →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;