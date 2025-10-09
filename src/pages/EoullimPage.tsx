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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">맞춤형 프로그램</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">시니어 요가</h3>
              <p className="text-sm sm:text-base text-gray-600">
                관절에 무리 없는 부드러운 동작으로 유연성과 균형감각 향상
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">아쿠아로빅</h3>
              <p className="text-sm sm:text-base text-gray-600">
                물속에서 즐기는 전신 운동, 관절 부담 최소화
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">걷기 모임</h3>
              <p className="text-sm sm:text-base text-gray-600">
                동네 공원에서 함께하는 건강한 걷기 운동
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">댄스 클래스</h3>
              <p className="text-sm sm:text-base text-gray-600">
                즐거운 음악과 함께하는 실버 댄스
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">근력 운동</h3>
              <p className="text-sm sm:text-base text-gray-600">
                안전한 기구를 활용한 근력 강화 프로그램
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-green-600">명상 & 스트레칭</h3>
              <p className="text-sm sm:text-base text-gray-600">
                마음과 몸의 균형을 찾는 힐링 프로그램
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">함께하는 커뮤니티</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                또래와 함께 운동하며 새로운 친구를 만나고, 건강한 생활 습관을 만들어갑니다.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">전문 트레이너의 안전한 지도</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">연령별 맞춤 운동 프로그램</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">운동 후 건강한 차 모임</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                  <span className="text-sm sm:text-base">월별 건강 체크 및 상담</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 sm:p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏃‍♀️</div>
                <p className="text-lg sm:text-xl font-semibold text-green-800">
                  건강한 인생 2막을 시작하세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">건강한 인생 2막을 시작하세요</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            지금 가입하시면 첫 달 50% 할인
          </p>
          <button className="bg-white text-green-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base">
            무료 체험 신청하기
          </button>
        </div>
      </section>
    </PageLayout>
  );
}