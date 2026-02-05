import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Activity, Bed, Users, AlertTriangle, TrendingUp, Building2, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface CommandHomeProps {
  onNavigate: (view: string) => void;
}

export function CommandHome({ onNavigate }: CommandHomeProps) {
  const regionsData = [
    { name: 'Riyadh', hospitals: 45, beds: 12500, occupancy: 78, icu: 85 },
    { name: 'Jeddah', hospitals: 38, beds: 10200, occupancy: 72, icu: 80 },
    { name: 'Mecca', hospitals: 28, beds: 7800, occupancy: 68, icu: 75 },
    { name: 'Medina', hospitals: 22, beds: 6100, occupancy: 65, icu: 70 },
    { name: 'Dammam', hospitals: 32, beds: 8900, occupancy: 74, icu: 82 }
  ];

  const weeklyTrend = [
    { day: 'Mon', admissions: 2400, discharges: 2100 },
    { day: 'Tue', admissions: 2600, discharges: 2300 },
    { day: 'Wed', admissions: 2800, discharges: 2500 },
    { day: 'Thu', admissions: 2500, discharges: 2400 },
    { day: 'Fri', admissions: 2200, discharges: 2600 },
    { day: 'Sat', admissions: 1900, discharges: 2200 },
    { day: 'Sun', admissions: 2100, discharges: 2000 }
  ];

  return (
    <div className="p-8">
      {/* National Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <Building2 className="w-10 h-10 text-blue-400" />
            <Badge className="bg-blue-900/50 text-blue-300 border-blue-700">Live</Badge>
          </div>
          <div className="text-4xl text-white mb-2">524</div>
          <div className="text-slate-400 text-sm">Total Facilities</div>
        </Card>

        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <Bed className="w-10 h-10 text-emerald-400" />
            <div className="text-emerald-400 text-sm">76%</div>
          </div>
          <div className="text-4xl text-white mb-2">65,234</div>
          <div className="text-slate-400 text-sm">Total Beds</div>
        </Card>

        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <Activity className="w-10 h-10 text-red-400" />
            <Badge className="bg-red-900/50 text-red-300 border-red-700">89%</Badge>
          </div>
          <div className="text-4xl text-white mb-2">3,245</div>
          <div className="text-slate-400 text-sm">ICU Beds</div>
        </Card>

        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <Users className="w-10 h-10 text-purple-400" />
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-4xl text-white mb-2">48,920</div>
          <div className="text-slate-400 text-sm">Active Patients</div>
        </Card>

        <Card className="p-6 bg-slate-800 border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-10 h-10 text-amber-400" />
            <Badge className="bg-amber-900/50 text-amber-300 border-amber-700">Monitor</Badge>
          </div>
          <div className="text-4xl text-white mb-2">12</div>
          <div className="text-slate-400 text-sm">Active Alerts</div>
        </Card>
      </div>

      {/* Map and Charts */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Map Placeholder */}
        <Card className="p-6 bg-slate-800 border-slate-700">
          <h3 className="text-white text-lg mb-4">National Hospital Capacity Map</h3>
          <div className="h-96 bg-slate-900 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-slate-600" />
            </div>
            {/* Simulated map markers */}
            <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-xs">45</span>
            </div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-xs">38</span>
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-xs">32</span>
            </div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs">28</span>
            </div>
          </div>
        </Card>

        {/* Weekly Trend */}
        <Card className="p-6 bg-slate-800 border-slate-700">
          <h3 className="text-white text-lg mb-4">Weekly Patient Flow</h3>
          <ResponsiveContainer width="100%" height={370}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Line type="monotone" dataKey="admissions" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="discharges" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Regional Breakdown */}
      <Card className="p-6 bg-slate-800 border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg">Regional Health Systems</h3>
          <button 
            onClick={() => onNavigate('capacity')}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            View Details →
          </button>
        </div>
        <div className="space-y-3">
          {regionsData.map((region) => (
            <div key={region.name} className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-white mb-1">{region.name} Region</h4>
                  <p className="text-slate-400 text-sm">{region.hospitals} Facilities</p>
                </div>
                <Badge className={
                  region.occupancy > 75 ? 'bg-red-900/50 text-red-300 border-red-700' :
                  region.occupancy > 65 ? 'bg-amber-900/50 text-amber-300 border-amber-700' :
                  'bg-emerald-900/50 text-emerald-300 border-emerald-700'
                }>
                  {region.occupancy}% Occupancy
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-slate-400 text-xs mb-1">Total Beds</div>
                  <div className="text-white text-lg">{region.beds.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Bed Occupancy</div>
                  <div className="text-white text-lg">{region.occupancy}%</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">ICU Occupancy</div>
                  <div className={`text-lg ${region.icu > 80 ? 'text-red-400' : 'text-white'}`}>
                    {region.icu}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
