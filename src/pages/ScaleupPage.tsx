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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">{t('vision.cta')}</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('vision.cta.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <Link to="/woorijib" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">30대</div>
                <h3 className="text-lg font-bold text-blue-600 mb-1">우리집 알아보기</h3>
                <p className="text-sm text-gray-600">접근성 연구 프로젝트</p>
              </div>
            </Link>

            <Link to="/eoullim" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">50-60대</div>
                <h3 className="text-lg font-bold text-green-600 mb-1">어울림 가입하기</h3>
                <p className="text-sm text-gray-600">건강한 인생 2막</p>
              </div>
            </Link>

            <Link to="/bodab" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">60-70대</div>
                <h3 className="text-lg font-bold text-orange-600 mb-1">Bodab 시작하기</h3>
                <p className="text-sm text-gray-600">자립적 건강 관리</p>
              </div>
            </Link>

            <Link to="/nest" className="block">
              <div className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-500 mb-2">70대+</div>
                <h3 className="text-lg font-bold text-purple-600 mb-1">Nest 알아보기</h3>
                <p className="text-sm text-gray-600">전문 케어 시스템</p>
              </div>
            </Link>

            <a href="https://uniqdata.io" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-purple-200">
                <div className="text-sm text-gray-500 mb-2">전 연령</div>
                <h3 className="text-lg font-bold text-purple-600 mb-1">UniQdata 시작하기</h3>
                <p className="text-sm text-gray-600">데이터로 수익 창출</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Vision Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">생애 전주기 케어 플랫폼</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">30대: 가족 소통의 시작</h3>
                <p className="text-gray-600">
                  우리집으로 가족 간 소통을 시작하고, 부모님의 건강 데이터를 관리합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">50-60대: 건강한 인생 2막</h3>
                <p className="text-gray-600">
                  어울림에서 또래와 함께 운동하며 건강한 노후를 준비합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">60-70대: 자립적 건강 관리</h3>
                <p className="text-gray-600">
                  Bodab의 AI 헬스케어로 스스로 건강을 관리합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">70대+: 전문적인 케어</h3>
                <p className="text-gray-600">
                  Nest에서 24시간 전문적인 케어를 받으며 편안한 노후를 보냅니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                ∞
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">전 연령: 데이터 가치 실현</h3>
                <p className="text-gray-600">
                  UniQdata로 의료 데이터를 안전하게 관리하고 수익을 창출합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">한 번 시작하면 평생 함께</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            SportiQue는 가족의 모든 세대와 함께 성장하며,
            각 시기에 필요한 최적의 헬스케어 솔루션을 제공합니다.
          </p>
          <Link to="/">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              서비스 둘러보기
            </button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}