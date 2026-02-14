import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function EquityChart() {
  const data = [
    { time: '00:00', equity: 25.00 },
    { time: '04:00', equity: 26.50 },
    { time: '08:00', equity: 24.80 },
    { time: '12:00', equity: 27.20 },
    { time: '16:00', equity: 28.90 },
    { time: '20:00', equity: 28.30 },
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-gray-800">
      <h3 className="text-white text-lg font-semibold mb-4">Equity Chart</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="time" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#9CA3AF' }}
              itemStyle={{ color: '#FF6B00' }}
            />
            <Line 
              type="monotone" 
              dataKey="equity" 
              stroke="#FF6B00" 
              strokeWidth={2}
              dot={{ fill: '#FF6B00', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
