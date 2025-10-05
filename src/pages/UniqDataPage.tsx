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
        <div className="container mx-auto px-4 lg:px-8">
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
            <p className="text-xl md:text-2xl text-secondary-foreground/90 animate-fade-in">
              uniqdata.io에서 건강데이터 주권을 실현하고
              <br />
              NFT와 영지식 증명으로 수익을 창출하세요
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            UniqData의 핵심 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏛️",
                title: "데이터 주권 실현",
                description: "내 건강데이터의 완전한 소유권과 통제권을 가집니다",
              },
              {
                icon: "🎨",
                title: "NFT 기반 소유권 증명",
                description: "블록체인 NFT로 데이터 소유권을 안전하게 증명합니다",
              },
              {
                icon: "🔒",
                title: "영지식 증명 익명화",
                description: "개인정보를 보호하면서 데이터를 안전하게 거래합니다",
              },
              {
                icon: "💰",
                title: "데이터 수익화",
                description: "데이터 이전 및 판매로 실제 수익을 창출합니다",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                XRPL 블록체인 기술
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                TokenEscrow, NFTokenMint, Batch 등 XRPL의 핵심 기능을 활용하여 
                안전하고 투명한 데이터 거래를 보장합니다
              </p>
              <ul className="space-y-4">
                {[
                  "TokenEscrow: 안전한 자금 보관 및 자동 지급",
                  "NFTokenMint: 데이터 소유권 NFT 발행",
                  "Batch: 효율적인 대량 거래 처리",
                  "트랜잭션 메모: 완전한 거래 기록 추적",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-secondary to-secondary/70 rounded-3xl p-12 shadow-2xl">
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
                <h3 className="text-2xl font-bold mb-2">Powered by XRPL</h3>
                <p className="text-secondary-foreground/80">
                  안전하고 빠른 블록체인 네트워크
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
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