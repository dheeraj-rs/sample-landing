import { Zap, Code2, Palette, Video, MessageCircle, Download } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Build websites 10x faster with AI-powered automation',
    },
    {
      icon: Code2,
      title: 'Full-Stack Export',
      description: 'Get production-ready code with frontend and backend',
    },
    {
      icon: Palette,
      title: 'Infinite Customization',
      description: 'Iterate and refine with AI chat-based editing',
    },
    {
      icon: Video,
      title: 'Smooth Animations',
      description: 'Frame-based scroll animations for cinematic effects',
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Interface',
      description: 'Make changes naturally by describing what you want',
    },
    {
      icon: Download,
      title: 'Export Anywhere',
      description: 'Download or deploy to your favorite platform',
    },
  ];

  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build stunning websites with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
