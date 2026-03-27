import { Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartBuilding?: () => void;
}

export default function Hero({ onStartBuilding }: HeroProps) {
  const aiModels = [
    'GPT-4',
    'Claude 3.5',
    'Gemini Pro',
    'GPT-3.5 Turbo',
    'Claude 3',
    'Llama 3',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">AI-Powered 3D Website Builder</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Describe it.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Watch AI build it.
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Every scroll frame is generated from your prompt—no code, no templates, no design skills needed.
          Build stunning 3D websites 10x faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={onStartBuilding} className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105">
            Start Building Free
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-gray-700 text-white rounded-lg font-semibold hover:border-gray-500 transition-all">
            Watch Demo
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Select AI Model</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {aiModels.map((model) => (
                <div
                  key={model}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-700/50 hover:border-gray-600 transition-all cursor-pointer text-center"
                >
                  {model}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>
  );
}
