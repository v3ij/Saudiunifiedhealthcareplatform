import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Pill, AlertTriangle, TrendingDown, Package } from 'lucide-react';

export function PharmacyInventory() {
  const medications = [
    { name: 'Metformin 500mg', stock: 1250, minStock: 500, category: 'Diabetes', status: 'In Stock' },
    { name: 'Lisinopril 10mg', stock: 180, minStock: 300, category: 'Cardiovascular', status: 'Low Stock' },
    { name: 'Amoxicillin 500mg', stock: 95, minStock: 500, category: 'Antibiotics', status: 'Critical' },
    { name: 'Atorvastatin 20mg', stock: 850, minStock: 400, category: 'Cardiovascular', status: 'In Stock' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl mb-2">Pharmacy Inventory</h1>
        <p className="text-slate-600">Stock management and medication tracking</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <Package className="w-8 h-8 text-blue-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">1,234</div>
          <div className="text-slate-600 text-sm">Total Items</div>
        </Card>
        <Card className="p-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">28</div>
          <div className="text-slate-600 text-sm">Low Stock</div>
        </Card>
        <Card className="p-4">
          <TrendingDown className="w-8 h-8 text-red-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">8</div>
          <div className="text-slate-600 text-sm">Critical</div>
        </Card>
        <Card className="p-4">
          <Pill className="w-8 h-8 text-emerald-600 mb-2" />
          <div className="text-3xl text-slate-900 mb-1">45</div>
          <div className="text-slate-600 text-sm">Pending Orders</div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900 text-lg">Inventory Status</h3>
          <Button size="sm" className="bg-emerald-600">Create Order</Button>
        </div>
        <div className="space-y-3">
          {medications.map((med) => (
            <div key={med.name} className={`p-4 border-2 rounded-lg ${
              med.status === 'Critical' ? 'border-red-300 bg-red-50' :
              med.status === 'Low Stock' ? 'border-amber-300 bg-amber-50' :
              'border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="text-slate-900">{med.name}</h4>
                  <p className="text-slate-600 text-sm">{med.category}</p>
                </div>
                <Badge className={
                  med.status === 'Critical' ? 'bg-red-600 text-white' :
                  med.status === 'Low Stock' ? 'bg-amber-500 text-white' :
                  'bg-emerald-100 text-emerald-700'
                }>
                  {med.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-slate-600">Stock: </span>
                  <span className="text-slate-900">{med.stock} units</span>
                  <span className="text-slate-500 ml-2">(Min: {med.minStock})</span>
                </div>
                <Button variant="outline" size="sm">Reorder</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
