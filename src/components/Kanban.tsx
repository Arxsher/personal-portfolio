interface Task {
  id: number;
  title: string;
  priority: string;
  status: string;
}

interface KanbanProps {
  tasks: {
    todo: Task[];
    in_progress: Task[];
    done: Task[];
  };
}

export default function Kanban({ tasks }: KanbanProps) {
  const columns = [
    { title: 'Awaiting', key: 'todo' },
    { title: 'In Execution', key: 'in_progress' },
    { title: 'Resolved', key: 'done' }
  ];

  const getPriorityInfo = (priority: string) => {
    switch (priority) {
      case 'high': return { label: 'Urgent', color: 'text-red-400 bg-red-500/10' };
      case 'medium': return { label: 'Optimal', color: 'text-blue-400 bg-blue-500/10' };
      default: return { label: 'Trivial', color: 'text-gray-400 bg-white/5' };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {columns.map(col => (
        <div key={col.key} className="space-y-6">
          <div className="flex items-center space-x-4 px-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{col.title}</h3>
            <span className="text-[10px] font-mono text-white/10">{tasks[col.key as keyof typeof tasks]?.length || 0}</span>
          </div>
          
          <div className="space-y-4">
            {tasks[col.key as keyof typeof tasks]?.map(task => {
              const p = getPriorityInfo(task.priority);
              return (
                <div 
                  key={task.id} 
                  className={`glass rounded-2xl p-6 transition-all duration-300 group hover:bg-card hover:-translate-y-1 ${
                    col.key === 'in_progress' ? 'border-l-4 border-l-accent' : 'border border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono text-white/20 tracking-tighter">VSP-SYS-{task.id}</span>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-widest ${p.color}`}>
                      {p.label}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white/90 leading-relaxed mb-4 group-hover:text-white transition-colors">
                    {task.title}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex -space-x-2">
                       <div className="w-5 h-5 rounded-full bg-accent border border-background flex items-center justify-center text-[8px] font-black">V</div>
                    </div>
                    <div className="flex items-center space-x-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                       <span className="text-[8px] font-black uppercase text-white/20">Active</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
