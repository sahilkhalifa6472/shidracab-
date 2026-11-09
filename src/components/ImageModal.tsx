import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  onBookNow?: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  onBookNow,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 text-white">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{title}</h3>
            <span className="text-xs bg-amber-400 text-black px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Shidara Fleet
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Full Image */}
        <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        {/* Bottom Bar */}
        <div className="px-5 py-4 bg-neutral-950 flex flex-wrap items-center justify-between gap-3 text-neutral-300">
          <div className="text-xs sm:text-sm">
            <span className="text-neutral-400">Available 24/7 across city and outstation routes</span>
          </div>
          {onBookNow && (
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="px-5 py-2.5 rounded-xl font-bold bg-[#FFCC00] text-black hover:bg-[#e6b800] transition-colors flex items-center gap-2 text-sm"
            >
              <span>Book This Car</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
