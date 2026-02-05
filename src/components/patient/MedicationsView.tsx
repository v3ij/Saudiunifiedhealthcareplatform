import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Pill, Clock, Bell, AlertTriangle, CheckCircle } from 'lucide-react';

export function MedicationsView() {
  const medications = [
    {
      id: 1,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      timing: ['8:00 AM', '8:00 PM'],
      withFood: true,
      refillDate: 'Dec 30, 2025',
      remaining: 45,
      status: 'active'
    },
    {
      id: 2,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      timing: ['9:00 AM'],
      withFood: false,
      refillDate: 'Jan 15, 2026',
      remaining: 60,
      status: 'active'
    },
    {
      id: 3,
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      timing: ['10:00 PM'],
      withFood: false,
      refillDate: 'Dec 28, 2025',
      remaining: 12,
      status: 'low_stock'
    }
  ];

  const todaySchedule = [
    { time: '8:00 AM', medication: 'Metformin 500mg', taken: true },
    { time: '9:00 AM', medication: 'Lisinopril 10mg', taken: true },
    { time: '2:00 PM', medication: 'Vitamin D3', taken: false },
    { time: '8:00 PM', medication: 'Metformin 500mg', taken: false },
    { time: '10:00 PM', medication: 'Atorvastatin 20mg', taken: false }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Card className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl mb-1">My Medications</h2>
            <p className="text-purple-100 text-sm">Active prescriptions & schedule</p>
          </div>
          <Pill className="w-10 h-10 text-white/80" />
        </div>
      </Card>

      {/* Today's Schedule */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-3">Today's Schedule</h3>
        <div className="space-y-2">
          {todaySchedule.map((item, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg border ${
                item.taken 
                  ? 'bg-emerald-50 border-emerald-200' 
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.taken ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}>
                    {item.taken ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-slate-900 text-sm">{item.medication}</div>
                    <div className="text-slate-500 text-xs">{item.time}</div>
                  </div>
                </div>
                {!item.taken && (
                  <Button size="sm" className="bg-purple-600">
                    Mark Taken
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Active Medications */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Active Medications</h3>
          <Button size="sm" variant="outline">Add New</Button>
        </div>
        <div className="space-y-3">
          {medications.map((med) => (
            <div 
              key={med.id} 
              className={`p-4 rounded-lg border-2 ${
                med.status === 'low_stock' 
                  ? 'border-amber-200 bg-amber-50' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-slate-900 mb-1">{med.name}</h4>
                  <p className="text-slate-600 text-sm">{med.dosage} - {med.frequency}</p>
                </div>
                {med.status === 'low_stock' && (
                  <Badge className="bg-amber-500 text-white">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Low Stock
                  </Badge>
                )}
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-3 h-3" />
                  {med.timing.join(', ')}
                  {med.withFood && ' (with food)'}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Pills remaining: {med.remaining}</span>
                  <span className="text-slate-500">Refill: {med.refillDate}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Refill Now
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Reminders */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 text-sm mb-1">Medication Reminders</h3>
            <p className="text-slate-600 text-xs">
              You'll receive notifications for all scheduled medications
            </p>
          </div>
          <Badge className="bg-emerald-100 text-emerald-700">ON</Badge>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-purple-600">
          Request Refill
        </Button>
        <Button variant="outline">
          Medication History
        </Button>
      </div>
    </div>
  );
}
