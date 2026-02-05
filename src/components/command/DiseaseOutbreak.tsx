import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { AlertTriangle, TrendingUp, Activity } from 'lucide-react';

export function DiseaseOutbreak() {
  const outbreaks = [
    { disease: 'Influenza Type A', cases: 234, trend: 'increasing', severity: 'Monitor', region: 'Riyadh' },
    { disease: 'COVID-19', cases: 45, trend: 'stable', severity: 'Low', region: 'Nationwide' },
    { disease: 'Dengue Fever', cases: 12, trend: 'decreasing', severity: 'Monitor', region: 'Jeddah' }
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-white text-2xl mb-2">Disease Outbreak Detection</h2>
        <p className="text-slate-400">AI-powered surveillance and trend analysis</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-slate-800 border-slate-700">
          <AlertTriangle className="w-10 h-10 text-amber-400 mb-3" />
          <div className="text-3xl text-white mb-1">3</div>
          <div className="text-slate-400 text-sm">Active Outbreaks</div>
        </Card>
        <Card className="p-6 bg-slate-800 border-slate-700">
          <Activity className="w-10 h-10 text-blue-400 mb-3" />
          <div className="text-3xl text-white mb-1">291</div>
          <div className="text-slate-400 text-sm">Total Cases</div>
        </Card>
        <Card className="p-6 bg-slate-800 border-slate-700">
          <TrendingUp className="w-10 h-10 text-emerald-400 mb-3" />
          <div className="text-3xl text-white mb-1">12</div>
          <div className="text-slate-400 text-sm">Regions Monitored</div>
        </Card>
      </div>

      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-white text-lg mb-4">Active Surveillance</h3>
        <div className="space-y-3">
          {outbreaks.map((outbreak) => (
            <div key={outbreak.disease} className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white">{outbreak.disease}</h4>
                <div className="flex items-center gap-2">
                  <Badge className={
                    outbreak.severity === 'Monitor' ? 'bg-amber-900/50 text-amber-300 border-amber-700' :
                    'bg-emerald-900/50 text-emerald-300 border-emerald-700'
                  }>
                    {outbreak.severity}
                  </Badge>
                  <Badge className={
                    outbreak.trend === 'increasing' ? 'bg-red-900/50 text-red-300 border-red-700' :
                    outbreak.trend === 'decreasing' ? 'bg-emerald-900/50 text-emerald-300 border-emerald-700' :
                    'bg-blue-900/50 text-blue-300 border-blue-700'
                  }>
                    {outbreak.trend}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Region: {outbreak.region}</span>
                <span className="text-white">Cases: {outbreak.cases}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
