import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { MapPin, Search, Navigation, Clock, Phone, CheckCircle } from 'lucide-react';

export function PharmacyMap() {
  const pharmacies = [
    {
      id: 1,
      name: 'Al-Dawaa Pharmacy',
      distance: '0.8 km',
      status: 'Open',
      hours: 'Open 24/7',
      phone: '011-234-5678',
      availability: {
        metformin: true,
        lisinopril: true,
        atorvastatin: false
      }
    },
    {
      id: 2,
      name: 'Nahdi Pharmacy',
      distance: '1.2 km',
      status: 'Open',
      hours: 'Closes at 11:00 PM',
      phone: '011-234-5679',
      availability: {
        metformin: true,
        lisinopril: true,
        atorvastatin: true
      }
    },
    {
      id: 3,
      name: 'United Pharmacy',
      distance: '1.5 km',
      status: 'Open',
      hours: 'Closes at 10:00 PM',
      phone: '011-234-5680',
      availability: {
        metformin: true,
        lisinopril: false,
        atorvastatin: true
      }
    },
    {
      id: 4,
      name: 'Boots Pharmacy',
      distance: '2.1 km',
      status: 'Closed',
      hours: 'Opens at 8:00 AM',
      phone: '011-234-5681',
      availability: {
        metformin: true,
        lisinopril: true,
        atorvastatin: true
      }
    }
  ];

  const myMedications = ['Metformin 500mg', 'Lisinopril 10mg', 'Atorvastatin 20mg'];

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <Card className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl mb-1">Smart Pharmacy Finder</h2>
            <p className="text-purple-100 text-sm">Find medications near you</p>
          </div>
          <MapPin className="w-10 h-10 text-white/80" />
        </div>
      </Card>

      {/* Search */}
      <Card className="p-4">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Search medication or pharmacy..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="w-full">
          <Navigation className="w-4 h-4 mr-2" />
          Use My Location
        </Button>
      </Card>

      {/* My Medications */}
      <Card className="p-4 bg-blue-50 border-blue-200">
        <h3 className="text-slate-900 mb-2">Check My Medications</h3>
        <p className="text-slate-600 text-sm mb-3">
          Find pharmacies that have your active medications in stock
        </p>
        <div className="space-y-2 mb-3">
          {myMedications.map((med) => (
            <div key={med} className="flex items-center justify-between p-2 bg-white rounded-lg">
              <span className="text-slate-900 text-sm">{med}</span>
              <CheckCircle className="w-4 h-4 text-blue-600" />
            </div>
          ))}
        </div>
        <Button className="w-full bg-blue-600">
          Find Available Pharmacies
        </Button>
      </Card>

      {/* Map Placeholder */}
      <Card className="p-0 overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-600 text-sm">Interactive Map View</p>
            </div>
          </div>
          {/* Map pins */}
          <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white">You</span>
          </div>
        </div>
      </Card>

      {/* Nearby Pharmacies */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-3">Nearby Pharmacies</h3>
        <div className="space-y-3">
          {pharmacies.map((pharmacy) => (
            <div 
              key={pharmacy.id} 
              className={`p-3 border-2 rounded-lg ${
                pharmacy.status === 'Open' 
                  ? 'border-emerald-200 bg-emerald-50' 
                  : 'border-slate-200 bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-slate-900 text-sm mb-1">{pharmacy.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {pharmacy.distance}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pharmacy.hours}
                    </div>
                  </div>
                </div>
                <Badge 
                  className={
                    pharmacy.status === 'Open'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-200 text-slate-700'
                  }
                >
                  {pharmacy.status}
                </Badge>
              </div>

              {/* Medication Availability */}
              {pharmacy.status === 'Open' && (
                <div className="mb-3 p-2 bg-white rounded-lg">
                  <p className="text-xs text-slate-600 mb-2">Your medications:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={pharmacy.availability.metformin ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}>
                      Metformin {pharmacy.availability.metformin ? '✓' : '✗'}
                    </Badge>
                    <Badge className={pharmacy.availability.lisinopril ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}>
                      Lisinopril {pharmacy.availability.lisinopril ? '✓' : '✗'}
                    </Badge>
                    <Badge className={pharmacy.availability.atorvastatin ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}>
                      Atorvastatin {pharmacy.availability.atorvastatin ? '✓' : '✗'}
                    </Badge>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Navigation className="w-3 h-3 mr-1" />
                  Navigate
                </Button>
                {pharmacy.status === 'Open' && (
                  <Button size="sm" className="flex-1 bg-purple-600">
                    Order
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Delivery Option */}
      <Card className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🚚</span>
          </div>
          <div className="flex-1">
            <h3 className="mb-1">Home Delivery Available</h3>
            <p className="text-purple-100 text-sm">Get your medications delivered to your door</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
