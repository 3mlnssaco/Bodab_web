import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Link } from "react-router-dom";

export default function Home() {
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
          <h2 className="text-3xl font-bold text-center mb-16">세대별 맞춤 솔루션</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 어울림 */}
            <Link to="/eoullim" className="block w-full">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-sm text-gray-500 mb-2">50-60대</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">어울림</h3>
                <p className="text-gray-600 mb-4">인생 2막</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 또래와 함께하는 운동</li>
                  <li>• 취미 활동과 동호회</li>
                  <li>• 건강한 생활 습관</li>
                </ul>
              </div>
            </Link>

            {/* Bodab */}
            <Link to="/bodab" className="block w-full">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-sm text-gray-500 mb-2">60-70대</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Bodab</h3>
                <p className="text-gray-600 mb-4">건강 관리</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 음성 인터페이스</li>
                  <li>• 복약 알림</li>
                  <li>• AI 건강 상담</li>
                </ul>
              </div>
            </Link>

            {/* Nest */}
            <Link to="/nest" className="block w-full">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-sm text-gray-500 mb-2">70대+</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Nest</h3>
                <p className="text-gray-600 mb-4">전문 케어</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 24시간 전문 케어</li>
                  <li>• 가족과 실시간 소통</li>
                  <li>• 투명한 케어 기록</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* UniQdata Section - Separated */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">데이터로 수익 창출</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            모든 세대가 함께 사용할 수 있는 의료 데이터 관리 & 수익화 플랫폼
          </p>

          <a href="https://uniqdata.io" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-purple-200">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex-1 min-w-[250px]">
                  <div className="text-sm text-purple-600 font-semibold mb-2">전 연령</div>
                  <h3 className="text-3xl font-bold mb-3 text-purple-600">UniQdata</h3>
                  <p className="text-lg text-gray-700 mb-6">데이터 보호 & 수익화</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-3">✓</span>
                      블록체인 데이터 보호
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-3">✓</span>
                      데이터 판매 수익
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-purple-600 mr-3">✓</span>
                      의료비 30% 회수
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4">💎</div>
                  <div className="bg-white px-6 py-4 rounded-xl shadow-md">
                    <p className="text-sm text-gray-600 mb-1">연간 예상 수익</p>
                    <p className="text-2xl font-bold text-purple-600">₩ 1,200,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 px-2">
            생애 전주기 케어 플랫폼
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            한 번 시작하면 평생 함께하는 가족 건강 파트너.<br className="hidden sm:block" />
            각 세대가 필요한 순간에 가장 적절한 케어를 제공합니다.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">50-60대: 건강한 인생 2막</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  어울림에서 또래와 함께 운동하며 건강한 노후를 준비합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">60-70대: 자립적 건강 관리</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Bodab의 AI 헬스케어로 스스로 건강을 관리합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">70대+: 전문적인 케어</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Nest에서 24시간 전문적인 케어를 받으며 편안한 노후를 보냅니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-base sm:text-lg font-bold">
                ∞
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">전 연령: 데이터 가치 실현</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  UniQdata로 의료 데이터를 안전하게 관리하고 수익을 창출합니다.
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