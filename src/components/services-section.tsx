import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Sportique가 제공하는 두 가지 독립적인 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 보답 서비스 */}
          <div
            className={`bg-gradient-to-br from-primary to-primary/70 rounded-3xl p-8 text-primary-foreground transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/bodab-logo.png"
                  alt="Bodab Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-primary-foreground rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">S</span>
                  </div>
                  <span className="text-sm text-primary-foreground/80">Sportique</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">보답 (Bodab)</h3>
                <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                  AI 기반 실버 헬스케어 앱으로 데이터 측정과 건강 분석을 통한 맞춤형 시니어 케어를 제공합니다
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🤖</span>
                    <span className="text-primary-foreground/90">AI 건강 분석</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    <span className="text-primary-foreground/90">실시간 데이터 측정</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👴</span>
                    <span className="text-primary-foreground/90">시니어 케어 솔루션</span>
                  </div>
                </div>
                <Link
                  to="/bodab"
                  className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>

          {/* UniqData 서비스 */}
          <div
            className={`bg-gradient-to-br from-secondary to-secondary/70 rounded-3xl p-8 text-secondary-foreground transition-all duration-700 delay-200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/xrpl-logo.png"
                  alt="XRPL Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-secondary-foreground rounded-lg flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm">S</span>
                  </div>
                  <span className="text-sm text-secondary-foreground/80">Sportique</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">UniqData</h3>
                <p className="text-lg text-secondary-foreground/90 mb-6 leading-relaxed">
                  글로벌 데이터 마켓플레이스로 건강데이터 주권을 실현하고 NFT와 영지식 증명으로 수익화합니다
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <span className="text-secondary-foreground/90">데이터 주권 실현</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎨</span>
                    <span className="text-secondary-foreground/90">NFT 기반 소유권 증명</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <span className="text-secondary-foreground/90">데이터 수익화</span>
                  </div>
                </div>
                <a
                  href="https://uniqdata.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary-foreground text-secondary px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                >
                  UniqData 방문하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}