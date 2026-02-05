import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { FlaskConical, Activity, Clock, AlertCircle } from 'lucide-react';

export function LabRadiology() {
  const tests = [
    { id: 'LAB-001', patient: 'Ahmed Ali', type: 'Complete Blood Count', ordered: '10:30 AM', status: 'Completed', priority: 'Routine' },
    { id: 'LAB-002', patient: 'Fatima Hassan', type: 'Kidney Function', ordered: '11:15 AM', status: 'In Progress', priority: 'Urgent' },
    { id: 'RAD-001', patient: 'Mohammed Khalid', type: 'Chest X-Ray', ordered: '09:45 AM', status: 'Pending Review', priority: 'Stat' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl mb-2">Lab & Radiology</h1>
        <p className="text-slate-600">Test orders and results management</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <FlaskConical className="w-8 h-8 text-blue-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">89</div>
          <div className="text-slate-600 text-sm">Pending Tests</div>
        </Card>
        <Card className="p-4">
          <Activity className="w-8 h-8 text-emerald-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">156</div>
          <div className="text-slate-600 text-sm">Completed Today</div>
        </Card>
        <Card className="p-4">
          <AlertCircle className="w-8 h-8 text-red-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">22</div>
          <div className="text-slate-600 text-sm">Critical Results</div>
        </Card>
        <Card className="p-4">
          <Clock className="w-8 h-8 text-amber-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">45</div>
          <div className="text-slate-600 text-sm">Avg TAT (min)</div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-slate-900 text-lg mb-4">Active Orders</h3>
        <div className="space-y-3">
          {tests.map((test) => (
            <div key={test.id} className="p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-slate-900">{test.type}</h4>
                    <Badge className={
                      test.priority === 'Stat' ? 'bg-red-600 text-white' :
                      test.priority === 'Urgent' ? 'bg-amber-500 text-white' :
                      'bg-slate-200 text-slate-700'
                    }>
                      {test.priority}
                    </Badge>
                  </div>
                  <p className="text-slate-600 text-sm">{test.patient} • ID: {test.id}</p>
                </div>
                <Badge className={
                  test.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                  test.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }>
                  {test.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-slate-500 text-sm">Ordered: {test.ordered}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  {test.status === 'Completed' && <Button size="sm" className="bg-blue-600">View Results</Button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
