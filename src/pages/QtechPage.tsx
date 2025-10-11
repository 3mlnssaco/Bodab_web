import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QtechPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('qtech.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto px-2">
              {t('qtech.subtitle')}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto whitespace-pre-line mb-4 sm:mb-6 px-2">
              {t('qtech.description')}
            </p>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base">
              🏆 {t('qtech.achievement')}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('qtech.research')}</h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-blue-600">
                🤖 {t('qtech.research.robot')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                {t('qtech.research.robot.desc')}
              </p>
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                <p className="font-semibold text-blue-700 text-sm sm:text-base">
                  {t('qtech.achievement')}
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.robot.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.robot.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.robot.item3')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-indigo-600">
                🔗 {t('qtech.research.blockchain')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {t('qtech.research.blockchain.desc')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.blockchain.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.blockchain.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.blockchain.item3')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-purple-600">
                📊 {t('qtech.research.ai.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {t('qtech.research.ai.desc')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.ai.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.ai.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.ai.item3')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-green-600">
                🏠 {t('qtech.research.iot.title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {t('qtech.research.iot.desc')}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.iot.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.iot.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-sm sm:text-base">▸</span>
                  <span className="text-sm sm:text-base">{t('qtech.research.iot.item3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{t('qtech.innovation.title')}</h2>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">{t('qtech.innovation.research')}</h3>
              <p className="text-gray-600">{t('qtech.innovation.research.desc')}</p>
            </div>

            <div className="hidden md:block text-3xl text-gray-400">→</div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">{t('qtech.innovation.prototype')}</h3>
              <p className="text-gray-600">{t('qtech.innovation.prototype.desc')}</p>
            </div>

            <div className="hidden md:block text-3xl text-gray-400">→</div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">{t('qtech.innovation.commercial')}</h3>
              <p className="text-gray-600">{t('qtech.innovation.commercial.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">{t('qtech.cta.title')}</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            {t('qtech.cta.desc')}
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base">
            {t('qtech.cta.button')}
          </button>
        </div>
      </section>
    </PageLayout>
  );
}