function Fundamentals() {
  const objectives = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "clarity",
      description: "make your intent crystal clear to the model",
      example: "instead of 'analyze this', use 'identify the main themes and sentiment in this customer review'",
      accent: "text-cyan-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "specificity",
      description: "provide precise instructions and constraints",
      example: "generate a 150-word summary focusing on technical features and pricing",
      accent: "text-green-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "context",
      description: "give the model relevant background information",
      example: "you are a financial advisor helping a 30-year-old plan for retirement",
      accent: "text-blue-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "role_definition",
      description: "establish the model's persona and expertise",
      example: "act as a senior software engineer reviewing code for security vulnerabilities",
      accent: "text-purple-400"
    }
  ];

  const promptTypes = [
    {
      type: "zero_shot",
      description: "direct instruction without examples",
      example: "translate the following english text to french: 'hello, how are you?'",
      bestPractice: "use clear, specific instructions with well-defined output format",
      accent: "text-cyan-400"
    },
    {
      type: "few_shot",
      description: "provide examples to guide the model",
      example: "classify sentiment:\ntext: 'i love this product!' → positive\ntext: 'this is terrible' → negative\ntext: 'it's okay' → ?",
      bestPractice: "use diverse, high-quality examples that cover edge cases",
      accent: "text-green-400"
    },
    {
      type: "chain_of_thought",
      description: "guide the model through step-by-step reasoning",
      example: "let's solve this step by step:\n1. first, identify the key variables\n2. then, apply the formula\n3. finally, verify the result",
      bestPractice: "break complex problems into logical, sequential steps",
      accent: "text-blue-400"
    },
    {
      type: "system_prompts",
      description: "set persistent behavior and constraints",
      example: "you are a helpful assistant that always responds in json format with 'response' and 'confidence' fields",
      bestPractice: "define clear boundaries and consistent behavior patterns",
      accent: "text-purple-400"
    }
  ];

  const architecturePrinciples = [
    {
      principle: "token_efficiency",
      description: "optimize for context window usage",
      tips: ["use concise language", "prioritize essential information", "consider token costs"],
      accent: "text-cyan-400"
    },
    {
      principle: "model_capabilities",
      description: "align prompts with model strengths",
      tips: ["leverage model's training data", "avoid tasks beyond model scope", "use appropriate complexity"],
      accent: "text-green-400"
    },
    {
      principle: "error_handling",
      description: "design for graceful failure modes",
      tips: ["specify fallback behaviors", "handle edge cases", "validate outputs"],
      accent: "text-yellow-400"
    },
    {
      principle: "scalability",
      description: "design for production deployment",
      tips: ["version control prompts", "enable a/b testing", "monitor performance"],
      accent: "text-purple-400"
    }
  ];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat fundamentals.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; fundamentals
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                master the core principles that form the foundation of effective prompt engineering
              </p>
            </div>
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            core_objectives[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              essential principles for crafting effective prompts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
                <div className={`mb-4 ${objective.accent}`}>
                  {objective.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-3 ${objective.accent}`}>
                  ./{objective.title}
                </h4>
                <p className="text-gray-400 mb-4 text-sm">
                  // {objective.description}
                </p>
                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-3">
                  <p className="text-gray-300 text-xs">
                    {objective.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            prompt_types_and_patterns[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              different approaches to structuring prompts for optimal results
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {promptTypes.map((type, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
                <h4 className={`text-xl font-semibold mb-3 ${type.accent}`}>
                  ./{type.type}
                </h4>
                <p className="text-gray-300 mb-4 text-sm">
                  // {type.description}
                </p>
                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 mb-4">
                  <div className="text-green-400 mb-2 text-xs">// example</div>
                  <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                    {type.example}
                  </pre>
                </div>
                <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-200 text-xs">
                    <span className="text-green-400">// best_practice:</span> {type.bestPractice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture-Aware Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            architecture_aware_design_principles[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              design considerations for production-ready prompt systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturePrinciples.map((item, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
                <h4 className={`text-xl font-semibold mb-3 ${item.accent}`}>
                  ./{item.principle}
                </h4>
                <p className="text-gray-300 mb-4 text-sm">
                  // {item.description}
                </p>
                <div className="space-y-2">
                  {item.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-2">
                      <div className={`${item.accent} text-sm mt-1`}>•</div>
                      <p className="text-gray-400 text-sm">// {tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles Summary */}
        <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-8 font-mono">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
            golden_rules_of_prompt_engineering[]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2">be_explicit</h4>
              <p className="text-gray-300 text-sm">// state exactly what you want, how you want it, and in what format</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">iterate</h4>
              <p className="text-gray-300 text-sm">// test, measure, and refine your prompts systematically</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-400 mb-2">set_context</h4>
              <p className="text-gray-300 text-sm">// provide role, background, and constraints for better results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundamentals; 