import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, Clock, Users } from 'lucide-react';

export function ClinicsScheduling() {
  const clinics = [
    { name: 'Cardiology', doctor: 'Dr. Sarah Ahmed', appointments: 24, completed: 16, remaining: 8, status: 'In Session' },
    { name: 'Endocrinology', doctor: 'Dr. Mohammed Ali', appointments: 18, completed: 12, remaining: 6, status: 'In Session' },
    { name: 'Orthopedics', doctor: 'Dr. Khalid Ibrahim', appointments: 20, completed: 20, remaining: 0, status: 'Completed' },
    { name: 'Dermatology', doctor: 'Dr. Noura Ahmed', appointments: 16, completed: 8, remaining: 8, status: 'Break' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl mb-2">Outpatient Clinics Scheduling</h1>
        <p className="text-slate-600">Manage appointments and clinic operations</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <Calendar className="w-8 h-8 text-blue-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">186</div>
          <div className="text-slate-600 text-sm">Total Today</div>
        </Card>
        <Card className="p-4">
          <Users className="w-8 h-8 text-emerald-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">144</div>
          <div className="text-slate-600 text-sm">Completed</div>
        </Card>
        <Card className="p-4">
          <Clock className="w-8 h-8 text-amber-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">42</div>
          <div className="text-slate-600 text-sm">Remaining</div>
        </Card>
        <Card className="p-4">
          <Users className="w-8 h-8 text-purple-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">12</div>
          <div className="text-slate-600 text-sm">Active Clinics</div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-slate-900 text-lg mb-4">Active Clinics</h3>
        <div className="space-y-3">
          {clinics.map((clinic) => (
            <div key={clinic.name} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-slate-900 mb-1">{clinic.name}</h4>
                  <p className="text-slate-600 text-sm">{clinic.doctor}</p>
                </div>
                <Badge className={
                  clinic.status === 'In Session' ? 'bg-emerald-100 text-emerald-700' :
                  clinic.status === 'Completed' ? 'bg-slate-200 text-slate-700' :
                  'bg-amber-100 text-amber-700'
                }>
                  {clinic.status}
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center p-2 bg-slate-50 rounded">
                  <div className="text-slate-900 text-xl">{clinic.appointments}</div>
                  <div className="text-slate-500 text-xs">Total</div>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <div className="text-emerald-600 text-xl">{clinic.completed}</div>
                  <div className="text-slate-500 text-xs">Completed</div>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded">
                  <div className="text-blue-600 text-xl">{clinic.remaining}</div>
                  <div className="text-slate-500 text-xs">Remaining</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">View Schedule</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
