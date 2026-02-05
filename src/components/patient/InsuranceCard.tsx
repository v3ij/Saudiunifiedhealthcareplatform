import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CreditCard, QrCode, Download, Shield, CheckCircle } from 'lucide-react';

export function InsuranceCard() {
  return (
    <div className="p-4 space-y-4">
      {/* Digital Insurance Card */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-blue-100 text-sm mb-1">Ministry of Health</p>
            <h2 className="text-2xl">Health Insurance</h2>
          </div>
          <Shield className="w-10 h-10 text-white/80" />
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-blue-100 text-xs mb-1">Member Name</p>
            <p className="text-xl">Ahmed Al-Mansour</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-blue-100 text-xs mb-1">Member ID</p>
              <p className="text-lg">INS-1234567890</p>
            </div>
            <div>
              <p className="text-blue-100 text-xs mb-1">National ID</p>
              <p className="text-lg">1234567890</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-blue-100 text-xs mb-1">Policy Type</p>
              <p>Premium</p>
            </div>
            <div>
              <p className="text-blue-100 text-xs mb-1">Valid Until</p>
              <p>Dec 31, 2026</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-center">
          <div className="w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center">
            <QrCode className="w-20 h-20 text-slate-400" />
          </div>
        </div>

        <p className="text-center text-blue-100 text-xs mt-4">
          Scan at any participating healthcare facility
        </p>
      </div>

      {/* Coverage Status */}
      <Card className="p-4 bg-emerald-50 border-emerald-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-slate-900 mb-1">Active Coverage</h3>
            <p className="text-slate-600 text-sm">Your insurance is active and verified</p>
          </div>
        </div>
      </Card>

      {/* Coverage Details */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-3">Coverage Details</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-slate-600 text-sm">Inpatient Care</span>
            <Badge className="bg-emerald-100 text-emerald-700">100% Covered</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-slate-600 text-sm">Outpatient Care</span>
            <Badge className="bg-emerald-100 text-emerald-700">90% Covered</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-slate-600 text-sm">Medications</span>
            <Badge className="bg-emerald-100 text-emerald-700">85% Covered</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-slate-600 text-sm">Laboratory Tests</span>
            <Badge className="bg-emerald-100 text-emerald-700">100% Covered</Badge>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-slate-600 text-sm">Emergency Services</span>
            <Badge className="bg-emerald-100 text-emerald-700">100% Covered</Badge>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-slate-600 text-sm">Dental Care</span>
            <Badge className="bg-blue-100 text-blue-700">50% Covered</Badge>
          </div>
        </div>
      </Card>

      {/* Usage Summary */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-3">2025 Usage Summary</h3>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 text-sm">Annual Limit Used</span>
              <span className="text-slate-900">SAR 25,000 / SAR 100,000</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: '25%' }} />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="text-center">
              <div className="text-blue-600 text-xl mb-1">8</div>
              <div className="text-slate-600 text-xs">Doctor Visits</div>
            </div>
            <div className="text-center">
              <div className="text-emerald-600 text-xl mb-1">12</div>
              <div className="text-slate-600 text-xs">Prescriptions</div>
            </div>
            <div className="text-center">
              <div className="text-amber-600 text-xl mb-1">5</div>
              <div className="text-slate-600 text-xs">Lab Tests</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Provider Network */}
      <Card className="p-4">
        <h3 className="text-slate-900 mb-2">Provider Network</h3>
        <p className="text-slate-600 text-sm mb-3">
          Access to 500+ hospitals, 2,000+ clinics, and 3,500+ pharmacies nationwide
        </p>
        <Button variant="outline" className="w-full">
          Find Network Providers
        </Button>
      </Card>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="bg-blue-600">
          <Download className="w-4 h-4 mr-2" />
          Download Card
        </Button>
        <Button variant="outline">
          View Claims
        </Button>
      </div>
    </div>
  );
}
