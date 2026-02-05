import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { FlaskConical, TrendingUp, TrendingDown, Minus, Download } from 'lucide-react';

export function LabResults() {
  const recentTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      date: 'Nov 18, 2025',
      status: 'Normal',
      lab: 'King Fahad Medical City Lab',
      results: [
        { parameter: 'WBC', value: '7.2', unit: '10^9/L', range: '4.0-11.0', status: 'normal' },
        { parameter: 'RBC', value: '5.1', unit: '10^12/L', range: '4.5-5.5', status: 'normal' },
        { parameter: 'Hemoglobin', value: '14.5', unit: 'g/dL', range: '13.5-17.5', status: 'normal' },
        { parameter: 'Platelets', value: '250', unit: '10^9/L', range: '150-400', status: 'normal' }
      ]
    },
    {
      id: 2,
      name: 'HbA1c (Diabetes)',
      date: 'Nov 10, 2025',
      status: 'Good Control',
      lab: 'King Faisal Specialist Hospital',
      results: [
        { parameter: 'HbA1c', value: '6.2', unit: '%', range: '<7.0', status: 'normal' }
      ]
    },
    {
      id: 3,
      name: 'Lipid Panel',
      date: 'Oct 28, 2025',
      status: 'Borderline',
      lab: 'National Guard Hospital',
      results: [
        { parameter: 'Total Cholesterol', value: '210', unit: 'mg/dL', range: '<200', status: 'high' },
        { parameter: 'LDL', value: '130', unit: 'mg/dL', range: '<100', status: 'high' },
        { parameter: 'HDL', value: '55', unit: 'mg/dL', range: '>40', status: 'normal' },
        { parameter: 'Triglycerides', value: '125', unit: 'mg/dL', range: '<150', status: 'normal' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'normal':
        return 'bg-emerald-100 text-emerald-700';
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'low':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getTrendIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'high':
        return <TrendingUp className="w-3 h-3" />;
      case 'low':
        return <TrendingDown className="w-3 h-3" />;
      default:
        return <Minus className="w-3 h-3" />;
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Card className="p-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white border-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl mb-1">Lab Results</h2>
            <p className="text-amber-100 text-sm">Track your test results</p>
          </div>
          <FlaskConical className="w-10 h-10 text-white/80" />
        </div>
      </Card>

      {/* Quick Summary */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <div className="text-emerald-600 text-2xl mb-1">28</div>
          <div className="text-slate-600 text-xs">Total Tests</div>
        </Card>
        <Card className="p-3 text-center">
          <div className="text-blue-600 text-2xl mb-1">3</div>
          <div className="text-slate-600 text-xs">This Month</div>
        </Card>
        <Card className="p-3 text-center">
          <div className="text-amber-600 text-2xl mb-1">2</div>
          <div className="text-slate-600 text-xs">Pending</div>
        </Card>
      </div>

      {/* Recent Tests */}
      <div className="space-y-3">
        {recentTests.map((test) => (
          <Card key={test.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-slate-900 mb-1">{test.name}</h3>
                <p className="text-slate-500 text-xs mb-2">{test.lab}</p>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(test.status)}>
                    {test.status}
                  </Badge>
                  <span className="text-slate-500 text-xs">{test.date}</span>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <Download className="w-4 h-4" />
              </Button>
            </div>

            {/* Results Table */}
            <div className="space-y-2 mt-3 pt-3 border-t border-slate-100">
              {test.results.map((result, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex-1">
                    <div className="text-slate-900 text-sm mb-1">{result.parameter}</div>
                    <div className="text-slate-500 text-xs">Range: {result.range} {result.unit}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-slate-900">{result.value}</div>
                      <div className="text-slate-500 text-xs">{result.unit}</div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(result.status)}`}>
                      {getTrendIcon(result.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <Button variant="outline" size="sm" className="w-full">
                View Full Report
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pending Tests */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <h3 className="text-slate-900 mb-3">Pending Tests</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white rounded-lg">
            <div>
              <div className="text-slate-900 text-sm">Kidney Function Panel</div>
              <div className="text-slate-500 text-xs">Ordered Nov 19, 2025</div>
            </div>
            <Badge className="bg-amber-100 text-amber-700">Processing</Badge>
          </div>
          <div className="flex items-center justify-between p-2 bg-white rounded-lg">
            <div>
              <div className="text-slate-900 text-sm">Thyroid Function</div>
              <div className="text-slate-500 text-xs">Scheduled for Nov 25, 2025</div>
            </div>
            <Badge className="bg-slate-200 text-slate-700">Scheduled</Badge>
          </div>
        </div>
      </Card>

      {/* AI Insights */}
      <Card className="p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div className="flex-1">
            <h3 className="mb-1">AI Health Insights</h3>
            <p className="text-emerald-100 text-sm">
              Your HbA1c shows good diabetes control. LDL cholesterol is slightly elevated - discuss with your doctor.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
