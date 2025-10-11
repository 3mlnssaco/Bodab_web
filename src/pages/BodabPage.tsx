import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BodabPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Bodab
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto">
              {t('bodab.page.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              {t('bodab.page.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('bodab.features.title')}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗣️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('bodab.features.voice.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('bodab.features.voice.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💊</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('bodab.features.medication.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('bodab.features.medication.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('bodab.features.health.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('bodab.features.health.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('bodab.features.hospital.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('bodab.features.hospital.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👨‍👩‍👧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('bodab.features.family.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('bodab.features.family.desc')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🆘</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('bodab.features.sos.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('bodab.features.sos.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{t('bodab.ai.title')}</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                {t('bodab.ai.desc')}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">{t('bodab.ai.consultation.title')}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{t('bodab.ai.consultation.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">{t('bodab.ai.conversation.title')}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{t('bodab.ai.conversation.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">{t('bodab.ai.coaching.title')}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{t('bodab.ai.coaching.desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-orange-100 p-6 sm:p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🤖</div>
                <p className="text-base sm:text-xl font-semibold text-orange-800">
                  {t('bodab.ai.quote1')}<br />
                  {t('bodab.ai.quote2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Interface Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('bodab.simple.title')}</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('bodab.simple.large.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {t('bodab.simple.large.desc')}
              </p>
            </div>

            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('bodab.simple.voice.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {t('bodab.simple.voice.desc')}
              </p>
            </div>

            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('bodab.simple.simple.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {t('bodab.simple.simple.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">
            {t('bodab.cta.title')}
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            {t('bodab.cta.desc')}
          </p>
          <button className="bg-white text-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm sm:text-base">
            {t('bodab.cta.button')}
          </button>
        </div>
      </section>
    </PageLayout>
  );
}
