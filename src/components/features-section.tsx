import { useEffect, useRef, useState } from "react";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      step: "01",
      title: "AI 건강 분석",
      description: "RAG 기반 AI가 과거 진료기록을 분석하여 맞춤형 건강 상담을 제공합니다",
      icon: "🤖",
    },
    {
      step: "02",
      title: "실시간 모니터링",
      description: "웨어러블 기기와 IoT를 통해 24시간 생체신호를 모니터링합니다",
      icon: "⌚",
    },
    {
      step: "03",
      title: "블록체인 보안",
      description: "XRPL 네트워크에 건강 데이터를 안전하게 저장하고 소유권을 보장합니다",
      icon: "⛓️",
    },
    {
      step: "04",
      title: "데이터 수익화",
      description: "건강 데이터 제공 시 XRP로 즉시 보상을 받을 수 있습니다",
      icon: "💰",
    },
  ];

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
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            보답(Bodab)의 핵심 기능
          </h2>
          <p className="text-xl text-muted-foreground">
            AI와 블록체인이 만드는 혁신적인 헬스케어 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 cursor-pointer ${
                isVisible ? "animate-scale-in" : "opacity-0"
              } ${
                hoveredIndex === index
                  ? "transform -translate-y-2 shadow-2xl border-primary"
                  : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`text-6xl mb-4 transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-110" : ""
                }`}
              >
                {feature.icon}
              </div>
              <div className="text-primary font-bold text-sm mb-2">
                STEP {feature.step}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
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
  );
}
