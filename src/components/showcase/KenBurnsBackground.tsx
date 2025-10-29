import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface KenBurnsBackgroundProps {
  currentIndex: number;
  images: Array<{ image: string; name: string }>;
  overlayGradient?: string;
}

const KenBurnsBackground: React.FC<KenBurnsBackgroundProps> = ({
  currentIndex,
  images,
  overlayGradient = 'from-black/80 via-black/60 to-transparent'
}) => {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 8,
              ease: 'linear'
            }}
          >
            <Image
              src={images[currentIndex].image}
              alt={images[currentIndex].name}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              quality={90}
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradient}`} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default KenBurnsBackground;
