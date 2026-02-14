interface ActivityFeedProps {
  activities: string[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="p-8 h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Transmission Log</h3>
        <span className="text-[10px] font-mono text-accent animate-pulse">LIVE_SYNC</span>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
        {activities.length > 0 ? (
          activities.map((activity, i) => (
            <div key={i} className="flex space-x-4 group">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-accent/20 border border-accent shadow-[0_0_8px_rgba(249,115,22,0.4)] mt-1.5 transition-all group-hover:scale-125"></div>
                <div className="w-px flex-1 bg-white/5 my-2"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/80 font-mono leading-relaxed break-words line-clamp-3 group-hover:line-clamp-none transition-all duration-300 group-hover:text-white">
                  {activity}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-[10px] uppercase tracking-widest text-white/20">Awaiting Signal...</p>
          </div>
        )}
      </div>
    </div>
  );
}
