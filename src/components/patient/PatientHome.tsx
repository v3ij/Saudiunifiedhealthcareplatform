import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Calendar, 
  Pill, 
  Activity, 
  FlaskConical, 
  AlertCircle,
  CreditCard,
  MapPin,
  Bell,
  TrendingUp,
  Heart,
  Thermometer,
  Weight
} from 'lucide-react';

interface PatientHomeProps {
  onNavigate: (view: string) => void;
}

export function PatientHome({ onNavigate }: PatientHomeProps) {
  return (
    <div className="p-4 space-y-4">
      {/* Welcome Card */}
      <Card className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-100 text-sm mb-1">Welcome back,</p>
            <h2 className="text-2xl mb-2">Ahmed Al-Mansour</h2>
            <p className="text-blue-100 text-sm">National ID: 1234567890</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">👨</span>
          </div>
        </div>
      </Card>

      {/* Health Status */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Today's Health Status</h3>
          <Badge className="bg-emerald-100 text-emerald-700">Good</Badge>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-slate-900">72</div>
            <div className="text-slate-500 text-xs">BPM</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-slate-900">120/80</div>
            <div className="text-slate-500 text-xs">BP</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Weight className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-slate-900">75kg</div>
            <div className="text-slate-500 text-xs">Weight</div>
          </div>
        </div>
      </Card>

      {/* Upcoming Appointment */}
      <Card className="p-4 border-2 border-blue-200 bg-blue-50">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 mb-1">Upcoming Appointment</h3>
            <p className="text-slate-600 text-sm mb-1">Dr. Sarah Ahmed - Cardiology</p>
            <p className="text-blue-600 text-sm">Tomorrow, 10:00 AM</p>
            <p className="text-slate-500 text-xs mt-1">King Fahad Medical City</p>
          </div>
          <Button size="sm" className="bg-blue-600">View</Button>
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="text-slate-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          <button 
            onClick={() => onNavigate('appointments')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-slate-600">Book</span>
          </button>
          
          <button 
            onClick={() => onNavigate('medications')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
              <Pill className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs text-slate-600">Meds</span>
          </button>
          
          <button 
            onClick={() => onNavigate('labs')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-xs text-slate-600">Labs</span>
          </button>
          
          <button 
            onClick={() => onNavigate('pharmacy')}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xs text-slate-600">Pharmacy</span>
          </button>
        </div>
      </div>

      {/* Active Medications */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Active Medications</h3>
          <Button variant="ghost" size="sm" onClick={() => onNavigate('medications')}>
            View All
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
            <div>
              <div className="text-slate-900 text-sm">Metformin 500mg</div>
              <div className="text-slate-500 text-xs">Take with breakfast</div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 text-xs">Active</Badge>
          </div>
          <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
            <div>
              <div className="text-slate-900 text-sm">Lisinopril 10mg</div>
              <div className="text-slate-500 text-xs">Once daily</div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 text-xs">Active</Badge>
          </div>
        </div>
      </Card>

      {/* Recent Lab Results */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Recent Lab Results</h3>
          <Button variant="ghost" size="sm" onClick={() => onNavigate('labs')}>
            View All
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-amber-600" />
              <div>
                <div className="text-slate-900 text-sm">Complete Blood Count</div>
                <div className="text-slate-500 text-xs">2 days ago</div>
              </div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700 text-xs">Normal</Badge>
          </div>
          <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-amber-600" />
              <div>
                <div className="text-slate-900 text-sm">HbA1c Test</div>
                <div className="text-slate-500 text-xs">1 week ago</div>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-700 text-xs">6.2%</Badge>
          </div>
        </div>
      </Card>

      {/* Insurance & Emergency */}
      <div className="grid grid-cols-2 gap-3">
        <Card 
          className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('insurance')}
        >
          <CreditCard className="w-8 h-8 text-purple-600 mb-2" />
          <h3 className="text-slate-900 text-sm mb-1">Insurance Card</h3>
          <p className="text-slate-500 text-xs">View digital card</p>
        </Card>
        
        <Card 
          className="p-4 cursor-pointer hover:shadow-lg transition-shadow bg-red-50 border-red-200"
          onClick={() => onNavigate('emergency')}
        >
          <AlertCircle className="w-8 h-8 text-red-600 mb-2" />
          <h3 className="text-slate-900 text-sm mb-1">Emergency</h3>
          <p className="text-slate-500 text-xs">Quick access</p>
        </Card>
      </div>

      {/* AI Assistant Banner */}
      <Card className="p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🤖</span>
          </div>
          <div className="flex-1">
            <h3 className="mb-1">AI Health Assistant</h3>
            <p className="text-emerald-100 text-sm">Ask me anything about your health</p>
          </div>
          <Button 
            size="sm" 
            className="bg-white text-emerald-600 hover:bg-white/90"
            onClick={() => onNavigate('ai')}
          >
            Chat
          </Button>
        </div>
      </Card>
    </div>
  );
}
