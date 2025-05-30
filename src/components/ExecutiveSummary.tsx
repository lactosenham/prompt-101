function ExecutiveSummary() {
  const keyThemes = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "fundamentals",
      description: "understanding prompt objectives, types, and architecture-aware design principles for effective AI interaction",
      accent: "text-green-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "strategies",
      description: "advanced techniques like chain-of-thought, self-consistency, and tree-of-thoughts for complex reasoning",
      accent: "text-cyan-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "psychology",
      description: "psychological framing, tone and style, role playing, and emotional intelligence",
      accent: "text-blue-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "examples",
      description: "real-world examples of prompts and their applications, methods and techniques used to create them",
      accent: "text-red-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "design_principles",
      description: "best practices for clarity, specificity, iterative refinement, and systematic evaluation",
      accent: "text-purple-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "evaluation",
      description: "comprehensive assessment methods from human evaluation to automated testing frameworks",
      accent: "text-yellow-400"
    }
  ];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat executive_summary.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; executive_summary
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                comprehensive guide to mastering prompt engineering, covering everything from basic principles 
                to advanced techniques and production-ready evaluation methods.
              </p>
            </div>
          </div>
        </div>

        {/* Key Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {keyThemes.map((theme, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 hover:transform hover:-translate-y-1 font-mono">
                <div className="relative z-10">
                  <div className={`mb-4 ${theme.accent} group-hover:scale-110 transition-transform duration-300`}>
                    {theme.icon}
                  </div>
                  <h3 className={`text-lg font-semibold mb-4 ${theme.accent} transition-all duration-300`}>
                    ./{theme.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 text-sm">
                    // {theme.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prompt-as-Code Mindset */}
        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-4 flex items-center justify-center font-mono">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              prompt_as_code.paradigm
            </h2>
            <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 font-mono text-left max-w-3xl mx-auto">
              <div className="text-green-400 mb-2">// philosophy</div>
              <p className="text-gray-300">
                treat prompts as code: version controlled, tested, and systematically improved for production reliability
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2 font-mono">version_control</h4>
              <p className="text-gray-500 text-sm font-mono">// track changes, maintain history, enable collaborative development</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-semibold text-blue-400 mb-2 font-mono">testing</h4>
              <p className="text-gray-500 text-sm font-mono">// systematic evaluation, validation, quality assurance</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-400 mb-2 font-mono">iteration</h4>
              <p className="text-gray-500 text-sm font-mono">// continuous improvement and performance optimization</p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-12 font-mono">key_takeaways[]</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "effective prompting requires understanding both the task and the model's capabilities",
              "advanced techniques like CoT and self-consistency significantly improve performance",
              "systematic evaluation is crucial for production deployment",
              "modern tools and frameworks enable scalable prompt engineering workflows"
            ].map((takeaway, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 font-mono">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 border border-green-500/30 rounded flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-400 text-left leading-relaxed text-sm">// {takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveSummary; 