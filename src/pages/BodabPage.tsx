import { PageLayout } from "@/components/page-layout";

export default function BodabPage() {
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
              60-70대 어르신을 위한 자립적 건강 관리 플랫폼
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              큰 글씨와 음성 인터페이스로 쉽게 사용할 수 있는 건강 관리 서비스입니다
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Bodab의 핵심 기능</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗣️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">음성 인터페이스</h3>
              <p className="text-sm sm:text-base text-gray-600">
                복잡한 터치 없이 말로 모든 기능을 사용할 수 있습니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💊</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">복약 관리</h3>
              <p className="text-sm sm:text-base text-gray-600">
                약 복용 시간을 알려주고 복약 기록을 자동으로 관리합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">건강 기록</h3>
              <p className="text-sm sm:text-base text-gray-600">
                혈압, 혈당 등 건강 수치를 쉽게 기록하고 관리합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">병원 예약</h3>
              <p className="text-sm sm:text-base text-gray-600">
                진료 예약과 병원 방문 일정을 한눈에 확인합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👨‍👩‍👧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">가족 공유</h3>
              <p className="text-sm sm:text-base text-gray-600">
                건강 정보를 가족과 안전하게 공유합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🆘</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">응급 SOS</h3>
              <p className="text-sm sm:text-base text-gray-600">
                위급 상황 시 빠르게 도움을 요청할 수 있습니다
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">AI 건강 비서</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                24시간 대화 가능한 AI 건강 비서가 어르신의 건강을 챙겨드립니다.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">건강 상담</h4>
                    <p className="text-sm sm:text-base text-gray-600">증상을 말하면 AI가 적절한 조언을 제공합니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">일상 대화</h4>
                    <p className="text-sm sm:text-base text-gray-600">외로울 때 언제든 대화 상대가 되어드립니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">건강 습관 코칭</h4>
                    <p className="text-sm sm:text-base text-gray-600">건강한 생활 습관을 만들도록 도와드립니다</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-orange-100 p-6 sm:p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🤖</div>
                <p className="text-base sm:text-xl font-semibold text-orange-800">
                  "오늘 약은 드셨나요?"<br />
                  "혈압 측정하실 시간입니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Interface Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">쉽고 간단한 사용법</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">큰 글씨</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                모든 글씨가 크고 선명해서 잘 보입니다
              </p>
            </div>

            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">음성 명령</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                "보답아" 하고 부르면 말로 조작할 수 있습니다
              </p>
            </div>

            <div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">간단한 구성</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                필요한 기능만 크고 명확하게 배치했습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">
            건강 관리가 필요할 때,<br className="sm:hidden" /> 자립적으로 케어
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            Bodab과 함께 건강한 노후를 스스로 관리하세요
          </p>
          <button className="bg-white text-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm sm:text-base">
            무료 체험 시작하기
          </button>
        </div>
      </section>
    </PageLayout>
  );
}