import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Fluida</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our B2B payment solutions or return to the homepage." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-orange-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <Link to="/">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Home className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </Link>
            
            <Link to="/pricing">
              <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                <Search className="w-4 h-4 mr-2" />
                View Pricing
              </Button>
            </Link>
            
            <Link to="/blog">
              <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                <Mail className="w-4 h-4 mr-2" />
                Read Our Blog
              </Button>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Need help? Contact us at <a href="mailto:support@getfluida.com" className="text-orange-600 hover:underline">support@getfluida.com</a></p>
          </div>
          
          <button 
            onClick={() => window.history.back()} 
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Go back to previous page
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
