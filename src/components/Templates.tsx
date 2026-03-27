import { ExternalLink, Play } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  description: string;
  category: string;
  color: string;
}

interface TemplatesProps {
  onUseTemplate?: () => void;
}

export default function Templates({ onUseTemplate }: TemplatesProps) {
  const templates: Template[] = [
    {
      id: 1,
      name: 'TripVault',
      description: 'Travel booking platform with immersive 3D destinations',
      category: 'Travel',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      name: 'Shopnest',
      description: 'E-commerce store with 3D product visualization',
      category: 'E-commerce',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: 'OrbitCRM',
      description: 'Customer management system with data visualization',
      category: 'Business',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      name: 'SyncBase',
      description: 'Collaborative workspace with real-time features',
      category: 'Productivity',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      name: 'StackForge',
      description: 'Developer portfolio with interactive code demos',
      category: 'Portfolio',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      id: 6,
      name: 'VisionForge',
      description: 'Creative agency showcase with stunning visuals',
      category: 'Agency',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section id="templates" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pre-Built Templates
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start with a professionally designed template and customize it with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-4 py-2 bg-white/90 text-black rounded-lg font-medium flex items-center gap-2 hover:bg-white transition-all">
                    <Play className="w-4 h-4" />
                    Preview
                  </button>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                    {template.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{template.description}</p>
                <button onClick={onUseTemplate} className="w-full px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group-hover:scale-105 transform">
                  Use This Template
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
