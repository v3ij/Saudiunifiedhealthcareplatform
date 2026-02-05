import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Activity, 
  Bed, 
  Users, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Pill,
  FileText
} from 'lucide-react';

interface HospitalHomeProps {
  onNavigate: (view: string) => void;
}

export function HospitalHome({ onNavigate }: HospitalHomeProps) {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl mb-2">Hospital Dashboard</h1>
        <p className="text-slate-600">Real-time overview of King Fahad Medical City</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-red-600" />
            </div>
            <Badge className="bg-red-100 text-red-700">Live</Badge>
          </div>
          <div className="text-3xl text-slate-900 mb-1">24</div>
          <div className="text-slate-600 text-sm mb-2">ER Patients</div>
          <div className="flex items-center gap-1 text-red-600 text-xs">
            <TrendingUp className="w-3 h-3" />
            +3 in last hour
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Bed className="w-6 h-6 text-blue-600" />
            </div>
            <Badge className="bg-amber-100 text-amber-700">78%</Badge>
          </div>
          <div className="text-3xl text-slate-900 mb-1">390/500</div>
          <div className="text-slate-600 text-sm mb-2">Beds Occupied</div>
          <div className="flex items-center gap-1 text-blue-600 text-xs">
            110 beds available
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <Badge className="bg-emerald-100 text-emerald-700">On Duty</Badge>
          </div>
          <div className="text-3xl text-slate-900 mb-1">245</div>
          <div className="text-slate-600 text-sm mb-2">Staff Members</div>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            120 Doctors, 125 Nurses
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <Badge className="bg-purple-100 text-purple-700">Today</Badge>
          </div>
          <div className="text-3xl text-slate-900 mb-1">186</div>
          <div className="text-slate-600 text-sm mb-2">Appointments</div>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            42 remaining
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card 
          className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('er')}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
              <Activity className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 mb-1">Emergency Room</h3>
              <p className="text-slate-600 text-sm">Triage & patient flow</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('beds')}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Bed className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 mb-1">Bed Management</h3>
              <p className="text-slate-600 text-sm">ICU, General, Isolation</p>
            </div>
          </div>
        </Card>

        <Card 
          className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('clinics')}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 mb-1">Clinics Scheduling</h3>
              <p className="text-slate-600 text-sm">Outpatient appointments</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Alerts & Lab/Pharmacy */}
      <div className="grid grid-cols-2 gap-6">
        {/* Critical Alerts */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900">Critical Alerts</h3>
            <Badge className="bg-red-100 text-red-700">3 Active</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-slate-900 text-sm mb-1">ICU Bed Capacity Critical</div>
                <div className="text-slate-600 text-xs">Only 2 ICU beds available - consider transfers</div>
                <div className="text-red-600 text-xs mt-1">5 minutes ago</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-slate-900 text-sm mb-1">Pharmacy Stock Low</div>
                <div className="text-slate-600 text-xs">Antibiotics inventory below threshold</div>
                <div className="text-amber-600 text-xs mt-1">1 hour ago</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="text-slate-900 text-sm mb-1">Lab Results Pending Review</div>
                <div className="text-slate-600 text-xs">12 critical lab results awaiting physician review</div>
                <div className="text-blue-600 text-xs mt-1">2 hours ago</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Lab & Pharmacy Quick Access */}
        <div className="space-y-6">
          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigate('pharmacy')}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Pill className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-900 mb-1">Pharmacy Inventory</h3>
                <p className="text-slate-600 text-sm">Stock levels & orders</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-2 bg-slate-50 rounded-lg">
                <div className="text-emerald-600 text-xl mb-1">1,234</div>
                <div className="text-slate-600 text-xs">Items</div>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded-lg">
                <div className="text-amber-600 text-xl mb-1">28</div>
                <div className="text-slate-600 text-xs">Low Stock</div>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded-lg">
                <div className="text-blue-600 text-xl mb-1">45</div>
                <div className="text-slate-600 text-xs">Pending</div>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigate('lab')}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-900 mb-1">Lab & Radiology</h3>
                <p className="text-slate-600 text-sm">Tests & imaging orders</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-2 bg-slate-50 rounded-lg">
                <div className="text-blue-600 text-xl mb-1">89</div>
                <div className="text-slate-600 text-xs">Pending</div>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded-lg">
                <div className="text-emerald-600 text-xl mb-1">156</div>
                <div className="text-slate-600 text-xs">Today</div>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded-lg">
                <div className="text-purple-600 text-xl mb-1">22</div>
                <div className="text-slate-600 text-xs">Critical</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
