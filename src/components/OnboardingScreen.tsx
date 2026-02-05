import { Button } from './ui/button';
import { Shield, Activity, Network } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-white text-5xl">
            Saudi Unified Health System
          </h1>
          <div className="text-emerald-400 text-2xl tracking-wider">SUHS</div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white mb-2">Secure & Official</h3>
            <p className="text-slate-300 text-sm">Government-grade security for all health data</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Network className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="text-white mb-2">Unified Network</h3>
            <p className="text-slate-300 text-sm">All healthcare providers connected</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Activity className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="text-white mb-2">Real-time Care</h3>
            <p className="text-slate-300 text-sm">Instant access to medical services</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 space-y-4">
          <p className="text-slate-300 text-sm">Ministry of Health - Kingdom of Saudi Arabia</p>
          <Button 
            onClick={onComplete}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg rounded-xl"
          >
            Enter Platform
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-xs">
            National Digital Health Infrastructure • Powered by AI & Cloud Technology
          </p>
        </div>
      </div>
    </div>
  );
}
