import { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Globe, Activity, AlertTriangle, TrendingUp } from 'lucide-react';
import { CommandHome } from './CommandHome';
import { HospitalCapacity } from './HospitalCapacity';
import { DiseaseOutbreak } from './DiseaseOutbreak';
import { AnalyticsDashboard } from './AnalyticsDashboard';

interface CommandCenterProps {
  onBack: () => void;
}

type CommandView = 'home' | 'capacity' | 'outbreak' | 'analytics';

export function CommandCenter({ onBack }: CommandCenterProps) {
  const [currentView, setCurrentView] = useState<CommandView>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <CommandHome onNavigate={setCurrentView} />;
      case 'capacity':
        return <HospitalCapacity />;
      case 'outbreak':
        return <DiseaseOutbreak />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return <CommandHome onNavigate={setCurrentView} />;
    }
  };

  const navItems = [
    { id: 'home' as CommandView, icon: Globe, label: 'Overview' },
    { id: 'capacity' as CommandView, icon: Activity, label: 'Capacity' },
    { id: 'outbreak' as CommandView, icon: AlertTriangle, label: 'Outbreaks' },
    { id: 'analytics' as CommandView, icon: TrendingUp, label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-950 border-b border-slate-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white text-xl">National Health Command Center</h1>
                <p className="text-slate-400 text-sm">Ministry of Health - Kingdom of Saudi Arabia</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-emerald-900/30 border border-emerald-700 rounded-lg">
              <span className="text-emerald-400 text-sm">System Status: </span>
              <span className="text-emerald-300">Operational</span>
            </div>
            <div className="px-3 py-1 bg-blue-900/30 border border-blue-700 rounded-lg">
              <span className="text-blue-400 text-sm">Last Update: </span>
              <span className="text-blue-300">Real-time</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
}
