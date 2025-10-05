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
                혁신적인 헬스케어 플랫폼
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sportique는 AI 기반 헬스케어 앱 '보답(Bodab)'과 XRPL 블록체인 기술을 
                결합하여 시니어 케어의 새로운 패러다임을 제시합니다. 
                데이터 주권을 사용자에게 돌려주고, 공정한 보상을 통해 
                건강한 사회를 만들어갑니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">AI 기반 시니어 케어 솔루션</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">XRPL 블록체인 데이터 보안</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">데이터 제공자 보상 시스템</span>
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
