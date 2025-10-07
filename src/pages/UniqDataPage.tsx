import { SimpleNavigation } from "@/components/simple-navigation";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

export default function UniqDataPage() {
  // 페이지 로드 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary/70 text-secondary-foreground">
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 bg-secondary-foreground rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">S</span>
              </div>
              <span className="text-lg text-secondary-foreground/80">Sportique</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              UniqData
              <br />
              글로벌 데이터 마켓플레이스
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-6 animate-fade-in">
              uniqdata.io에서 건강데이터 주권을 실현하고
              <br />
              NFT와 영지식 증명으로 수익을 창출하세요
            </p>
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mt-8 border border-secondary-foreground/20">
              <h2 className="text-2xl font-bold mb-4 text-secondary-foreground">
                🌟 UniqData란?
              </h2>
              <p className="text-lg text-secondary-foreground/90 leading-relaxed">
                UniqData는 개인의 건강 데이터를 안전하게 관리하고 수익화할 수 있는 혁신적인 데이터 마켓플레이스입니다.
                XRPL 블록체인 기술을 기반으로 하여 사용자가 자신의 데이터에 대한 완전한 주권을 가지며,
                NFT와 영지식 증명을 통해 개인정보를 보호하면서도 데이터의 가치를 실현할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is UniqData Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              UniqData 플랫폼 상세 소개
            </h2>

            {/* Main Description */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    🏥 건강데이터의 새로운 패러다임
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    UniqData는 개인이 생성하는 모든 건강 관련 데이터(운동 기록, 건강검진 결과, 생체 신호 등)를
                    안전하게 저장하고 관리할 수 있는 분산형 플랫폼입니다. 기존의 중앙화된 헬스케어 시스템과 달리,
                    사용자가 자신의 데이터에 대한 완전한 통제권을 가지며, 이를 통해 경제적 가치를 창출할 수 있습니다.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground">개인 건강데이터의 완전한 소유권 보장</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground">블록체인 기반 투명하고 안전한 거래</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground">영지식 증명으로 개인정보 완벽 보호</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔗</div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">XRPL 블록체인</h4>
                    <p className="text-gray-600 mb-4">안전하고 빠른 트랜잭션</p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-2">실시간 처리 속도</div>
                      <div className="text-2xl font-bold text-primary">3-5초</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "🏛️",
                  title: "데이터 주권 실현",
                  description: "중앙화된 플랫폼에 의존하지 않고, 개인이 직접 자신의 건강데이터를 관리하고 통제할 수 있습니다. 데이터의 접근, 공유, 삭제에 대한 모든 권한을 사용자가 가집니다.",
                  features: ["완전한 데이터 소유권", "접근 권한 세부 제어", "데이터 삭제권 보장"]
                },
                {
                  icon: "🎨",
                  title: "NFT 기반 소유권 증명",
                  description: "각 데이터셋은 고유한 NFT로 발행되어 블록체인에 기록됩니다. 이를 통해 데이터의 소유권과 진위성을 명확하게 증명하고, 위조나 중복을 방지합니다.",
                  features: ["고유 NFT 발행", "소유권 투명성", "데이터 진위성 보장"]
                },
                {
                  icon: "🔒",
                  title: "영지식 증명 기술",
                  description: "Zero-Knowledge Proof 기술을 활용하여 개인의 민감한 정보를 노출하지 않으면서도 데이터의 유효성과 가치를 증명할 수 있습니다.",
                  features: ["개인정보 완벽 보호", "데이터 유효성 증명", "익명 거래 지원"]
                },
                {
                  icon: "💰",
                  title: "데이터 수익화 모델",
                  description: "연구기관, 제약회사, 헬스케어 스타트업 등이 익명화된 건강데이터를 구매할 수 있으며, 데이터 제공자는 이에 대한 정당한 보상을 받습니다.",
                  features: ["직접적인 수익 창출", "투명한 보상 체계", "시장 가격 기반 거래"]
                },
                {
                  icon: "🌐",
                  title: "글로벌 데이터 마켓플레이스",
                  description: "전 세계 연구자와 기업들이 참여하는 개방형 데이터 마켓플레이스로, 다양한 형태의 건강데이터가 거래되며 의학 연구 발전에 기여합니다.",
                  features: ["글로벌 접근성", "다양한 데이터 타입", "연구 발전 기여"]
                },
                {
                  icon: "⚡",
                  title: "실시간 데이터 처리",
                  description: "XRPL의 빠른 트랜잭션 처리 능력을 활용하여 실시간으로 데이터 거래가 이루어지며, 즉시 정산이 가능합니다.",
                  features: ["3-5초 트랜잭션", "즉시 정산", "높은 처리량"]
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-border/50"
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            XRPL 블록체인 기술 아키텍처
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                핵심 기술 스택
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                XRPL의 고유한 기능들을 조합하여 안전하고 효율적인 데이터 거래
                플랫폼을 구축했습니다. 각 기술은 데이터 주권과 보안을 보장하는
                핵심 역할을 담당합니다.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "TokenEscrow",
                    description: "스마트 컨트랙트를 통한 안전한 자금 보관 및 조건부 자동 지급",
                    features: ["조건부 자동 실행", "분쟁 해결 메커니즘", "자금 안전성 보장"]
                  },
                  {
                    title: "NFTokenMint",
                    description: "데이터셋별 고유 NFT 발행으로 소유권과 진위성 증명",
                    features: ["고유 토큰 ID", "메타데이터 저장", "소유권 이전 추적"]
                  },
                  {
                    title: "Batch Transaction",
                    description: "대량 데이터 거래의 효율적 처리 및 가스비 최적화",
                    features: ["동시 처리", "비용 효율성", "확장성 보장"]
                  },
                  {
                    title: "Memo & Hooks",
                    description: "모든 거래의 완전한 기록 추적 및 커스텀 로직 실행",
                    features: ["거래 내역 투명성", "감사 가능성", "커스텀 비즈니스 로직"]
                  }
                ].map((tech, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border/50">
                    <h4 className="text-xl font-bold text-foreground mb-2">{tech.title}</h4>
                    <p className="text-muted-foreground mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-secondary to-secondary/70 rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-secondary-foreground">
                  <div className="mb-4 animate-float flex justify-center">
                    <img
                      src="/images/xrpl-logo.png"
                      alt="XRPL Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">XRPL Mainnet</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-secondary-foreground/10 rounded-lg p-3">
                      <div className="font-semibold">트랜잭션 속도</div>
                      <div className="text-2xl font-bold">3-5초</div>
                    </div>
                    <div className="bg-secondary-foreground/10 rounded-lg p-3">
                      <div className="font-semibold">처리량</div>
                      <div className="text-2xl font-bold">1,500 TPS</div>
                    </div>
                    <div className="bg-secondary-foreground/10 rounded-lg p-3">
                      <div className="font-semibold">거래 수수료</div>
                      <div className="text-2xl font-bold">~$0.0002</div>
                    </div>
                    <div className="bg-secondary-foreground/10 rounded-lg p-3">
                      <div className="font-semibold">에너지 효율</div>
                      <div className="text-2xl font-bold">99.9%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-foreground">보안 & 규정 준수</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground">GDPR 완전 준수</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground">HIPAA 보안 표준</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-foreground">ISO 27001 인증</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            실제 활용 사례
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "의료 연구",
                title: "신약 개발 데이터 제공",
                description: "제약회사가 임상시험을 위해 특정 질병 환자들의 익명화된 건강데이터를 구매하여 신약 개발에 활용",
                impact: "연구 기간 30% 단축",
                icon: "🧬"
              },
              {
                category: "개인 건강관리",
                title: "맞춤형 건강 솔루션",
                description: "개인의 운동, 식단, 수면 데이터를 분석하여 AI 기반 맞춤형 건강관리 서비스 제공 및 수익 창출",
                impact: "월 평균 $50-200 수익",
                icon: "💪"
              },
              {
                category: "보험 서비스",
                title: "리스크 기반 보험료 산정",
                description: "보험회사가 개인의 건강 점수를 기반으로 정확한 리스크 평가 및 맞춤형 보험 상품 개발",
                impact: "보험료 최대 25% 절감",
                icon: "🛡️"
              },
              {
                category: "웰니스 산업",
                title: "생활습관 개선 프로그램",
                description: "기업 웰니스 프로그램에서 직원들의 건강데이터를 활용한 맞춤형 건강증진 서비스",
                impact: "참여율 80% 증가",
                icon: "🏃"
              },
              {
                category: "학술 연구",
                title: "공중보건 연구",
                description: "대학 연구진이 대규모 인구 집단의 건강 트렌드 분석을 통한 공중보건 정책 개발 지원",
                impact: "정책 효과성 40% 향상",
                icon: "📊"
              },
              {
                category: "헬스테크",
                title: "AI 진단 모델 훈련",
                description: "의료 AI 스타트업이 다양한 진단 데이터를 학습하여 정확도 높은 AI 진단 모델 개발",
                impact: "진단 정확도 95% 달성",
                icon: "🤖"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                  {useCase.category}
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <div className="text-sm text-primary font-semibold">예상 효과</div>
                  <div className="text-lg font-bold text-foreground">{useCase.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              지금 UniqData를 시작하세요
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              건강데이터의 진정한 주인이 되어<br />
              데이터로 수익을 창출하는 새로운 경험을 만나보세요
            </p>
            <a
              href="https://uniqdata.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              UniqData.io 방문하기 →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}