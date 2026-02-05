import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { 
  ArrowLeft, 
  FlaskConical, 
  Search, 
  Activity,
  Clock,
  AlertCircle,
  Sparkles,
  Download
} from 'lucide-react';

interface LaboratorySystemProps {
  onBack: () => void;
}

export function LaboratorySystem({ onBack }: LaboratorySystemProps) {
  const [activeTab, setActiveTab] = useState<'pending' | 'inprogress' | 'completed'>('pending');

  const tests = [
    {
      id: 'LAB-2025-001',
      patient: 'Ahmed Al-Mansour',
      nationalId: '1234567890',
      testType: 'Complete Blood Count (CBC)',
      orderedBy: 'Dr. Sarah Ahmed',
      hospital: 'King Fahad Medical City',
      priority: 'Routine',
      orderTime: '09:30 AM',
      status: 'Pending',
      estimatedTime: '45 min'
    },
    {
      id: 'LAB-2025-002',
      patient: 'Fatima Hassan',
      nationalId: '0987654321',
      testType: 'Kidney Function Panel',
      orderedBy: 'Dr. Mohammed Ali',
      hospital: 'King Faisal Specialist Hospital',
      priority: 'Urgent',
      orderTime: '10:15 AM',
      status: 'In Progress',
      estimatedTime: '20 min'
    },
    {
      id: 'LAB-2025-003',
      patient: 'Mohammed Khalid',
      nationalId: '1122334455',
      testType: 'Lipid Panel',
      orderedBy: 'Dr. Khalid Ibrahim',
      hospital: 'National Guard Hospital',
      priority: 'Routine',
      orderTime: '08:45 AM',
      status: 'Completed',
      results: [
        { parameter: 'Total Cholesterol', value: '210', unit: 'mg/dL', range: '<200', status: 'high' },
        { parameter: 'LDL', value: '130', unit: 'mg/dL', range: '<100', status: 'high' },
        { parameter: 'HDL', value: '55', unit: 'mg/dL', range: '>40', status: 'normal' },
        { parameter: 'Triglycerides', value: '125', unit: 'mg/dL', range: '<150', status: 'normal' }
      ]
    },
    {
      id: 'RAD-2025-001',
      patient: 'Sara Abdullah',
      nationalId: '5566778899',
      testType: 'Chest X-Ray',
      orderedBy: 'Dr. Noura Ahmed',
      hospital: 'King Abdulaziz Medical City',
      priority: 'Stat',
      orderTime: '11:00 AM',
      status: 'In Progress',
      estimatedTime: '10 min'
    }
  ];

  const filteredTests = tests.filter(test => {
    if (activeTab === 'pending') return test.status === 'Pending';
    if (activeTab === 'inprogress') return test.status === 'In Progress';
    if (activeTab === 'completed') return test.status === 'Completed';
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FlaskConical className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl">Laboratory & Radiology System</h1>
                  <p className="text-amber-100 text-sm">Test Management & Results Processing</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                <span className="text-amber-100 text-sm">Central Lab - King Fahad Medical City</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300" />
            <Input
              placeholder="Search by test ID, patient name, or national ID..."
              className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-amber-200"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-700">Pending</Badge>
            </div>
            <div className="text-3xl text-slate-900 mb-1">89</div>
            <div className="text-slate-600 text-sm">Awaiting Processing</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-amber-600" />
            </div>
            <div className="text-3xl text-slate-900 mb-1">34</div>
            <div className="text-slate-600 text-sm">In Progress</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <FlaskConical className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl text-slate-900 mb-1">156</div>
            <div className="text-slate-600 text-sm">Completed Today</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-3xl text-slate-900 mb-1">22</div>
            <div className="text-slate-600 text-sm">Critical Results</div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white p-1 rounded-lg shadow-sm">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${
              activeTab === 'pending'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Pending Tests
          </button>
          <button
            onClick={() => setActiveTab('inprogress')}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${
              activeTab === 'inprogress'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 px-4 rounded-md transition-colors ${
              activeTab === 'completed'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Tests List */}
        <Card className="p-6">
          <div className="space-y-4">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="p-5 border-2 border-slate-200 rounded-xl hover:border-amber-400 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-slate-900 text-lg">{test.testType}</h4>
                      <Badge
                        className={
                          test.priority === 'Stat'
                            ? 'bg-red-600 text-white'
                            : test.priority === 'Urgent'
                            ? 'bg-amber-500 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }
                      >
                        {test.priority}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>Patient: {test.patient} (ID: {test.nationalId})</p>
                      <p>Ordered by: {test.orderedBy} • {test.hospital}</p>
                      <p>Test ID: {test.id} • Order Time: {test.orderTime}</p>
                    </div>
                  </div>
                  <Badge
                    className={
                      test.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : test.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-amber-100 text-amber-700'
                    }
                  >
                    {test.status}
                  </Badge>
                </div>

                {/* Results for completed tests */}
                {test.status === 'Completed' && test.results && (
                  <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                    <h5 className="text-slate-900 mb-3">Test Results</h5>
                    <div className="space-y-2">
                      {test.results.map((result, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                          <div className="flex-1">
                            <div className="text-slate-900 text-sm mb-1">{result.parameter}</div>
                            <div className="text-slate-500 text-xs">Range: {result.range} {result.unit}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className="text-slate-900">{result.value}</div>
                              <div className="text-slate-500 text-xs">{result.unit}</div>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              result.status === 'normal' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {result.status === 'normal' ? '✓' : '⚠'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AI Interpretation */}
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-blue-900 text-sm mb-1">AI Clinical Insight</div>
                          <div className="text-blue-700 text-xs">
                            LDL cholesterol is elevated. Consider lipid-lowering therapy and lifestyle modifications.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Estimated time for in-progress tests */}
                {test.status === 'In Progress' && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-900 text-sm">Estimated completion: {test.estimatedTime}</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  {test.status === 'Pending' && (
                    <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
                      Start Processing
                    </Button>
                  )}
                  {test.status === 'In Progress' && (
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Enter Results
                    </Button>
                  )}
                  {test.status === 'Completed' && (
                    <>
                      <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                      <Button className="flex-1" variant="outline">
                        Send to Doctor
                      </Button>
                      <Button className="flex-1" variant="outline">
                        Share with Patient
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
