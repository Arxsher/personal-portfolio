import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

const MorphPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-end justify-center min-h-screen bg-gray-900 p-4">
      {/* Mini Player */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            layoutId="player-container"
            onClick={() => setIsExpanded(true)}
            whileTap={{ scale: 0.95 }}
            transition={springTransition}
            className="fixed bottom-6 w-[90%] max-w-md h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center px-4 cursor-pointer shadow-2xl overflow-hidden"
          >
            <motion.div
              layoutId="player-art"
              transition={springTransition}
              className="w-10 h-10 bg-indigo-500 rounded-lg flex-shrink-0"
            />
            <div className="ml-4 flex-1">
              <motion.h3 
                layoutId="player-title" 
                transition={springTransition}
                className="text-white text-sm font-semibold truncate"
              >
                Vesper Beats
              </motion.h3>
              <motion.p 
                layoutId="player-artist" 
                transition={springTransition}
                className="text-gray-400 text-xs truncate"
              >
                Resident Tinkerer
              </motion.p>
            </div>
            <motion.div layoutId="player-controls" className="flex gap-4 ml-2">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Player */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId="player-container"
            transition={springTransition}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            <motion.button
              onClick={() => setIsExpanded(false)}
              className="absolute top-12 left-8 text-white/60 hover:text-white"
            >
              Close
            </motion.button>

            <motion.div
              layoutId="player-art"
              transition={springTransition}
              className="w-full aspect-square max-w-sm bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl mb-12"
            />

            <div className="w-full max-w-sm">
              <motion.h2
                layoutId="player-title"
                transition={springTransition}
                className="text-white text-3xl font-bold mb-2"
              >
                Vesper Beats
              </motion.h2>
              <motion.p
                layoutId="player-artist"
                transition={springTransition}
                className="text-indigo-400 text-xl mb-12"
              >
                Resident Tinkerer
              </motion.p>

              <motion.div 
                layoutId="player-controls"
                className="w-full h-1 bg-white/20 rounded-full relative mb-12"
              >
                <div className="absolute top-0 left-0 w-1/3 h-full bg-white rounded-full" />
              </motion.div>

              <div className="flex justify-between items-center w-full px-4">
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center" />
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MorphPlayer;
