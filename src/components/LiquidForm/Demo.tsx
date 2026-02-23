import LiquidForm from './LiquidForm';

const Demo = () => {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at center, #4f46e5 0%, transparent 70%)' }} />
      
      <div className="relative z-10 text-center space-y-4 mb-12">
        <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">Liquid Form</h1>
        <p className="text-white/30 text-xs tracking-widest font-mono">SVG_FILTER_STRESS_TEST_01</p>
      </div>

      <LiquidForm />
    </div>
  );
};

export default Demo;
