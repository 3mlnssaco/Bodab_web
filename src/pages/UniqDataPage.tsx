import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function UniqDataPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              UniQdata
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto">
              {t('uniqdata.page.title')}
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              {t('uniqdata.page.desc')}
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <svg className="w-12 h-12" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="170" cy="170" r="170" fill="#23292F"/>
                <path d="M267.5 137.5L232.5 102.5L170 165L107.5 102.5L72.5 137.5L135 200L72.5 262.5L107.5 297.5L170 235L232.5 297.5L267.5 262.5L205 200L267.5 137.5Z" fill="white"/>
              </svg>
              <div className="text-sm text-purple-600 font-semibold">{t('uniqdata.page.powered')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('uniqdata.features.title')}</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                🔒
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('uniqdata.features.storage.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {t('uniqdata.features.storage.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                🎫
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('uniqdata.features.nft.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {t('uniqdata.features.nft.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                💰
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t('uniqdata.features.revenue.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                {t('uniqdata.features.revenue.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('uniqdata.how.title')}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                1
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('uniqdata.how.step1.title')}</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                {t('uniqdata.how.step1.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                2
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('uniqdata.how.step2.title')}</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                {t('uniqdata.how.step2.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                3
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('uniqdata.how.step3.title')}</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                {t('uniqdata.how.step3.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                4
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('uniqdata.how.step4.title')}</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                {t('uniqdata.how.step4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">{t('uniqdata.benefits.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto whitespace-pre-line">
              {t('uniqdata.benefits.desc')}
            </p>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">{t('uniqdata.benefits.transparent.title')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('uniqdata.benefits.transparent.desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">{t('uniqdata.benefits.safe.title')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('uniqdata.benefits.safe.desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">{t('uniqdata.benefits.instant.title')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('uniqdata.benefits.instant.desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">{t('uniqdata.benefits.stop.title')}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{t('uniqdata.benefits.stop.desc')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('uniqdata.security.title')}</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔐</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">{t('uniqdata.security.anonymous.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('uniqdata.security.anonymous.desc')}
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⛓️</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">{t('uniqdata.security.blockchain.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('uniqdata.security.blockchain.desc')}
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎫</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">{t('uniqdata.security.ownership.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('uniqdata.security.ownership.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">
            {t('uniqdata.cta.title')}
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            {t('uniqdata.cta.desc')}
          </p>
          <a
            href="https://uniqdata.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors text-sm sm:text-base"
          >
            {t('uniqdata.cta.button')}
          </a>
        </div>
      </section>
    </PageLayout>
  );
}