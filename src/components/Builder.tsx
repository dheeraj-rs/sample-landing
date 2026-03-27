import { Send, Upload, Settings, Wand2, Image as ImageIcon, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Builder() {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('Nano Banana Pro');
  const [aspectRatio, setAspectRatio] = useState('1:1 Square');

  const aiModels = [
    'Nano Banana Pro — Best (20cr)',
    'GPT-4 Vision',
    'Claude 3 Vision',
    'Gemini Pro Vision',
  ];

  const aspectRatios = [
    '1:1 Square',
    '16:9 Wide',
    '9:16 Tall',
    '4:3 Portrait',
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="relative z-10 h-screen flex gap-8 p-8 max-w-full mx-auto">
        <div className="flex-1 flex flex-col gap-6 max-w-sm">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Text Prompt</span>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Front-facing hero shot, centered composition, studio lighting, clean background, product photography, 8K..."
              className="flex-1 bg-gray-800/50 border border-gray-700 rounded text-white placeholder-gray-500 p-3 resize-none focus:outline-none focus:border-purple-500 text-sm leading-relaxed"
            />

            <div className="mt-4 pt-4 border-t border-gray-800">
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium flex items-center justify-center gap-2 transition-colors">
                <Wand2 className="w-4 h-4" />
                Enhance with AI
              </button>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Image Upload</span>
            </div>

            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-600 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Drop image or click to upload</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, WebP</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20 pointer-events-none"></div>

            <svg
              className="absolute w-full h-full"
              viewBox="0 0 400 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <path
                d="M 200 50 Q 300 150, 350 300 Q 300 400, 200 450 Q 100 400, 50 300 Q 100 150, 200 50"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,5"
              />

              <circle cx="200" cy="80" r="6" fill="#a78bfa" opacity="0.6" />
              <circle cx="320" cy="180" r="6" fill="#a78bfa" opacity="0.6" />
              <circle cx="360" cy="300" r="6" fill="#a78bfa" opacity="0.6" />
              <circle cx="280" cy="420" r="6" fill="#a78bfa" opacity="0.6" />
              <circle cx="120" cy="420" r="6" fill="#a78bfa" opacity="0.6" />
              <circle cx="40" cy="300" r="6" fill="#a78bfa" opacity="0.6" />
              <circle cx="80" cy="180" r="6" fill="#a78bfa" opacity="0.6" />
            </svg>

            <div className="absolute inset-0 flex flex-col gap-6 p-8 pointer-events-none">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-semibold text-purple-400">TEXT PROMPT</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Front-facing hero shot, centered composition, studio lighting, clean background, product photography
                </p>
              </div>

              <div className="ml-auto bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-semibold text-purple-400">TEXT PROMPT</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Three-quarter angle view, slight tilt, dramatic side lighting, cinematic depth of field
                </p>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium pointer-events-auto">
              AI is generating frames...
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 max-w-sm">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Image Generation</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  {aiModels.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">Aspect Ratio</label>
                <div className="grid grid-cols-2 gap-2">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`px-3 py-2 text-xs font-medium rounded transition-all ${
                        aspectRatio === ratio
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2">Resolution</label>
                <div className="space-y-2">
                  <button className="w-full px-3 py-2 bg-blue-600 text-white text-xs rounded font-medium hover:bg-blue-700 transition-colors">
                    1024x1024
                  </button>
                  <button className="w-full px-3 py-2 bg-gray-800 text-gray-300 text-xs rounded font-medium hover:bg-gray-700 transition-colors">
                    2048x2048
                  </button>
                  <button className="w-full px-3 py-2 bg-gray-800 text-gray-300 text-xs rounded font-medium hover:bg-gray-700 transition-colors">
                    4096x4096
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center gap-2 text-xs text-orange-400 bg-orange-900/20 rounded p-2">
                <Zap className="w-4 h-4" />
                <span>Upgrade Plan</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Image Generation</span>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-800/50 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">Edit</span>
                  <span className="text-xs text-gray-400">Design</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <button className="flex-1 px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors text-gray-300">
                    Edit
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-b from-gray-800/30 to-gray-800/10 rounded p-3 text-center">
                <ImageIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Image preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
