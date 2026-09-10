import logoText from '../assets/logo-text.png';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   
        <div>
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-8 brightness-0 invert"
          />
          <p className="text-sm text-gray-400 mt-3">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-sm text-gray-400 mt-4">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Product
          </h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Technologies</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Projects</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Company
          </h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Careers</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Legal
          </h4>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
