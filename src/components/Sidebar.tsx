import React, { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

function Sidebar({ activeSection, onSectionChange, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  
  // Use external collapsed state if provided, otherwise use internal state
  const collapsed = onToggleCollapse ? isCollapsed : internalCollapsed;
  const toggleCollapsed = onToggleCollapse || setInternalCollapsed;

  const navItems: NavItem[] = [
    {
      id: 'hero',
      label: 'Home',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
        </svg>
      ),
      description: 'Welcome & Overview'
    },
    {
      id: 'executive-summary',
      label: 'Summary',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Key Insights'
    },
    {
      id: 'introduction',
      label: 'Introduction',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Why It Matters'
    },
    {
      id: 'fundamentals',
      label: 'Fundamentals',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: 'Core Principles'
    },
    {
      id: 'prompting-methods',
      label: 'Methods',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: 'Advanced Techniques'
    },
    {
      id: 'psychological-framing',
      label: 'Psychology',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'Psychological Techniques'
    },
    {
      id: 'task-specific',
      label: 'Tasks',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      description: 'Practical Applications'
    },
    {
      id: 'evaluation',
      label: 'Evaluation',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: 'Testing & Metrics'
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Frameworks & Platforms'
    },
    {
      id: 'examples',
      label: 'Examples',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: 'Real-world Examples'
    },
    {
      id: 'takeaway-template',
      label: 'Template',
      icon: (
        <svg className={`${collapsed ? 'w-4 h-4' : 'w-5 h-5'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Chatbot Template'
    }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-black/95 border-r border-gray-800/50 backdrop-blur-xl transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className={`border-b border-gray-800/50 ${collapsed ? 'p-3' : 'p-6'}`}>
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex-1">
              <h1 className="text-lg font-bold text-green-400 font-mono">
                &gt; prompt_engineering
              </h1>
              <p className="text-xs text-gray-500 mt-1 font-mono">v1.0.1 // guide</p>
            </div>
          )}
          <button
            onClick={() => toggleCollapsed(!collapsed)}
            className="p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-200 border border-gray-800/50 flex-shrink-0"
          >
            <svg 
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`flex-1 space-y-1 overflow-hidden ${collapsed ? 'p-2' : 'p-4'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full group relative flex items-center ${collapsed ? 'p-2 justify-center' : 'p-3'} rounded-lg transition-all duration-300 font-mono text-sm ${
              activeSection === item.id
                ? 'bg-gray-900/80 border border-green-500/30 text-green-400 shadow-lg shadow-green-500/10'
                : 'hover:bg-gray-900/50 text-gray-400 hover:text-gray-300 border border-transparent hover:border-gray-800/50'
            }`}
          >
            {/* Active indicator */}
            {activeSection === item.id && (
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-green-500 rounded-r-full" />
            )}

            {/* Icon */}
            <div className={`transition-all duration-300 ${collapsed ? 'mx-auto' : ''} ${
              activeSection === item.id ? 'text-green-400' : 'text-gray-500 group-hover:text-gray-400'
            }`}>
              {item.icon}
            </div>

            {/* Label and description */}
            {!collapsed && (
              <div className="ml-3 flex-1 text-left">
                <div className={`font-medium transition-colors duration-200 ${
                  activeSection === item.id ? 'text-green-400' : 'text-gray-300 group-hover:text-gray-200'
                }`}>
                  {item.label}
                </div>
                <div className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-200">
                  {item.description}
                </div>
              </div>
            )}


          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`border-t border-gray-800/50 ${collapsed ? 'p-2' : 'p-4'}`}>
        {!collapsed ? (
          <div className="text-center">
          </div>
        ) : (
          <div className="text-center">
            <div className="text-lg text-green-500 font-mono">&gt;</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar; 