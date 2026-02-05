import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Bed, Users, AlertCircle } from 'lucide-react';

export function BedManagement() {
  const departments = [
    { name: 'ICU', total: 50, occupied: 48, available: 2, reserved: 0, status: 'critical' },
    { name: 'General Ward', total: 300, occupied: 235, available: 55, reserved: 10, status: 'normal' },
    { name: 'Isolation', total: 40, occupied: 28, available: 12, reserved: 0, status: 'normal' },
    { name: 'Maternity', total: 60, occupied: 42, available: 18, reserved: 0, status: 'normal' },
    { name: 'Pediatrics', total: 50, occupied: 37, available: 10, reserved: 3, status: 'warning' }
  ];

  const beds = [
    { id: 'ICU-001', department: 'ICU', patient: 'Ahmed Ali', diagnosis: 'Post-surgical recovery', status: 'Occupied', daysIn: 3 },
    { id: 'ICU-002', department: 'ICU', patient: 'Fatima Hassan', diagnosis: 'Respiratory distress', status: 'Occupied', daysIn: 1 },
    { id: 'ICU-003', department: 'ICU', patient: null, diagnosis: null, status: 'Available', daysIn: 0 },
    { id: 'GW-045', department: 'General Ward', patient: 'Mohammed Khalid', diagnosis: 'Diabetes management', status: 'Occupied', daysIn: 2 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl mb-2">Bed Management System</h1>
        <p className="text-slate-600">Real-time bed availability and patient tracking</p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {departments.map((dept) => (
          <Card key={dept.name} className={`p-4 ${dept.status === 'critical' ? 'border-2 border-red-500' : ''}`}>
            <h3 className="text-slate-900 mb-3">{dept.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Total:</span>
                <span className="text-slate-900">{dept.total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Occupied:</span>
                <span className="text-blue-600">{dept.occupied}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Available:</span>
                <span className={dept.available < 5 ? 'text-red-600' : 'text-emerald-600'}>{dept.available}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200">
              <div className="text-2xl text-slate-900">{Math.round((dept.occupied/dept.total)*100)}%</div>
              <div className="text-slate-500 text-xs">Occupancy</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bed List */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900 text-lg">Bed Status</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">All Departments</Button>
            <Button size="sm" className="bg-emerald-600">Assign Bed</Button>
          </div>
        </div>

        <div className="space-y-3">
          {beds.map((bed) => (
            <div key={bed.id} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    bed.status === 'Occupied' ? 'bg-blue-100' : 'bg-emerald-100'
                  }`}>
                    <Bed className={`w-5 h-5 ${bed.status === 'Occupied' ? 'text-blue-600' : 'text-emerald-600'}`} />
                  </div>
                  <div>
                    <div className="text-slate-900 mb-1">Bed {bed.id}</div>
                    <div className="text-slate-600 text-sm">{bed.department}</div>
                  </div>
                </div>
                <div className="flex-1 mx-8">
                  {bed.patient ? (
                    <div>
                      <div className="text-slate-900 text-sm mb-1">{bed.patient}</div>
                      <div className="text-slate-600 text-xs">{bed.diagnosis}</div>
                      <div className="text-slate-500 text-xs mt-1">Day {bed.daysIn} of admission</div>
                    </div>
                  ) : (
                    <div className="text-emerald-600 text-sm">Available for assignment</div>
                  )}
                </div>
                <Badge className={bed.status === 'Occupied' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}>
                  {bed.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
