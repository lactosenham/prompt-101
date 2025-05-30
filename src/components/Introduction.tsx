import { useState } from 'react';

interface IntroductionProps {
  onNavigate?: (section: string) => void;
}

interface QuestionAnswer {
  questionIndex: number;
  selectedOption: number;
}

interface ArchitectureComponent {
  id: string;
  name: string;
  description: string;
  role: string;
  example: string;
  color: string;
  icon: string;
  position: { x: number; y: number };
  connections: string[];
  details: {
    inputs: string[];
    outputs: string[];
    keyFeatures: string[];
    bestPractices: string[];
  };
}

function ArchitecturePlayground() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [showDataFlow, setShowDataFlow] = useState(true);

  const architectureComponents: ArchitectureComponent[] = [
    {
      id: 'user-input',
      name: 'User Input',
      description: 'The raw user query, request, or problem statement that initiates the AI interaction pipeline',
      role: 'Entry point and context provider for all AI interactions',
      example: '"Help me write a professional email to decline a job offer while maintaining good relationships"',
      color: 'bg-blue-500/20 border-blue-400/50 text-blue-300',
      icon: '👤',
      position: { x: 5, y: 50 },
      connections: ['system-prompt', 'rag-retrieval'],
      details: {
        inputs: ['Natural language queries', 'Voice commands', 'Form submissions', 'API requests'],
        outputs: ['Structured user intent', 'Context metadata', 'Priority flags'],
        keyFeatures: ['Intent recognition', 'Context extraction', 'Input validation', 'User authentication'],
        bestPractices: ['Validate input format', 'Extract user context', 'Handle edge cases', 'Log user interactions']
      }
    },
    {
      id: 'system-prompt',
      name: 'System Prompt',
      description: 'High-level behavioral instructions that define the AI\'s personality, expertise domain, ethical guidelines, and operational constraints',
      role: 'Sets the AI\'s personality, expertise, and behavioral boundaries',
      example: '"You are a senior software architect with 15 years experience. Always provide practical, scalable solutions. Be concise but thorough. If unsure, ask clarifying questions. Never recommend deprecated technologies."',
      color: 'bg-purple-500/20 border-purple-400/50 text-purple-300',
      icon: '⚙️',
      position: { x: 25, y: 20 },
      connections: ['prompt-engineering'],
      details: {
        inputs: ['Role definitions', 'Behavioral guidelines', 'Domain expertise', 'Ethical constraints'],
        outputs: ['Personality framework', 'Response style', 'Knowledge boundaries', 'Safety filters'],
        keyFeatures: ['Role-based behavior', 'Expertise modeling', 'Safety constraints', 'Response formatting'],
        bestPractices: ['Define clear roles', 'Set expertise boundaries', 'Include safety guidelines', 'Specify response format']
      }
    },
    {
      id: 'rag-retrieval',
      name: 'RAG Retrieval',
      description: 'Retrieval-Augmented Generation system that searches and retrieves relevant information from knowledge bases, documents, and external sources to ground AI responses in factual data',
      role: 'Provides factual context and reduces hallucinations with real-time data',
      example: 'Search company knowledge base for: "email templates", "HR policies", "communication guidelines" → Return relevant snippets with metadata',
      color: 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300',
      icon: '📚',
      position: { x: 25, y: 80 },
      connections: ['prompt-engineering'],
      details: {
        inputs: ['Query vectors', 'Knowledge bases', 'Document repositories', 'Real-time data feeds'],
        outputs: ['Relevant documents', 'Context snippets', 'Source metadata', 'Confidence scores'],
        keyFeatures: ['Vector search', 'Semantic matching', 'Source ranking', 'Context filtering'],
        bestPractices: ['Maintain fresh data', 'Use semantic search', 'Rank by relevance', 'Include source attribution']
      }
    },
    {
      id: 'prompt-engineering',
      name: 'Prompt Engineering',
      description: 'The critical layer that combines user input, system instructions, and RAG context into optimized, context-rich prompts with examples, constraints, and clear instructions',
      role: 'The orchestration layer that combines all inputs into effective AI prompts',
      example: 'Combine: System role + User request + RAG context → "You are a professional communication expert. Using these email templates [RAG data], write a polite job offer decline email that: 1) Thanks them, 2) Gives brief reason, 3) Keeps door open. Tone: Professional but warm."',
      color: 'bg-green-500/20 border-green-400/50 text-green-300',
      icon: '🎯',
      position: { x: 50, y: 50 },
      connections: ['llm-processing'],
      details: {
        inputs: ['User intent', 'System prompts', 'RAG context', 'Historical interactions', 'User preferences'],
        outputs: ['Optimized prompts', 'Context injection', 'Example selection', 'Constraint definitions'],
        keyFeatures: ['Template management', 'Dynamic context injection', 'Example selection', 'Constraint application'],
        bestPractices: ['Combine all context sources', 'Provide relevant examples', 'Set clear output format', 'Include error handling']
      }
    },
    {
      id: 'llm-processing',
      name: 'LLM Processing',
      description: 'The core language model (GPT-4, Claude, Gemini) that processes the complete prompt context, applies reasoning, and generates human-like responses based on its training',
      role: 'The brain that understands context, applies reasoning, and generates coherent responses',
      example: 'Process: Combined prompt with system role + user context + RAG data + examples → Generate contextually appropriate, well-reasoned response',
      color: 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300',
      icon: '🧠',
      position: { x: 75, y: 50 },
      connections: ['tool-integration', 'output-processing'],
      details: {
        inputs: ['Engineered prompts', 'System context', 'RAG context', 'Tool schemas', 'Conversation history'],
        outputs: ['Generated text', 'Tool calls', 'Reasoning chains', 'Confidence indicators'],
        keyFeatures: ['Natural language understanding', 'Contextual reasoning', 'Tool integration', 'Multi-turn conversation'],
        bestPractices: ['Optimize token usage', 'Monitor response quality', 'Handle edge cases', 'Implement fallbacks']
      }
    },
    {
      id: 'tool-integration',
      name: 'Tool Integration',
      description: 'Enables AI to interact with external systems, APIs, databases, and services to perform actions beyond text generation like calculations, data retrieval, or system operations',
      role: 'Extends AI capabilities beyond text generation to real-world actions',
      example: 'Calendar API: Check availability, Email API: Send drafts, Database: Query user preferences, Weather API: Get current conditions',
      color: 'bg-orange-500/20 border-orange-400/50 text-orange-300',
      icon: '🔧',
      position: { x: 90, y: 30 },
      connections: ['output-processing'],
      details: {
        inputs: ['Tool schemas', 'API credentials', 'Function calls', 'Parameter validation'],
        outputs: ['API responses', 'Tool results', 'Error handling', 'Action confirmations'],
        keyFeatures: ['Function calling', 'API integration', 'Error handling', 'Result validation'],
        bestPractices: ['Validate tool calls', 'Handle API errors', 'Secure credentials', 'Log tool usage']
      }
    },
    {
      id: 'output-processing',
      name: 'Output Processing',
      description: 'Final layer that formats, validates, enhances, and secures the AI response before delivery, ensuring quality, safety, and proper formatting',
      role: 'Ensures output meets quality, safety, and format requirements',
      example: 'Format as email → Add signature → Check for sensitive info → Apply brand voice → Validate links → Final quality check',
      color: 'bg-red-500/20 border-red-400/50 text-red-300',
      icon: '📤',
      position: { x: 90, y: 70 },
      connections: [],
      details: {
        inputs: ['Raw AI output', 'Tool results', 'Format templates', 'Safety filters'],
        outputs: ['Formatted response', 'Safety validation', 'Quality metrics', 'User-ready content'],
        keyFeatures: ['Content formatting', 'Safety filtering', 'Quality validation', 'Brand consistency'],
        bestPractices: ['Validate output format', 'Filter sensitive content', 'Apply brand guidelines', 'Monitor quality metrics']
      }
    }
  ];

  const selectedComponentData = architectureComponents.find(c => c.id === selectedComponent);

  // Enhanced arrow rendering with better positioning and styling
  const renderDataFlowArrows = () => {
    if (!showDataFlow) return null;

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#10b981"
              opacity="0.8"
            />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {architectureComponents.map(component => 
          component.connections.map(targetId => {
            const target = architectureComponents.find(c => c.id === targetId);
            if (!target) return null;
            
            // Calculate positions as percentages of the container
            const startX = component.position.x;
            const startY = component.position.y;
            const endX = target.position.x;
            const endY = target.position.y;
            
            // Create curved path for better visual flow
            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2;
            const controlX = midX + (endY - startY) * 0.15;
            const controlY = midY - (endX - startX) * 0.15;
            
            return (
              <g key={`${component.id}-${targetId}`}>
                {/* Glow effect */}
                <path
                  d={`M ${startX}% ${startY}% Q ${controlX}% ${controlY}% ${endX}% ${endY}%`}
                  stroke="#10b981"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.2"
                  filter="url(#glow)"
                />
                {/* Main arrow */}
                <path
                  d={`M ${startX}% ${startY}% Q ${controlX}% ${controlY}% ${endX}% ${endY}%`}
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.9"
                  markerEnd="url(#arrowhead)"
                  strokeDasharray="8,4"
                />
                {/* Data flow animation */}
                <circle r="3" fill="#10b981" opacity="0.8">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={`M ${startX}% ${startY}% Q ${controlX}% ${controlY}% ${endX}% ${endY}%`}
                  />
                </circle>
              </g>
            );
          })
        )}
        
        {/* Additional visual connections for better flow understanding */}
        <g opacity="0.3">
          {/* User Input to System Prompt */}
          <line x1="5%" y1="50%" x2="25%" y2="20%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* User Input to RAG Retrieval */}
          <line x1="5%" y1="50%" x2="25%" y2="80%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* System Prompt to Prompt Engineering */}
          <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* RAG to Prompt Engineering */}
          <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* Prompt Engineering to LLM Processing */}
          <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* LLM to Tool Integration */}
          <line x1="75%" y1="50%" x2="90%" y2="30%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* LLM to Output Processing */}
          <line x1="75%" y1="50%" x2="90%" y2="70%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
          {/* Tool Integration to Output Processing */}
          <line x1="90%" y1="30%" x2="90%" y2="70%" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
        </g>
      </svg>
    );
  };

  return (
    <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-8">
      {/* Enhanced Controls */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setShowDataFlow(!showDataFlow)}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
            showDataFlow 
              ? 'bg-green-500/20 border border-green-400/50 text-green-300 shadow-lg shadow-green-500/20' 
              : 'bg-gray-800/50 border border-gray-600/50 text-gray-400 hover:text-gray-300'
          }`}
        >
          {showDataFlow ? '🔗 hide_data_flow' : '🔗 show_data_flow'}
        </button>
        <button
          onClick={() => setSelectedComponent(null)}
          className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors"
        >
          🔄 reset_view
        </button>
        <div className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 rounded-lg font-mono text-sm">
          💡 click_components_to_explore
        </div>
      </div>

      {/* Enhanced Architecture Diagram */}
      <div className="relative h-[500px] bg-black/50 border border-gray-800/50 rounded-lg mb-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Data Flow Arrows - Always render when showDataFlow is true */}
        {showDataFlow && renderDataFlowArrows()}

        {/* Enhanced Components */}
        {architectureComponents.map((component) => (
          <div
            key={component.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 z-20 ${
              selectedComponent === component.id ? 'scale-110 z-30' : 'hover:scale-105'
            }`}
            style={{
              left: `${component.position.x}%`,
              top: `${component.position.y}%`
            }}
            onClick={() => setSelectedComponent(component.id)}
          >
            <div className={`w-28 h-28 rounded-xl border-2 ${component.color} flex flex-col items-center justify-center p-3 transition-all duration-300 backdrop-blur-sm ${
              selectedComponent === component.id ? 'shadow-2xl shadow-current/30' : 'hover:shadow-lg hover:shadow-current/20'
            }`}>
              <div className="text-3xl mb-1">{component.icon}</div>
              <div className="text-xs font-mono text-center leading-tight font-semibold">
                {component.name.split(' ').map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Flow Labels - Enhanced visibility */}
        {showDataFlow && (
          <div className="absolute top-4 left-4 bg-black/80 border border-green-500/50 rounded-lg p-3 font-mono text-xs backdrop-blur-sm">
            <div className="text-green-400 mb-2 font-semibold">// data_flow_legend</div>
            <div className="flex items-center space-x-2 text-gray-300 mb-1">
              <div className="w-6 h-0.5 bg-green-400 opacity-90"></div>
              <span>information flow</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>processing pulse</span>
            </div>
          </div>
        )}

        {/* Debug indicator when data flow is active */}
        {showDataFlow && (
          <div className="absolute top-4 right-4 bg-green-500/20 border border-green-400/50 rounded-lg px-3 py-1 font-mono text-xs text-green-300">
            ✓ data_flow_active
          </div>
        )}
      </div>

      {/* Enhanced Component Details */}
      {selectedComponentData && (
        <div className="bg-black/50 border border-gray-800/50 rounded-lg p-6">
          <div className="flex items-start space-x-6">
            <div className={`w-20 h-20 rounded-xl border-2 ${selectedComponentData.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg shadow-current/20`}>
              {selectedComponentData.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 font-mono">
                {selectedComponentData.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedComponentData.description}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono text-sm mb-3 flex items-center">
                    <span className="mr-2">🎯</span> role_in_system
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedComponentData.role}</p>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-mono text-sm mb-3 flex items-center">
                    <span className="mr-2">💡</span> example_usage
                  </h4>
                  <p className="text-gray-300 text-sm font-mono leading-relaxed">{selectedComponentData.example}</p>
                </div>
              </div>

              {/* Detailed Technical Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-mono text-sm mb-3 flex items-center">
                      <span className="mr-2">📥</span> inputs
                    </h4>
                    <ul className="space-y-1">
                      {selectedComponentData.details.inputs.map((input, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>{input}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-mono text-sm mb-3 flex items-center">
                      <span className="mr-2">📤</span> outputs
                    </h4>
                    <ul className="space-y-1">
                      {selectedComponentData.details.outputs.map((output, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-mono text-sm mb-3 flex items-center">
                      <span className="mr-2">⚡</span> key_features
                    </h4>
                    <ul className="space-y-1">
                      {selectedComponentData.details.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="text-purple-400 font-mono text-sm mb-3 flex items-center">
                      <span className="mr-2">🏆</span> best_practices
                    </h4>
                    <ul className="space-y-1">
                      {selectedComponentData.details.bestPractices.map((practice, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {selectedComponentData.connections.length > 0 && (
                <div className="bg-gray-900/50 border border-orange-500/30 rounded-lg p-4">
                  <h4 className="text-orange-400 font-mono text-sm mb-3 flex items-center">
                    <span className="mr-2">🔗</span> data_flow_connections
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedComponentData.connections.map(connectionId => {
                      const connectedComponent = architectureComponents.find(c => c.id === connectionId);
                      return connectedComponent ? (
                        <span 
                          key={connectionId}
                          className="px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-xs font-mono cursor-pointer hover:bg-orange-500/30 transition-all duration-300 flex items-center"
                          onClick={() => setSelectedComponent(connectionId)}
                        >
                          <span className="mr-1">{connectedComponent.icon}</span>
                          {connectedComponent.name}
                          <span className="ml-1">→</span>
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Architecture Insights */}
      <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6">
        <h4 className="text-blue-400 font-mono text-lg mb-6 flex items-center">
          <span className="mr-3">💡</span> architecture_insights[]
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div className="space-y-3">
            <div className="bg-black/30 border border-green-500/20 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-green-400 font-mono">prompt_engineering</span> is the most impactful component - it's where human intent meets AI capability
              </p>
            </div>
            <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-cyan-400 font-mono">rag_retrieval</span> prevents hallucinations by grounding responses in real, up-to-date data
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-black/30 border border-purple-500/20 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-purple-400 font-mono">system_prompts</span> set consistent behavior and personality across all interactions
              </p>
            </div>
            <div className="bg-black/30 border border-yellow-500/20 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-yellow-400 font-mono">llm_processing</span> is where the magic happens - but it's only as good as its inputs
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-black/30 border border-orange-500/20 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-orange-400 font-mono">tool_integration</span> extends AI beyond text generation to real-world actions
              </p>
            </div>
            <div className="bg-black/30 border border-red-500/20 rounded-lg p-3">
              <p className="text-gray-300">
                <span className="text-red-400 font-mono">output_processing</span> ensures quality, safety, and proper formatting before delivery
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-black/50 border border-gray-700/50 rounded-lg p-4">
          <h5 className="text-white font-mono text-sm mb-3">🏗️ production_architecture_tips</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-gray-300 mb-2">
                <span className="text-green-400">•</span> <strong>Version control your prompts</strong> like code
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-blue-400">•</span> <strong>Monitor each component</strong> for performance
              </p>
              <p className="text-gray-300">
                <span className="text-purple-400">•</span> <strong>A/B test prompt variations</strong> continuously
              </p>
            </div>
            <div>
              <p className="text-gray-300 mb-2">
                <span className="text-yellow-400">•</span> <strong>Cache RAG results</strong> for efficiency
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-orange-400">•</span> <strong>Implement fallback strategies</strong> for each layer
              </p>
              <p className="text-gray-300">
                <span className="text-red-400">•</span> <strong>Log everything</strong> for debugging and optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Introduction({ onNavigate }: IntroductionProps) {
  const [answers, setAnswers] = useState<QuestionAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const motivationFactors = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "performance_gap",
      description: "bridge the gap between model capabilities and actual performance through better prompting",
      example: "gpt-4 can solve complex math problems, but only with proper step-by-step prompting",
      accent: "text-cyan-400",
      funnyNote: "It's like having a genius friend who only helps if you ask nicely 🤖"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "cost_efficiency",
      description: "reduce api costs by getting better results with fewer tokens and iterations",
      example: "a well-crafted prompt can replace multiple api calls and reduce costs by 70%",
      accent: "text-green-400",
      funnyNote: "Your wallet will thank you (and so will your boss) 💰"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "speed_reliability",
      description: "achieve consistent, fast results without extensive fine-tuning or model training",
      example: "prompt engineering delivers results in minutes vs. weeks for model training",
      accent: "text-yellow-400",
      funnyNote: "Because ain't nobody got time for training models from scratch ⚡"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "practical_implementation",
      description: "enable rapid prototyping and deployment of ai-powered applications",
      example: "build a customer service chatbot in days, not months",
      accent: "text-purple-400",
      funnyNote: "From idea to 'holy cow, it actually works!' in record time 🚀"
    }
  ];

  const interactiveQuestions = [
    {
      question: "Have you ever asked ChatGPT something and got a response that made you go 'wat?' 🤔",
      options: ["Yes, all the time!", "Sometimes", "Rarely", "Never (you're lying)"],
      insight: "You're not alone! Even the smartest AI needs clear instructions.",
      scores: [3, 2, 1, 0] // Higher score = more need for prompt engineering
    },
    {
      question: "What's your biggest AI frustration?",
      options: ["Vague responses", "Wrong answers", "Expensive API calls", "All of the above"],
      insight: "Plot twist: Most of these can be fixed with better prompting!",
      scores: [2, 3, 1, 4]
    },
    {
      question: "How do you currently write prompts?",
      options: ["Wing it and pray", "Copy from examples", "Trial and error", "I have a system"],
      insight: "Time to level up your prompt game! 🎮",
      scores: [3, 1, 2, 0]
    }
  ];

  const handleAnswerClick = (questionIndex: number, optionIndex: number): void => {
    const newAnswers = answers.filter(a => a.questionIndex !== questionIndex);
    newAnswers.push({ questionIndex, selectedOption: optionIndex });
    setAnswers(newAnswers);

    // Show results when all questions are answered
    if (newAnswers.length === interactiveQuestions.length) {
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const getPersonalityResult = (): { type: string; description: string; recommendation: string; accent: string } => {
    const totalScore = answers.reduce((sum, answer) => {
      return sum + interactiveQuestions[answer.questionIndex].scores[answer.selectedOption];
    }, 0);

    if (totalScore >= 8) {
      return {
        type: "prompt_newbie",
        description: "You're just getting started with AI prompting! 🌱",
        recommendation: "Perfect timing to learn the fundamentals. Start with zero-shot and few-shot techniques.",
        accent: "text-green-400"
      };
    } else if (totalScore >= 5) {
      return {
        type: "prompt_explorer",
        description: "You've got some experience but there's room to grow! 🚀",
        recommendation: "Ready for advanced methods like chain-of-thought and self-consistency.",
        accent: "text-blue-400"
      };
    } else {
      return {
        type: "prompt_wizard",
        description: "You're already pretty savvy with AI! 🧙‍♂️",
        recommendation: "Time to master tree-of-thoughts and ReAct for complex scenarios.",
        accent: "text-purple-400"
      };
    }
  };

  const isAnswered = (questionIndex: number): boolean => {
    return answers.some(a => a.questionIndex === questionIndex);
  };

  const getSelectedOption = (questionIndex: number): number | null => {
    const answer = answers.find(a => a.questionIndex === questionIndex);
    return answer ? answer.selectedOption : null;
  };

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat why_prompt_engineering_rocks.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; introduction
            </span>
            <span className="text-gray-500 text-2xl ml-4">// let's get real</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// spoiler_alert</div>
              <p className="text-gray-300 leading-relaxed">
                you're about to discover why talking to AI is both an art and a science 
                (and why your prompts probably suck right now) 😅
              </p>
            </div>
          </div>
        </div>

        {/* Fun Opening Section */}
        <div className="mb-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 font-mono">
              the_uncomfortable_truth()
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 font-mono">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-yellow-400">// real_talk:</span> You've probably spent hours fighting with AI models, 
                getting responses that are about as useful as a chocolate teapot. 🍫🫖
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-cyan-400">// plot_twist:</span> It's not the AI that's broken... 
                it's how we're talking to it! 
              </p>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  <span className="text-yellow-400">// fun_fact:</span> The difference between "write me a story" 
                  and a well-crafted prompt is like the difference between asking for "food" 
                  and ordering a "medium-rare wagyu steak with truffle butter" 🥩✨
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Questions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            quick_reality_check[]
          </h2>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// let's see where you stand</div>
            <p className="text-gray-300 text-sm">
              answer honestly (we won't judge... much) 😏
            </p>
          </div>
          
          <div className="space-y-8">
            {interactiveQuestions.map((q, index) => (
              <div 
                key={index} 
                className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 transition-all duration-500 font-mono"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  <span className="text-green-400">Q{index + 1}:</span> {q.question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {q.options.map((option, optionIndex) => {
                    const isSelected = getSelectedOption(index) === optionIndex;
                    const isQuestionAnswered = isAnswered(index);
                    
                    return (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerClick(index, optionIndex)}
                        disabled={isQuestionAnswered}
                        className={`p-3 border rounded-lg text-left transition-all duration-300 group ${
                          isSelected 
                            ? 'bg-green-900/30 border-green-500/50 text-green-300' 
                            : isQuestionAnswered
                            ? 'bg-gray-800/30 border-gray-700/30 text-gray-500 cursor-not-allowed'
                            : 'bg-black/50 border-gray-800/50 hover:border-gray-600/50 hover:bg-gray-900/50 text-gray-300 hover:text-white cursor-pointer'
                        }`}
                      >
                        <span className={`${isSelected ? 'text-green-400' : 'text-cyan-400'} group-hover:text-cyan-300`}>
                          {isSelected ? '✓ ' : '// '}
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-blue-200 text-sm">
                    <span className="text-blue-400">// insight:</span> {q.insight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Results Section */}
          {showResults && (
            <div className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-8 font-mono">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-6">
                  assessment_complete[]
                </h3>
                {(() => {
                  const result = getPersonalityResult();
                  return (
                    <div className="space-y-6">
                      <div className={`text-6xl mb-4 ${result.accent}`}>
                        {result.type === 'prompt_newbie' ? '🌱' : 
                         result.type === 'prompt_explorer' ? '🚀' : '🧙‍♂️'}
                      </div>
                      <h4 className={`text-2xl font-bold ${result.accent} mb-4`}>
                        you_are_a: {result.type}
                      </h4>
                      <p className="text-gray-300 text-lg mb-4">
                        {result.description}
                      </p>
                      <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 mb-6">
                        <p className="text-gray-300 text-sm">
                          <span className="text-yellow-400">// recommendation:</span> {result.recommendation}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                          onClick={() => onNavigate?.('fundamentals')}
                          className="px-6 py-3 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 text-green-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          $ ./start_learning.sh
                        </button>
                        <button 
                          onClick={() => onNavigate?.('prompting-methods')}
                          className="px-6 py-3 border border-gray-600/50 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                        >
                          $ ./try_advanced_methods.sh ✨
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>

        {/* Hero section with two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Why It Matters */}
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-8 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              why_this_matters
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm">
                // imagine having a super-smart assistant who can do almost anything, 
                but they're really, REALLY literal. like, "make me a sandwich" might get you 
                bread with a single slice of cheese. 🥪
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                // that's basically every AI model ever. they're incredibly powerful, 
                but they need <span className="text-cyan-400">crystal clear instructions</span> to shine.
              </p>
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-cyan-200 text-xs">
                  <span className="text-cyan-400">// mind_blown_moment:</span> the same model that gives you 
                  gibberish with a bad prompt can write poetry that makes you cry with a good one 🎭
                </p>
              </div>
            </div>
          </div>

          {/* Production Bridge */}
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-8 hover:border-gray-700/50 transition-all duration-500 font-mono">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              from_prototype_to_production
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm">
                // here's where things get spicy 🌶️ moving from "hey, this kinda works" 
                to "holy moly, this is actually reliable" requires some serious prompt engineering chops.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                // we're talking version control for prompts, A/B testing, monitoring, 
                the whole nine yards. treat your prompts like the critical infrastructure they are!
              </p>
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-200 text-xs">
                  <span className="text-green-400">// harsh_reality:</span> 80% of AI projects fail not because 
                  the models suck, but because the prompts do 📊💔
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivation Factors */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-12 font-mono">
            why_you_need_this[]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {motivationFactors.map((factor, index) => (
              <div 
                key={factor.title} 
                className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${factor.accent} flex-shrink-0 mt-1`}>
                    {factor.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${factor.accent} font-mono`}>
                      {factor.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {factor.description}
                    </p>
                    <div className="bg-black/50 border border-gray-800/50 rounded-lg p-3 mb-3">
                      <p className="text-gray-400 text-xs font-mono">
                        // example: {factor.example}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs italic">
                      {factor.funnyNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive GenAI Architecture */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            genai_architecture_playground[]
          </h2>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-4xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// understand the full pipeline</div>
            <p className="text-gray-300 text-sm">
              click on each component to see how it works in the AI system 🏗️
            </p>
          </div>

          <ArchitecturePlayground />
        </div>

        {/* Call to Action - Only show if results haven't been shown yet */}
        {!showResults && (
          <div className="text-center">
            <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto font-mono">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  ready_to_become_a_prompt_wizard? 🧙‍♂️
                </h3>
                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 mb-8">
                  <div className="text-green-400 mb-2">// what_you'll_learn</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    from "please work" to "holy cow, this is exactly what I wanted!" 
                    we'll turn you into a prompt engineering ninja 🥷
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => onNavigate?.('fundamentals')}
                    className="px-6 py-3 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 text-green-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      $ ./lets_do_this.sh
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <button 
                    onClick={() => onNavigate?.('prompting-methods')}
                    className="px-6 py-3 border border-gray-600/50 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    $ ./show_me_the_magic.sh ✨
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Introduction; 