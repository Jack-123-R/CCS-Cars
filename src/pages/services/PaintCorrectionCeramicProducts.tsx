
import { Card, CardContent } from "@/components/ui/card";

export function PaintCorrectionCeramicProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Products & Equipment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use only the finest professional-grade products and equipment for superior results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Gyeon Ceramic Coatings</h3>
              <p className="text-sm text-gray-600">Premium Korean ceramic coating technology with proven durability</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Rupes Polishing Systems</h3>
              <p className="text-sm text-gray-600">Professional Italian polishing machines for precise correction</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Paint Depth Gauges</h3>
              <p className="text-sm text-gray-600">Precise measurement tools to ensure safe correction limits</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Climate-Controlled Bay</h3>
              <p className="text-sm text-gray-600">Optimal environment for ceramic coating application and curing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
