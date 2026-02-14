interface StatsCardProps {
  title: string;
  value: string;
  subtext?: string;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon?: string;
}

export default function StatsCard({ title, value, subtext, change, changeType, icon }: StatsCardProps) {
  return (
    <div className="glass rounded-3xl p-8 hover:bg-card/80 transition-all duration-500 group relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/5 blur-3xl rounded-full transition-all group-hover:bg-accent/10"></div>
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">{title}</p>
          <p className="text-3xl font-black tracking-tight text-white">{value}</p>
        </div>
        <div className="w-12 h-12 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {icon || '📊'}
        </div>
      </div>
      
      <div className="flex items-center space-x-3 relative z-10">
        {change && (
          <span className={`text-[10px] font-black px-2 py-1 rounded-md tracking-wider ${
            changeType === 'positive' 
              ? 'bg-green-500/10 text-green-400' 
              : changeType === 'negative' 
                ? 'bg-red-500/10 text-red-400'
                : 'bg-white/5 text-white/40'
          }`}>
            {change}
          </span>
        )}
        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{subtext}</span>
      </div>
    </div>
  );
}
