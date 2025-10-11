import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function ScaleupPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              {t('vision.title')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              {t('vision.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">{t('vision.cta')}</h2>
            <p className="text-base sm:text-xl opacity-90 max-w-2xl mx-auto px-2">
              {t('vision.cta.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            <Link to="/woorijib" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">{t('scaleup.cta.woorijib.age')}</div>
                <h3 className="text-lg font-bold text-blue-600 mb-1">{t('scaleup.cta.woorijib.title')}</h3>
                <p className="text-sm text-gray-600">{t('scaleup.cta.woorijib.desc')}</p>
              </div>
            </Link>

            <Link to="/eoullim" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">{t('scaleup.cta.eoullim.age')}</div>
                <h3 className="text-lg font-bold text-green-600 mb-1">{t('scaleup.cta.eoullim.title')}</h3>
                <p className="text-sm text-gray-600">{t('scaleup.cta.eoullim.desc')}</p>
              </div>
            </Link>

            <Link to="/bodab" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">{t('scaleup.cta.bodab.age')}</div>
                <h3 className="text-lg font-bold text-orange-600 mb-1">{t('scaleup.cta.bodab.title')}</h3>
                <p className="text-sm text-gray-600">{t('scaleup.cta.bodab.desc')}</p>
              </div>
            </Link>

            <Link to="/nest" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">{t('scaleup.cta.nest.age')}</div>
                <h3 className="text-lg font-bold text-purple-600 mb-1">{t('scaleup.cta.nest.title')}</h3>
                <p className="text-sm text-gray-600">{t('scaleup.cta.nest.desc')}</p>
              </div>
            </Link>

            <a href="https://uniqdata.io" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-purple-200">
                <div className="text-sm text-gray-500 mb-2">{t('scaleup.cta.uniqdata.age')}</div>
                <h3 className="text-lg font-bold text-purple-600 mb-1">{t('scaleup.cta.uniqdata.title')}</h3>
                <p className="text-sm text-gray-600">{t('scaleup.cta.uniqdata.desc')}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Vision Details */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-2">
            {t('scaleup.lifecycle.title')}
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('scaleup.lifecycle.step1.title')}</h3>
                <p className="text-gray-600">
                  {t('scaleup.lifecycle.step1.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('scaleup.lifecycle.step2.title')}</h3>
                <p className="text-gray-600">
                  {t('scaleup.lifecycle.step2.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('scaleup.lifecycle.step3.title')}</h3>
                <p className="text-gray-600">
                  {t('scaleup.lifecycle.step3.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('scaleup.lifecycle.step4.title')}</h3>
                <p className="text-gray-600">
                  {t('scaleup.lifecycle.step4.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                ∞
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('scaleup.lifecycle.step5.title')}</h3>
                <p className="text-gray-600">
                  {t('scaleup.lifecycle.step5.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">{t('scaleup.final.title')}</h2>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 whitespace-pre-line">
            {t('scaleup.final.desc')}
          </p>
          <Link to="/">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
              {t('scaleup.final.button')}
            </button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}