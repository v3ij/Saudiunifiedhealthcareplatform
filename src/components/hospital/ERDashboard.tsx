import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Activity, 
  Clock, 
  AlertCircle, 
  Users,
  Bed,
  TrendingUp,
  UserPlus
} from 'lucide-react';

export function ERDashboard() {
  const patients = [
    {
      id: 'ER-001',
      name: 'Mohammed Ali',
      age: 45,
      arrivalTime: '10:23 AM',
      chiefComplaint: 'Chest pain',
      triage: 'critical',
      triageColor: 'Red',
      waitTime: '0 min',
      assignedTo: 'Dr. Sarah Ahmed',
      status: 'In Treatment'
    },
    {
      id: 'ER-002',
      name: 'Fatima Hassan',
      age: 32,
      arrivalTime: '10:45 AM',
      chiefComplaint: 'Severe headache',
      triage: 'urgent',
      triageColor: 'Orange',
      waitTime: '12 min',
      assignedTo: 'Dr. Khalid Ibrahim',
      status: 'Awaiting Assessment'
    },
    {
      id: 'ER-003',
      name: 'Ahmed Abdullah',
      age: 28,
      arrivalTime: '11:05 AM',
      chiefComplaint: 'Sprained ankle',
      triage: 'semi-urgent',
      triageColor: 'Yellow',
      waitTime: '25 min',
      assignedTo: 'Unassigned',
      status: 'Waiting'
    },
    {
      id: 'ER-004',
      name: 'Sara Khalid',
      age: 19,
      arrivalTime: '11:15 AM',
      chiefComplaint: 'Fever and cough',
      triage: 'non-urgent',
      triageColor: 'Green',
      waitTime: '35 min',
      assignedTo: 'Unassigned',
      status: 'Waiting'
    }
  ];

  const triageStats = [
    { level: 'Critical (Red)', count: 1, color: 'bg-red-600' },
    { level: 'Urgent (Orange)', count: 3, color: 'bg-orange-500' },
    { level: 'Semi-Urgent (Yellow)', count: 5, color: 'bg-yellow-500' },
    { level: 'Non-Urgent (Green)', count: 15, color: 'bg-green-600' }
  ];

  const getTriageBadgeColor = (triage: string) => {
    switch (triage) {
      case 'critical':
        return 'bg-red-600 text-white';
      case 'urgent':
        return 'bg-orange-500 text-white';
      case 'semi-urgent':
        return 'bg-yellow-500 text-white';
      case 'non-urgent':
        return 'bg-green-600 text-white';
      default:
        return 'bg-slate-200 text-slate-700';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-slate-900 text-3xl mb-2">Emergency Room Dashboard</h1>
            <p className="text-slate-600">Real-time patient monitoring and triage</p>
          </div>
          <Button className="bg-emerald-600">
            <UserPlus className="w-4 h-4 mr-2" />
            New Patient
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-8 h-8 text-red-600" />
            <Badge className="bg-red-100 text-red-700">Live</Badge>
          </div>
          <div className="text-3xl text-slate-900 mb-1">24</div>
          <div className="text-slate-600 text-sm">Total Patients</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-8 h-8 text-amber-600" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">18</div>
          <div className="text-slate-600 text-sm">Avg Wait (min)</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">12</div>
          <div className="text-slate-600 text-sm">In Treatment</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Bed className="w-8 h-8 text-emerald-600" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">8/15</div>
          <div className="text-slate-600 text-sm">ER Beds Used</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
          <div className="text-3xl text-slate-900 mb-1">156</div>
          <div className="text-slate-600 text-sm">Today's Total</div>
        </Card>
      </div>

      {/* Triage Summary */}
      <Card className="p-6 mb-8">
        <h3 className="text-slate-900 text-lg mb-4">Triage Distribution</h3>
        <div className="grid grid-cols-4 gap-4">
          {triageStats.map((stat) => (
            <div key={stat.level} className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${stat.color}`} />
              <div className="flex-1">
                <div className="text-slate-900">{stat.level}</div>
                <div className="text-slate-600 text-sm">{stat.count} patients</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Patient Queue */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900 text-lg">Active Patient Queue</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Sort</Button>
          </div>
        </div>

        <div className="space-y-3">
          {patients.map((patient) => (
            <div 
              key={patient.id}
              className="p-4 border-2 border-slate-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-slate-900">{patient.name}</h4>
                      <Badge className={getTriageBadgeColor(patient.triage)}>
                        {patient.triageColor}
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm mb-1">
                      ID: {patient.id} • Age: {patient.age} • Arrived: {patient.arrivalTime}
                    </p>
                    <p className="text-slate-900 text-sm">
                      Chief Complaint: <span className="text-red-600">{patient.chiefComplaint}</span>
                    </p>
                  </div>
                </div>
                <Badge 
                  className={
                    patient.status === 'In Treatment'
                      ? 'bg-blue-100 text-blue-700'
                      : patient.status === 'Awaiting Assessment'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-slate-200 text-slate-700'
                  }
                >
                  {patient.status}
                </Badge>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-3 p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="text-slate-500 text-xs mb-1">Assigned To</div>
                  <div className="text-slate-900 text-sm">{patient.assignedTo}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-1">Wait Time</div>
                  <div className="text-slate-900 text-sm">{patient.waitTime}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-1">Triage Level</div>
                  <div className="text-slate-900 text-sm">{patient.triageColor}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-1">Arrival</div>
                  <div className="text-slate-900 text-sm">{patient.arrivalTime}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600">View Details</Button>
                <Button size="sm" variant="outline">Assign Doctor</Button>
                <Button size="sm" variant="outline">Update Status</Button>
                {patient.triage === 'critical' && (
                  <Button size="sm" className="bg-red-600 ml-auto">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Priority Alert
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
