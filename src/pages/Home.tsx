import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            <span className="block sm:inline">가족의 모든 세대를 잇는</span>
            <span className="block sm:inline sm:ml-2">
              <span className="text-blue-600">건강한 연결고리</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            <span className="block sm:inline">20대부터 80대까지, 각 세대가 필요한 순간에</span>
            <span className="block sm:inline sm:ml-1">가장 적절한 케어를 제공하는 생애주기 맞춤 플랫폼</span>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">{t('home.services.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 어울림 */}
            <Link to="/eoullim" className="block w-full">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-sm text-gray-500 mb-2">{t('home.eoullim.age')}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('home.eoullim.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.eoullim.subtitle')}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• {t('home.eoullim.feature1')}</li>
                  <li>• {t('home.eoullim.feature2')}</li>
                  <li>• {t('home.eoullim.feature3')}</li>
                </ul>
              </div>
            </Link>

            {/* Bodab */}
            <Link to="/bodab" className="block w-full">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-sm text-gray-500 mb-2">{t('home.bodab.age')}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('home.bodab.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.bodab.subtitle')}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• {t('home.bodab.feature1')}</li>
                  <li>• {t('home.bodab.feature2')}</li>
                  <li>• {t('home.bodab.feature3')}</li>
                </ul>
              </div>
            </Link>

            {/* Nest */}
            <Link to="/nest" className="block w-full">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-sm text-gray-500 mb-2">{t('home.nest.age')}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('home.nest.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.nest.subtitle')}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• {t('home.nest.feature1')}</li>
                  <li>• {t('home.nest.feature2')}</li>
                  <li>• {t('home.nest.feature3')}</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* UniQdata Section - Separated */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{t('home.uniqdata.title')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto whitespace-pre-line">
            {t('home.uniqdata.subtitle')}
          </p>

          <a href="https://uniqdata.io" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="170" cy="170" r="170" fill="#23292F"/>
                    <path d="M267.5 137.5L232.5 102.5L170 165L107.5 102.5L72.5 137.5L135 200L72.5 262.5L107.5 297.5L170 235L232.5 297.5L267.5 262.5L205 200L267.5 137.5Z" fill="white"/>
                  </svg>
                  <div className="text-sm text-purple-600 font-semibold">{t('home.uniqdata.powered')}</div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-purple-600">UniQdata</h3>
                <p className="text-lg text-gray-700 mb-2">{t('home.uniqdata.platform')}</p>
                <p className="text-sm text-gray-600">{t('home.uniqdata.desc')}</p>
              </div>

              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <span>{t('home.uniqdata.feature1')}</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <span>{t('home.uniqdata.feature2')}</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <span>{t('home.uniqdata.feature3')}</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-3 mt-1">✓</span>
                  <span>{t('home.uniqdata.feature4')}</span>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-2">
            {t('home.vision.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2 whitespace-pre-line">
            {t('home.vision.subtitle')}
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{t('home.vision.step1.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t('home.vision.step1.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{t('home.vision.step2.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t('home.vision.step2.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{t('home.vision.step3.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t('home.vision.step3.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                ∞
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{t('home.vision.step4.title')}</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t('home.vision.step4.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}