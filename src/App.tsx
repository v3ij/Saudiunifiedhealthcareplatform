import { useState } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { MainNavigation } from './components/MainNavigation';
import { PatientApp } from './components/patient/PatientApp';
import { HospitalDashboard } from './components/hospital/HospitalDashboard';
import { CommandCenter } from './components/command/CommandCenter';
import { PharmacySystem } from './components/pharmacy/PharmacySystem';
import { LaboratorySystem } from './components/laboratory/LaboratorySystem';

export type ViewMode = 'onboarding' | 'navigation' | 'patient' | 'hospital' | 'command' | 'pharmacy' | 'laboratory';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('onboarding');

  const renderView = () => {
    switch (currentView) {
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentView('navigation')} />;
      case 'navigation':
        return <MainNavigation onSelectModule={setCurrentView} />;
      case 'patient':
        return <PatientApp onBack={() => setCurrentView('navigation')} />;
      case 'hospital':
        return <HospitalDashboard onBack={() => setCurrentView('navigation')} />;
      case 'command':
        return <CommandCenter onBack={() => setCurrentView('navigation')} />;
      case 'pharmacy':
        return <PharmacySystem onBack={() => setCurrentView('navigation')} />;
      case 'laboratory':
        return <LaboratorySystem onBack={() => setCurrentView('navigation')} />;
      default:
        return <OnboardingScreen onComplete={() => setCurrentView('navigation')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {renderView()}
    </div>
  );
}
