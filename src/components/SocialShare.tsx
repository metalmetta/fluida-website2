import { Button } from "@/components/ui/button";
import { Share2, X, Linkedin, Link2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trackSocialShare } from "@/lib/analytics";

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const SocialShare = ({ 
  url = window.location.href, 
  title = "Fluida | Cut Supplier Payment Costs by 88%",
  description = "Transform your business payments with Fluida's revolutionary B2B platform. Send funds to suppliers worldwide in real-time.",
  className = ""
}: SocialShareProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareData = {
    title,
    text: description,
    url
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to copy link:', error);
      toast.error("Failed to copy link");
    }
  };

  const shareOnX = () => {
    trackSocialShare('X', title);
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(xUrl, '_blank', 'width=550,height=420');
  };

  const shareOnLinkedIn = () => {
    trackSocialShare('LinkedIn', title);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={handleNativeShare}
        className="flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>

      {isOpen && !navigator.share && (
        <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
          <div className="space-y-2">
            <button
              onClick={shareOnX}
              className="flex items-center gap-2 w-full p-2 text-left hover:bg-gray-50 rounded"
            >
              <X className="w-4 h-4 text-gray-900" />
              X (Twitter)
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="flex items-center gap-2 w-full p-2 text-left hover:bg-gray-50 rounded"
            >
              <Linkedin className="w-4 h-4 text-blue-700" />
              LinkedIn
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 w-full p-2 text-left hover:bg-gray-50 rounded"
            >
              <Link2 className="w-4 h-4 text-gray-600" />
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialShare;