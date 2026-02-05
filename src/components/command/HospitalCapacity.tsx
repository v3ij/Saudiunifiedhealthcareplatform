import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Bed, Activity, TrendingUp } from 'lucide-react';

export function HospitalCapacity() {
  const hospitals = [
    { name: 'King Fahad Medical City', city: 'Riyadh', beds: 1200, occupied: 950, icu: 85, status: 'Available' },
    { name: 'King Faisal Specialist Hospital', city: 'Riyadh', beds: 900, occupied: 780, icu: 92, status: 'Near Capacity' },
    { name: 'National Guard Hospital', city: 'Riyadh', beds: 750, occupied: 680, icu: 88, status: 'Available' },
    { name: 'King Abdulaziz Medical City', city: 'Jeddah', beds: 850, occupied: 620, icu: 75, status: 'Available' },
  ];

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-white text-2xl mb-2">Hospital Capacity Monitoring</h2>
        <p className="text-slate-400">Real-time bed availability across the kingdom</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="p-6 bg-slate-800 border-slate-700">
          <Bed className="w-10 h-10 text-blue-400 mb-3" />
          <div className="text-3xl text-white mb-1">12,450</div>
          <div className="text-slate-400 text-sm">Available Beds</div>
        </Card>
        <Card className="p-6 bg-slate-800 border-slate-700">
          <Activity className="w-10 h-10 text-red-400 mb-3" />
          <div className="text-3xl text-white mb-1">348</div>
          <div className="text-slate-400 text-sm">Available ICU</div>
        </Card>
        <Card className="p-6 bg-slate-800 border-slate-700">
          <TrendingUp className="w-10 h-10 text-emerald-400 mb-3" />
          <div className="text-3xl text-white mb-1">76%</div>
          <div className="text-slate-400 text-sm">Avg Occupancy</div>
        </Card>
      </div>

      <Card className="p-6 bg-slate-800 border-slate-700">
        <h3 className="text-white text-lg mb-4">Major Hospitals</h3>
        <div className="space-y-3">
          {hospitals.map((hospital) => (
            <div key={hospital.name} className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-white mb-1">{hospital.name}</h4>
                  <p className="text-slate-400 text-sm">{hospital.city}</p>
                </div>
                <Badge className={
                  hospital.status === 'Available' ? 'bg-emerald-900/50 text-emerald-300 border-emerald-700' :
                  'bg-amber-900/50 text-amber-300 border-amber-700'
                }>
                  {hospital.status}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-slate-400 text-xs mb-1">Total Beds</div>
                  <div className="text-white">{hospital.beds}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Occupied</div>
                  <div className="text-white">{hospital.occupied}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">ICU Occupancy</div>
                  <div className={`${hospital.icu > 85 ? 'text-red-400' : 'text-white'}`}>{hospital.icu}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
