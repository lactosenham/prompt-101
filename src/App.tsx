import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import Introduction from './components/Introduction';
import Fundamentals from './components/Fundamentals';
import PromptingMethods from './components/PromptingMethods';
import PsychologicalFraming from './components/PsychologicalFraming';
import TaskSpecific from './components/TaskSpecific';
import Evaluation from './components/Evaluation';
import Tools from './components/Tools';
import Examples from './components/Examples';
import TakeawayTemplate from './components/TakeawayTemplate';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Auto-hide sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'hero':
        return (
          <Hero 
            onGetStarted={() => setActiveSection('executive-summary')} 
            onExploreMethod={() => setActiveSection('prompting-methods')}
          />
        );
      case 'executive-summary':
        return <ExecutiveSummary />;
      case 'introduction':
        return <Introduction onNavigate={setActiveSection} />;
      case 'fundamentals':
        return <Fundamentals />;
      case 'prompting-methods':
        return <PromptingMethods />;
      case 'psychological-framing':
        return <PsychologicalFraming />;
      case 'task-specific':
        return <TaskSpecific />;
      case 'evaluation':
        return <Evaluation />;
      case 'tools':
        return <Tools />;
      case 'examples':
        return <Examples />;
      case 'takeaway-template':
        return <TakeawayTemplate />;
      default:
        return (
          <Hero 
            onGetStarted={() => setActiveSection('executive-summary')} 
            onExploreMethod={() => setActiveSection('prompting-methods')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={setSidebarCollapsed}
      />
      
      {/* Main content with dynamic margin based on sidebar state */}
      <main className={`min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      }`}>
        <div className="relative">
          <div className="pt-4 pb-8 lg:pt-8 lg:pb-16">
            {renderContent()}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
 