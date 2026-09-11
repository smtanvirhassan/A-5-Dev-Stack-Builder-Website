import logoText from '../assets/logo-text.png';

function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 overflow-hidden shrink-0">
              <img src={logoText} alt="Dev Stack" className="h-8 max-w-none object-left" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Dev<span className="text-pink-500 font-bold">Stack</span>
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 mt-4">
            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Product
          </h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Technologies</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Projects</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Company
          </h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Careers</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Legal
          </h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
