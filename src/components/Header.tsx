export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 px-8 py-6 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-black text-white tracking-tight">OPERATIONS COMMAND</h1>
          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded tracking-tighter">V2.2_STABLE</span>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">Hackintosh.IceLake.Node_15549</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">System Time</span>
            <span className="text-sm font-mono text-white/80">{time}</span>
          </div>
          
          <div className="w-px h-8 bg-white/10"></div>
          
          <div className="flex items-center space-x-4 group cursor-default">
            <div className="text-right">
              <p className="text-xs font-black text-white leading-none">ARCHER</p>
              <p className="text-[10px] text-accent font-bold uppercase tracking-tighter">Sovereign Human</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-accent/20 p-0.5 transition-all group-hover:border-accent">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-lg shadow-inner">
                🦊
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
