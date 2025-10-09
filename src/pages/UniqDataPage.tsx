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
              XRPL 기반 의료 데이터 NFT 마켓플레이스
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-2">
              데이터는 안전하게 저장하고, 열람권을 NFT로 발행하여 거래합니다
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <svg className="w-12 h-12" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="170" cy="170" r="170" fill="#23292F"/>
                <path d="M267.5 137.5L232.5 102.5L170 165L107.5 102.5L72.5 137.5L135 200L72.5 262.5L107.5 297.5L170 235L232.5 297.5L267.5 262.5L205 200L267.5 137.5Z" fill="white"/>
              </svg>
              <div className="text-sm text-purple-600 font-semibold">Powered by XRPL</div>
            </div>
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
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">안전한 데이터 저장</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                의료 데이터를 UniQdata DB에 안전하게 보관합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                🎫
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">열람권 NFT 발행</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                데이터 열람권을 XRPL NFT로 발행하여 소유권을 증명합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4">
                💰
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">NFT 판매 수익</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                열람권 NFT를 제약사·연구소에 판매하고 XRP로 수익 창출
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
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">데이터 저장</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                의료 데이터를 UniQdata 데이터베이스에 안전하게 저장
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                2
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">NFT 발행</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                데이터 열람권을 XRPL NFT로 발행
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                3
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">NFT 판매</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                제약사·연구소에 열람권 NFT를 판매
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                4
              </div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">XRP 수익</h4>
              <p className="text-xs sm:text-sm text-gray-600 px-1">
                NFT 판매 대금을 XRP로 즉시 정산
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">데이터가 돈이 되는 시대</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
              그동안 무료로 제공했던 당신의 의료 데이터,
              이제는 UniQdata를 통해 정당한 대가를 받으세요.
            </p>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">투명한 NFT 거래</h4>
                  <p className="text-sm sm:text-base text-gray-600">XRPL 블록체인으로 모든 NFT 거래가 투명하게 기록됩니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">데이터는 안전하게 보관</h4>
                  <p className="text-sm sm:text-base text-gray-600">원본 데이터는 UniQdata DB에 안전하게 저장되고, 열람권만 거래됩니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">즉시 정산 시스템</h4>
                  <p className="text-sm sm:text-base text-gray-600">NFT가 판매되면 XRP로 즉시 정산됩니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 sm:mr-4 text-xl sm:text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">언제든 판매 중단 가능</h4>
                  <p className="text-sm sm:text-base text-gray-600">원하지 않으면 언제든 NFT 발행과 판매를 중단할 수 있습니다</p>
                </div>
              </li>
            </ul>
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
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎫</div>
              <h3 className="text-base sm:text-lg font-bold mb-2">NFT 소유권 증명</h3>
              <p className="text-sm sm:text-base text-gray-600">
                XRPL NFT로 데이터 열람권 소유를 증명합니다
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