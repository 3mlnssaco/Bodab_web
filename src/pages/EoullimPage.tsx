import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EoullimPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t('eoullim.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto px-2">
              {t('eoullim.subtitle')}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              {t('eoullim.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('eoullim.programs.title')}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">{t('eoullim.programs.yoga.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('eoullim.programs.yoga.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">{t('eoullim.programs.aqua.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('eoullim.programs.aqua.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">{t('eoullim.programs.walking.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('eoullim.programs.walking.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">{t('eoullim.programs.dance.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('eoullim.programs.dance.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">{t('eoullim.programs.strength.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('eoullim.programs.strength.desc')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">{t('eoullim.programs.meditation.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('eoullim.programs.meditation.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{t('eoullim.community.title')}</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                {t('eoullim.community.desc')}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">{t('eoullim.community.trainer')}</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">{t('eoullim.community.custom')}</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">{t('eoullim.community.tea')}</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">{t('eoullim.community.check')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 sm:p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏃‍♀️</div>
                <p className="text-lg sm:text-xl font-semibold text-green-800">
                  {t('eoullim.community.quote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">{t('eoullim.cta.title')}</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            {t('eoullim.cta.desc')}
          </p>
          <button className="bg-white text-green-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base">
            {t('eoullim.cta.button')}
          </button>
        </div>
      </section>
    </PageLayout>
  );
}