import { SimpleNavigation } from "@/components/simple-navigation";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

export default function XRPLPage() {
  // 페이지 로드 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src="/images/xrpl-logo.png"
                alt="XRPL Logo"
                width={150}
                height={150}
                className="object-contain animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              건강 데이터 소유권과 수익화를 위한
              <br />
              XRPL 기반 플랫폼
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in">
              SportiQue는 XRPL 블록체인을 활용하여 건강 데이터의 소유권을
              사용자에게 돌려주고
              <br />
              데이터 제공에 대한 공정한 보상을 제공하는 플랫폼입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            문제점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "건강 데이터 소유권 문제",
                description: "사용자가 자신의 건강 데이터에 대한 통제권이 없음",
              },
              {
                title: "개인정보 보호 취약",
                description: "중앙화된 시스템에서 데이터 유출 위험",
              },
              {
                title: "데이터 가치 보상 부족",
                description: "데이터 제공에 대한 공정한 보상 체계 부재",
              },
              {
                title: "데이터 접근성과 투명성 부족",
                description: "데이터 사용 내역 추적 불가능",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            해결책
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "👤",
                title: "사용자 중심 데이터 소유권",
                description:
                  "블록체인 기반으로 사용자가 자신의 건강 데이터를 완전히 통제",
              },
              {
                icon: "🔒",
                title: "NFT 기술 기반 정보 보안 강화",
                description: "NFT를 통한 데이터 접근 권한 관리 및 보안 강화",
              },
              {
                icon: "💰",
                title: "XRP를 통한 데이터 수익화",
                description: "데이터 제공 시 XRP로 즉시 보상 지급",
              },
              {
                icon: "📊",
                title: "개별 구독 + 데이터 풀 모델",
                description:
                  "기업 구독 및 데이터 풀 참여를 통한 다양한 수익 모델",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XRPL USE Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            XRPL 활용
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "TokenEscrow",
                description:
                  "기업이 지불한 XRP를 에스크로에 안전하게 보관하고 사용자가 데이터를 제공할 때마다 자동 보상 지급",
                icon: "🔐",
              },
              {
                title: "NFTokenMint",
                description:
                  "구독 및 데이터 풀 참여에 대한 증명으로 NFT를 발행 후 데이터 접근 권한 관리",
                icon: "🎨",
              },
              {
                title: "Batch",
                description:
                  "여러 개의 XRPL 트랜잭션을 묶어서 한번에 보내 기업이나 연구 기관에서 dataset을 구성할 수 있는 서비스 구축",
                icon: "📦",
              },
              {
                title: "트랜잭션 메모",
                description:
                  "모든 데이터 접근과 보상 지급에 메모를 포함하여 감사 추적이 가능하고 투명한 거래 기록 유지",
                icon: "📝",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-primary/70 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B2C Structure */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            B2B2C 구조
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  기업 (B)
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 개인 데이터 활용</li>
                  <li>• 비용 지불</li>
                  <li>• 신뢰 데이터 공급원</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/70 p-8 rounded-2xl shadow-lg text-center text-primary-foreground hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔷</div>
                <h3 className="text-2xl font-bold mb-4">플랫폼 (B)</h3>
                <p className="text-lg">SportiQue</p>
                <ul className="space-y-2 mt-4 text-primary-foreground/90">
                  <li>• 데이터 주권 보장</li>
                  <li>• 투명성 보장</li>
                  <li>• 보상 지급</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  개인 (C)
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 건강 데이터 기록</li>
                  <li>• 개인 데이터 제공</li>
                  <li>• 보상 수령</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            로드맵
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                period: "2025년 4분기",
                title: "베타 출시 및 초기 사용자 확보",
                description:
                  "XRPL 테스트넷 기반 베타 서비스 출시 및 초기 사용자 그룹 구축",
              },
              {
                period: "2026년 2분기",
                title: "메인넷 마이그레이션 및 기업 파트너십",
                description:
                  "XRPL 메인넷 이전 및 첫 번째 기업 파트너십 체결, 데이터 풀 확장",
              },
              {
                period: "2026년 4분기",
                title: "데이터 마켓플레이스 출시",
                description:
                  "건강 데이터 NFT 거래 마켓플레이스 출시 및 데이터 유형 확장",
              },
              {
                period: "2027년 2분기",
                title: "글로벌 확장 및 API 생태계",
                description:
                  "글로벌 시장 진출 및 개발자 API 생태계 구축, 데이터 분석 도구 제공",
              },
              {
                period: "2028년",
                title: "건강 데이터 표준화 및 생태계 확장",
                description:
                  "글로벌 건강 데이터 표준화 주도 및 의료 기관 통합 확대",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg whitespace-nowrap">
                    {milestone.period}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
