import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NestPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('nest.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto px-2">
              {t('nest.subtitle')}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              {t('nest.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('nest.features.title')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">{t('nest.features.care24.title')}</h3>
              <p className="text-gray-600">
                {t('nest.features.care24.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">{t('nest.features.family.title')}</h3>
              <p className="text-gray-600">
                {t('nest.features.family.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3">{t('nest.features.home.title')}</h3>
              <p className="text-gray-600">
                {t('nest.features.home.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">{t('nest.features.record.title')}</h3>
              <p className="text-gray-600">
                {t('nest.features.record.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('nest.system.title')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('nest.system.medical.title')}</h4>
                    <p className="text-gray-600">{t('nest.system.medical.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('nest.system.custom.title')}</h4>
                    <p className="text-gray-600">{t('nest.system.custom.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('nest.system.rehab.title')}</h4>
                    <p className="text-gray-600">{t('nest.system.rehab.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('nest.system.emotional.title')}</h4>
                    <p className="text-gray-600">{t('nest.system.emotional.desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏡</div>
                <p className="text-xl font-semibold text-purple-800">
                  {t('nest.system.quote1')}<br />
                  {t('nest.system.quote2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{t('nest.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('nest.cta.desc')}
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            {t('nest.cta.button')}
          </button>
        </div>
      </section>
    </PageLayout>
  );
}