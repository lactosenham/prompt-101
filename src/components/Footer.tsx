function Footer() {
  return (
    <footer className="bg-black/95 border-t border-gray-800/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main content */}
        <div className="text-center">
          <div className="font-mono text-green-400 text-sm mb-4">
            $ cat footer.info
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-green-400 font-mono mb-2">
              &gt; prompt_engineering_101
            </h3>
            <p className="text-gray-400 text-sm font-mono">
              // comprehensive guide to mastering prompt engineering
            </p>
            <div className="text-gray-400 text-sm font-mono mb-2">
              © 2025 | powered by datum_consulting_gen_ai
            </div>
          </div>

          {/* Terminal prompt */}
          <div className="mt-6">
            <div className="text-xs text-gray-600 font-mono">
              user@prompt-engineering:~$ █
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 