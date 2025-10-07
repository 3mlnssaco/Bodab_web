import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NestPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('nest.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('nest.subtitle')}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto whitespace-pre-line">
              {t('nest.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nest만의 특별함</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">24시간 전문 케어</h3>
              <p className="text-gray-600">
                의료진과 요양보호사가 24시간 상주하며 어르신을 케어합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">가족과 실시간 소통</h3>
              <p className="text-gray-600">
                일일 케어 리포트와 화상통화로 가족과 매일 연결됩니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold mb-3">따뜻한 보금자리</h3>
              <p className="text-gray-600">
                집처럼 편안하고 안전한 환경에서 생활하실 수 있습니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">투명한 케어 기록</h3>
              <p className="text-gray-600">
                모든 케어 내용이 투명하게 기록되고 가족에게 공유됩니다
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
              <h2 className="text-3xl font-bold mb-6">전문적인 케어 시스템</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">의료진 상주</h4>
                    <p className="text-gray-600">전문 의료진이 24시간 건강 상태를 모니터링합니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">맞춤형 케어 플랜</h4>
                    <p className="text-gray-600">개인별 건강 상태에 맞는 맞춤 케어를 제공합니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">재활 프로그램</h4>
                    <p className="text-gray-600">전문 재활 프로그램으로 건강 회복을 돕습니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">정서적 케어</h4>
                    <p className="text-gray-600">다양한 프로그램으로 정서적 안정을 제공합니다</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏡</div>
                <p className="text-xl font-semibold text-purple-800">
                  따뜻한 보금자리<br />
                  전문적인 케어
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">부모님을 위한 최선의 선택</h2>
          <p className="text-xl mb-8 opacity-90">
            Nest와 함께 부모님께 편안하고 행복한 노후를 선물하세요
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
            상담 신청하기
          </button>
        </div>
      </section>
    </PageLayout>
  );
}