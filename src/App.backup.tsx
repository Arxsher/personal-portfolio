import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ActivityFeed from './components/ActivityFeed';
import EquityChart from './components/EquityChart';
import Kanban from './components/Kanban';

export default function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('overview');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        console.error("Fetch failed", e);
        setError(e.message);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (error) return (
    <div className="bg-[#09090b] h-screen text-red-500 flex items-center justify-center font-mono p-10 text-center">
      <span>CRITICAL DATA ERROR: {error}<br/>Ensure sync_dashboard.py is running.</span>
    </div>
  );

  if (!data) return (
    <div className="bg-[#09090b] h-screen text-white flex items-center justify-center font-mono">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="tracking-[0.2em] text-accent animate-pulse">VESPER OPERATIONAL</span>
      </div>
    </div>
  );

  const equity = typeof data.equity === 'number' ? data.equity : 0;
  const activities = Array.isArray(data.activity) ? data.activity : [];
  const regimes = data.regimes || {};
  const tasks = data.tasks || { todo: [], in_progress: [], done: [] };
  const intelligence = data.intelligence || { x_signals: "Awaiting intel..." };
  
  const rawGigBal = data.gigEconomy?.balance;
  const gigBalance = typeof rawGigBal === 'object' ? (rawGigBal.total || 0) : (rawGigBal || 0);
  const activeBids = data.gigEconomy?.activeBids || 0;

  return (
    <div className="flex h-screen bg-[#09090b] text-white selection:bg-accent overflow-hidden font-sans">
      <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-8 overflow-y-auto scroll-smooth">
          <div className="max-w-[1600px] mx-auto space-y-12">
            
            {/* TRADING SECTION */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Market Intelligence</h2>
                  <p className="text-[9px] text-white/10 font-mono tracking-tighter">LAST_SYNC: {data.lastUpdated ? new Date(data.lastUpdated * 1000).toLocaleTimeString() : 'N/A'}</p>
                </div>
                <div className="h-px flex-1 bg-white/5 ml-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard 
                  title="Portfolio Equity" 
                  value={`$${equity.toFixed(2)}`} 
                  subtext="VST Tokens"
                  change={equity > 20 ? `+$${(equity - 20).toFixed(2)}` : `-$${(20 - equity).toFixed(2)}`} 
                  changeType={equity >= 20 ? "positive" : "negative"} 
                  icon="💰"
                />
                <StatsCard 
                  title="SOL Performance" 
                  value={regimes['SOL-USDT'] || 'STABLE'} 
                  subtext="15m SMA Regime"
                  change="Active Watch"
                  icon="🔥"
                />
                <StatsCard 
                  title="XRP Performance" 
                  value={regimes['XRP-USDT'] || 'STABLE'} 
                  subtext="15m SMA Regime"
                  change="Active Watch"
                  icon="📡"
                />
              </div>
            </section>

            {/* GIG ECONOMY */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Agent Revenue</h2>
                <div className="h-px flex-1 bg-white/5 ml-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatsCard 
                  title="Vesper Balance" 
                  value={`${gigBalance.toLocaleString()} $CLAW`} 
                  subtext="Earned on AgentGig"
                  change="Welcome Bonus Active"
                  changeType="positive"
                  icon="🦞"
                />
                <StatsCard 
                  title="Active Contracts" 
                  value={activeBids.toString()} 
                  subtext="Pending Bids"
                  change="Hunting for USDC" 
                  icon="💼"
                />
              </div>
            </section>

            {/* MAIN CHART & ACTIVITY */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 glass rounded-3xl p-1 overflow-hidden">
                <EquityChart />
              </div>
              <div className="glass rounded-3xl p-1 overflow-hidden">
                <ActivityFeed activities={activities} />
              </div>
            </div>

            {/* INTEL FEED */}
            <section className="space-y-6">
               <div className="flex items-center justify-between">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Signal Intelligence</h2>
                <div className="h-px flex-1 bg-white/5 ml-6"></div>
              </div>
              <div className="glass rounded-3xl p-8">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-4">Live Social Scan (X/Moltbook)</p>
                 <div className="bg-black/20 rounded-xl p-6 border border-white/5">
                    <pre className="text-xs text-white/60 font-mono whitespace-pre-wrap leading-relaxed">
                       {intelligence.x_signals || "Fetching signals..."}
                    </pre>
                 </div>
              </div>
            </section>

            {/* MISSION CONTROL */}
            <section className="space-y-6 pb-20">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">The Forge (Mission Control)</h2>
                <div className="h-px flex-1 bg-white/5 ml-6"></div>
              </div>
              <Kanban tasks={tasks} />
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
