import { PageLayout } from "@/components/page-layout";

export default function UniqDataPage() {
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
              데이터 보호 & 수익화 플랫폼
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              블록체인 기반으로 의료 데이터를 안전하게 보호하고,
              익명화된 데이터 판매로 수익을 창출합니다
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">UniQdata의 혁신적 기능</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                🔒
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">블록체인 데이터 보호</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                의료 데이터를 블록체인으로 암호화하여 완벽하게 보호합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                💰
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">데이터 판매 수익</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                익명화된 데이터를 연구기관에 판매하여 수익을 얻습니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                🏥
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">의료비 30% 회수</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                데이터 수익으로 의료비의 최대 30%를 돌려받습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">어떻게 작동하나요?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                1
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">데이터 수집</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                SportiQue 서비스 이용 중 생성된 건강 데이터 자동 수집
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                2
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">익명화 처리</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                개인 정보를 완전히 제거한 익명 데이터로 변환
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                3
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">데이터 판매</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                연구기관, 제약회사에 익명 데이터 판매
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                4
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">수익 분배</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                판매 수익의 70%를 사용자에게 지급
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">데이터가 돈이 되는 시대</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                그동안 무료로 제공했던 당신의 의료 데이터,
                이제는 UniQdata를 통해 정당한 대가를 받으세요.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">투명한 수익 구조</h4>
                    <p className="text-sm sm:text-base text-gray-600">블록체인으로 모든 거래가 투명하게 기록됩니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">안전한 데이터 이전</h4>
                    <p className="text-sm sm:text-base text-gray-600">SportiQue 서비스 간 데이터를 안전하게 이전합니다</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">지속적인 수익 창출</h4>
                    <p className="text-sm sm:text-base text-gray-600">데이터가 판매될 때마다 수익을 받습니다</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">💎</div>
                <p className="text-xl sm:text-2xl font-bold text-purple-800 mb-2">
                  연간 예상 수익
                </p>
                <p className="text-3xl sm:text-4xl font-bold text-purple-600">
                  ₩ 1,200,000+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  * 평균 사용자 기준
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">철저한 보안</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔐</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">완전한 익명화</h3>
              <p className="text-sm sm:text-base text-gray-600">
                개인을 식별할 수 있는 모든 정보를 제거합니다
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⛓️</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">블록체인 암호화</h3>
              <p className="text-sm sm:text-base text-gray-600">
                해킹이 불가능한 블록체인 기술로 보호합니다
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🛡️</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">데이터 소유권</h3>
              <p className="text-sm sm:text-base text-gray-600">
                언제든지 데이터 판매를 중단할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">
            데이터 지키고, 수익도 창출
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90 px-2">
            UniQdata와 함께 의료 데이터의 진정한 가치를 실현하세요
          </p>
          <a
            href="https://uniqdata.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors text-sm sm:text-base"
          >
            uniqdata.io 방문하기
          </a>
        </div>
      </section>
    </PageLayout>
  );
}