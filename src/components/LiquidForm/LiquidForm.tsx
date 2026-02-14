import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LiquidForm = () => {
  const [step, setStep] = useState(0);
  const [val, setVal] = useState('');

  const steps = [
    { label: "What's your name?", placeholder: "Type here..." },
    { label: "Enter your email", placeholder: "hello@vesper.ai" },
    { label: "Almost done!", placeholder: "Final thoughts..." }
  ];

  return (
    <div className="relative">
      {/* SVG Filter for the Gooey Effect */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div style={{ filter: 'url(#goo)' }} className="relative flex items-center justify-center min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            layoutId="liquid-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-indigo-600 rounded-[2rem] p-8 shadow-2xl flex flex-col items-center"
            style={{ width: step === 0 ? 300 : 400 }}
          >
            <motion.label 
              layout 
              className="text-white font-bold mb-4 block text-center"
            >
              {steps[step].label}
            </motion.label>
            
            <motion.input
              layout
              autoFocus
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder={steps[step].placeholder}
              className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20 outline-none transition-all"
            />

            <motion.button
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (step < steps.length - 1) {
                  setStep(step + 1);
                  setVal('');
                } else {
                  setStep(0);
                  setVal('');
                }
              }}
              className="mt-6 px-8 py-2 bg-white text-indigo-600 font-black rounded-full shadow-lg"
            >
              {step === steps.length - 1 ? 'Finish' : 'Next'}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiquidForm;
