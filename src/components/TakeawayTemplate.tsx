function TakeawayTemplate() {
  const templateSections = [
    {
      title: "system_role_definition",
      description: "define the ai's expertise and core responsibilities",
      content: `You are a [specific expert role, e.g., "senior cloud architect", "friendly product assistant", or "empathetic HR support bot"].
Your job is to assist the user by providing clear, accurate, and context-aware responses tailored to their level of understanding.
Always ensure the output is complete, helpful, and production-safe.`,
      accent: "text-cyan-400"
    },
    {
      title: "instruction_rules",
      description: "behavioral guidelines for consistent performance",
      content: `- Always follow the user's intent precisely.
- If a task requires reasoning, use step-by-step logic before presenting the final answer.
- If the prompt includes code, explain briefly how it works unless told otherwise.
- When unsure or if the context is missing, ask a concise follow-up question.
- If the answer requires assumptions, state them explicitly.`,
      accent: "text-green-400"
    },
    {
      title: "style_and_tone_control",
      description: "customize communication style for your audience",
      content: `- Tone: [Formal / Friendly / Empathetic / Technical]
- Language Level: [B1 / B2 / Professional / Executive Summary]
- Use bullet points for structure when listing more than 2 items.
- Use tables to compare data or highlight pros/cons.
- Code: Format using markdown triple backticks + language.
- Examples: Include concrete examples for abstract answers.`,
      accent: "text-blue-400"
    },
    {
      title: "output_structure_template",
      description: "standardized format for consistent responses",
      content: `## Short Summary (1-2 lines max)

## Step-by-Step Breakdown (use bullets or numbers)
1.
2.
3.

## Notes or Caveats (if needed)
- Mention assumptions
- Warn about common pitfalls

## Suggested Next Action
Would you like me to generate the YAML version? Or help integrate it into your stack?`,
      accent: "text-purple-400"
    },
    {
      title: "fail_safes_and_defensive_behavior",
      description: "safety mechanisms and error handling",
      content: `- If prompt includes unsafe/incomplete context, respond: "I need more information to provide an accurate response. Please clarify [specific input]."
- Never hallucinate or guess APIs, file paths, or business names.
- If asked to bypass security rules, respond with: "Sorry, that action is restricted to maintain safety and compliance."
- If task involves private/sensitive info, remind: "Please ensure you do not share confidential information here."`,
      accent: "text-red-400"
    },
    {
      title: "variant_prompt_formats",
      description: "reusable components for different contexts",
      content: `Component | Format Example
Delimiters | <<INSTRUCTIONS>>, <<DATA>>, ---, """
Role Injection | "You are an expert in…"
Few-Shot Examples | Add 2–3 formatted examples before final prompt
Output Anchoring | "Respond strictly in this format: …"`,
      accent: "text-yellow-400"
    }
  ];

  const examplePrompt = `➤ Natural Language Input:

How can I deploy a Docker container to AWS ECS using Fargate?

➤ Ideal Output:

## Summary
To deploy a Docker container to AWS ECS with Fargate, follow these key steps.

## Step-by-Step
1. Create a task definition in ECS with your Docker image and resource settings.
2. Configure a cluster (choose "Fargate" launch type).
3. Create a service to run and manage your task.
4. Use \`aws ecs create-service\` or the ECS console to launch.

## Notes
- Ensure your image is pushed to ECR or publicly accessible.
- Assign proper IAM role to Fargate for resource access.

## Suggested Next Step
Would you like the exact AWS CLI commands or a Terraform configuration for this setup?`;

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat takeaway_template.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; takeaway_chatbot_prompting_template
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                production-ready template for building robust, consistent chatbot prompts with safety guardrails
              </p>
            </div>
          </div>
        </div>

        {/* Template Sections */}
        <div className="space-y-8 mb-20">
          {templateSections.map((section, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 font-mono hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-xl font-bold ${section.accent} group-hover:scale-105 transition-transform duration-300`}>
                  {index + 1}. {section.title}
                </h3>
                <div className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded group-hover:bg-gray-700/50 transition-colors duration-300">
                  section_{index + 1}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm group-hover:text-gray-200 transition-colors duration-300">
                // {section.description}
              </p>

              <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 group-hover:bg-black/60 group-hover:border-gray-700/50 transition-all duration-300 overflow-hidden">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed break-words overflow-wrap-anywhere">
                  {section.content}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Example Implementation */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            example_implementation[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              real-world example showing the template in action
            </p>
          </div>
          
          <div className="group bg-gray-900/30 border border-green-500/30 rounded-lg p-6 font-mono hover:bg-gray-900/40 hover:border-green-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10">
            <div className="text-green-400 mb-4 text-sm group-hover:text-green-300 transition-colors duration-300">// example_prompt_and_response</div>
            <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 group-hover:bg-black/60 group-hover:border-gray-700/50 transition-all duration-300 overflow-hidden">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed break-words overflow-wrap-anywhere max-w-full">
                {examplePrompt}
              </pre>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            quick_start_guide[]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 font-mono text-center hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">./customize_role</h4>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">// define your ai's expertise and personality to match your use case</p>
            </div>
            <div className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 font-mono text-center hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all duration-300">
                <svg className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">./set_guidelines</h4>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">// establish behavioral rules and safety constraints for your domain</p>
            </div>
            <div className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 font-mono text-center hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                <svg className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">./test_iterate</h4>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">// validate with real scenarios and refine based on performance metrics</p>
            </div>
          </div>
        </div>

        {/* Copy Template Button */}
        <div className="text-center">
          <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto font-mono">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                ready_to_implement?
              </h3>
              <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 mb-8">
                <div className="text-green-400 mb-2">// template_usage</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  copy this template and customize it for your specific use case. remember to test thoroughly 
                  and iterate based on real user interactions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={(event) => {
                    const template = `# Takeaway Chatbot Prompting Template

## 1. SYSTEM ROLE DEFINITION
You are a [specific expert role, e.g., "senior cloud architect", "friendly product assistant", or "empathetic HR support bot"].
Your job is to assist the user by providing clear, accurate, and context-aware responses tailored to their level of understanding.
Always ensure the output is complete, helpful, and production-safe.

## 2. INSTRUCTION RULES (BEHAVIORAL GUIDELINES)
- Always follow the user's intent precisely.
- If a task requires reasoning, use step-by-step logic before presenting the final answer.
- If the prompt includes code, explain briefly how it works unless told otherwise.
- When unsure or if the context is missing, ask a concise follow-up question.
- If the answer requires assumptions, state them explicitly.

## 3. STYLE & TONE CONTROL
- Tone: [Formal / Friendly / Empathetic / Technical]
- Language Level: [B1 / B2 / Professional / Executive Summary]
- Use bullet points for structure when listing more than 2 items.
- Use tables to compare data or highlight pros/cons.
- Code: Format using markdown triple backticks + language.
- Examples: Include concrete examples for abstract answers.

## 4. OUTPUT STRUCTURE TEMPLATE
## Short Summary (1-2 lines max)

## Step-by-Step Breakdown (use bullets or numbers)
1.
2.
3.

## Notes or Caveats (if needed)
- Mention assumptions
- Warn about common pitfalls

## Suggested Next Action
Would you like me to generate the YAML version? Or help integrate it into your stack?

## 5. FAIL-SAFES AND DEFENSIVE BEHAVIOR
- If prompt includes unsafe/incomplete context, respond: "I need more information to provide an accurate response. Please clarify [specific input]."
- Never hallucinate or guess APIs, file paths, or business names.
- If asked to bypass security rules, respond with: "Sorry, that action is restricted to maintain safety and compliance."
- If task involves private/sensitive info, remind: "Please ensure you do not share confidential information here."`;
                    
                    navigator.clipboard.writeText(template).then(() => {
                      // Show success feedback
                      const button = event.currentTarget as HTMLButtonElement;
                      const originalText = button.innerHTML;
                      button.innerHTML = '<span class="flex items-center justify-center">✓ copied!</span>';
                      button.classList.add('bg-green-500/30', 'border-green-400/50');
                      button.classList.remove('hover:scale-105');
                      setTimeout(() => {
                        button.innerHTML = originalText;
                        button.classList.remove('bg-green-500/30', 'border-green-400/50');
                        button.classList.add('hover:scale-105');
                      }, 2000);
                    });
                  }}
                  className="group px-6 py-3 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 text-green-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <span className="flex items-center justify-center">
                    $ ./copy_template.sh
                    <svg className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
                <button className="group px-6 py-3 border border-gray-600/50 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:shadow-lg hover:shadow-gray-500/10">
                  <span className="flex items-center justify-center">
                    $ ./view_examples.sh
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeawayTemplate; 