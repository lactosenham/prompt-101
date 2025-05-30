interface HeroProps {
  onGetStarted: () => void;
  onExploreMethod: () => void;
}

function Hero({ onGetStarted, onExploreMethod }: HeroProps) {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "fundamentals",
      description: "core principles and architecture-aware design",
      accent: "text-green-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "methods",
      description: "chain-of-thought, self-consistency, tree-of-thoughts",
      accent: "text-cyan-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "tasks",
      description: "classification, summarization, data extraction",
      accent: "text-blue-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "evaluation",
      description: "testing frameworks and production monitoring",
      accent: "text-purple-400"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Matrix-style background with animated code */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-900/20" />
        
        {/* Animated code rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs leading-tight animate-code-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {[
                'def prompt_engineering():',
                '  return "optimized"',
                'if model.ready():',
                '  execute_prompt()',
                'class PromptEngine:',
                '  def __init__(self):',
                'import transformers',
                'from ai import llm',
                'response = llm.chat(',
                '  prompt=user_input',
                ')',
                'while True:',
                '  optimize()',
                'break',
                'continue',
                '# AI revolution',
                '// prompt as code',
                'const ai = new AI()',
                'ai.prompt(query)',
                '.then(response =>',
                '  console.log(data)',
                '}'
              ][Math.floor(Math.random() * 21)]}
            </div>
          ))}
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Terminal-style header */}
        <div className="mb-16">
          <div className="mb-8">
            <div className="font-mono text-green-400 text-lg mb-4">
              $ ./initialize_prompt_engineering_guide.sh
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-mono">
              <span className="text-green-400">
                &gt; prompt_engineering
              </span>
              <br />
              <span className="text-gray-300">
                --guide=comprehensive
              </span>
              <br />
              <span className="text-cyan-400">--version=1.0.1</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
                <div className="text-green-400 mb-2">// description</div>
                <p className="text-gray-300 leading-relaxed">
                  Master the art and science of crafting effective prompts for Large Language Models.<br />
                  From fundamentals to production-ready systems.
                </p>
              </div>
            </div>
          </div>

          {/* Terminal-style buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 font-mono">
            <button
              onClick={onGetStarted}
              className="group px-8 py-4 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 text-green-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                $ ./start_guide.sh
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={onExploreMethod}
              className="px-8 py-4 border border-gray-600/50 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              $ ./explore_methods.sh
            </button>
          </div>
        </div>

        {/* Feature modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-lg hover:border-gray-700/50 transition-all duration-500 hover:transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10 font-mono">
                <div className={`mb-4 ${feature.accent} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${feature.accent} transition-all duration-300`}>
                  ./{feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  // {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto font-mono">
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-green-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                0x08
              </div>
              <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">// advanced methods</div>
              <div className="mt-3 text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                zero-shot, few-shot, cot, react, tree-of-thoughts...
              </div>
            </div>
          </div>
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                0x05
              </div>
              <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">// task categories</div>
              <div className="mt-3 text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                classification, summarization, extraction, reasoning...
              </div>
            </div>
          </div>
          <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                0x0A
              </div>
              <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">// tools & frameworks</div>
              <div className="mt-3 text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                langchain, dspy, guardrails, promptlayer...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 