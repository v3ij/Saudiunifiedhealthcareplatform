import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { AlertCircle, Phone, MapPin, Navigation, Clock, Ambulance } from 'lucide-react';

export function EmergencyView() {
  const nearbyERs = [
    {
      id: 1,
      name: 'King Fahad Medical City ER',
      distance: '2.3 km',
      waitTime: '15 min',
      capacity: 'Available',
      phone: '011-234-5678'
    },
    {
      id: 2,
      name: 'King Faisal Specialist Hospital ER',
      distance: '3.8 km',
      waitTime: '25 min',
      capacity: 'Busy',
      phone: '011-234-5679'
    },
    {
      id: 3,
      name: 'National Guard Hospital ER',
      distance: '5.1 km',
      waitTime: '10 min',
      capacity: 'Available',
      phone: '011-234-5680'
    }
  ];

  const emergencyContacts = [
    { name: 'Emergency Medical Services', number: '997', icon: '🚑' },
    { name: 'Red Crescent', number: '997', icon: '🏥' },
    { name: 'Poison Control', number: '920-000-997', icon: '☠️' }
  ];

  const medicalInfo = [
    { label: 'Blood Type', value: 'O+' },
    { label: 'Allergies', value: 'Penicillin, Shellfish' },
    { label: 'Chronic Conditions', value: 'Type 2 Diabetes, Hypertension' },
    { label: 'Current Medications', value: 'Metformin, Lisinopril' }
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Emergency Header */}
      <Card className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white border-0">
        <div className="text-center space-y-4">
          <AlertCircle className="w-16 h-16 mx-auto" />
          <div>
            <h2 className="text-2xl mb-2">Emergency Services</h2>
            <p className="text-red-100">Quick access to emergency care</p>
          </div>
        </div>
      </Card>

      {/* Quick Call 997 */}
      <Card className="p-6 bg-red-50 border-2 border-red-300">
        <div className="text-center space-y-3">
          <div className="text-6xl">🚨</div>
          <h3 className="text-slate-900 text-xl">Medical Emergency?</h3>
          <Button 
            size="lg" 
            className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
          >
            <Phone className="w-6 h-6 mr-2" />
            Call 997 Now
          </Button>
          <p className="text-slate-600 text-xs">
            24/7 Emergency Medical Services
          </p>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-3">Emergency Hotlines</h3>
        <div className="space-y-2">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.number}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{contact.icon}</span>
                <div>
                  <div className="text-slate-900 text-sm">{contact.name}</div>
                  <div className="text-slate-600 text-xs">{contact.number}</div>
                </div>
              </div>
              <Button size="sm" className="bg-red-600">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Nearest ERs */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-slate-900">Nearest Emergency Rooms</h3>
          <Button size="sm" variant="ghost">
            <Navigation className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-3">
          {nearbyERs.map((er) => (
            <div key={er.id} className="p-3 border border-slate-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-slate-900 text-sm mb-1">{er.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {er.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {er.waitTime} wait
                    </div>
                  </div>
                </div>
                <Badge 
                  className={
                    er.capacity === 'Available'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }
                >
                  {er.capacity}
                </Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Navigation className="w-3 h-3 mr-1" />
                  Navigate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Medical Information */}
      <Card className="p-4 border-2 border-blue-200 bg-blue-50">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          <h3 className="text-slate-900">Critical Medical Information</h3>
        </div>
        <div className="space-y-2">
          {medicalInfo.map((info) => (
            <div key={info.label} className="flex justify-between py-2 border-b border-blue-100 last:border-0">
              <span className="text-slate-600 text-sm">{info.label}:</span>
              <span className="text-slate-900 text-sm">{info.value}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Request Ambulance */}
      <Button size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
        <Ambulance className="w-5 h-5 mr-2" />
        Request Ambulance to My Location
      </Button>

      {/* Disclaimer */}
      <Card className="p-3 bg-slate-50">
        <p className="text-slate-600 text-xs text-center">
          In case of life-threatening emergency, call 997 immediately. 
          This app provides quick access but should not replace emergency calls.
        </p>
      </Card>
    </div>
  );
}
