import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <section>
      <div className="relative w-full h-[80vh]">
        <img
          src="/hero.JPG"
          alt="Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">{t('title')}</h1>
        </div>
      </div>
    
    </section>
  );
}
