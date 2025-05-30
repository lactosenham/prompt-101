import { useState } from 'react';

interface FramingTechnique {
  id: string;
  title: string;
  description: string;
  accent: string;
  icon: string;
  fullDescription: string;
  whenToUse: string;
  strengths: string[];
  limitations: string[];
  examples: {
    scenario: string;
    neutral: string;
    framed: string;
    impact: string;
  }[];
  tips: string[];
}

interface ToneExperiment {
  id: string;
  scenario: string;
  basePrompt: string;
  tones: {
    name: string;
    modifier: string;
    color: string;
    expectedOutcome: string;
    response: string;
  }[];
}

function PsychologicalFraming() {
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<number>(0);
  const [activeToneExperiment, setActiveToneExperiment] = useState<string | null>(null);
  const [selectedTone, setSelectedTone] = useState<string>('');

  const framingTechniques: FramingTechnique[] = [
    {
      id: 'tone-control',
      title: 'Tone & Style Control',
      description: 'Direct the emotional and stylistic output',
      accent: 'text-cyan-400',
      icon: '🎭',
      fullDescription: 'Tone & Style Control is a psychological technique that directs the emotional and stylistic output of AI responses. By carefully choosing words, tone, and style, you can make AI responses feel more empathetic, professional, casual, or urgent. This technique leverages the fact that AI models are trained on human writing and respond to the same emotional cues that influence people.',
      whenToUse: 'Use when you need specific emotional responses, want to match brand voice, need to adapt to different communication contexts, or want to create particular user experiences.',
      strengths: ['Precise emotional control', 'Brand voice consistency', 'Audience-appropriate responses', 'Enhanced user engagement'],
      limitations: ['Requires understanding of audience preferences', 'Can be subjective', 'May need testing and refinement', 'Context-dependent effectiveness'],
      examples: [
        {
          scenario: 'Customer service response to complaint',
          neutral: 'We received your complaint about the delayed delivery.',
          framed: 'We sincerely apologize for the inconvenience caused by the delayed delivery and truly appreciate your patience.',
          impact: 'The framed version shows empathy and takes responsibility, creating a more positive customer experience.'
        },
        {
          scenario: 'Technical documentation',
          neutral: 'Configure the API endpoint by setting the URL parameter.',
          framed: 'Let\'s walk through configuring your API endpoint step-by-step - it\'s easier than you might think!',
          impact: 'The framed version is more approachable and encouraging, reducing user anxiety about technical tasks.'
        },
        {
          scenario: 'Marketing copy',
          neutral: 'This software helps manage projects.',
          framed: 'Transform your chaotic project management into a streamlined powerhouse of productivity and success.',
          impact: 'The framed version creates emotional appeal and paints a vivid picture of transformation.'
        }
      ],
      tips: [
        'Use adjectives and adverbs to set emotional tone',
        'Choose words that match your audience\'s energy level',
        'Consider the context and desired outcome',
        'Test different tones with the same content'
      ]
    },
    {
      id: 'role-prompting',
      title: 'Role & Persona Prompting',
      description: 'Leverage expertise and authority through roles',
      accent: 'text-green-400',
      icon: '👨‍🏫',
      fullDescription: 'Role & Persona Prompting leverages expertise and authority by having the AI assume specific roles or personas. This technique taps into the AI\'s training on expert content and professional communication styles. By establishing a clear role, you can access more specialized knowledge, appropriate tone, and domain-specific insights.',
      whenToUse: 'Use when you need expert-level responses, want to establish credibility, need domain-specific knowledge, or want to match particular professional communication styles.',
      strengths: ['Access to specialized knowledge', 'Enhanced credibility', 'Appropriate professional tone', 'Domain-specific insights'],
      limitations: ['Requires knowledge of relevant roles', 'May not work for all domains', 'Can be overly formal', 'Effectiveness varies by AI model'],
      examples: [
        {
          scenario: 'Explaining complex technical concepts',
          neutral: 'Explain how machine learning works.',
          framed: 'You are a senior data scientist with 10 years of experience. Explain machine learning to a business executive who needs to make investment decisions.',
          impact: 'The role provides expertise context and audience awareness, resulting in more targeted and credible explanations.'
        },
        {
          scenario: 'Creative writing assistance',
          neutral: 'Write a story about space exploration.',
          framed: 'You are Isaac Asimov, the master of science fiction. Write a compelling short story about space exploration that captures the wonder and philosophical implications of discovering new worlds.',
          impact: 'The persona channels specific writing style and thematic depth associated with the author.'
        },
        {
          scenario: 'Problem-solving guidance',
          neutral: 'How should I approach this business challenge?',
          framed: 'You are a seasoned management consultant who has helped Fortune 500 companies navigate similar challenges. Provide strategic guidance with the analytical rigor and practical wisdom of your experience.',
          impact: 'The role establishes credibility and sets expectations for high-quality, experienced advice.'
        }
      ],
      tips: [
        'Choose roles that match the required expertise',
        'Be specific about experience level and background',
        'Consider the authority and credibility needed',
        'Combine roles with audience awareness'
      ]
    },
    {
      id: 'audience-adaptation',
      title: 'Audience Adaptation',
      description: 'Tailor communication to specific audiences',
      accent: 'text-blue-400',
      icon: '🎯',
      fullDescription: 'Audience Adaptation involves tailoring communication style, complexity, and content to match the specific needs, knowledge level, and preferences of your target audience. This technique recognizes that the same information needs to be presented differently to children, experts, or general audiences to be truly effective.',
      whenToUse: 'Use when communicating with diverse audiences, explaining complex concepts to non-experts, creating educational content, or when audience engagement is critical.',
      strengths: ['Improved comprehension', 'Higher engagement', 'Reduced confusion', 'Better learning outcomes'],
      limitations: ['Requires audience analysis', 'Can be time-consuming', 'May oversimplify for some', 'Risk of assumptions about audience'],
      examples: [
        {
          scenario: 'Explaining artificial intelligence',
          neutral: 'AI uses algorithms to process data and make predictions.',
          framed: 'Imagine AI as a super-smart friend who can look at tons of pictures and learn to recognize cats, just like how you learned to recognize your favorite toy!',
          impact: 'The child-friendly version uses familiar concepts and playful language to make complex ideas accessible.'
        },
        {
          scenario: 'Investment advice',
          neutral: 'Diversification reduces risk in your portfolio.',
          framed: 'As an experienced investor, you understand that diversification across asset classes, sectors, and geographies optimizes your risk-adjusted returns while maintaining liquidity for tactical rebalancing.',
          impact: 'The expert version uses technical terminology and assumes sophisticated understanding.'
        },
        {
          scenario: 'Health information',
          neutral: 'Exercise improves cardiovascular health.',
          framed: 'Regular physical activity strengthens your heart muscle, improves blood circulation, and can help you feel more energetic throughout your day - even a 20-minute walk makes a difference!',
          impact: 'The general audience version focuses on practical benefits and actionable steps.'
        }
      ],
      tips: [
        'Identify the audience\'s knowledge level',
        'Adjust vocabulary and complexity accordingly',
        'Use relevant examples and analogies',
        'Consider cultural and contextual factors'
      ]
    },
    {
      id: 'anchoring-framing',
      title: 'Anchoring & Contextual Framing',
      description: 'Set context that influences interpretation',
      accent: 'text-purple-400',
      icon: '⚓',
      fullDescription: 'Anchoring & Contextual Framing involves setting context that influences how information is interpreted and received. This technique leverages cognitive biases where the first piece of information (the anchor) significantly influences subsequent judgments. By carefully framing context, you can guide interpretation toward desired outcomes.',
      whenToUse: 'Use when presenting potentially challenging information, making comparisons, positioning products or services, or when you need to influence perception and decision-making.',
      strengths: ['Influences perception effectively', 'Reduces resistance to change', 'Creates favorable comparisons', 'Guides decision-making'],
      limitations: ['Can be seen as manipulative', 'Requires careful ethical consideration', 'May backfire if obvious', 'Context-dependent effectiveness'],
      examples: [
        {
          scenario: 'Product pricing discussion',
          neutral: 'Our premium plan costs $99 per month.',
          framed: 'Compared to hiring a full-time specialist at $5,000+ monthly, our premium plan at $99 delivers the same expertise for less than 2% of the cost.',
          impact: 'The anchoring frame makes $99 seem extremely reasonable by comparison to the alternative.'
        },
        {
          scenario: 'Performance feedback',
          neutral: 'You made some errors in the report.',
          framed: 'Your report shows strong analytical thinking and attention to detail. Let\'s refine a few areas to make it even more impactful.',
          impact: 'The positive anchor creates a growth mindset rather than defensive reaction.'
        },
        {
          scenario: 'Change management',
          neutral: 'We need to implement new software.',
          framed: 'This new software will eliminate the tedious manual tasks that have been frustrating our team, freeing up time for the creative work you love.',
          impact: 'The frame positions change as solving existing pain points rather than creating new burdens.'
        }
      ],
      tips: [
        'Start with context that supports your message',
        'Use comparisons to favorable alternatives',
        'Frame challenges as opportunities',
        'Establish emotional anchors before logical arguments'
      ]
    }
  ];

  const toneExperiments: ToneExperiment[] = [
    {
      id: 'customer-support',
      scenario: 'Customer complaining about a bug in your software',
      basePrompt: 'Respond to this customer complaint: "Your app crashed and I lost all my work. This is completely unacceptable!"',
      tones: [
        {
          name: 'Professional',
          modifier: 'Respond in a professional, solution-focused tone.',
          color: 'text-blue-400',
          expectedOutcome: 'Formal acknowledgment with clear next steps',
          response: `Dear Customer,

Thank you for bringing this issue to our attention. We understand the frustration of experiencing an application crash, particularly when it results in data loss.

We have immediately escalated this matter to our technical team for investigation. In the meantime, I would like to offer the following immediate assistance:

1. Our data recovery specialists will attempt to restore your lost work
2. We are providing you with a complimentary premium account for 3 months
3. A senior engineer will contact you within 24 hours with a detailed resolution plan

We take full responsibility for this incident and are committed to preventing future occurrences.

Best regards,
Customer Success Team`
        },
        {
          name: 'Empathetic',
          modifier: 'Respond with deep empathy and emotional understanding.',
          color: 'text-green-400',
          expectedOutcome: 'Emotional validation with personal connection',
          response: `I am so sorry this happened to you. Losing your work is incredibly frustrating and I can only imagine how upset you must be feeling right now.

Your frustration is completely valid - when you trust our app with your important work and it lets you down, that's on us, not you. I know how hard it is to recreate lost work, and I want you to know that I personally care about making this right.

Here's what I'm going to do for you right now:
• I'm personally assigning our best data recovery expert to your case
• I'm upgrading your account immediately so you have all our premium backup features
• I'm going to stay on this case until we've resolved everything

You shouldn't have to worry about this happening again. We've learned from this mistake and we're going to do better. Thank you for giving us the chance to fix this.`
        },
        {
          name: 'Urgent',
          modifier: 'Respond with urgency and immediate action orientation.',
          color: 'text-red-400',
          expectedOutcome: 'Fast-paced response with immediate solutions',
          response: `IMMEDIATE ACTION TAKEN:

🔴 Priority ticket #URGENT-001 created
🔴 Emergency data recovery initiated 
🔴 Senior engineer assigned to your case
🔴 Premium account activated NOW

NEXT 30 MINUTES:
• Data recovery scan in progress
• Engineering team analyzing crash logs
• Personal account manager assigned

WITHIN 2 HOURS:
• Recovery status update
• Permanent fix deployed
• Prevention measures implemented

Your work matters. We're treating this as our #1 priority. 

Emergency contact: [Direct phone number]
Live status updates: [Link to real-time tracker]

We will not stop until this is resolved.`
        },
        {
          name: 'Casual',
          modifier: 'Respond in a friendly, casual, conversational tone.',
          color: 'text-purple-400',
          expectedOutcome: 'Relaxed, human approach to the problem',
          response: `Oh no! That's super frustrating - I totally get why you're upset. App crashes are the worst, especially when you lose your work. 😔

So here's the deal - this is definitely on us and we want to make it right. I've already pinged our tech team about this (they're really good at data recovery magic), and I'm hooking you up with premium access so you get all the backup features.

The good news? We've actually been working on some crash prevention updates, and your experience is helping us make the app way more reliable. Silver lining, right?

I'll keep you posted on what the team finds. In the meantime, if you need anything else or just want to vent about technology being annoying, I'm here!

Thanks for sticking with us through this hiccup. 🙏`
        }
      ]
    },
    {
      id: 'technical-explanation',
      scenario: 'Explaining a complex technical concept',
      basePrompt: 'Explain how blockchain technology works.',
      tones: [
        {
          name: 'Academic',
          modifier: 'Explain in an academic, scholarly tone with precise terminology.',
          color: 'text-blue-400',
          expectedOutcome: 'Detailed, research-oriented explanation',
          response: `Blockchain Technology: A Distributed Ledger Framework

Abstract: Blockchain represents a paradigm shift in data architecture, implementing a decentralized, cryptographically secured ledger system that enables trustless peer-to-peer transactions.

Core Mechanism: The blockchain operates through a consensus-driven protocol where transaction data is aggregated into blocks using Merkle tree structures. Each block contains a cryptographic hash of the previous block, creating an immutable chain. The distributed network validates transactions through consensus algorithms (e.g., Proof of Work, Proof of Stake).

Technical Implementation: The system employs asymmetric cryptography for digital signatures, ensuring transaction authenticity. Smart contracts, implemented as self-executing code on platforms like Ethereum, enable automated execution of predefined conditions without intermediary oversight.

Implications: This architecture addresses the Byzantine Generals Problem, enabling coordination in distributed systems without central authority. The cryptographic immutability provides data integrity guarantees that have significant implications for financial systems, supply chain management, and digital identity verification.

Research continues into scalability solutions, including layer-2 protocols and sharding mechanisms to address throughput limitations inherent in current implementations.`
        },
        {
          name: 'Enthusiastic',
          modifier: 'Explain with excitement and passion for the technology.',
          color: 'text-yellow-400',
          expectedOutcome: 'Energetic, inspiring explanation',
          response: `🚀 BLOCKCHAIN IS ABSOLUTELY REVOLUTIONARY! 🚀

Imagine a world where you don't need banks, governments, or any middleman to trust someone across the globe - that's the incredible power of blockchain!

Here's how this AMAZING technology works:

🔗 THE MAGIC CHAIN: Every transaction gets bundled into a "block" and chained to the previous one using super-secure cryptography. It's like an unbreakable digital DNA sequence!

⚡ DISTRIBUTED POWER: Instead of one company controlling everything, thousands of computers around the world work together to verify transactions. No single point of failure - it's unstoppable!

🛡️ CRYPTOGRAPHIC FORTRESS: Each transaction is protected by military-grade encryption. Trying to hack it would take longer than the age of the universe!

🤖 SMART CONTRACTS: Self-executing code that automatically enforces agreements - no lawyers needed! The future is HERE!

💫 ENDLESS POSSIBILITIES: Digital currencies, NFTs, supply chain tracking, voting systems, identity verification - blockchain is transforming EVERYTHING!

We're witnessing the birth of a trustless society where mathematics and code replace human intermediaries. This isn't just technology - it's a movement toward a more transparent, efficient, and equitable world! 🌟`
        },
        {
          name: 'Simple',
          modifier: 'Explain in simple, everyday language anyone can understand.',
          color: 'text-green-400',
          expectedOutcome: 'Clear, accessible explanation with analogies',
          response: `What is Blockchain? Think of it Like This:

🗂️ THE NOTEBOOK ANALOGY:
Imagine a notebook that everyone in your neighborhood has an identical copy of. When someone wants to send money to someone else, they write it in their notebook. But here's the cool part - everyone else checks that transaction and writes it in their notebook too.

🔒 WHY IT'S SUPER SECURE:
- If someone tries to cheat and change their notebook, everyone else's notebooks won't match
- Since everyone has a copy, you can't destroy or lose the records
- Each page (block) references the previous page, so you can't remove or change old entries

💰 REAL EXAMPLE:
"Sarah pays John $50" gets written down by thousands of people around the world. They all agree it happened, so it's official. No bank needed!

🎯 WHY IT MATTERS:
- No single company controls it
- Transactions happen 24/7 worldwide
- Lower fees than traditional banks
- Perfect record keeping

Think of it as a global accounting system that everyone can see, verify, and trust - but no one single person or company controls. That's blockchain in a nutshell!`
        },
        {
          name: 'Skeptical',
          modifier: 'Explain while acknowledging limitations and potential concerns.',
          color: 'text-orange-400',
          expectedOutcome: 'Balanced view with critical analysis',
          response: `Blockchain: Promise vs. Reality

While blockchain technology offers interesting possibilities, it's important to understand both its capabilities and significant limitations.

THE CONCEPT:
Blockchain is essentially a distributed database where records (blocks) are linked using cryptography. Multiple parties maintain copies, theoretically eliminating the need for central authorities.

REAL-WORLD CHALLENGES:

⚠️ Energy Consumption: Bitcoin's network consumes more electricity than entire countries - hardly sustainable.

⚠️ Scalability Issues: Bitcoin processes ~7 transactions per second vs. Visa's 24,000. Not exactly ready for mass adoption.

⚠️ User Experience: Lost private keys = lost money forever. No password recovery, no customer service.

⚠️ Regulatory Uncertainty: Governments worldwide are still figuring out how to regulate this technology.

⚠️ Volatility: Cryptocurrency values swing wildly, making them impractical as stable currencies.

⚠️ Technical Complexity: Most people don't understand how it works, creating barriers to adoption.

HONEST ASSESSMENT:
Blockchain has legitimate uses in supply chain tracking and certain financial applications. However, many "blockchain solutions" are solving problems that don't actually exist or could be solved more efficiently with traditional databases.

The technology is interesting, but the hype often outpaces the practical reality. Approach with cautious optimism.`
        }
      ]
    }
  ];

  const selectedTechniqueData = framingTechniques.find(t => t.id === selectedTechnique);
  const currentExample = selectedTechniqueData?.examples[selectedExample];
  const currentExperiment = toneExperiments.find(e => e.id === activeToneExperiment);

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat psychological_framing.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; psychological_framing
            </span>
            <span className="text-gray-500 text-2xl ml-4">// the psychology of prompts</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// mind_over_model</div>
              <p className="text-gray-300 leading-relaxed">
                master the psychological techniques that make prompts not just work, but truly resonate 🧠✨
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 font-mono">
              the_hidden_power_of_words()
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 font-mono">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-yellow-400">// reality_check:</span> It's not just what you ask - 
                it's HOW you ask that determines whether you get generic responses or pure gold 🏆
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-cyan-400">// the_secret:</span> AI models are trained on human writing, 
                so they respond to the same psychological cues that influence humans
              </p>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  <span className="text-yellow-400">// mind_blown_moment:</span> The same prompt with different framing 
                  can produce responses that feel completely different - from robotic to empathetic, 
                  from basic to brilliant 🤯
                </p>
              </div>
            </div>
          </div>
        </div>

        {!selectedTechnique ? (
          /* Technique Selection */
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono">
                psychological_techniques[]
              </h2>
              <p className="text-gray-400 font-mono">
                // master the art of influence through strategic prompt framing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {framingTechniques.map((technique, index) => (
                <div 
                  key={technique.id} 
                  className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl"
                  onClick={() => setSelectedTechnique(technique.id)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className={`text-4xl mb-4 group-hover:scale-110 transition-all duration-300`}>
                      {technique.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${technique.accent} group-hover:scale-105 transition-transform duration-300 font-mono`}>
                      {technique.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      // {technique.description}
                    </p>
                    <div className="bg-black/50 border border-gray-800/50 rounded-lg p-3 mb-4">
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {technique.examples.length} interactive examples • psychological insights • practical applications
                      </p>
                    </div>
                    <button className={`w-full py-2 px-4 border border-gray-600/50 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 font-semibold rounded-lg transition-all duration-300 font-mono text-sm group-hover:${technique.accent.replace('text-', 'border-').replace('400', '500/50')} group-hover:${technique.accent.replace('400', '300')}`}>
                      $ ./explore_technique.sh
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Tone Experiments */}
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6 font-mono text-center">
                interactive_tone_experiments[]
              </h3>
              <p className="text-gray-400 font-mono text-center mb-8 text-sm">
                // see how different tones completely transform the same prompt
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {toneExperiments.map((experiment) => (
                  <div 
                    key={experiment.id}
                    className="bg-black/50 border border-gray-800/50 rounded-lg p-6 hover:border-gray-600/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveToneExperiment(experiment.id)}
                  >
                    <h4 className="text-cyan-400 font-mono font-semibold mb-3">
                      {experiment.scenario}
                    </h4>
                    <p className="text-gray-300 text-sm font-mono mb-4">
                      {experiment.basePrompt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experiment.tones.map((tone) => (
                        <span 
                          key={tone.name}
                          className={`px-2 py-1 rounded text-xs font-mono border ${tone.color.replace('text-', 'border-').replace('400', '500/30')} ${tone.color} bg-gray-900/50`}
                        >
                          {tone.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Technique Deep Dive */
          <div className="space-y-8">
            {/* Technique Header */}
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{selectedTechniqueData?.icon}</span>
                  <div>
                    <h2 className={`text-3xl font-bold ${selectedTechniqueData?.accent} font-mono`}>
                      {selectedTechniqueData?.title}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">
                      // {selectedTechniqueData?.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTechnique(null)}
                  className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors"
                >
                  ← back
                </button>
              </div>

              {/* Detailed Description */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                  <h3 className="text-green-400 font-mono text-sm mb-3">// what_is_this_technique</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedTechniqueData?.fullDescription}</p>
                </div>

                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                  <h3 className="text-blue-400 font-mono text-sm mb-3">// when_to_use</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedTechniqueData?.whenToUse}</p>
                </div>
              </div>

              {/* Strengths and Limitations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-green-400 font-mono text-sm mb-3">// strengths</h3>
                  <ul className="space-y-1">
                    {selectedTechniqueData?.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="text-green-400 text-xs">✓</div>
                        <p className="text-green-200 text-xs">{strength}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="text-red-400 font-mono text-sm mb-3">// limitations</h3>
                  <ul className="space-y-1">
                    {selectedTechniqueData?.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="text-red-400 text-xs">⚠</div>
                        <p className="text-red-200 text-xs">{limitation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Tips */}
              <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                <h3 className="text-green-400 font-mono text-sm mb-3">// key_tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedTechniqueData?.tips.map((tip, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="text-green-400 text-xs">•</div>
                      <p className="text-gray-300 text-xs">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Example Selection */}
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
              <h3 className="text-green-400 font-mono text-lg mb-4">
                select_example_to_explore[]
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedTechniqueData?.examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExample(index)}
                    className={`p-4 border rounded-lg text-left transition-all duration-300 font-mono ${
                      selectedExample === index
                        ? `bg-${selectedTechniqueData.accent.split('-')[1]}-900/30 border-${selectedTechniqueData.accent.split('-')[1]}-500/50 ${selectedTechniqueData.accent}`
                        : 'bg-black/50 border-gray-800/50 hover:border-gray-600/50 text-gray-300 hover:text-white'
                    }`}
                  >
                    <h4 className="font-semibold mb-2">Example {index + 1}</h4>
                    <p className="text-xs opacity-75">{example.scenario}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Example Comparison */}
            {currentExample && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before/After */}
                <div className="space-y-6">
                  <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                    <h3 className="text-purple-400 font-mono text-lg mb-3">
                      scenario: {currentExample.scenario}
                    </h3>
                  </div>

                  {/* Neutral Version */}
                  <div className="bg-gray-900/20 border border-gray-500/30 rounded-lg p-4">
                    <h4 className="text-gray-400 font-mono text-sm font-semibold mb-3">
                      😐 neutral_approach
                    </h4>
                    <p className="text-gray-300 text-sm font-mono leading-relaxed">
                      {currentExample.neutral}
                    </p>
                  </div>

                  {/* Framed Version */}
                  <div className={`bg-${selectedTechniqueData.accent.split('-')[1]}-900/20 border border-${selectedTechniqueData.accent.split('-')[1]}-500/30 rounded-lg p-4`}>
                    <h4 className={`${selectedTechniqueData.accent} font-mono text-sm font-semibold mb-3`}>
                      ✨ psychologically_framed
                    </h4>
                    <p className={`${selectedTechniqueData.accent.replace('400', '200')} text-sm font-mono leading-relaxed`}>
                      {currentExample.framed}
                    </p>
                  </div>
                </div>

                {/* Analysis */}
                <div className="space-y-6">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-blue-400 font-mono text-lg font-semibold mb-4">
                      🧠 psychological_impact
                    </h4>
                    <p className="text-blue-200 text-sm font-mono leading-relaxed">
                      {currentExample.impact}
                    </p>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                    <h4 className="text-yellow-400 font-mono text-lg font-semibold mb-4">
                      🎯 key_differences
                    </h4>
                    <div className="space-y-3 text-sm font-mono">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-yellow-200">Word choice creates emotional resonance</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-yellow-200">Framing shifts perspective and expectations</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-yellow-200">Context influences interpretation</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-400">•</span>
                        <span className="text-yellow-200">Tone affects perceived credibility</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <h4 className="text-green-400 font-mono text-lg font-semibold mb-4">
                      💡 apply_this_technique
                    </h4>
                    <div className="space-y-2 text-sm font-mono">
                      <p className="text-green-200">
                        Try rewriting your own prompts using this psychological framing approach:
                      </p>
                      <div className="bg-black/50 border border-gray-800/50 rounded-lg p-3 mt-3">
                        <p className="text-gray-300 text-xs">
                          1. Identify your neutral prompt<br/>
                          2. Consider your desired emotional outcome<br/>
                          3. Apply the framing technique<br/>
                          4. Test and refine the impact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tone Experiment Modal */}
        {activeToneExperiment && currentExperiment && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-green-400 font-mono">
                  tone_experiment: {currentExperiment.scenario}
                </h3>
                <button
                  onClick={() => setActiveToneExperiment(null)}
                  className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors"
                >
                  ✕ close
                </button>
              </div>

              <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 mb-6">
                <h4 className="text-cyan-400 font-mono text-sm mb-2">base_prompt:</h4>
                <p className="text-gray-300 font-mono text-sm">
                  {currentExperiment.basePrompt}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentExperiment.tones.map((tone) => (
                  <div 
                    key={tone.name}
                    className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      selectedTone === tone.name
                        ? `border-${tone.color.split('-')[1]}-500/50 bg-${tone.color.split('-')[1]}-900/20`
                        : 'border-gray-800/50 bg-black/50 hover:border-gray-600/50'
                    }`}
                    onClick={() => setSelectedTone(selectedTone === tone.name ? '' : tone.name)}
                  >
                    <h4 className={`${tone.color} font-mono font-semibold mb-2`}>
                      {tone.name} Tone
                    </h4>
                    <p className="text-gray-300 text-sm font-mono mb-3">
                      {tone.modifier}
                    </p>
                    <div className="bg-gray-900/50 border border-gray-800/50 rounded p-2">
                      <p className="text-gray-400 text-xs font-mono">
                        Expected: {tone.expectedOutcome}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedTone && (
                <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-mono text-sm mb-3">
                    🎯 {selectedTone.toLowerCase()}_response_preview:
                  </h4>
                  <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                    <pre className="text-blue-200 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                      {currentExperiment?.tones.find(t => t.name === selectedTone)?.response || "No response available"}
                    </pre>
                  </div>
                  <div className="mt-3 text-xs text-gray-400 font-mono">
                    // Notice how the same base prompt generates completely different responses with different psychological framing
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="mt-20 bg-gray-900/50 border border-green-500/30 rounded-lg p-8 font-mono">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
            psychological_mastery_unlocked[]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2">emotional_intelligence</h4>
              <p className="text-gray-300 text-sm">// craft prompts that resonate on an emotional level</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">audience_mastery</h4>
              <p className="text-gray-300 text-sm">// tailor communication to any audience perfectly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold text-purple-400 mb-2">influence_techniques</h4>
              <p className="text-gray-300 text-sm">// leverage psychology for maximum impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PsychologicalFraming;