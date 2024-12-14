"use client";
import { ComponentProps, useState, useRef, useEffect } from "react";
import Copy from "@/components/markup/copy";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowExpandButton, setShouldShowExpandButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (contentRef.current) {
        setShouldShowExpandButton(contentRef.current.scrollHeight > 500);
      }
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  const containerStyle = isExpanded
    ? "max-h-[800px] overflow-y-auto"
    : "max-h-[500px] overflow-hidden";

  return (
    <div className="my-5 relative group">
      <div 
        ref={contentRef}
        className={`relative transition-all duration-300 ${containerStyle}`}
      >
        <div className="relative">
          <div className="absolute right-4 top-3 z-10 hidden sm:block">
            <Copy content={raw!} />
          </div>
          <pre {...rest} className="min-w-full pt-4">{children}</pre>
        </div>
        
        {shouldShowExpandButton && (
          <div className="sticky bottom-0 flex justify-center w-full bg-gradient-to-t dark:from-black from-white to-transparent pt-4 pb-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-1.5 text-sm bg-gray-800 dark:bg-gray-300 dark:hover:bg-gray-200 hover:bg-gray-700 dark:text-black rounded-full text-gray-200 transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={16} />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Expand
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}