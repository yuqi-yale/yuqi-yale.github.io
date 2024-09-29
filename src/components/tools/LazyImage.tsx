import Image from "next/image";
import { useState } from "react";

interface LazyLoadImageProps {
  src: string; // 图片路径
  alt: string; // 图片描述
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill'; // 可选的布局属性
  width?: number; // 可选的宽度属性
  height?: number; // 可选的高度属性
  className?: string; // 可选的 className 属性
}

export const LazyLoadImage: React.FC<LazyLoadImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
      <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}>
          <Image
              src={src}
              alt={alt}
              {...props}
              onLoadingComplete={() => setIsLoaded(true)} // 图片加载完成时调用
              style={{ width: '100%', height: 'auto' }} // 自适应宽高
          />
      </div>
  );
};