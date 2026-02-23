import MorphPlayer from './MorphPlayer';

const Demo = () => {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Fake Background Content */}
      <div className="w-full max-w-2xl mt-20 px-6 space-y-8 opacity-20 pointer-events-none">
        <h1 className="text-6xl font-black text-white">MORPHIA</h1>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-40 bg-white/5 rounded-3xl" />
          ))}
        </div>
        <p className="text-gray-500 leading-relaxed">
          This is a stress test for our first core component. The goal is to achieve seamless shared-element transitions that feel like native iOS.
        </p>
      </div>

      {/* The Component Under Test */}
      <MorphPlayer />
    </div>
  );
};

export default Demo;
