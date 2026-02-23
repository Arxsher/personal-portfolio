import MagDock from './MagDock';

const Demo = () => {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Grid for Contrast */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 text-center space-y-4 max-w-xl px-6">
        <h1 className="text-5xl font-black text-white tracking-tighter italic uppercase">Mag-Dock</h1>
        <p className="text-white/40 text-sm leading-relaxed">
          Hover near the bottom to see the magnetic interaction. Click to morph into the command palette.
        </p>
      </div>

      {/* The Component Under Test */}
      <MagDock />
    </div>
  );
};

export default Demo;
