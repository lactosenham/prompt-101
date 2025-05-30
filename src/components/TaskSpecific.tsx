function TaskSpecific() {
  const tasks = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Classification",
      description: "Categorize text into predefined classes",
      example: `Classify the following email as: spam, promotional, or personal

Email: "Congratulations! You've won $1000! Click here to claim your prize!"

Classification: spam
Confidence: high
Reasoning: Contains typical spam indicators (fake prizes, urgency, suspicious links)`,
      tips: [
        "Provide clear class definitions",
        "Include edge case examples",
        "Ask for confidence scores",
        "Request reasoning for transparency"
      ],
      pitfalls: [
        "Ambiguous class boundaries",
        "Insufficient examples",
        "Bias in training examples"
      ],
      mitigation: "Use balanced examples and clear criteria"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Summarization",
      description: "Extract key information and create concise summaries",
      example: `Summarize the following article in 3 bullet points, focusing on key findings:

[Article text...]

Summary:
• Main finding 1 with supporting data
• Key insight 2 with implications  
• Important conclusion 3 with next steps`,
      tips: [
        "Specify desired length",
        "Define focus areas",
        "Request structured output",
        "Include key metrics"
      ],
      pitfalls: [
        "Loss of important details",
        "Inconsistent length",
        "Missing context"
      ],
      mitigation: "Use hierarchical summaries and validation checks"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Data Extraction",
      description: "Extract structured information from unstructured text",
      example: `Extract the following information from this job posting:

Job Posting: "Senior Software Engineer at TechCorp, $120k-150k, Remote, React/Node.js required"

{
  "title": "Senior Software Engineer",
  "company": "TechCorp",
  "salary_range": "$120k-150k",
  "location": "Remote",
  "required_skills": ["React", "Node.js"]
}`,
      tips: [
        "Define exact output schema",
        "Handle missing fields gracefully",
        "Validate extracted data",
        "Use consistent formatting"
      ],
      pitfalls: [
        "Inconsistent field formats",
        "Missing required fields",
        "Hallucinated information"
      ],
      mitigation: "Strict schema validation and confidence scoring"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Multi-Step Reasoning",
      description: "Break down complex problems into logical steps",
      example: `Solve this step-by-step:

Problem: A company's revenue grew 25% in Q1, then declined 10% in Q2. If Q2 revenue was $1.35M, what was the original revenue?

Step 1: Let original revenue = X
Step 2: After Q1 growth: X × 1.25 = 1.25X
Step 3: After Q2 decline: 1.25X × 0.9 = 1.125X
Step 4: We know 1.125X = $1.35M
Step 5: Therefore X = $1.35M ÷ 1.125 = $1.2M

Answer: Original revenue was $1.2M`,
      tips: [
        "Break into clear steps",
        "Show intermediate calculations",
        "Verify final answer",
        "Explain reasoning"
      ],
      pitfalls: [
        "Skipping crucial steps",
        "Calculation errors",
        "Logical inconsistencies"
      ],
      mitigation: "Self-verification and step-by-step validation"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Chat Agents",
      description: "Create conversational AI with consistent personality",
      example: `You are a helpful customer service agent for TechStore. You are friendly, knowledgeable, and solution-oriented.

Customer: "My order hasn't arrived and it's been 2 weeks!"

Agent: I understand your frustration, and I sincerely apologize for the delay. Let me help you track down your order right away. Could you please provide your order number so I can investigate what happened and find a solution for you?`,
      tips: [
        "Define clear personality",
        "Set behavioral boundaries",
        "Handle edge cases",
        "Maintain context"
      ],
      pitfalls: [
        "Inconsistent personality",
        "Breaking character",
        "Inappropriate responses"
      ],
      mitigation: "Strong system prompts and safety guidelines"
    }
  ];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat task_specific_prompting.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; task_specific_prompting
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                master specialized techniques for common ai tasks with proven patterns and best practices
              </p>
            </div>
          </div>
        </div>

        {/* Task Cards */}
        <div className="space-y-12">
          {tasks.map((task, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Overview */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-green-400 mr-4">{task.icon}</div>
                    <h3 className="text-2xl font-bold text-green-400">./{task.title.toLowerCase().replace(/\s+/g, '_')}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    // {task.description}
                  </p>

                  {/* Tips */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">// best_practices</h4>
                    <div className="space-y-2">
                      {task.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start space-x-2">
                          <div className="text-green-400 text-sm mt-1">•</div>
                          <p className="text-gray-300 text-sm">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pitfalls & Mitigation */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">⚠️ Common Pitfalls</h4>
                      <div className="space-y-1">
                        {task.pitfalls.map((pitfall, pitfallIndex) => (
                          <p key={pitfallIndex} className="text-red-200 text-xs">• {pitfall}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">🛡️ Mitigation</h4>
                      <p className="text-blue-200 text-xs">{task.mitigation}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Example */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Example Prompt</h4>
                  <div className="bg-black/60 border border-gray-700/30 rounded-xl p-4 font-mono text-sm backdrop-blur-sm overflow-hidden">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed break-words overflow-wrap-anywhere max-w-full">
                      {task.example}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Task Selection Guide */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            task_selection_guide[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              systematic approach to choosing the right prompting strategy
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 font-mono">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">./define_goal</h4>
                <p className="text-gray-300 text-sm">
                  // identify target: categorize, extract, summarize, reason, or converse
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">./assess_complexity</h4>
                <p className="text-gray-300 text-sm">
                  // simple tasks need basic prompts, complex reasoning requires structured approaches
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">./iterate_improve</h4>
                <p className="text-gray-300 text-sm">
                  // start simple, test thoroughly, refine based on real-world performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <h4 className="text-lg font-semibold text-white mb-3">📄 output_formatting</h4>
            <p className="text-gray-400 text-sm">
              // always specify exact format: json, bullet points, tables, or structured text
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <h4 className="text-lg font-semibold text-white mb-3">🔧 quality_control</h4>
            <p className="text-gray-400 text-sm">
              // include validation steps, confidence scores, and reasoning to ensure output quality
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <h4 className="text-lg font-semibold text-white mb-3">⚡ efficiency</h4>
            <p className="text-gray-400 text-sm">
              // balance prompt complexity with performance needs - simpler often works better
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskSpecific; 