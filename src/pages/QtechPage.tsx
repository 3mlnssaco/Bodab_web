import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QtechPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('qtech.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('qtech.subtitle')}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto whitespace-pre-line mb-6">
              {t('qtech.description')}
            </p>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold">
              🏆 {t('qtech.achievement')}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('qtech.research')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                🤖 {t('qtech.research.robot')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('qtech.research.robot.desc')}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-blue-700">
                  {t('qtech.achievement')}
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▸</span>
                  <span>대화형 AI 반려 로봇</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▸</span>
                  <span>복약 알림 로봇</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▸</span>
                  <span>긴급 상황 감지 및 알림</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                🔗 {t('qtech.research.blockchain')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('qtech.research.blockchain.desc')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">▸</span>
                  <span>의료 데이터 익명화</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">▸</span>
                  <span>스마트 컨트랙트 기반 보험</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">▸</span>
                  <span>데이터 소유권 증명</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                📊 AI 헬스케어
              </h3>
              <p className="text-gray-600 mb-6">
                딥러닝 기반 건강 예측 및 진단 보조 시스템
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">▸</span>
                  <span>질병 조기 진단 AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">▸</span>
                  <span>맞춤형 건강 관리 추천</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">▸</span>
                  <span>의료 영상 분석</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                🏠 스마트 홈 IoT
              </h3>
              <p className="text-gray-600 mb-6">
                고령자 친화적 스마트 홈 환경 구축
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">▸</span>
                  <span>낙상 감지 시스템</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">▸</span>
                  <span>생활 패턴 분석</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">▸</span>
                  <span>환경 자동 제어</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">혁신 프로세스</h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">연구 개발</h3>
              <p className="text-gray-600">최신 기술 연구</p>
            </div>

            <div className="hidden md:block text-3xl text-gray-400">→</div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">프로토타입</h3>
              <p className="text-gray-600">실험 및 검증</p>
            </div>

            <div className="hidden md:block text-3xl text-gray-400">→</div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">상용화</h3>
              <p className="text-gray-600">서비스 적용</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{t('qtech.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('qtech.cta.desc')}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            연구 파트너 되기
          </button>
        </div>
      </section>
    </PageLayout>
  );
}