import { useEffect, useRef, useState } from "react";

export function AboutSection() {
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
            About Sportique
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sportique의 통합 헬스케어 생태계
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-foreground">보답(Bodab)</span>에서 수집한 건강 데이터가 
                <span className="font-semibold text-foreground"> UniqData</span>로 연결되어 
                데이터 주권과 수익화를 실현합니다. 
                AI 헬스케어와 블록체인 기술이 만나 
                건강한 글로벌 사회를 만들어갑니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">AI 기반 시니어 케어 솔루션 (보답)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">글로벌 데이터 마켓플레이스 (UniqData)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">XRPL 블록체인 기반 데이터 보안</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <h4 className="text-2xl font-bold text-foreground mb-4">우리의 비전</h4>
                <p className="text-muted-foreground">
                  모든 사람이 자신의 건강 데이터를 소유하고, 
                  그 데이터로부터 공정한 보상을 받을 수 있는 
                  건강한 디지털 사회를 만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
