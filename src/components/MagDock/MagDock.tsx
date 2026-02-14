import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const springConfig = { stiffness: 150, damping: 20 };

const MagDock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            layoutId="dock-container"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            onClick={() => setIsOpen(true)}
            transition={springConfig}
            className="h-20 flex items-end gap-2 px-4 pb-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 transition-colors"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <DockIcon key={i} mouseX={mouseX} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            layoutId="dock-container"
            transition={springConfig}
            className="w-[450px] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden p-8"
          >
            <div className="flex justify-between items-center mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                System Intelligence
              </motion.h2>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/20 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              {['Execute Neural Scan', 'Analyze Network Traffic', 'Optimization Protocol', 'Terminal Access'].map((text, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ delay: i * 0.08, ease: [0.23, 1, 0.32, 1], duration: 0.8 }}
                  key={text} 
                  className="group w-full h-16 bg-white/[0.03] hover:bg-white/[0.08] rounded-2xl border border-white/[0.05] hover:border-white/10 transition-all cursor-pointer flex items-center px-6 relative overflow-hidden"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-6 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-500" />
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors font-medium tracking-wide">{text}</span>
                  <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-white/20 uppercase">Ready</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DockIcon = ({ mouseX }: { mouseX: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  // Calculate width and height based on proximity
  const sizeSync = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 200, damping: 15 });

  // Add a slight vertical lift
  const ySync = useTransform(distance, [-150, 0, 150], [0, -25, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size, y }}
      className="bg-gradient-to-b from-white/20 to-white/5 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md flex items-center justify-center group relative"
    >
        <div className="w-1/3 h-1/3 bg-white/10 rounded-full group-hover:bg-white/40 transition-colors" />
        {/* Reflection light effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default MagDock;
