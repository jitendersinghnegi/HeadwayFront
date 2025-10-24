import {useTranslations} from 'next-intl';
export function Footer() {
    const footer = useTranslations('Footer');
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <p>© {new Date().getFullYear()} Headway Social. {footer('all rights reserved')}</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">{footer('privacy policy')}</a>
          <a href="#" className="hover:text-white">{footer('terms of service')}</a>
        </div>
      </div>
    </footer>
  );
}
