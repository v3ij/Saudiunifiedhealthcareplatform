import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { FileText, Download, Share, Calendar, User, Activity } from 'lucide-react';

export function MedicalRecords() {
  const medicalHistory = [
    {
      id: 1,
      type: 'Visit',
      title: 'Cardiology Consultation',
      doctor: 'Dr. Sarah Ahmed',
      date: 'Nov 15, 2025',
      hospital: 'King Fahad Medical City',
      summary: 'Regular checkup - Blood pressure stable, ECG normal'
    },
    {
      id: 2,
      type: 'Lab',
      title: 'Complete Blood Count',
      doctor: 'Dr. Mohammed Ali',
      date: 'Nov 10, 2025',
      hospital: 'King Faisal Specialist Hospital',
      summary: 'All values within normal range'
    },
    {
      id: 3,
      type: 'Prescription',
      title: 'Diabetes Medication',
      doctor: 'Dr. Mohammed Ali',
      date: 'Nov 1, 2025',
      hospital: 'King Faisal Specialist Hospital',
      summary: 'Metformin 500mg - 3 months supply'
    }
  ];

  const chronicConditions = [
    { name: 'Type 2 Diabetes', since: '2020', status: 'Controlled' },
    { name: 'Hypertension', since: '2021', status: 'Controlled' }
  ];

  const allergies = [
    { name: 'Penicillin', severity: 'High', reaction: 'Rash, breathing difficulty' },
    { name: 'Shellfish', severity: 'Moderate', reaction: 'Hives' }
  ];

  const vaccinations = [
    { name: 'COVID-19 Booster', date: 'Oct 2025', nextDue: 'Oct 2026' },
    { name: 'Influenza', date: 'Sep 2025', nextDue: 'Sep 2026' },
    { name: 'Tetanus', date: 'Jan 2023', nextDue: 'Jan 2033' }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Header Card */}
      <Card className="p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl mb-1">Unified Medical File</h2>
            <p className="text-emerald-100 text-sm">Complete health history</p>
          </div>
          <FileText className="w-10 h-10 text-white/80" />
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <div className="text-blue-600 text-2xl mb-1">45</div>
          <div className="text-slate-600 text-xs">Total Visits</div>
        </Card>
        <Card className="p-3 text-center">
          <div className="text-emerald-600 text-2xl mb-1">28</div>
          <div className="text-slate-600 text-xs">Lab Tests</div>
        </Card>
        <Card className="p-3 text-center">
          <div className="text-purple-600 text-2xl mb-1">12</div>
          <div className="text-slate-600 text-xs">Prescriptions</div>
        </Card>
      </div>

      {/* Chronic Conditions */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Chronic Conditions</h3>
          <Activity className="w-5 h-5 text-slate-400" />
        </div>
        <div className="space-y-2">
          {chronicConditions.map((condition) => (
            <div key={condition.name} className="p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-900 text-sm">{condition.name}</span>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                  {condition.status}
                </Badge>
              </div>
              <p className="text-slate-500 text-xs">Since {condition.since}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Allergies */}
      <Card className="p-4 border-2 border-red-200 bg-red-50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Allergies</h3>
          <Badge className="bg-red-600 text-white text-xs">Important</Badge>
        </div>
        <div className="space-y-2">
          {allergies.map((allergy) => (
            <div key={allergy.name} className="p-3 bg-white rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-900 text-sm">{allergy.name}</span>
                <Badge 
                  className={`text-xs ${
                    allergy.severity === 'High' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {allergy.severity}
                </Badge>
              </div>
              <p className="text-slate-600 text-xs">{allergy.reaction}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Vaccinations */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Vaccination History</h3>
          <Button size="sm" variant="outline">View All</Button>
        </div>
        <div className="space-y-2">
          {vaccinations.map((vaccine) => (
            <div key={vaccine.name} className="p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-900 text-sm">{vaccine.name}</span>
                <Badge className="bg-blue-100 text-blue-700 text-xs">✓</Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Last: {vaccine.date}</span>
                <span className="text-slate-500">Next: {vaccine.nextDue}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Medical History */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-3">Recent Medical History</h3>
        <div className="space-y-3">
          {medicalHistory.map((record) => (
            <div key={record.id} className="border-l-4 border-blue-500 pl-3 py-2">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Badge className="bg-blue-100 text-blue-700 text-xs mb-1">
                    {record.type}
                  </Badge>
                  <h4 className="text-slate-900 text-sm">{record.title}</h4>
                </div>
                <span className="text-slate-500 text-xs">{record.date}</span>
              </div>
              <p className="text-slate-600 text-xs mb-2">{record.summary}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {record.doctor}
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  {record.hospital}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-blue-600" size="lg">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
        <Button variant="outline" size="lg">
          <Share className="w-4 h-4 mr-2" />
          Share Records
        </Button>
      </div>
    </div>
  );
}
