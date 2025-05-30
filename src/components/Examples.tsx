import { useState } from 'react';

function Examples() {
  const [revealedAnalysis, setRevealedAnalysis] = useState<{[key: string]: boolean}>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [guessMode, setGuessMode] = useState(false);
  const [selectedGuess, setSelectedGuess] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const toggleAnalysis = (exampleKey: string) => {
    setRevealedAnalysis(prev => ({
      ...prev,
      [exampleKey]: !prev[exampleKey]
    }));
  };

  const EXAMPLES_PER_PAGE = 4;

  const exampleCategories = [
    {
      title: "classification_examples",
      description: "real-world text classification prompts",
      accent: "text-cyan-400",
      examples: [
        {
          name: "sentiment_analysis",
          prompt: `Classify the sentiment of the following customer review as positive, negative, or neutral.

Review: "The product arrived quickly and works exactly as described. Great customer service too!"

Classification: positive
Confidence: high
Reasoning: Contains positive indicators (quickly, exactly as described, great)`,
          output: "positive",
          notes: "Clear format with reasoning helps with transparency",
          methodUsed: "Zero-Shot Prompting",
          psychologyUsed: "Structured Output Framing",
          analysisDetails: "Uses direct task instruction without examples. Employs structured output format (classification + confidence + reasoning) to ensure consistent and explainable results. The psychological framing creates authority through systematic analysis."
        },
        {
          name: "email_categorization",
          prompt: `Categorize this email into one of: urgent, important, promotional, spam

Email: "CONGRATULATIONS! You've won $10,000! Click here immediately to claim your prize before it expires!"

Category: spam
Confidence: very high
Reasoning: Contains typical spam indicators (fake prizes, urgency, suspicious links)`,
          output: "spam",
          notes: "Multiple classification criteria help accuracy",
          methodUsed: "Zero-Shot Prompting",
          psychologyUsed: "Authority & Expertise Framing",
          analysisDetails: "Direct classification with clear categories. Uses expert-level reasoning by identifying specific spam indicators. The confidence scoring adds psychological weight to the decision-making process."
        },
        {
          name: "resume_screening",
          prompt: `Screen this resume for a Senior Software Engineer position. Rate as: STRONG_FIT, POTENTIAL_FIT, or WEAK_FIT.

Here are 3 examples of how to evaluate:

Example 1: "5+ years React, led 3 teams, startup experience" → STRONG_FIT (meets all requirements)
Example 2: "3 years frontend, some leadership, corporate background" → POTENTIAL_FIT (partial match)  
Example 3: "1 year coding bootcamp, no team experience" → WEAK_FIT (insufficient experience)

Now evaluate: "8 years full-stack development, React/Node expert, managed 15-person engineering team, built 3 products from 0-1"

Rating:`,
          output: "STRONG_FIT - exceeds requirements",
          notes: "Few-shot examples establish clear evaluation criteria",
          methodUsed: "Few-Shot Prompting",
          psychologyUsed: "Pattern Recognition & Anchoring",
          analysisDetails: "Provides concrete examples to establish evaluation patterns. The examples serve as anchors that guide consistent decision-making across different resumes."
        },
        {
          name: "content_moderation",
          prompt: `Analyze this social media post step-by-step for policy violations:

Post: "Politicians are corrupt! We should protest at city hall tomorrow at 6pm. Bring signs and make noise!"

Step 1: Check for hate speech → No targeting of protected groups
Step 2: Check for violence incitement → Mentions peaceful protest only  
Step 3: Check for misinformation → Opinion, not factual claims
Step 4: Check for coordination → Organizing legitimate political activity
Decision: APPROVED - Protected political speech`,
          output: "APPROVED",
          notes: "Step-by-step analysis ensures thorough evaluation",
          methodUsed: "Chain-of-Thought Prompting",
          psychologyUsed: "Systematic Analysis & Transparency",
          analysisDetails: "Breaks down complex moderation decisions into clear steps. The transparent reasoning process helps ensure consistent and defensible content decisions."
        }
      ]
    },
    {
      title: "data_extraction_examples", 
      description: "structured information extraction patterns",
      accent: "text-green-400",
      examples: [
        {
          name: "job_posting_extraction",
          prompt: `Extract structured information from this job posting:

"Senior Software Engineer at TechCorp, $120k-150k, Remote, React/Node.js required, 5+ years experience"

{
  "title": "Senior Software Engineer",
  "company": "TechCorp", 
  "salary_range": "$120k-150k",
  "location": "Remote",
  "required_skills": ["React", "Node.js"],
  "experience": "5+ years"
}`,
          output: "JSON object with extracted fields",
          notes: "Consistent JSON schema ensures reliable parsing",
          methodUsed: "Few-Shot Prompting",
          psychologyUsed: "Pattern Recognition & Anchoring", 
          analysisDetails: "Shows the exact pattern to follow with a concrete example. Uses JSON format as an anchor that guides the AI's output structure. The psychological principle of pattern matching makes the task clear and repeatable."
        },
        {
          name: "contact_info_extraction", 
          prompt: `Extract contact information from this text:

"Please reach out to John Smith at john.smith@company.com or call (555) 123-4567 for more details."

{
  "name": "John Smith",
  "email": "john.smith@company.com", 
  "phone": "(555) 123-4567"
}`,
          output: "Structured contact data",
          notes: "Handle missing fields gracefully with null values",
          methodUsed: "Few-Shot Prompting",
          psychologyUsed: "Structured Thinking & Completeness Framing",
          analysisDetails: "Demonstrates the exact extraction pattern with a complete example. Uses structured JSON to frame the AI's thinking process. The psychological completeness principle ensures all relevant fields are considered."
        },
        {
          name: "invoice_parsing",
          prompt: `I need to extract invoice data multiple ways to ensure accuracy:

Method 1 - Line by line analysis:
Invoice #12345, Date: 2024-01-15, Amount: $1,250.00 → Extract each field sequentially

Method 2 - Pattern matching:
Look for standard invoice patterns (INV#, date formats, currency amounts) → $1,250.00

Method 3 - Context validation: 
Cross-reference fields for consistency → Date aligns with invoice sequence

Consensus extraction: All methods agree on $1,250.00 total`,
          output: "$1,250.00 with high confidence",
          notes: "Multiple extraction methods increase accuracy",
          methodUsed: "Self-Consistency Prompting",
          psychologyUsed: "Validation & Confidence Building",
          analysisDetails: "Uses multiple reasoning paths to validate extraction accuracy. The consensus approach builds confidence in results and reduces errors from single-method extraction."
        },
        {
          name: "medical_record_extraction",
          prompt: `Extract patient data from this medical note:

"Patient: Sarah Johnson, DOB: 03/15/1985, Chief complaint: headaches for 2 weeks, BP: 120/80, prescribed ibuprofen 400mg"

Think through this systematically:
Step 1: Identify patient identifiers → Name and DOB
Step 2: Extract symptoms and duration → Headaches, 2 weeks  
Step 3: Note vital signs → Blood pressure 120/80
Step 4: Record treatments → Ibuprofen 400mg prescribed

{
  "patient_name": "Sarah Johnson",
  "date_of_birth": "03/15/1985", 
  "chief_complaint": "headaches for 2 weeks",
  "vital_signs": {"blood_pressure": "120/80"},
  "medications": ["ibuprofen 400mg"]
}`,
          output: "Structured medical data",
          notes: "Step-by-step extraction ensures nothing is missed",
          methodUsed: "Chain-of-Thought Prompting", 
          psychologyUsed: "Medical Precision & Completeness",
          analysisDetails: "Medical data requires absolute accuracy. The step-by-step approach ensures all critical information is captured systematically without errors."
        }
      ]
    },
    {
      title: "reasoning_examples",
      description: "step-by-step problem solving approaches", 
      accent: "text-blue-400",
      examples: [
        {
          name: "math_word_problem",
          prompt: `Solve this step-by-step:

A company's revenue grew 25% in Q1, then declined 10% in Q2. If Q2 revenue was $1.35M, what was the original revenue?

Step 1: Let original revenue = X
Step 2: After Q1 growth: X × 1.25 = 1.25X  
Step 3: After Q2 decline: 1.25X × 0.9 = 1.125X
Step 4: We know 1.125X = $1.35M
Step 5: Therefore X = $1.35M ÷ 1.125 = $1.2M

Answer: Original revenue was $1.2M`,
          output: "$1.2M",
          notes: "Breaking down complex calculations prevents errors",
          methodUsed: "Chain-of-Thought Prompting",
          psychologyUsed: "Sequential Processing & Verification", 
          analysisDetails: "Uses explicit step-by-step reasoning to break down complex calculations. The psychological principle of sequential processing reduces cognitive load and allows for verification at each step. Creates confidence through transparent methodology."
        },
        {
          name: "logical_reasoning",
          prompt: `Think through this logic puzzle step by step:

If all roses are flowers, and some flowers are red, can we conclude that some roses are red?

Step 1: Analyze the given statements
- All roses are flowers (roses ⊆ flowers)
- Some flowers are red (∃ flowers that are red)

Step 2: Check if conclusion follows logically  
- We know roses are a subset of flowers
- We know some flowers are red
- But we don't know if the red flowers include roses

Step 3: Conclusion
No, we cannot conclude that some roses are red. The red flowers could be entirely non-roses.`,
          output: "No, conclusion doesn't follow",
          notes: "Formal logic requires careful step-by-step analysis", 
          methodUsed: "Chain-of-Thought Prompting",
          psychologyUsed: "Systematic Analysis & Logical Framing",
          analysisDetails: "Employs formal logical reasoning with explicit step-by-step analysis. Uses mathematical notation to frame the problem systematically. The psychological principle of systematic analysis prevents logical fallacies and ensures rigorous thinking."
        },
        {
          name: "business_decision_analysis",
          prompt: `Should we launch our product in Q1 or Q4? Let me explore multiple decision paths:

Path A: Q1 Launch Strategy
→ Pro: First to market advantage, full year revenue
→ Con: Holiday competition, limited marketing budget
→ Risk assessment: Medium-high market risk

Path B: Q4 Launch Strategy  
→ Pro: Holiday shopping season, bigger marketing budget
→ Con: Crowded market, less time for iteration
→ Risk assessment: High competition risk

Path C: Delayed launch with beta testing
→ Pro: Better product quality, user feedback integration
→ Con: Missed market opportunity, competitor advantage

Optimal strategy: Q1 launch with limited feature set, iterate based on feedback`,
          output: "Q1 launch recommended",
          notes: "Multiple decision paths provide comprehensive analysis",
          methodUsed: "Tree-of-Thoughts Prompting",
          psychologyUsed: "Strategic Planning & Risk Assessment", 
          analysisDetails: "Explores multiple strategic paths systematically. The tree structure helps evaluate trade-offs and consequences of different decisions before committing to a strategy."
        },
        {
          name: "debugging_systematic_approach",
          prompt: `Debug this production issue using multiple validation methods:

Issue: "Users can't log in, getting 500 errors"

Method 1: Server logs analysis → Database connection timeout errors
Method 2: Network monitoring → High latency to auth service  
Method 3: User reports analysis → Started 2 hours ago, affects 30% of users

Cross-validation: All methods point to authentication service overload

Method 1 solution: Scale auth service horizontally
Method 2 solution: Add load balancer with failover
Method 3 solution: Implement circuit breaker pattern

Consensus: Implement load balancer + circuit breaker for immediate and long-term fix`,
          output: "Auth service scaling + circuit breaker",
          notes: "Multiple debugging approaches ensure accurate diagnosis",
          methodUsed: "Self-Consistency Prompting", 
          psychologyUsed: "Engineering Rigor & Validation",
          analysisDetails: "Uses multiple debugging methodologies to validate the root cause. The consensus approach ensures the solution addresses the actual problem rather than symptoms."
        }
      ]
    },
    {
      title: "creative_examples",
      description: "content generation and creative tasks",
      accent: "text-purple-400", 
      examples: [
        {
          name: "product_description",
          prompt: `Write a compelling product description for a smart water bottle:

Product: HydroSmart Pro - tracks water intake, temperature control, app connectivity

Target audience: Health-conscious professionals
Tone: Modern, tech-savvy, benefit-focused
Length: 100-150 words

HydroSmart Pro: Your Personal Hydration Coach

Stay perfectly hydrated with the HydroSmart Pro, the intelligent water bottle that adapts to your lifestyle. Advanced sensors track your daily intake while precision temperature control keeps drinks at your ideal temperature for hours.

The companion app provides personalized hydration goals, reminders, and insights based on your activity level and climate. Whether you're crushing deadlines or crushing workouts, HydroSmart Pro ensures optimal hydration for peak performance.

Features:
• Real-time hydration tracking
• 12-hour temperature retention  
• Smart reminders via app
• Leak-proof titanium design
• 24oz capacity

Transform your health routine with data-driven hydration. Because when you're properly hydrated, everything else flows better.`,
          output: "Compelling product copy",
          notes: "Specific constraints help generate focused content",
          methodUsed: "Role & Persona Prompting",
          psychologyUsed: "Audience Adaptation & Emotional Appeal",
          analysisDetails: "Uses detailed persona and audience targeting to frame the creative task. Employs emotional appeal ('crushing deadlines', 'peak performance') and benefit-focused language. The psychological principle of audience adaptation ensures the tone and messaging resonate with the target demographic."
        },
        {
          name: "social_media_campaign",
          prompt: `Create a social media campaign for a new fitness app. Let me develop this systematically:

Approach 1: Influencer Partnership Strategy
→ Partner with micro-fitness influencers  
→ Focus on transformation stories
→ Use before/after content format

Approach 2: User-Generated Content Campaign
→ Challenge-based hashtag campaigns
→ Community building focus  
→ Reward system for participation

Approach 3: Educational Content Series
→ Quick workout tips and nutrition advice
→ Expert interviews and Q&As
→ Scientific backing for app features

Optimal campaign: Hybrid approach combining influencer partnerships with UGC challenges, supported by educational content to build trust and engagement.`,
          output: "Multi-channel campaign strategy",
          notes: "Multiple creative approaches ensure comprehensive strategy",
          methodUsed: "Tree-of-Thoughts Prompting",
          psychologyUsed: "Creative Exploration & Strategic Thinking",
          analysisDetails: "Explores multiple creative directions before settling on optimal approach. The systematic exploration ensures no valuable creative angles are missed."
        },
        {
          name: "brand_story_development", 
          prompt: `Develop our startup's brand story. I need to research and create compelling narrative:

Research Phase:
Action: Analyze competitor brand stories → Identify gaps and opportunities
Observation: Most focus on technology, few emphasize human impact

Story Development:
Action: Interview our founding team about motivation → Uncover authentic origin story  
Observation: Founded after personal struggle with work-life balance

Narrative Crafting:
Action: Craft story arc from problem to solution → Create emotional connection
Observation: Story resonates with target audience's pain points

Final brand story: "We built this because we lived the problem. When our founder worked 80-hour weeks and missed his daughter's first steps, he knew something had to change. That moment sparked our mission to help professionals reclaim their lives through better productivity tools."`,
          output: "Authentic brand narrative",
          notes: "Research and iteration create authentic storytelling",
          methodUsed: "ReAct (Reasoning + Acting)",
          psychologyUsed: "Authentic Storytelling & Emotional Connection",
          analysisDetails: "Combines research actions with creative reasoning to develop authentic brand stories. The iterative process ensures the story is both compelling and truthful."
        },
        {
          name: "video_script_writing",
          prompt: `Write a 60-second explainer video script. Let me optimize this iteratively:

Current script: "Our app helps you save money by tracking expenses."
Performance issues: Low engagement, unclear value proposition

Optimization cycle:
1. Add hook: "You're spending $200/month on subscriptions you forgot about"
2. Show problem: Quick montage of hidden expenses  
3. Present solution: "TrackSmart finds these hidden costs automatically"
4. Demonstrate value: "Users save $150/month on average"
5. Clear CTA: "Download free and see your hidden expenses in 60 seconds"

Optimized script delivers clear value proposition with emotional hook and specific benefits.`,
          output: "High-converting video script",
          notes: "Iterative optimization improves script effectiveness",
          methodUsed: "Meta-Prompting",
          psychologyUsed: "Performance Optimization & Emotional Hooks",
          analysisDetails: "Uses performance data to iteratively improve creative content. The optimization process ensures maximum impact within the 60-second constraint."
        }
      ]
    },
    {
      title: "conversational_examples",
      description: "chatbot and dialogue patterns",
      accent: "text-yellow-400",
      examples: [
        {
          name: "customer_service_bot", 
          prompt: `You are a helpful customer service agent for TechStore. You are friendly, knowledgeable, and solution-oriented.

Customer: "My order hasn't arrived and it's been 2 weeks!"

Agent: I understand your frustration, and I sincerely apologize for the delay. Let me help you track down your order right away. Could you please provide your order number so I can investigate what happened and find a solution for you?

Customer: "Order #12345"

Agent: Thank you for providing that. I've located order #12345 in our system. I can see it was shipped on [date] but appears to have encountered a delay with our carrier. I'm immediately escalating this with our shipping partner and will also send you a replacement order with expedited shipping at no charge. You should receive tracking information within 2 hours. Is there anything else I can help you with today?`,
          output: "Empathetic, solution-focused response",
          notes: "Consistent personality with clear problem-solving steps",
          methodUsed: "Role & Persona Prompting", 
          psychologyUsed: "Empathy & Solution-Oriented Framing",
          analysisDetails: "Establishes a clear role and personality framework for consistent responses. Uses empathy-first approach to acknowledge customer emotions before providing solutions. The psychological principle of solution-oriented framing shifts focus from problems to actionable resolutions."
        },
        {
          name: "sales_qualification_bot",
          prompt: `I'm a sales qualification bot. Let me systematically assess this lead:

Prospect: "I'm interested in your CRM for my team of 50 sales reps"

Assessment approach:
Step 1: Qualify budget → "What's your current software budget range?"
Step 2: Understand timeline → "When are you looking to implement?" 
Step 3: Identify decision maker → "Who else is involved in this decision?"
Step 4: Assess pain points → "What challenges are you facing with your current system?"
Step 5: Match solution → Present relevant features based on needs

This systematic approach ensures we qualify leads properly before involving sales team.`,
          output: "Qualified lead with detailed information",
          notes: "Systematic qualification reduces sales cycle time",
          methodUsed: "Chain-of-Thought Prompting",
          psychologyUsed: "Systematic Sales Process & Trust Building",
          analysisDetails: "Uses structured approach to sales qualification. The step-by-step process builds trust through professional approach while gathering critical information for sales success."
        },
        {
          name: "technical_support_chatbot",
          prompt: `I'm a technical support specialist. Let me troubleshoot this user's issue with multiple approaches:

User: "My app keeps crashing when I try to upload files"

Troubleshooting path 1: Software-related
→ Check app version and recent updates
→ Clear cache and restart app

Troubleshooting path 2: Hardware-related  
→ Check available storage space
→ Verify device compatibility

Troubleshooting path 3: Network-related
→ Test file upload on different connection
→ Check file size and format

Most likely cause: Insufficient storage space (affects 60% of upload crashes)
Recommended solution: Free up 2GB+ storage, then restart app`,
          output: "Systematic troubleshooting with prioritized solutions",
          notes: "Multiple troubleshooting paths increase success rate",
          methodUsed: "Tree-of-Thoughts Prompting", 
          psychologyUsed: "Technical Problem-Solving & User Confidence",
          analysisDetails: "Explores multiple technical solutions systematically. The structured approach builds user confidence in the support process while increasing problem resolution rates."
        },
        {
          name: "onboarding_chatbot",
          prompt: `Welcome to our platform! I'll guide you through setup step by step.

Here are examples of how I help new users:

Example 1: 
User says: "I'm not tech-savvy"
I respond: "No worries! I'll guide you through each step with simple instructions. We'll go at your pace."

Example 2:
User says: "I need this set up quickly" 
I respond: "I can help you get the essentials configured in under 5 minutes. Let's start with the most important features."

Example 3:
User says: "I want to explore everything"
I respond: "Great! I'll show you all our features with hands-on demos. This will take about 15 minutes."

Now, what type of setup experience would work best for you?`,
          output: "Personalized onboarding experience",
          notes: "Adaptive approach based on user preferences and skill level",
          methodUsed: "Few-Shot Prompting",
          psychologyUsed: "Personalization & User Comfort",
          analysisDetails: "Uses examples to demonstrate different onboarding approaches. The adaptive framework ensures each user gets an experience matched to their comfort level and time constraints."
        }
      ]
    },
    {
      title: "analysis_examples",
      description: "data analysis and research patterns",
      accent: "text-red-400",
      examples: [
        {
          name: "market_research_analysis",
          prompt: `Analyze the electric vehicle market using multiple data sources:

Data Source 1: Sales figures → EV sales up 40% YoY, Tesla leading with 25% market share
Data Source 2: Consumer surveys → 65% considering EV for next purchase, price is top concern  
Data Source 3: Regulatory data → 15 states announced gas car bans by 2035

Cross-validation:
- Sales growth aligns with consumer interest surveys
- Regulatory pressure supporting sustained demand
- Price sensitivity confirmed across multiple studies

Market outlook: Strong growth trajectory with price competition intensifying as traditional automakers enter market. Tesla's dominance likely to decrease as options expand.`,
          output: "Comprehensive market analysis with validated insights",
          notes: "Multiple data sources increase analysis reliability",
          methodUsed: "Self-Consistency Prompting",
          psychologyUsed: "Data Validation & Confidence Building",
          analysisDetails: "Uses multiple data sources to validate market insights. The cross-validation approach builds confidence in conclusions and identifies potential contradictions in data."
        },
        {
          name: "competitive_analysis_framework",
          prompt: `Analyze our main competitor's strategy. I need to gather comprehensive intelligence:

Research Phase:
Action: Scrape their pricing pages and feature lists → Document current offerings
Observation: Premium pricing with enterprise focus

Analysis Phase:  
Action: Analyze their customer reviews and complaints → Identify strengths/weaknesses
Observation: Strong on security, weak on user experience

Strategic Phase:
Action: Compare our positioning against theirs → Find differentiation opportunities  
Observation: We can compete on ease-of-use and pricing

Our competitive advantage: Better UX at 30% lower price point, targeting mid-market segment they're ignoring.`,
          output: "Strategic competitive positioning",
          notes: "Systematic competitive intelligence gathering",
          methodUsed: "ReAct (Reasoning + Acting)",
          psychologyUsed: "Strategic Intelligence & Positioning",
          analysisDetails: "Combines research actions with strategic analysis to develop competitive insights. The systematic approach ensures comprehensive understanding of competitive landscape."
        }
      ]
    }
  ];

  const allMethods = [
    "Zero-Shot Prompting",
    "Few-Shot Prompting", 
    "Chain-of-Thought Prompting",
    "Self-Consistency Prompting",
    "Meta-Prompting",
    "Tree-of-Thoughts Prompting",
    "ReAct (Reasoning + Acting)"
  ];

  // Flatten all examples for pagination
  const allExamples = exampleCategories.flatMap((category, categoryIndex) => 
    category.examples.map((example, exampleIndex) => ({
      ...example,
      category: category.title,
      categoryAccent: category.accent,
      key: `${categoryIndex}-${exampleIndex}`
    }))
  );

  // Apply category filter before pagination
  const filteredExamples = allExamples.filter(example => 
    !selectedCategory || example.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredExamples.length / EXAMPLES_PER_PAGE);
  const currentExamples = filteredExamples.slice(
    currentPage * EXAMPLES_PER_PAGE,
    (currentPage + 1) * EXAMPLES_PER_PAGE
  );

  const startGuessGame = () => {
    setGuessMode(true);
    setCurrentPage(Math.floor(Math.random() * totalPages));
    setSelectedGuess('');
    setShowResult(false);
  };

  const submitGuess = () => {
    setShowResult(true);
  };

  const nextRound = () => {
    const availablePages = totalPages > 0 ? totalPages : 1;
    setCurrentPage(Math.floor(Math.random() * availablePages));
    setSelectedGuess('');
    setShowResult(false);
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  const bestPractices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "be_specific",
      description: "provide clear, detailed instructions with examples",
      accent: "text-green-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "structure_output",
      description: "define exact format for consistent results",
      accent: "text-blue-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "iterate_improve",
      description: "test and refine prompts based on results",
      accent: "text-purple-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "handle_edge_cases",
      description: "anticipate and address potential failure modes",
      accent: "text-red-400"
    }
  ];

  return (
    <div className="content-area bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-green-400 text-lg mb-4">
            $ cat practical_examples.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-green-400">
              &gt; practical_examples
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-6 font-mono text-left">
              <div className="text-green-400 mb-2">// overview</div>
              <p className="text-gray-300 leading-relaxed">
                real-world prompt examples across different domains with detailed explanations and best practices
              </p>
            </div>
          </div>
        </div>

        {/* Mini Game Toggle */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4 font-mono">
              🎮 mini_guessing_game()
            </h2>
            <p className="text-gray-300 mb-6 font-mono">
              // Can you guess which prompting method was used? Test your skills!
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={startGuessGame}
                className="px-6 py-3 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-purple-400 rounded-lg font-mono transition-colors"
              >
                {guessMode ? 'new_round' : 'start_game'}
              </button>
              <button
                onClick={() => setGuessMode(false)}
                className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono transition-colors"
              >
                browse_all
              </button>
            </div>
          </div>
        </div>

        {guessMode ? (
          /* Guessing Game Mode */
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
                guess_the_method[] // Round {currentPage + 1}
              </h3>
              <p className="text-gray-400 font-mono text-sm mb-6">
                Read the prompt below and guess which method was used
              </p>
            </div>

            {currentExamples.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-white mb-4 font-mono">
                    {currentExamples[0].name}
                  </h4>
                  <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 mb-6">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed font-mono">
                      {currentExamples[0].prompt}
                    </pre>
                  </div>

                  {!showResult && (
                    <div className="space-y-4">
                      <h5 className="text-green-400 font-mono text-sm">Your guess:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {allMethods.map((method) => (
                          <button
                            key={method}
                            onClick={() => setSelectedGuess(method)}
                            className={`p-3 border rounded-lg text-left transition-all duration-300 font-mono text-sm ${
                              selectedGuess === method
                                ? 'bg-purple-900/30 border-purple-500/50 text-purple-400'
                                : 'bg-black/50 border-gray-800/50 hover:border-gray-600/50 text-gray-300 hover:text-white'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                      <div className="text-center">
                        <button
                          onClick={submitGuess}
                          disabled={!selectedGuess}
                          className="px-6 py-2 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 rounded-lg font-mono text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          submit_guess
                        </button>
                      </div>
                    </div>
                  )}

                  {showResult && (
                    <div className="space-y-4">
                      <div className={`p-4 border rounded-lg ${
                        selectedGuess === currentExamples[0].methodUsed 
                          ? 'bg-green-900/20 border-green-500/30' 
                          : 'bg-red-900/20 border-red-500/30'
                      }`}>
                        <h5 className={`font-mono text-sm mb-2 ${
                          selectedGuess === currentExamples[0].methodUsed 
                            ? 'text-green-400' 
                            : 'text-red-400'
                        }`}>
                          {selectedGuess === currentExamples[0].methodUsed ? '🎉 Correct!' : '❌ Not quite!'}
                        </h5>
                        <p className="text-gray-300 text-sm font-mono">
                          <span className="text-cyan-400">Your guess:</span> {selectedGuess}
                        </p>
                        <p className="text-gray-300 text-sm font-mono">
                          <span className="text-green-400">Correct answer:</span> {currentExamples[0].methodUsed}
                        </p>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                        <h5 className="text-blue-400 font-mono text-sm mb-2">Why this method?</h5>
                        <p className="text-blue-200 text-sm font-mono">{currentExamples[0].analysisDetails}</p>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={nextRound}
                          className="px-6 py-2 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-purple-400 rounded-lg font-mono text-sm transition-colors"
                        >
                          next_round
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Browse All Mode */
          <div className="space-y-8">
            {/* Category Filter */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                browse_examples[] // {filteredExamples.length} total examples
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => handleCategoryFilter(null)}
                  className={`px-4 py-2 border rounded-lg font-mono text-sm transition-colors ${
                    selectedCategory === null
                      ? 'bg-green-900/30 border-green-500/50 text-green-400'
                      : 'bg-black/50 border-gray-800/50 hover:border-gray-600/50 text-gray-300 hover:text-white'
                  }`}
                >
                  all_categories
                </button>
                {exampleCategories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => handleCategoryFilter(category.title)}
                    className={`px-4 py-2 border rounded-lg font-mono text-sm transition-colors ${
                      selectedCategory === category.title
                        ? `bg-${category.accent.split('-')[1]}-900/30 border-${category.accent.split('-')[1]}-500/50 ${category.accent}`
                        : 'bg-black/50 border-gray-800/50 hover:border-gray-600/50 text-gray-300 hover:text-white'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← prev
              </button>
              <span className="text-gray-400 font-mono text-sm">
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                next →
              </button>
            </div>

            {/* Examples Grid */}
            <div className="space-y-8">
              {currentExamples.map((example, index) => (
                <div 
                  key={example.key}
                  className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 font-mono hover:transform hover:scale-[1.01] hover:shadow-xl"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Prompt */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className={`text-xl font-bold ${example.categoryAccent} group-hover:scale-105 transition-transform duration-300`}>
                          ./{example.name}
                        </h4>
                        <span className={`px-2 py-1 rounded text-xs font-mono border ${example.categoryAccent.replace('text-', 'border-').replace('400', '500/30')} ${example.categoryAccent} bg-gray-900/50`}>
                          {example.category.replace('_examples', '')}
                        </span>
                      </div>
                      <div className="bg-black/50 border border-gray-800/50 rounded-lg p-4 group-hover:bg-black/60 group-hover:border-gray-700/50 transition-all duration-300 overflow-hidden">
                        <div className="text-green-400 mb-2 text-xs">// prompt</div>
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed break-words overflow-wrap-anywhere max-w-full">
                          {example.prompt}
                        </pre>
                      </div>
                    </div>

                    {/* Right Column - Analysis */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white">Analysis & Output</h4>
                        <button
                          onClick={() => toggleAnalysis(example.key)}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-purple-400 rounded text-xs font-mono transition-colors"
                        >
                          {revealedAnalysis[example.key] ? 'hide_analysis' : 'reveal_analysis'}
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                          <h5 className="text-sm font-semibold text-green-400 mb-2">Expected Output</h5>
                          <p className="text-green-200 text-sm">{example.output}</p>
                        </div>

                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Insights</h5>
                          <p className="text-blue-200 text-sm">{example.notes}</p>
                        </div>

                        {/* Hidden Analysis Section */}
                        {revealedAnalysis[example.key] && (
                          <div className="space-y-3 animate-fadeIn">
                            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                              <h5 className="text-sm font-semibold text-purple-400 mb-2">🎯 Method Used</h5>
                              <p className="text-purple-200 text-sm font-mono">{example.methodUsed}</p>
                            </div>

                            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                              <h5 className="text-sm font-semibold text-yellow-400 mb-2">🧠 Psychology Applied</h5>
                              <p className="text-yellow-200 text-sm font-mono">{example.psychologyUsed}</p>
                            </div>

                            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                              <h5 className="text-sm font-semibold text-cyan-400 mb-2">📊 Detailed Analysis</h5>
                              <p className="text-cyan-200 text-sm leading-relaxed">{example.analysisDetails}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← prev
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-8 h-8 rounded font-mono text-sm transition-colors ${
                      currentPage === i
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                        : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-gray-300 rounded-lg font-mono text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                next →
              </button>
            </div>
          </div>
        )}

        {/* Best Practices Summary */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-green-400 text-center mb-4 font-mono">
            example_best_practices[]
          </h3>
          <div className="bg-gray-900/50 border border-gray-800/50 rounded-lg p-4 font-mono text-center max-w-3xl mx-auto mb-12">
            <div className="text-green-400 mb-2">// description</div>
            <p className="text-gray-300 text-sm">
              key principles demonstrated across all example categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestPractices.map((practice, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 font-mono text-center hover:transform hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${practice.accent}`}>
                  {practice.icon}
                </div>
                <h4 className={`font-semibold mb-2 ${practice.accent} group-hover:scale-105 transition-transform duration-300`}>
                  ./{practice.title}
                </h4>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  // {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Tips */}
        <div className="mt-16 bg-gray-900/50 border border-green-500/30 rounded-lg p-8 font-mono">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
            implementation_tips[]
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="font-semibold text-cyan-400 mb-2">start_simple</h4>
              <p className="text-gray-300 text-sm">// begin with basic prompts and add complexity gradually</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-400 mb-2">measure_results</h4>
              <p className="text-gray-300 text-sm">// track performance metrics and iterate based on data</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-900/50 border border-gray-800/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-400 mb-2">build_library</h4>
              <p className="text-gray-300 text-sm">// create reusable prompt templates for common tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examples; 