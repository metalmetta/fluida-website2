import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  sizes 
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getWebPSrc = (originalSrc: string) => {
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return originalSrc;
  };

  const getAvifSrc = (originalSrc: string) => {
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.avif');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const avifSrc = getAvifSrc(src);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      
      {!imageError ? (
        <picture>
          <source srcSet={avifSrc} type="image/avif" sizes={sizes} />
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          <img
            src={src}
            alt={alt}
            className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`}
            width={width}
            height={height}
            loading={loading}
            onError={handleImageError}
            onLoad={handleImageLoad}
            sizes={sizes}
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleImageLoad}
          sizes={sizes}
        />
      )}
    </div>
  );
};

export default OptimizedImage;