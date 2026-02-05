import { Card } from '../ui/card';
import { TrendingUp, Users, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AnalyticsDashboard() {
  const monthlyData = [
    { month: 'Jan', admissions: 45000, vaccinations: 120000 },
    { month: 'Feb', admissions: 48000, vaccinations: 115000 },
    { month: 'Mar', admissions: 52000, vaccinations: 125000 },
    { month: 'Apr', admissions: 49000, vaccinations: 130000 },
    { month: 'May', admissions: 51000, vaccinations: 128000 },
    { month: 'Jun', admissions: 47000, vaccinations: 122000 }
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-white text-2xl mb-2">Predictive Analytics</h2>
        <p className="text-slate-400">AI-powered forecasting and insights</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-slate-800 border-slate-700">
          <Users className="w-10 h-10 text-blue-400 mb-3" />
          <div className="text-3xl text-white mb-1">+5.2%</div>
          <div className="text-slate-400 text-sm">Admission Growth</div>
        </Card>
        <Card className="p-6 bg-slate-800 border-slate-700">
          <Activity className="w-10 h-10 text-emerald-400 mb-3" />
          <div className="text-3xl text-white mb-1">89%</div>
          <div className="text-slate-400 text-sm">System Efficiency</div>
        </Card>
        <Card className="p-6 bg-slate-800 border-slate-700">
          <TrendingUp className="w-10 h-10 text-purple-400 mb-3" />
          <div className="text-3xl text-white mb-1">750K</div>
          <div className="text-slate-400 text-sm">Monthly Vaccinations</div>
        </Card>
      </div>

      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-white text-lg mb-4">6-Month Trend Analysis</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Bar dataKey="admissions" fill="#3b82f6" />
            <Bar dataKey="vaccinations" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
