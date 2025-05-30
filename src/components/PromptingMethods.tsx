import { useState, useRef } from 'react';

interface PromptExample {
  id: string;
  title: string;
  scenario: string;
  badPrompt: string;
  goodPrompt: string;
  explanation: string;
  tips: string[];
}

interface MethodData {
  id: string;
  title: string;
  description: string;
  accent: string;
  icon: string;
  examples: PromptExample[];
  keyPrinciples: string[];
  fullDescription: string;
  whenToUse: string;
  strengths: string[];
  limitations: string[];
}

function PromptingMethods() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<number>(0);
  const [userPrompt, setUserPrompt] = useState('');
  const [showComparison, setShowComparison] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const promptingMethods: MethodData[] = [
    {
      id: 'zero-shot',
      title: 'Zero-Shot Prompting',
      description: 'Direct task instruction without examples',
      accent: 'text-cyan-400',
      icon: '⚡',
      fullDescription: 'Zero-shot prompting involves giving the AI a task without providing any examples. It relies on the model\'s pre-trained knowledge and ability to understand instructions directly. This method is ideal for straightforward tasks where the desired output format is clear and the task doesn\'t require complex reasoning patterns.',
      whenToUse: 'Use when the task is simple and well-defined, when you need quick results, or when examples might bias the output in unwanted ways.',
      strengths: ['Fast and efficient', 'No example preparation needed', 'Good for straightforward tasks', 'Leverages model\'s full knowledge'],
      limitations: ['May lack consistency', 'Limited for complex tasks', 'Output format can vary', 'Less control over style'],
      keyPrinciples: [
        'Be explicit about the task',
        'Specify output format clearly',
        'Provide context when needed',
        'Use clear, unambiguous language'
      ],
      examples: [
        {
          id: 'email-classification',
          title: 'Email Priority Classification',
          scenario: 'Automatically classify incoming customer support emails',
          badPrompt: 'Is this email important?',
          goodPrompt: 'Classify this customer support email as HIGH, MEDIUM, or LOW priority. Respond with only the priority level.\n\nEmail: "Hi, our entire production system is down and we\'re losing $10k per hour. We need immediate assistance. This is affecting 50,000+ users."\n\nPriority:',
          explanation: 'The good prompt specifies exact categories, clear output format, and provides context for classification criteria.',
          tips: ['Define clear priority categories', 'Specify exact output format', 'Include business context']
        },
        {
          id: 'meeting-extraction',
          title: 'Meeting Notes Extraction',
          scenario: 'Extract action items from meeting transcripts',
          badPrompt: 'What are the important things from this meeting?',
          goodPrompt: 'Extract action items from this meeting transcript and format as JSON with fields: task, assignee, deadline, priority.\n\nTranscript: "Sarah, can you finish the Q4 budget report by Friday? It\'s critical for the board meeting. Also, Mike, please review the vendor contracts by next Tuesday - that\'s lower priority."\n\nJSON:',
          explanation: 'The good prompt specifies exactly what to extract and the required JSON structure for easy integration.',
          tips: ['Specify exact fields to extract', 'Use structured output formats', 'Include deadline and priority context']
        },
        {
          id: 'content-moderation',
          title: 'Social Media Content Moderation',
          scenario: 'Moderate user-generated content for policy violations',
          badPrompt: 'Is this post okay?',
          goodPrompt: 'Review this social media post for policy violations. Respond with: APPROVED, FLAGGED, or REMOVED, followed by the reason.\n\nPost: "Check out this amazing weight loss supplement! Lost 30 lbs in 2 weeks! DM me for the secret formula that doctors don\'t want you to know!"\n\nDecision:',
          explanation: 'The good prompt provides clear decision categories and asks for reasoning to ensure transparency.',
          tips: ['Define clear moderation categories', 'Ask for reasoning behind decisions', 'Include policy context']
        }
      ]
    },
    {
      id: 'few-shot',
      title: 'Few-Shot Prompting',
      description: 'Learning from examples',
      accent: 'text-green-400',
      icon: '📚',
      fullDescription: 'Few-shot prompting provides the AI with a few examples of the desired input-output pattern before asking it to perform the task. This method helps establish consistent formatting, style, and approach by showing the AI exactly what you want.',
      whenToUse: 'Use when you need consistent output formatting, when the task requires specific style or tone, or when the desired approach isn\'t obvious from instructions alone.',
      strengths: ['Consistent output format', 'Better style control', 'Clearer expectations', 'Handles complex patterns'],
      limitations: ['Requires example preparation', 'Can be biased by examples', 'Longer prompts', 'May overfit to examples'],
      keyPrinciples: [
        'Use diverse, high-quality examples',
        'Show the pattern you want',
        'Include edge cases in examples',
        'Maintain consistent formatting'
      ],
      examples: [
        {
          id: 'product-description',
          title: 'E-commerce Product Descriptions',
          scenario: 'Generate compelling product descriptions for online store',
          badPrompt: 'Write product descriptions like these examples:\nExample 1: "Good phone"\nExample 2: "Nice laptop"',
          goodPrompt: 'Write product descriptions following this format:\n\nExample 1:\nProduct: Wireless Bluetooth Headphones\nDescription: "Experience crystal-clear audio freedom with these premium wireless headphones. 30-hour battery life keeps your music playing all day, while active noise cancellation blocks out distractions. Perfect for commuters, fitness enthusiasts, and audiophiles."\n\nExample 2:\nProduct: Ergonomic Office Chair\nDescription: "Transform your workspace with this ergonomic office chair designed for all-day comfort. Adjustable lumbar support reduces back strain, while breathable mesh keeps you cool during long work sessions. Ideal for remote workers and office professionals."\n\nNow write for:\nProduct: Smart Fitness Watch\nDescription:',
          explanation: 'The examples show a consistent pattern: benefit-focused language, specific features, target audience, and emotional appeal.',
          tips: ['Show consistent structure across examples', 'Include target audience in examples', 'Demonstrate benefit-focused language']
        },
        {
          id: 'customer-response',
          title: 'Customer Service Responses',
          scenario: 'Handle different types of customer complaints professionally',
          badPrompt: 'Respond to customer complaints professionally',
          goodPrompt: 'Respond to customer complaints using this approach:\n\nExample 1:\nComplaint: "My order arrived damaged and I need a refund immediately!"\nResponse: "I sincerely apologize for receiving a damaged item. I understand how frustrating this must be. I\'ve immediately processed a full refund and expedited a replacement. You\'ll receive tracking info within 2 hours. Is there anything else I can do to make this right?"\n\nExample 2:\nComplaint: "Your website is confusing and I can\'t find what I need."\nResponse: "Thank you for this feedback - it helps us improve. I\'d be happy to personally help you find what you\'re looking for right now. Could you tell me what specific product or information you need? I\'ll also share your website feedback with our UX team."\n\nNow respond to:\nComplaint: "I\'ve been waiting 3 weeks for my order and no one responds to my emails!"\nResponse:',
          explanation: 'The examples demonstrate empathy, immediate action, personal responsibility, and proactive follow-up.',
          tips: ['Show empathy first', 'Offer immediate solutions', 'Take personal responsibility', 'Provide specific next steps']
        },
        {
          id: 'code-documentation',
          title: 'API Documentation Generation',
          scenario: 'Generate clear API documentation from code functions',
          badPrompt: 'Document this function',
          goodPrompt: 'Generate API documentation following this format:\n\nExample 1:\nFunction: calculateShippingCost(weight, distance, priority)\nDocumentation:\n**Purpose**: Calculates shipping cost based on package weight, delivery distance, and priority level\n**Parameters**: \n- weight (number): Package weight in pounds\n- distance (number): Delivery distance in miles  \n- priority (string): "standard", "express", or "overnight"\n**Returns**: number - Total shipping cost in USD\n**Example**: calculateShippingCost(5, 100, "express") → 24.99\n\nExample 2:\nFunction: validateEmail(emailAddress)\nDocumentation:\n**Purpose**: Validates email address format and checks for common typos\n**Parameters**:\n- emailAddress (string): Email address to validate\n**Returns**: object - {isValid: boolean, suggestions: string[]}\n**Example**: validateEmail("user@gmial.com") → {isValid: false, suggestions: ["user@gmail.com"]}\n\nNow document:\nFunction: generateInvoice(customerId, items, taxRate)\nDocumentation:',
          explanation: 'The examples show consistent structure with purpose, parameters, return values, and practical examples.',
          tips: ['Include practical examples', 'Specify parameter types', 'Show expected return format', 'Explain the business purpose']
        }
      ]
    },
    {
      id: 'chain-of-thought',
      title: 'Chain-of-Thought',
      description: 'Step-by-step reasoning',
      accent: 'text-blue-400',
      icon: '🔗',
      fullDescription: 'Chain-of-thought prompting encourages the AI to break down complex problems into intermediate reasoning steps. By showing its work, the AI can tackle more complex problems and provide transparent, verifiable reasoning.',
      whenToUse: 'Use for complex reasoning tasks, mathematical problems, multi-step analysis, or when you need to verify the AI\'s reasoning process.',
      strengths: ['Handles complex reasoning', 'Transparent process', 'Better accuracy on hard problems', 'Verifiable steps'],
      limitations: ['Longer responses', 'Can be verbose', 'May overthink simple tasks', 'Requires more tokens'],
      keyPrinciples: [
        'Break down complex problems',
        'Show intermediate steps',
        'Use "Let\'s think step by step"',
        'Verify reasoning at each step'
      ],
      examples: [
        {
          id: 'pricing-strategy',
          title: 'SaaS Pricing Strategy',
          scenario: 'Determine optimal pricing for a new software product',
          badPrompt: 'What should we price our project management software at?',
          goodPrompt: 'Determine the optimal pricing for our new project management software. Let\'s think through this step by step:\n\nStep 1: Analyze our target market and customer segments\nStep 2: Research competitor pricing and positioning\nStep 3: Calculate our costs and desired profit margins\nStep 4: Consider value proposition and willingness to pay\nStep 5: Recommend pricing tiers and justification\n\nContext: B2B SaaS for teams of 10-100 people, key features include task management, time tracking, reporting. Main competitors: Asana ($10.99/user), Monday.com ($8/user), Trello ($5/user).\n\nPricing Analysis:',
          explanation: 'The good prompt breaks down complex pricing decisions into logical steps with relevant market context.',
          tips: ['Break complex decisions into logical steps', 'Provide relevant market context', 'Ask for justification at each step']
        },
        {
          id: 'bug-diagnosis',
          title: 'Software Bug Diagnosis',
          scenario: 'Systematically diagnose a production system issue',
          badPrompt: 'Why is our website slow?',
          goodPrompt: 'Diagnose this production performance issue step by step:\n\nProblem: Website response time increased from 200ms to 3000ms over the past 2 hours. Users reporting timeouts.\n\nLet\'s systematically investigate:\nStep 1: Check server resource utilization (CPU, memory, disk)\nStep 2: Analyze database query performance and connections\nStep 3: Review recent deployments and configuration changes\nStep 4: Examine network and CDN performance\nStep 5: Check third-party service dependencies\nStep 6: Identify root cause and recommend immediate fixes\n\nAdditional context: E-commerce site, 10k concurrent users, recent deployment 3 hours ago.\n\nDiagnosis:',
          explanation: 'The good prompt provides a systematic debugging framework with specific context and metrics.',
          tips: ['Use systematic debugging frameworks', 'Include specific metrics and timeline', 'Consider all system components']
        },
        {
          id: 'investment-analysis',
          title: 'Investment Decision Analysis',
          scenario: 'Evaluate a potential business investment opportunity',
          badPrompt: 'Should we invest in this startup?',
          goodPrompt: 'Evaluate this investment opportunity using systematic analysis:\n\nOpportunity: $500K investment for 20% equity in AI-powered recruiting platform\n\nLet\'s analyze step by step:\nStep 1: Market size and growth potential assessment\nStep 2: Competitive landscape and differentiation analysis\nStep 3: Team evaluation and execution capability\nStep 4: Financial projections and unit economics review\nStep 5: Risk assessment and mitigation strategies\nStep 6: Expected ROI and exit scenarios\nStep 7: Final recommendation with reasoning\n\nCompany details: 2-year-old startup, $2M ARR, 40% YoY growth, 15 employees, targeting $50B recruiting market.\n\nInvestment Analysis:',
          explanation: 'The good prompt provides a comprehensive investment framework with specific financial context.',
          tips: ['Use established analytical frameworks', 'Include specific financial metrics', 'Consider multiple scenarios and risks']
        }
      ]
    },
    {
      id: 'self-consistency',
      title: 'Self-Consistency',
      description: 'Multiple reasoning paths with majority vote',
      accent: 'text-purple-400',
      icon: '🗳️',
      fullDescription: 'Self-consistency involves generating multiple reasoning paths for the same problem and using majority voting to determine the final answer. This method improves accuracy by reducing the impact of individual reasoning errors.',
      whenToUse: 'Use for critical decisions, complex reasoning tasks, or when accuracy is more important than speed. Best for problems with clear correct answers.',
      strengths: ['Higher accuracy', 'Reduces reasoning errors', 'Validates answers', 'Good for critical decisions'],
      limitations: ['Computationally expensive', 'Slower responses', 'Requires multiple API calls', 'Not suitable for creative tasks'],
      keyPrinciples: [
        'Generate multiple reasoning paths',
        'Use majority voting for final answer',
        'Sample with moderate temperature',
        'Best for problems with clear correct answers'
      ],
      examples: [
        {
          id: 'market-sizing',
          title: 'Market Size Estimation',
          scenario: 'Estimate market size using multiple approaches for validation',
          badPrompt: 'What\'s the market size for food delivery apps in NYC?',
          goodPrompt: 'Estimate the NYC food delivery app market size using 3 different approaches, then determine the consensus:\n\nApproach 1: Top-down analysis (total restaurant spending → delivery percentage)\nApproach 2: Bottom-up analysis (population → usage rate → average spend)\nApproach 3: Competitor analysis (known player revenues → market share estimation)\n\nFor each approach:\n- Show your calculation steps\n- State key assumptions\n- Provide market size estimate\n\nThen compare all three estimates and provide the most reliable consensus figure.\n\nMarket Analysis:',
          explanation: 'Multiple estimation approaches help validate market size calculations and reduce estimation errors.',
          tips: ['Use complementary estimation methods', 'State assumptions clearly', 'Look for convergence across approaches']
        },
        {
          id: 'hiring-decision',
          title: 'Candidate Evaluation',
          scenario: 'Evaluate job candidates using multiple assessment frameworks',
          badPrompt: 'Should we hire this candidate?',
          goodPrompt: 'Evaluate this senior developer candidate using 3 different assessment frameworks:\n\nCandidate: 8 years experience, strong React/Node.js skills, led 3 major projects, asking $140K, available immediately.\n\nFramework 1: Technical competency assessment (skills match, experience level, growth potential)\nFramework 2: Cultural fit evaluation (team collaboration, communication, values alignment)\nFramework 3: Business impact analysis (time to productivity, project contribution, ROI)\n\nFor each framework, provide:\n- Detailed assessment\n- Score (1-10)\n- Key strengths/concerns\n\nThen provide consensus hiring recommendation.\n\nCandidate Evaluation:',
          explanation: 'Multiple evaluation frameworks provide comprehensive candidate assessment and reduce hiring bias.',
          tips: ['Use multiple assessment dimensions', 'Provide scoring for objectivity', 'Consider both technical and cultural fit']
        },
        {
          id: 'feature-prioritization',
          title: 'Product Feature Prioritization',
          scenario: 'Prioritize product features using multiple scoring methods',
          badPrompt: 'Which features should we build first?',
          goodPrompt: 'Prioritize these 5 product features using 3 different scoring methods:\n\nFeatures: Advanced search, Mobile app, API integration, User analytics, Social sharing\n\nMethod 1: RICE scoring (Reach × Impact × Confidence ÷ Effort)\nMethod 2: Value vs Effort matrix (Business value score vs Development effort)\nMethod 3: Customer feedback weighting (Support requests + user votes + revenue impact)\n\nFor each method:\n- Score all 5 features\n- Rank them 1-5\n- Explain scoring rationale\n\nThen provide consensus priority ranking.\n\nFeature Prioritization:',
          explanation: 'Multiple prioritization methods help validate feature decisions and balance different business considerations.',
          tips: ['Use established prioritization frameworks', 'Consider multiple stakeholder perspectives', 'Balance quantitative and qualitative factors']
        }
      ]
    },
    {
      id: 'meta-prompting',
      title: 'Meta-Prompting',
      description: 'AI optimizing its own prompts',
      accent: 'text-yellow-400',
      icon: '🔄',
      fullDescription: 'Meta-prompting involves using AI to improve and optimize prompts based on performance feedback and data. The AI analyzes what works and what doesn\'t, then suggests improvements to achieve better results.',
      whenToUse: 'Use when you have performance data from existing prompts, when you need to optimize for specific metrics, or when you want to systematically improve AI interactions over time.',
      strengths: ['Data-driven improvements', 'Systematic optimization', 'Performance-based refinement', 'Scalable prompt enhancement'],
      limitations: ['Requires performance data', 'May over-optimize for metrics', 'Needs feedback loops', 'Can be complex to implement'],
      keyPrinciples: [
        'Let AI improve prompt wording',
        'Provide performance feedback',
        'Iterate on prompt versions',
        'Test AI-generated improvements'
      ],
      examples: [
        {
          id: 'customer-support-optimization',
          title: 'Customer Support Prompt Optimization',
          scenario: 'Improve chatbot responses based on customer satisfaction scores',
          badPrompt: 'Make this chatbot prompt better',
          goodPrompt: 'You are a prompt optimization expert. Improve this customer support chatbot prompt based on performance data:\n\nCurrent prompt: "Help the customer with their question"\n\nPerformance issues:\n- 65% customer satisfaction (target: 85%)\n- Responses too generic and impersonal\n- Doesn\'t gather enough context before responding\n- Fails to set proper expectations\n\nCustomer feedback: "Felt like talking to a robot", "Didn\'t understand my specific situation", "No follow-up or next steps"\n\nCreate an improved prompt that:\n1. Increases personalization\n2. Gathers relevant context\n3. Sets clear expectations\n4. Provides specific next steps\n\nOptimized Prompt:',
          explanation: 'Meta-prompting uses performance data and user feedback to systematically improve AI interactions.',
          tips: ['Provide specific performance metrics', 'Include actual user feedback', 'Target specific improvement areas']
        },
        {
          id: 'content-generation-refinement',
          title: 'Marketing Content Prompt Refinement',
          scenario: 'Optimize content generation prompts based on engagement metrics',
          badPrompt: 'Improve this content prompt',
          goodPrompt: 'You are a content optimization specialist. Refine this social media content prompt based on engagement data:\n\nCurrent prompt: "Write engaging social media posts about our products"\n\nPerformance metrics:\n- Average engagement rate: 2.1% (industry average: 4.2%)\n- Click-through rate: 0.8% (target: 2.5%)\n- Comments mostly generic, few meaningful conversations\n\nSuccessful posts analysis:\n- Posts with questions get 3x more comments\n- Behind-the-scenes content performs 40% better\n- Posts with clear CTAs have 2x higher click-through\n\nCreate an optimized prompt that:\n1. Incorporates high-performing content types\n2. Includes engagement-driving elements\n3. Specifies clear calls-to-action\n4. Encourages authentic brand voice\n\nRefined Prompt:',
          explanation: 'Data-driven prompt optimization improves content performance by incorporating proven engagement strategies.',
          tips: ['Use actual performance metrics', 'Analyze successful content patterns', 'Include specific engagement tactics']
        },
        {
          id: 'sales-email-enhancement',
          title: 'Sales Email Prompt Enhancement',
          scenario: 'Enhance sales outreach prompts based on response rates',
          badPrompt: 'Make sales emails more effective',
          goodPrompt: 'You are a sales optimization expert. Enhance this sales outreach prompt based on A/B testing results:\n\nCurrent prompt: "Write a sales email to potential customers"\n\nA/B test results (1000 emails each):\n- Version A (current): 12% open rate, 2% response rate\n- Version B (personalized): 28% open rate, 8% response rate\n- Version C (value-focused): 22% open rate, 6% response rate\n\nHigh-performing elements:\n- Personalized subject lines (+15% open rate)\n- Specific value propositions (+4% response rate)\n- Social proof mentions (+3% response rate)\n- Clear, single call-to-action (+2% response rate)\n\nCreate an enhanced prompt that:\n1. Mandates personalization elements\n2. Focuses on specific value delivery\n3. Includes social proof integration\n4. Specifies optimal email structure\n\nEnhanced Prompt:',
          explanation: 'A/B testing data drives prompt improvements by identifying the most effective sales communication elements.',
          tips: ['Use A/B testing data', 'Identify high-performing elements', 'Mandate proven effective components']
        }
      ]
    },
    {
      id: 'tree-of-thoughts',
      title: 'Tree-of-Thoughts',
      description: 'Systematic exploration of reasoning branches',
      accent: 'text-orange-400',
      icon: '🌳',
      fullDescription: 'Tree-of-thoughts prompting explores multiple reasoning paths simultaneously, evaluating partial solutions and backtracking when needed. It\'s like having the AI consider multiple approaches before committing to a solution.',
      whenToUse: 'Use for complex strategic decisions, planning scenarios with multiple variables, or when you need to explore different approaches systematically before choosing the best path.',
      strengths: ['Explores multiple solutions', 'Systematic approach', 'Handles complex decisions', 'Reduces blind spots'],
      limitations: ['Very token-intensive', 'Complex to implement', 'Can be overwhelming', 'Slower than other methods'],
      keyPrinciples: [
        'Explore multiple reasoning paths',
        'Evaluate partial solutions',
        'Backtrack when needed',
        'Use systematic search strategy'
      ],
      examples: [
        {
          id: 'crisis-management',
          title: 'Crisis Management Planning',
          scenario: 'Develop crisis response strategy with multiple contingency paths',
          badPrompt: 'How should we handle this PR crisis?',
          goodPrompt: 'Develop a crisis management strategy using Tree-of-Thoughts for this scenario:\n\nCrisis: Major data breach affecting 100K customers, media coverage starting, regulatory investigation likely.\n\nDecision Tree:\nLevel 1: Initial response approach\n- Branch A: Immediate full disclosure\n- Branch B: Controlled information release\n- Branch C: Minimal acknowledgment pending investigation\n\nLevel 2: For each approach, explore communication channels\n- Sub-branch 1: Press release + CEO statement\n- Sub-branch 2: Customer email + social media\n- Sub-branch 3: Regulatory filing + stakeholder calls\n\nLevel 3: Timeline and resource allocation\nLevel 4: Contingency plans for different scenarios\n\nEvaluate each complete path for:\n- Legal risk mitigation\n- Customer trust preservation\n- Regulatory compliance\n- Business continuity\n\nCrisis Strategy Tree:',
          explanation: 'Tree-of-Thoughts helps explore complex crisis scenarios by systematically considering multiple response strategies.',
          tips: ['Map out decision points clearly', 'Consider multiple stakeholder perspectives', 'Evaluate complete strategy paths']
        },
        {
          id: 'product-launch-strategy',
          title: 'Product Launch Strategy',
          scenario: 'Plan comprehensive product launch with multiple market entry options',
          badPrompt: 'How should we launch our new product?',
          goodPrompt: 'Plan our SaaS product launch using Tree-of-Thoughts approach:\n\nProduct: AI-powered project management tool for remote teams\n\nDecision Tree:\nLevel 1: Market entry strategy\n- Branch A: Freemium model launch\n- Branch B: Paid beta with early adopters\n- Branch C: Enterprise-first approach\n\nLevel 2: For each strategy, explore pricing tiers\n- Sub-branch 1: Single tier pricing\n- Sub-branch 2: Good-better-best tiers\n- Sub-branch 3: Usage-based pricing\n\nLevel 3: Marketing channel mix\n- Content marketing + SEO\n- Paid advertising + partnerships\n- Sales outreach + demos\n\nLevel 4: Launch timeline and milestones\n\nEvaluate each complete path for:\n- Revenue potential (6-month projection)\n- Customer acquisition cost\n- Market penetration speed\n- Competitive positioning\n\nLaunch Strategy Tree:',
          explanation: 'Tree-of-Thoughts enables comprehensive launch planning by exploring multiple go-to-market strategies systematically.',
          tips: ['Consider multiple go-to-market approaches', 'Evaluate revenue implications', 'Plan for different market responses']
        },
        {
          id: 'technical-architecture',
          title: 'System Architecture Design',
          scenario: 'Design scalable system architecture with multiple technical approaches',
          badPrompt: 'Design our system architecture',
          goodPrompt: 'Design a scalable e-commerce platform architecture using Tree-of-Thoughts:\n\nRequirements: Handle 100K concurrent users, 1M products, global deployment, 99.9% uptime\n\nArchitecture Tree:\nLevel 1: Core architecture pattern\n- Branch A: Microservices architecture\n- Branch B: Modular monolith\n- Branch C: Serverless-first approach\n\nLevel 2: For each pattern, explore data storage\n- Sub-branch 1: SQL database with read replicas\n- Sub-branch 2: NoSQL with eventual consistency\n- Sub-branch 3: Hybrid SQL/NoSQL approach\n\nLevel 3: Caching and CDN strategy\nLevel 4: Deployment and scaling approach\n\nEvaluate each complete path for:\n- Development complexity\n- Operational overhead\n- Scalability potential\n- Cost implications\n- Team expertise requirements\n\nArchitecture Decision Tree:',
          explanation: 'Tree-of-Thoughts helps evaluate complex technical decisions by systematically exploring architecture options.',
          tips: ['Consider technical trade-offs', 'Evaluate team capabilities', 'Plan for scale and maintenance']
        }
      ]
    },
    {
      id: 'react',
      title: 'ReAct (Reasoning + Acting)',
      description: 'Interleaving reasoning with tool use',
      accent: 'text-red-400',
      icon: '🤖',
      fullDescription: 'ReAct combines reasoning with action by having the AI think about what it needs to do, take actions (like using tools or gathering data), observe the results, and then continue reasoning based on what it learned.',
      whenToUse: 'Use when you need to gather external data, when the task requires multiple tools or APIs, or when the solution depends on real-time information that the AI doesn\'t have.',
      strengths: ['Integrates external tools', 'Real-time data access', 'Iterative problem solving', 'Handles dynamic scenarios'],
      limitations: ['Requires tool integration', 'More complex setup', 'Dependent on external services', 'Can be slower due to tool calls'],
      keyPrinciples: [
        'Combine thinking with actions',
        'Use external tools when needed',
        'Iterate between reasoning and acting',
        'Maintain clear thought-action-observation cycle'
      ],
      examples: [
        {
          id: 'competitive-analysis',
          title: 'Competitive Market Analysis',
          scenario: 'Research competitors using multiple data sources and tools',
          badPrompt: 'Analyze our competitors',
          goodPrompt: 'Conduct competitive analysis for our project management SaaS using ReAct framework:\n\nGoal: Understand competitive landscape, pricing, and market positioning\n\nThought 1: I need to identify our main competitors in the project management space\nAction 1: Search["project management software competitors 2024 market leaders"]\nObservation 1: [Search results with competitor list]\n\nThought 2: I should analyze pricing strategies of top 3 competitors\nAction 2: WebScrape[competitor_pricing_pages]\nObservation 2: [Pricing data collected]\n\nThought 3: I need customer reviews to understand strengths/weaknesses\nAction 3: AnalyzeReviews["G2.com", "Capterra", "TrustPilot"]\nObservation 3: [Review sentiment and feature feedback]\n\nThought 4: I should check their marketing strategies and positioning\nAction 4: AnalyzeSocialMedia[competitor_accounts, ad_campaigns]\nObservation 4: [Marketing strategy insights]\n\nFinal Analysis: [Comprehensive competitive report with actionable insights]\n\nCompetitive Research:',
          explanation: 'ReAct enables comprehensive competitive analysis by systematically gathering data from multiple sources.',
          tips: ['Use multiple data sources', 'Verify information across platforms', 'Synthesize insights from different tools']
        },
        {
          id: 'financial-planning',
          title: 'Business Financial Planning',
          scenario: 'Create financial projections using real market data and calculations',
          badPrompt: 'Create our financial projections',
          goodPrompt: 'Create 3-year financial projections for our SaaS startup using ReAct framework:\n\nGoal: Develop realistic revenue and expense projections for investor presentation\n\nThought 1: I need current market data for SaaS metrics and benchmarks\nAction 1: Research["SaaS industry benchmarks 2024 ARR growth churn rates"]\nObservation 1: [Industry benchmark data]\n\nThought 2: I should calculate realistic customer acquisition costs for our market\nAction 2: Calculate[marketing_budget ÷ projected_customers, compare_to_benchmarks]\nObservation 2: [CAC calculations and comparisons]\n\nThought 3: I need to model different growth scenarios based on market conditions\nAction 3: ModelScenarios[conservative_15%, moderate_25%, aggressive_40%_growth]\nObservation 3: [Multiple growth scenario projections]\n\nThought 4: I should validate assumptions against similar company data\nAction 4: BenchmarkAnalysis[similar_stage_companies, public_SaaS_metrics]\nObservation 4: [Validation of assumptions]\n\nFinal Projections: [Detailed 3-year financial model with scenarios]\n\nFinancial Planning:',
          explanation: 'ReAct combines market research, calculations, and validation to create data-driven financial projections.',
          tips: ['Use real market data', 'Model multiple scenarios', 'Validate assumptions against benchmarks']
        },
        {
          id: 'customer-research',
          title: 'Customer Discovery Research',
          scenario: 'Conduct comprehensive customer research using multiple methodologies',
          badPrompt: 'Research our target customers',
          goodPrompt: 'Conduct customer discovery research for our B2B productivity app using ReAct framework:\n\nGoal: Understand customer pain points, willingness to pay, and feature priorities\n\nThought 1: I need to identify and segment our target customer base\nAction 1: AnalyzeMarket[company_size, industry, role_demographics]\nObservation 1: [Customer segmentation data]\n\nThought 2: I should gather direct feedback through surveys and interviews\nAction 2: ConductSurvey[target_segments] + ScheduleInterviews[key_personas]\nObservation 2: [Primary research findings]\n\nThought 3: I need to analyze existing solutions and customer behavior\nAction 3: AnalyzeCompetitorReviews + TrackUserBehavior[current_tools]\nObservation 3: [Behavioral insights and pain points]\n\nThought 4: I should validate findings with market sizing and willingness to pay\nAction 4: PricingSurvey[target_segments] + MarketSizeValidation\nObservation 4: [Pricing insights and market validation]\n\nFinal Research Report: [Comprehensive customer insights with actionable recommendations]\n\nCustomer Research:',
          explanation: 'ReAct enables thorough customer research by combining multiple research methodologies and data sources.',
          tips: ['Use both primary and secondary research', 'Validate findings across multiple sources', 'Focus on actionable insights']
        }
      ]
    }
  ];

  const methodComparison = [
    {
      aspect: 'Complexity',
      'zero-shot': 'Simple',
      'few-shot': 'Medium',
      'chain-of-thought': 'High',
      'self-consistency': 'Very High',
      'meta-prompting': 'High',
      'tree-of-thoughts': 'Very High',
      'react': 'High'
    },
    {
      aspect: 'Setup Time',
      'zero-shot': 'Minimal',
      'few-shot': 'Medium',
      'chain-of-thought': 'Low',
      'self-consistency': 'Medium',
      'meta-prompting': 'High',
      'tree-of-thoughts': 'High',
      'react': 'High'
    },
    {
      aspect: 'Accuracy',
      'zero-shot': 'Good',
      'few-shot': 'Very Good',
      'chain-of-thought': 'Excellent',
      'self-consistency': 'Excellent',
      'meta-prompting': 'Very Good',
      'tree-of-thoughts': 'Excellent',
      'react': 'Very Good'
    },
    {
      aspect: 'Token Usage',
      'zero-shot': 'Low',
      'few-shot': 'Medium',
      'chain-of-thought': 'High',
      'self-consistency': 'Very High',
      'meta-prompting': 'Medium',
      'tree-of-thoughts': 'Very High',
      'react': 'High'
    },
    {
      aspect: 'Best For',
      'zero-shot': 'Simple tasks',
      'few-shot': 'Consistent format',
      'chain-of-thought': 'Complex reasoning',
      'self-consistency': 'Critical decisions',
      'meta-prompting': 'Optimization',
      'tree-of-thoughts': 'Strategic planning',
      'react': 'Tool integration'
    }
  ];

  const handleMethodSelect = (methodId: string): void => {
    setSelectedMethod(methodId);
    setSelectedExample(0);
    setUserPrompt('');
    setShowComparison(false);
  };

  const handleExampleSelect = (index: number): void => {
    setSelectedExample(index);
    setShowComparison(false);
    const method = promptingMethods.find(m => m.id === selectedMethod);
    if (method) {
      setUserPrompt(method.examples[index].badPrompt);
    }
  };

  const handleCopyPrompt = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleTryExample = (examplePrompt: string): void => {
    setUserPrompt(examplePrompt);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const selectedMethodData = promptingMethods.find(m => m.id === selectedMethod);
  const currentExample = selectedMethodData?.examples[selectedExample];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat prompt_laboratory.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; prompting_methods
            </span>
            <span className="text-gray-500 text-2xl ml-4">// interactive lab</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// hands_on_experimentation</div>
              <p className="text-gray-300 leading-relaxed">
                master prompting methods through interactive examples and real-time experimentation 🧪⚡
              </p>
            </div>
          </div>
        </div>

        {!selectedMethod ? (
          /* Method Selection */
          <div className="space-y-8">
            {/* Method Comparison Table */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono">
                  method_comparison_matrix[]
                </h2>
                <p className="text-gray-400 font-mono">
                  // compare all methods across key dimensions
                </p>
                <button
                  onClick={() => setShowComparison(!showComparison)}
                  className="mt-4 px-6 py-2 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 rounded-lg font-mono text-sm transition-colors"
                >
                  {showComparison ? 'hide_comparison' : 'show_comparison'}
                </button>
              </div>

              {showComparison && (
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 overflow-x-auto animate-fadeIn">
                  <table className="w-full font-mono text-sm">
                    <thead>
                      <tr className="border-b border-gray-700/50">
                        <th className="text-left py-3 px-4 text-green-400 min-w-[120px]">Aspect</th>
                        <th className="text-center py-3 px-4 text-cyan-400 min-w-[100px]">Zero-Shot</th>
                        <th className="text-center py-3 px-4 text-green-400 min-w-[100px]">Few-Shot</th>
                        <th className="text-center py-3 px-4 text-blue-400 min-w-[120px]">Chain-of-Thought</th>
                        <th className="text-center py-3 px-4 text-purple-400 min-w-[120px]">Self-Consistency</th>
                        <th className="text-center py-3 px-4 text-yellow-400 min-w-[120px]">Meta-Prompting</th>
                        <th className="text-center py-3 px-4 text-orange-400 min-w-[130px]">Tree-of-Thoughts</th>
                        <th className="text-center py-3 px-4 text-red-400 min-w-[100px]">ReAct</th>
                      </tr>
                    </thead>
                    <tbody>
                      {methodComparison.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                          <td className="py-3 px-4 text-green-400 font-semibold">{row.aspect}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['zero-shot']}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['few-shot']}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['chain-of-thought']}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['self-consistency']}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['meta-prompting']}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['tree-of-thoughts']}</td>
                          <td className="py-3 px-4 text-center text-gray-300">{row['react']}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono">
                choose_method_to_master[]
              </h2>
              <p className="text-gray-400 font-mono">
                // click any method to start hands-on experimentation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promptingMethods.map((method, index) => (
                <div 
                  key={method.id} 
                  className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl"
                  onClick={() => handleMethodSelect(method.id)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className={`text-4xl mb-4 group-hover:scale-110 transition-all duration-300`}>
                      {method.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${method.accent} group-hover:scale-105 transition-transform duration-300 font-mono`}>
                      {method.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      // {method.description}
                    </p>
                    <div className="bg-black/50 border border-gray-800/50 rounded-lg p-3 mb-4">
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {method.examples.length} interactive examples • hands-on practice • real-time feedback
                      </p>
                    </div>
                    <button className={`w-full py-2 px-4 border border-gray-600/50 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 font-semibold rounded-lg transition-all duration-300 font-mono text-sm group-hover:${method.accent.replace('text-', 'border-').replace('400', '500/50')} group-hover:${method.accent.replace('400', '300')}`}>
                      $ ./start_lab.sh
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Interactive Laboratory */
          <div className="space-y-8">
            {/* Method Description Section */}
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{selectedMethodData?.icon}</span>
                  <div>
                    <h2 className={`text-3xl font-bold ${selectedMethodData?.accent} font-mono`}>
                      {selectedMethodData?.title}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">
                      // {selectedMethodData?.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors"
                >
                  ← back
                </button>
              </div>

              {/* Detailed Description */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                  <h3 className="text-green-400 font-mono text-sm mb-3">// what_is_this_method</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedMethodData?.fullDescription}</p>
                </div>

                <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                  <h3 className="text-blue-400 font-mono text-sm mb-3">// when_to_use</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedMethodData?.whenToUse}</p>
                </div>
              </div>

              {/* Strengths and Limitations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-green-400 font-mono text-sm mb-3">// strengths</h3>
                  <ul className="space-y-1">
                    {selectedMethodData?.strengths.map((strength, index) => (
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
                    {selectedMethodData?.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="text-red-400 text-xs">⚠</div>
                        <p className="text-red-200 text-xs">{limitation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Principles */}
              <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                <h3 className="text-green-400 font-mono text-sm mb-3">// key_principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedMethodData?.keyPrinciples.map((principle, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="text-green-400 text-xs">•</div>
                      <p className="text-gray-300 text-xs">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Example Selection */}
            <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
              <h3 className="text-green-400 font-mono text-lg mb-4">
                select_example_to_practice[]
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedMethodData?.examples.map((example, index) => (
                  <button
                    key={example.id}
                    onClick={() => handleExampleSelect(index)}
                    className={`p-4 border rounded-lg text-left transition-all duration-300 font-mono ${
                      selectedExample === index
                        ? `bg-${selectedMethodData.accent.split('-')[1]}-900/30 border-${selectedMethodData.accent.split('-')[1]}-500/50 ${selectedMethodData.accent}`
                        : 'bg-black/50 border-gray-800/50 hover:border-gray-600/50 text-gray-300 hover:text-white'
                    }`}
                  >
                    <h4 className="font-semibold mb-2">{example.title}</h4>
                    <p className="text-xs opacity-75">{example.scenario}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Workspace */}
            {currentExample && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Examples and Explanation */}
                <div className="space-y-6">
                  {/* Scenario */}
                  <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                    <h3 className="text-purple-400 font-mono text-lg mb-3">
                      scenario: {currentExample.title}
                    </h3>
                    <p className="text-gray-300 font-mono text-sm">
                      // {currentExample.scenario}
                    </p>
                  </div>

                  {/* Bad vs Good Examples */}
                  <div className="space-y-4">
                    {/* Bad Example */}
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-red-400 font-mono text-sm font-semibold">
                          ❌ bad_prompt
                        </h4>
                        <button
                          onClick={() => handleTryExample(currentExample.badPrompt)}
                          className="px-3 py-1 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 rounded text-xs font-mono transition-colors"
                        >
                          try_this
                        </button>
                      </div>
                      <pre className="text-red-200 text-xs whitespace-pre-wrap font-mono">
                        {currentExample.badPrompt}
                      </pre>
                    </div>

                    {/* Good Example */}
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-green-400 font-mono text-sm font-semibold">
                          ✅ good_prompt
                        </h4>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleTryExample(currentExample.goodPrompt)}
                            className="px-3 py-1 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 rounded text-xs font-mono transition-colors"
                          >
                            try_this
                          </button>
                          <button
                            onClick={() => handleCopyPrompt(currentExample.goodPrompt)}
                            className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded text-xs font-mono transition-colors"
                          >
                            {copiedText === currentExample.goodPrompt ? 'copied!' : 'copy'}
                          </button>
                        </div>
                      </div>
                      <pre className="text-green-200 text-xs whitespace-pre-wrap font-mono">
                        {currentExample.goodPrompt}
                      </pre>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-mono text-sm font-semibold mb-3">
                      💡 why_it_works
                    </h4>
                    <p className="text-blue-200 text-sm font-mono leading-relaxed">
                      {currentExample.explanation}
                    </p>
                  </div>

                  {/* Tips */}
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-mono text-sm font-semibold mb-3">
                      🎯 pro_tips[]
                    </h4>
                    <div className="space-y-2">
                      {currentExample.tips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="text-yellow-400 text-xs mt-1">•</div>
                          <p className="text-yellow-200 text-xs font-mono">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Editor */}
                <div className="space-y-6">
                  {/* Prompt Editor */}
                  <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                    <h3 className="text-green-400 font-mono text-lg mb-4">
                      your_prompt_editor[]
                    </h3>
                    <textarea
                      ref={textareaRef}
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      placeholder="// write your prompt here..."
                      className="w-full h-64 bg-black/50 border border-gray-800/50 rounded-lg p-4 text-gray-300 font-mono text-sm focus:border-gray-600/50 focus:outline-none resize-none"
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-gray-500 font-mono text-xs">
                        {userPrompt.length} characters
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setUserPrompt('')}
                          className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded text-xs font-mono transition-colors"
                        >
                          clear
                        </button>
                        <button
                          onClick={() => setShowComparison(!showComparison)}
                          disabled={!userPrompt.trim()}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50 text-green-400 rounded text-xs font-mono transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          analyze
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Analysis Results */}
                  {showComparison && userPrompt.trim() && (
                    <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                      <h3 className="text-purple-400 font-mono text-lg mb-4">
                        prompt_analysis[]
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4">
                          <h4 className="text-cyan-400 font-mono text-sm mb-2">your_prompt:</h4>
                          <pre className="text-gray-300 text-xs whitespace-pre-wrap font-mono">
                            {userPrompt}
                          </pre>
                        </div>
                        
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <h4 className="text-blue-400 font-mono text-sm mb-2">analysis:</h4>
                          <p className="text-blue-200 text-xs font-mono">
                            // This would show AI-powered analysis of your prompt's strengths and weaknesses
                            // compared to the {selectedMethodData?.title} best practices.
                            // In a real implementation, this would use an LLM to evaluate your prompt!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lab Features */}
        <div className="mt-20 bg-gray-900/50 border border-green-500/30 rounded-lg p-8 font-mono">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
            laboratory_features[]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧪</span>
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2">hands_on_practice</h4>
              <p className="text-gray-300 text-sm">// experiment with real examples and see immediate results</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">instant_feedback</h4>
              <p className="text-gray-300 text-sm">// compare bad vs good prompts side by side</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-purple-400 mb-2">copy_paste_ready</h4>
              <p className="text-gray-300 text-sm">// copy proven prompts directly to your projects</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-yellow-400 mb-2">progressive_mastery</h4>
              <p className="text-gray-300 text-sm">// from basic concepts to advanced techniques</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptingMethods; 