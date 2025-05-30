function Tools() {
  const toolCategories = [
    {
      category: "frameworks_libraries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: "comprehensive platforms for prompt engineering workflows",
      tools: [
        {
          name: "langchain",
          description: "popular framework for building llm applications with prompt templates and chains",
          features: ["prompt_templates", "chain_composition", "memory_management", "tool_integration"],
          useCase: "complex_llm_applications_with_multiple_components"
        },
        {
          name: "dspy",
          description: "programming model for algorithmically optimizing lm prompts and weights",
          features: ["automatic_optimization", "modular_design", "metric_driven", "research_focused"],
          useCase: "systematic_prompt_optimization_and_research"
        },
        {
          name: "textgrad",
          description: "automatic differentiation for text optimization using llms",
          features: ["gradient_based_optimization", "text_differentiation", "loss_functions", "backpropagation"],
          useCase: "advanced_prompt_optimization_with_gradient_methods",
          demoLink: "https://colab.research.google.com/drive/1ssJ90UlmdK0UNf01Fh8frwtRuXo3QWFo?usp=sharing"
        }
      ]
    },
    {
      category: "evaluation_testing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "tools for systematic prompt evaluation and testing",
      tools: [
        {
          name: "openai_evals",
          description: "framework for evaluating llms with standardized benchmarks",
          features: ["standard_benchmarks", "custom_evaluations", "automated_scoring", "comparison_tools"],
          useCase: "standardized_model_and_prompt_evaluation"
        },
        {
          name: "promptlayer",
          description: "platform for prompt engineering with logging and analytics",
          features: ["prompt_logging", "ab_testing", "analytics_dashboard", "version_control"],
          useCase: "production_prompt_monitoring_and_optimization"
        },
        {
          name: "guardrails_ai",
          description: "framework for reliable ai outputs with validation and correction",
          features: ["output_validation", "error_correction", "safety_checks", "schema_enforcement"],
          useCase: "ensuring_reliable_and_safe_ai_outputs"
        }
      ]
    }
  ];

  const developmentWorkflow = [
    {
      phase: "design",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2H7z" />
        </svg>
      ),
      description: "plan and design your prompt strategy",
      activities: [
        "define objectives and success criteria",
        "choose appropriate prompting methods",
        "design initial prompt templates",
        "plan evaluation strategy"
      ]
    },
    {
      phase: "develop",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "build and iterate on your prompts",
      activities: [
        "implement prompt templates",
        "create test cases and examples",
        "set up development environment",
        "build evaluation pipeline"
      ]
    },
    {
      phase: "test",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "evaluate and validate prompt performance",
      activities: [
        "run automated tests",
        "conduct human evaluation",
        "perform ab testing",
        "analyze performance metrics"
      ]
    },
    {
      phase: "deploy",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "deploy to production with monitoring",
      activities: [
        "set up production infrastructure",
        "implement monitoring and logging",
        "configure alerting systems",
        "plan rollback procedures"
      ]
    },
    {
      phase: "monitor",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "track performance and iterate",
      activities: [
        "monitor key metrics",
        "analyze user feedback",
        "identify improvement opportunities",
        "plan next iteration"
      ]
    }
  ];

  const promptOps = [
    {
      principle: "version_control",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "treat prompts as code with proper versioning",
      practices: [
        "use_git_for_prompt_versioning",
        "maintain_prompt_changelogs",
        "tag_stable_releases",
        "branch_for_experiments"
      ]
    },
    {
      principle: "testing_ci_cd",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "automated testing and deployment pipelines",
      practices: [
        "automated_prompt_testing",
        "continuous_integration",
        "staged_deployments",
        "rollback_capabilities"
      ]
    },
    {
      principle: "monitoring_observability",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      description: "comprehensive monitoring of prompt performance",
      practices: [
        "real_time_performance_tracking",
        "error_rate_monitoring",
        "cost_optimization_alerts",
        "user_satisfaction_metrics"
      ]
    },
    {
      principle: "collaboration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "team workflows for prompt development",
      practices: [
        "shared_prompt_repositories",
        "code_review_processes",
        "documentation_standards",
        "knowledge_sharing"
      ]
    }
  ];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat tools_frameworks.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; tools_frameworks
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                discover the ecosystem of tools that enable professional prompt engineering workflows
              </p>
            </div>
          </div>
        </div>

        {/* Tool Categories */}
        <div className="space-y-16 mb-20">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <div className="flex items-center mb-8">
                <div className="text-green-400 mr-4">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 font-mono">./{category.category}</h3>
                  <p className="text-gray-400 text-sm font-mono">// {category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
                    <h4 className="text-lg font-bold text-white mb-3">{tool.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">// {tool.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-blue-400 mb-2">// features</h5>
                      <div className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div className="text-blue-400 text-xs mt-1">•</div>
                            <p className="text-gray-300 text-xs">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Use Case */}
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3">
                      <h5 className="text-sm font-semibold text-purple-400 mb-2">// use_case</h5>
                      <p className="text-purple-200 text-xs break-words leading-relaxed">{tool.useCase}</p>
                    </div>
                    
                    {/* Demo Link */}
                    {tool.demoLink && (
                      <div className="mt-3">
                        <a
                          href={tool.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 text-green-400 rounded-lg text-xs font-mono transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          try_demo
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Workflow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            development_workflow[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              end-to-end process for professional prompt development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {developmentWorkflow.map((phase, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center text-green-400">
                  {phase.icon}
                </div>
                <h4 className="font-semibold text-green-400 mb-2">./{phase.phase}</h4>
                <p className="text-gray-400 text-xs mb-4">// {phase.description}</p>
                <div className="space-y-1">
                  {phase.activities.map((activity, activityIndex) => (
                    <p key={activityIndex} className="text-gray-300 text-xs">• {activity}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PromptOps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            promptops_principles[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              operational principles for scaling prompt engineering in production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promptOps.map((principle, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center text-green-400">
                  {principle.icon}
                </div>
                <h4 className="font-semibold text-green-400 mb-2 text-center">./{principle.principle}</h4>
                <p className="text-gray-400 text-xs mb-4 text-center">// {principle.description}</p>
                <div className="space-y-1">
                  {principle.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-start space-x-2">
                      <div className="text-green-400 text-xs mt-1">•</div>
                      <p className="text-gray-300 text-xs">{practice}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">getting_started</h4>
            </div>
            <p className="text-gray-400 text-sm">
              // begin with simple tools and gradually adopt more sophisticated frameworks as needs grow
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">integration</h4>
            </div>
            <p className="text-gray-400 text-sm">
              // ensure tools integrate well with existing development and deployment workflows
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">measurement</h4>
            </div>
            <p className="text-gray-400 text-sm">
              // implement comprehensive monitoring to track tool effectiveness and roi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools; 