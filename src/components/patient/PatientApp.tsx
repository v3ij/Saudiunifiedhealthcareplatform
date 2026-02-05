import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { 
  ArrowLeft, 
  Home, 
  Calendar, 
  FileText, 
  Pill, 
  Activity,
  MessageSquare,
  AlertCircle,
  CreditCard,
  MapPin,
  Star,
  User
} from 'lucide-react';
import { PatientHome } from './PatientHome';
import { AppointmentsView } from './AppointmentsView';
import { MedicalRecords } from './MedicalRecords';
import { MedicationsView } from './MedicationsView';
import { LabResults } from './LabResults';
import { AIAssistant } from './AIAssistant';
import { EmergencyView } from './EmergencyView';
import { InsuranceCard } from './InsuranceCard';
import { PharmacyMap } from './PharmacyMap';
import { ProfileView } from './ProfileView';

interface PatientAppProps {
  onBack: () => void;
}

type PatientView = 'home' | 'appointments' | 'records' | 'medications' | 'labs' | 'ai' | 'emergency' | 'insurance' | 'pharmacy' | 'profile';

export function PatientApp({ onBack }: PatientAppProps) {
  const [currentView, setCurrentView] = useState<PatientView>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <PatientHome onNavigate={setCurrentView} />;
      case 'appointments':
        return <AppointmentsView />;
      case 'records':
        return <MedicalRecords />;
      case 'medications':
        return <MedicationsView />;
      case 'labs':
        return <LabResults />;
      case 'ai':
        return <AIAssistant />;
      case 'emergency':
        return <EmergencyView />;
      case 'insurance':
        return <InsuranceCard />;
      case 'pharmacy':
        return <PharmacyMap />;
      case 'profile':
        return <ProfileView />;
      default:
        return <PatientHome onNavigate={setCurrentView} />;
    }
  };

  const navItems = [
    { id: 'home' as PatientView, icon: Home, label: 'Home' },
    { id: 'appointments' as PatientView, icon: Calendar, label: 'Appointments' },
    { id: 'records' as PatientView, icon: FileText, label: 'Records' },
    { id: 'ai' as PatientView, icon: MessageSquare, label: 'AI Assistant' },
    { id: 'profile' as PatientView, icon: User, label: 'Profile' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile App Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onBack}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg">Patient App</h1>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setCurrentView('emergency')}
            >
              <AlertCircle className="w-5 h-5 text-red-300" />
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="pb-20">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 max-w-md mx-auto">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex flex-col items-center justify-center py-3 ${
                    isActive 
                      ? 'text-blue-600' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
