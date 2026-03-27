import { MessageSquare, Wand2, Play, Code, Rocket } from 'lucide-react';

export default function Pipeline() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Describe',
      description: 'Tell AI what you want to build using natural language',
    },
    {
      icon: Wand2,
      title: 'Generate',
      description: 'AI creates stunning 3D designs and layouts automatically',
    },
    {
      icon: Play,
      title: 'Animate',
      description: 'Add scroll-based animations and interactive elements',
    },
    {
      icon: Code,
      title: 'Build',
      description: 'Export production-ready code with full-stack support',
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Launch your website with one-click deployment',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Pipeline
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From idea to deployed website in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 z-20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
