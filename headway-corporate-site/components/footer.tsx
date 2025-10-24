export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <p>© {new Date().getFullYear()} Headway Social. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
