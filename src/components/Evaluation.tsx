function Evaluation() {
  const evaluationMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "human_evaluation",
      description: "expert reviewers assess prompt outputs for quality and accuracy",
      criteria: ["accuracy", "relevance", "clarity", "completeness", "safety"],
      pros: ["high_quality_assessment", "catches_nuanced_issues", "domain_expertise"],
      cons: ["expensive", "time_consuming", "subjective", "not_scalable"],
      bestPractices: [
        "use_multiple_reviewers",
        "provide_clear_rubrics", 
        "include_diverse_perspectives",
        "regular_calibration_sessions"
      ],
      workflow: [
        "define_evaluation_criteria",
        "train_evaluators",
        "conduct_blind_reviews",
        "aggregate_scores",
        "analyze_disagreements"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "llm_as_judge",
      description: "use another llm to evaluate prompt outputs automatically",
      criteria: ["coherence", "factuality", "helpfulness", "safety", "format_compliance"],
      pros: ["scalable", "consistent", "fast", "cost_effective"],
      cons: ["model_limitations", "potential_bias", "requires_good_judge_prompts"],
      bestPractices: [
        "use_stronger_models_as_judges",
        "craft_detailed_evaluation_prompts",
        "include_reference_examples",
        "validate_against_human_judgment"
      ],
      workflow: [
        "design_judge_prompts",
        "select_evaluation_model",
        "run_automated_evaluation",
        "aggregate_scores",
        "spot_check_results"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "automated_testing",
      description: "systematic testing with predefined test cases and metrics",
      criteria: ["pass_rate", "response_time", "token_usage", "error_rate", "consistency"],
      pros: ["objective", "repeatable", "fast", "comprehensive_coverage"],
      cons: ["limited_to_measurable_aspects", "requires_good_test_design"],
      bestPractices: [
        "create_diverse_test_suites",
        "include_edge_cases",
        "monitor_regression",
        "automate_ci_cd_integration"
      ],
      workflow: [
        "design_test_cases",
        "implement_test_framework",
        "run_automated_tests",
        "generate_reports",
        "track_metrics_over_time"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "ab_testing",
      description: "compare different prompt versions with real users",
      criteria: ["user_satisfaction", "task_completion", "engagement", "conversion", "retention"],
      pros: ["real_world_validation", "statistical_significance", "user_centric"],
      cons: ["requires_traffic", "longer_timeline", "complex_setup"],
      bestPractices: [
        "define_clear_hypotheses",
        "ensure_statistical_power",
        "monitor_for_negative_effects",
        "segment_user_groups"
      ],
      workflow: [
        "formulate_hypothesis",
        "design_experiment",
        "implement_tracking",
        "run_test",
        "analyze_results"
      ]
    }
  ];

  const evaluationFramework = [
    {
      phase: "planning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      tasks: [
        "define_success_metrics",
        "choose_evaluation_methods",
        "design_test_cases",
        "set_up_infrastructure"
      ]
    },
    {
      phase: "execution",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tasks: [
        "run_evaluations",
        "collect_data",
        "monitor_for_issues",
        "document_findings"
      ]
    },
    {
      phase: "analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      tasks: [
        "analyze_results",
        "identify_patterns",
        "compare_methods",
        "generate_insights"
      ]
    },
    {
      phase: "iteration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      tasks: [
        "implement_improvements",
        "re_test_changes",
        "update_baselines",
        "plan_next_iteration"
      ]
    }
  ];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat evaluation_methods.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; evaluation_testing
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                comprehensive approaches to measure and improve prompt performance in production
              </p>
            </div>
          </div>
        </div>

        {/* Evaluation Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {evaluationMethods.map((method, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-4">
                <div className="text-green-400 mr-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-green-400">./{method.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm">// {method.description}</p>

              {/* Criteria */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2 font-mono">// evaluation_criteria</h4>
                <div className="flex flex-wrap gap-2">
                  {method.criteria.map((criterion, criterionIndex) => (
                    <span key={criterionIndex} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded font-mono border border-blue-500/30">
                      {criterion}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-green-400 mb-2 font-mono">✓ pros</h4>
                  <div className="space-y-1">
                    {method.pros.map((pro, proIndex) => (
                      <p key={proIndex} className="text-green-200 text-xs font-mono">• {pro}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-red-400 mb-2 font-mono">✗ cons</h4>
                  <div className="space-y-1">
                    {method.cons.map((con, conIndex) => (
                      <p key={conIndex} className="text-red-200 text-xs font-mono">• {con}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2 font-mono">// best_practices</h4>
                <div className="space-y-1">
                  {method.bestPractices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-start space-x-2">
                      <div className="text-purple-400 text-xs mt-1">•</div>
                      <p className="text-gray-300 text-xs font-mono">{practice}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow */}
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2 font-mono">// workflow</h4>
                <div className="space-y-1">
                  {method.workflow.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-2">
                      <div className="text-cyan-400 text-xs mt-1 font-mono">{stepIndex + 1}.</div>
                      <p className="text-gray-300 text-xs font-mono">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Framework */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            evaluation_framework[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              systematic approach to prompt evaluation and improvement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evaluationFramework.map((phase, index) => (
              <div key={index} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center text-green-400">
                  {phase.icon}
                </div>
                <h4 className="font-semibold text-green-400 mb-3">./{phase.phase}</h4>
                <div className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <p key={taskIndex} className="text-gray-300 text-xs">• {task}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">metrics_tracking</h4>
            </div>
            <p className="text-gray-400 text-sm">
              // implement comprehensive metrics to track prompt performance over time
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h4 className="text-lg font-semibold text-white">continuous_improvement</h4>
            </div>
            <p className="text-gray-400 text-sm">
              // establish feedback loops for ongoing prompt optimization and refinement
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="text-lg font-semibold text-white">automation</h4>
            </div>
            <p className="text-gray-400 text-sm">
              // automate evaluation processes to scale testing and reduce manual overhead
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Evaluation; 