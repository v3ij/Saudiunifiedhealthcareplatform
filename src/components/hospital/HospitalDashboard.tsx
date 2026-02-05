import { useState } from 'react';
import { Button } from '../ui/button';
import { 
  ArrowLeft, 
  Home, 
  Activity, 
  Bed, 
  Calendar,
  Pill,
  FileText,
  Users,
  Settings
} from 'lucide-react';
import { HospitalHome } from './HospitalHome';
import { ERDashboard } from './ERDashboard';
import { BedManagement } from './BedManagement';
import { ClinicsScheduling } from './ClinicsScheduling';
import { PharmacyInventory } from './PharmacyInventory';
import { LabRadiology } from './LabRadiology';

interface HospitalDashboardProps {
  onBack: () => void;
}

type HospitalView = 'home' | 'er' | 'beds' | 'clinics' | 'pharmacy' | 'lab';

export function HospitalDashboard({ onBack }: HospitalDashboardProps) {
  const [currentView, setCurrentView] = useState<HospitalView>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HospitalHome onNavigate={setCurrentView} />;
      case 'er':
        return <ERDashboard />;
      case 'beds':
        return <BedManagement />;
      case 'clinics':
        return <ClinicsScheduling />;
      case 'pharmacy':
        return <PharmacyInventory />;
      case 'lab':
        return <LabRadiology />;
      default:
        return <HospitalHome onNavigate={setCurrentView} />;
    }
  };

  const navItems = [
    { id: 'home' as HospitalView, icon: Home, label: 'Home' },
    { id: 'er' as HospitalView, icon: Activity, label: 'ER' },
    { id: 'beds' as HospitalView, icon: Bed, label: 'Beds' },
    { id: 'clinics' as HospitalView, icon: Calendar, label: 'Clinics' },
    { id: 'pharmacy' as HospitalView, icon: Pill, label: 'Pharmacy' },
    { id: 'lab' as HospitalView, icon: FileText, label: 'Lab' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-900 min-h-screen fixed left-0 top-0">
          {/* Header */}
          <div className="p-4 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white">SUHS</h2>
                <p className="text-slate-400 text-xs">Hospital System</p>
              </div>
            </div>
          </div>

          {/* Hospital Info */}
          <div className="p-4 border-b border-slate-700">
            <p className="text-slate-400 text-xs mb-1">Current Facility</p>
            <p className="text-white text-sm">King Fahad Medical City</p>
            <p className="text-emerald-400 text-xs mt-1">Riyadh, Saudi Arabia</p>
          </div>

          {/* Navigation */}
          <nav className="p-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
            <Button
              variant="ghost"
              className="w-full text-slate-300 hover:text-white hover:bg-slate-800 mb-2"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button
              variant="ghost"
              onClick={onBack}
              className="w-full text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Modules
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
