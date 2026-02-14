interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export default function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Terminal', icon: '' },
    { id: 'market', label: 'Market', icon: '' },
    { id: 'settings', label: 'Settings', icon: '' },
  ];

  return (
    <div className="w-20 lg:w-64 bg-[#09090b] border-r border-white/5 flex flex-col transition-all duration-300">
      <div className="p-8 pb-12">
        <div className="flex items-center space-x-4 group cursor-default">
          <div className="w-10 h-10 bg-gradient-to-tr from-accent to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-500">
            <span className="text-[#09090b] font-black text-xl leading-none">V</span>
          </div>
          <div className="hidden lg:block">
            <span className="text-white font-black text-lg tracking-tighter">VESPER.</span>
            <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Autonomous.</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`w-full flex items-center lg:space-x-4 p-4 rounded-xl transition-all duration-300 group ${
              activeItem === item.id
                ? 'bg-white/5 text-accent border border-white/5 shadow-inner'
                : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
            }`}
          >
            <span className={`text-xl transition-transform group-hover:scale-110 ${activeItem === item.id ? 'text-accent' : ''}`}>
              {item.icon === '' ? '⚡' : item.icon === '' ? '📡' : '⚙️'}
            </span>
            <span className="hidden lg:block text-sm font-bold tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4">
        <div className="glass rounded-2xl p-4 hidden lg:block">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Status: Sniping</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="bg-accent h-full w-[23%]" style={{ transition: 'width 2s ease-in-out' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
