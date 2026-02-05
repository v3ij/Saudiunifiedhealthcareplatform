import { Button } from './ui/button';
import { Card } from './ui/card';
import { Smartphone, Building2, Globe, Pill, FlaskConical, Shield } from 'lucide-react';
import { ViewMode } from '../App';

interface MainNavigationProps {
  onSelectModule: (view: ViewMode) => void;
}

export function MainNavigation({ onSelectModule }: MainNavigationProps) {
  const modules = [
    {
      id: 'patient' as ViewMode,
      title: 'Patient Mobile App',
      description: 'Unified medical file, appointments, AI assistant',
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'hospital' as ViewMode,
      title: 'Hospital Dashboard',
      description: 'ER, beds, clinics, operations, AI support',
      icon: Building2,
      color: 'from-emerald-500 to-emerald-600',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'command' as ViewMode,
      title: 'National Command Center',
      description: 'Real-time analytics, capacity, outbreak detection',
      icon: Globe,
      color: 'from-red-500 to-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 'pharmacy' as ViewMode,
      title: 'Pharmacy System',
      description: 'E-prescriptions, drug availability, delivery',
      icon: Pill,
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'laboratory' as ViewMode,
      title: 'Laboratory & Radiology',
      description: 'Test orders, results, AI interpretation',
      icon: FlaskConical,
      color: 'from-amber-500 to-amber-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-slate-900 text-3xl">Saudi Unified Health System</h1>
              <p className="text-slate-600">SUHS Platform Modules</p>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.id}
                className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-emerald-500"
                onClick={() => onSelectModule(module.id)}
              >
                <div className="space-y-4">
                  <div className={`${module.iconBg} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${module.iconColor}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-slate-900 text-xl mb-2">{module.title}</h3>
                    <p className="text-slate-600 text-sm">{module.description}</p>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${module.color} text-white`}
                  >
                    Open Module
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-slate-900 text-white border-0">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-emerald-400 text-2xl">24/7</div>
                <div className="text-slate-400 text-sm">System Uptime</div>
              </div>
              <div className="h-12 w-px bg-slate-700" />
              <div>
                <div className="text-blue-400 text-2xl">500+</div>
                <div className="text-slate-400 text-sm">Connected Facilities</div>
              </div>
              <div className="h-12 w-px bg-slate-700" />
              <div>
                <div className="text-purple-400 text-2xl">10M+</div>
                <div className="text-slate-400 text-sm">Active Users</div>
              </div>
              <div className="h-12 w-px bg-slate-700" />
              <div>
                <div className="text-red-400 text-2xl">AI Powered</div>
                <div className="text-slate-400 text-sm">Smart Healthcare</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
