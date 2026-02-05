import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Calendar, Clock, MapPin, Search, Filter, Plus } from 'lucide-react';

export function AppointmentsView() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'book'>('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Ahmed',
      specialty: 'Cardiology',
      date: 'Tomorrow',
      time: '10:00 AM',
      hospital: 'King Fahad Medical City',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Mohammed Ali',
      specialty: 'Endocrinology',
      date: 'Dec 25, 2025',
      time: '2:30 PM',
      hospital: 'King Faisal Specialist Hospital',
      status: 'confirmed'
    },
    {
      id: 3,
      doctor: 'Dr. Fatima Hassan',
      specialty: 'General Medicine',
      date: 'Dec 28, 2025',
      time: '11:00 AM',
      hospital: 'National Guard Hospital',
      status: 'pending'
    }
  ];

  const pastAppointments = [
    {
      id: 4,
      doctor: 'Dr. Khalid Ibrahim',
      specialty: 'Internal Medicine',
      date: 'Nov 15, 2025',
      time: '9:00 AM',
      hospital: 'King Fahad Medical City',
      status: 'completed'
    },
    {
      id: 5,
      doctor: 'Dr. Noura Ahmed',
      specialty: 'Ophthalmology',
      date: 'Oct 22, 2025',
      time: '1:00 PM',
      hospital: 'King Khaled Eye Specialist Hospital',
      status: 'completed'
    }
  ];

  const specialties = [
    'Cardiology',
    'Endocrinology',
    'Orthopedics',
    'Dermatology',
    'Neurology',
    'General Medicine',
    'Pediatrics',
    'Ophthalmology'
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`flex-1 py-2 px-4 rounded-md text-sm transition-colors ${
            activeTab === 'upcoming'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`flex-1 py-2 px-4 rounded-md text-sm transition-colors ${
            activeTab === 'past'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600'
          }`}
        >
          Past
        </button>
        <button
          onClick={() => setActiveTab('book')}
          className={`flex-1 py-2 px-4 rounded-md text-sm transition-colors ${
            activeTab === 'book'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600'
          }`}
        >
          Book New
        </button>
      </div>

      {/* Upcoming Appointments */}
      {activeTab === 'upcoming' && (
        <div className="space-y-3">
          {upcomingAppointments.map((apt) => (
            <Card key={apt.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-slate-900 mb-1">{apt.doctor}</h3>
                  <p className="text-slate-600 text-sm mb-2">{apt.specialty}</p>
                  <Badge 
                    className={
                      apt.status === 'confirmed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }
                  >
                    {apt.status}
                  </Badge>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">👨‍⚕️</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600">{apt.date}</span>
                  <Clock className="w-4 h-4 text-slate-400 ml-2" />
                  <span className="text-slate-600">{apt.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600">{apt.hospital}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-blue-600">
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Reschedule
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Past Appointments */}
      {activeTab === 'past' && (
        <div className="space-y-3">
          {pastAppointments.map((apt) => (
            <Card key={apt.id} className="p-4 bg-slate-50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-slate-900 mb-1">{apt.doctor}</h3>
                  <p className="text-slate-600 text-sm mb-2">{apt.specialty}</p>
                  <Badge className="bg-slate-200 text-slate-700">
                    {apt.status}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600">{apt.date}</span>
                  <Clock className="w-4 h-4 text-slate-400 ml-2" />
                  <span className="text-slate-600">{apt.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600">{apt.hospital}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Summary
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Book Again
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Book New Appointment */}
      {activeTab === 'book' && (
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="text-slate-900 mb-3">Search by Specialty</h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search specialty or doctor..."
                className="pl-10"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  className="p-3 border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  {specialty}
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-slate-900 mb-1">Multi-Hospital Booking</h3>
                <p className="text-slate-600 text-sm">
                  Search and book appointments across 500+ healthcare facilities in Saudi Arabia
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-slate-900 mb-3">Nearby Hospitals</h3>
            <div className="space-y-2">
              {[
                'King Fahad Medical City',
                'King Faisal Specialist Hospital',
                'National Guard Hospital',
                'King Abdulaziz Medical City'
              ].map((hospital) => (
                <button
                  key={hospital}
                  className="w-full p-3 border border-slate-200 rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-900 text-sm">{hospital}</span>
                    </div>
                    <span className="text-blue-600 text-xs">View</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
