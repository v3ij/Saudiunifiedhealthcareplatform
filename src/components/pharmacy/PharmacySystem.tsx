import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { 
  ArrowLeft, 
  Pill, 
  Search, 
  CheckCircle, 
  Package,
  User,
  Sparkles
} from 'lucide-react';

interface PharmacySystemProps {
  onBack: () => void;
}

export function PharmacySystem({ onBack }: PharmacySystemProps) {
  const [selectedPrescription, setSelectedPrescription] = useState<number | null>(null);

  const prescriptions = [
    {
      id: 1,
      patient: 'Ahmed Al-Mansour',
      nationalId: '1234567890',
      doctor: 'Dr. Mohammed Ali',
      hospital: 'King Faisal Specialist Hospital',
      date: 'Nov 21, 2025',
      status: 'Ready',
      medications: [
        { name: 'Metformin 500mg', quantity: 90, dosage: 'Twice daily', available: true },
        { name: 'Lisinopril 10mg', quantity: 30, dosage: 'Once daily', available: true }
      ]
    },
    {
      id: 2,
      patient: 'Fatima Hassan',
      nationalId: '0987654321',
      doctor: 'Dr. Sarah Ahmed',
      hospital: 'King Fahad Medical City',
      date: 'Nov 21, 2025',
      status: 'Pending',
      medications: [
        { name: 'Amoxicillin 500mg', quantity: 21, dosage: 'Three times daily', available: false },
        { name: 'Ibuprofen 400mg', quantity: 30, dosage: 'As needed', available: true }
      ]
    },
    {
      id: 3,
      patient: 'Mohammed Khalid',
      nationalId: '1122334455',
      doctor: 'Dr. Noura Ahmed',
      hospital: 'National Guard Hospital',
      date: 'Nov 21, 2025',
      status: 'Completed',
      medications: [
        { name: 'Atorvastatin 20mg', quantity: 30, dosage: 'Once daily at bedtime', available: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Pill className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl">Smart Pharmacy System</h1>
                  <p className="text-purple-100 text-sm">E-Prescriptions & Medication Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                <span className="text-purple-100 text-sm">Al-Dawaa Pharmacy - Riyadh</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
            <Input
              placeholder="Search by patient ID, name, or prescription number..."
              className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-purple-200"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-700">Today</Badge>
            </div>
            <div className="text-3xl text-slate-900 mb-1">45</div>
            <div className="text-slate-600 text-sm">E-Prescriptions</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-3xl text-slate-900 mb-1">32</div>
            <div className="text-slate-600 text-sm">Completed</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-amber-600" />
            </div>
            <div className="text-3xl text-slate-900 mb-1">8</div>
            <div className="text-slate-600 text-sm">Ready for Pickup</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <User className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl text-slate-900 mb-1">5</div>
            <div className="text-slate-600 text-sm">Awaiting Stock</div>
          </Card>
        </div>

        {/* Prescriptions List */}
        <Card className="p-6">
          <h3 className="text-slate-900 text-lg mb-4">Active E-Prescriptions</h3>
          <div className="space-y-4">
            {prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className={`p-5 border-2 rounded-xl transition-all cursor-pointer ${
                  selectedPrescription === prescription.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-slate-200 hover:border-purple-300'
                }`}
                onClick={() => setSelectedPrescription(prescription.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-1">{prescription.patient}</h4>
                      <p className="text-slate-600 text-sm mb-1">National ID: {prescription.nationalId}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>Prescribed by: {prescription.doctor}</span>
                        <span>•</span>
                        <span>{prescription.hospital}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        prescription.status === 'Ready'
                          ? 'bg-emerald-100 text-emerald-700'
                          : prescription.status === 'Pending'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-slate-200 text-slate-700'
                      }
                    >
                      {prescription.status}
                    </Badge>
                    <span className="text-slate-500 text-sm">{prescription.date}</span>
                  </div>
                </div>

                {/* Medications */}
                <div className="space-y-2 mb-4 pl-15">
                  {prescription.medications.map((med, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg flex items-center justify-between ${
                        med.available ? 'bg-white border border-slate-200' : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Pill className={`w-4 h-4 ${med.available ? 'text-purple-600' : 'text-red-600'}`} />
                        <div>
                          <div className="text-slate-900 text-sm">{med.name}</div>
                          <div className="text-slate-600 text-xs">
                            Quantity: {med.quantity} • {med.dosage}
                          </div>
                        </div>
                      </div>
                      <Badge
                        className={
                          med.available
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-red-100 text-red-700'
                        }
                      >
                        {med.available ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* AI Alternative Suggestions */}
                {prescription.medications.some(m => !m.available) && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-blue-900 text-sm mb-1">AI Suggestion</div>
                        <div className="text-blue-700 text-xs">
                          Alternative available: Generic Amoxicillin 500mg - Same efficacy, lower cost
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                        View Alternatives
                      </Button>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    className={`flex-1 ${
                      prescription.status === 'Ready'
                        ? 'bg-emerald-600 hover:bg-emerald-700'
                        : prescription.status === 'Pending'
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    {prescription.status === 'Ready'
                      ? 'Mark as Dispensed'
                      : prescription.status === 'Pending'
                      ? 'Process Prescription'
                      : 'View Receipt'}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Verify National ID
                  </Button>
                  {prescription.status === 'Ready' && (
                    <Button variant="outline" className="flex-1">
                      Arrange Delivery
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}