import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  User, 
  Shield, 
  Bell, 
  FileText, 
  CreditCard, 
  Settings, 
  HelpCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';

export function ProfileView() {
  const profileSections = [
    {
      title: 'Personal Information',
      icon: User,
      items: [
        { label: 'Edit Profile', value: 'Update your personal details' },
        { label: 'Medical History', value: 'View complete history' },
        { label: 'Emergency Contacts', value: '2 contacts added' }
      ]
    },
    {
      title: 'Security & Privacy',
      icon: Shield,
      items: [
        { label: 'Change Password', value: 'Last changed 2 months ago' },
        { label: 'Two-Factor Authentication', value: 'Enabled' },
        { label: 'Biometric Login', value: 'Face ID enabled' },
        { label: 'Privacy Settings', value: 'Manage data sharing' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Push Notifications', value: 'Enabled' },
        { label: 'Email Notifications', value: 'Enabled' },
        { label: 'SMS Alerts', value: 'Enabled for appointments' }
      ]
    },
    {
      title: 'Documents',
      icon: FileText,
      items: [
        { label: 'Medical Reports', value: '24 documents' },
        { label: 'Lab Results', value: '18 results' },
        { label: 'Prescriptions', value: '32 prescriptions' }
      ]
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Profile Header */}
      <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            👨
          </div>
          <div className="flex-1">
            <h2 className="text-2xl mb-1">Ahmed Al-Mansour</h2>
            <p className="text-blue-100 text-sm mb-2">National ID: 1234567890</p>
            <Badge className="bg-emerald-500 text-white">Verified Account</Badge>
          </div>
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

      {/* Profile Sections */}
      {profileSections.map((section) => {
        const Icon = section.icon;
        return (
          <Card key={section.title} className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-5 h-5 text-slate-600" />
              <h3 className="text-slate-900">{section.title}</h3>
            </div>
            <div className="space-y-2">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <div className="text-left">
                    <div className="text-slate-900 text-sm mb-1">{item.label}</div>
                    <div className="text-slate-500 text-xs">{item.value}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>
          </Card>
        );
      })}

      {/* Insurance */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-5 h-5 text-slate-600" />
          <h3 className="text-slate-900">Insurance</h3>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-900 text-sm">Premium Plan</span>
            <Badge className="bg-emerald-100 text-emerald-700">Active</Badge>
          </div>
          <p className="text-slate-600 text-xs">
            Member ID: INS-1234567890
          </p>
          <p className="text-slate-600 text-xs">
            Valid until: Dec 31, 2026
          </p>
        </div>
        <Button variant="outline" className="w-full">
          View Insurance Card
        </Button>
      </Card>

      {/* Support */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-slate-600" />
          <h3 className="text-slate-900">Support & Help</h3>
        </div>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="text-slate-900 text-sm">Help Center</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="text-slate-900 text-sm">Contact Support</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="text-slate-900 text-sm">Terms & Privacy</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </Card>

      {/* App Info */}
      <Card className="p-4 bg-slate-50">
        <div className="text-center space-y-1">
          <p className="text-slate-600 text-sm">SUHS Patient App</p>
          <p className="text-slate-500 text-xs">Version 2.0.1</p>
          <p className="text-slate-500 text-xs">Ministry of Health - Kingdom of Saudi Arabia</p>
        </div>
      </Card>

      {/* Logout */}
      <Button 
        variant="outline" 
        className="w-full border-red-200 text-red-600 hover:bg-red-50"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}
