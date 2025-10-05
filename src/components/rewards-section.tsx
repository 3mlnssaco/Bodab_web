import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function RewardsSection() {
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
    <section
      ref={sectionRef}
      id="bodab"
      className="py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex justify-center mb-6">
            <img
              src="/images/bodab-logo.png"
              alt="Bodab Logo"
              width={150}
              height={150}
              className="object-contain animate-float"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">S</span>
            </div>
            <span className="text-lg text-primary-foreground/80">Sportique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">보답 (Bodab)</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            AI 기반 실버 헬스케어 앱으로<br />
            데이터 측정과 건강 분석을 통한<br />
            맞춤형 시니어 케어를 제공합니다
          </p>
          <div className="bg-primary-foreground/10 rounded-2xl p-6 mb-8 border border-primary-foreground/20">
            <p className="text-primary-foreground/90 text-lg">
              💡 <span className="font-semibold">수집된 건강 데이터는 UniqData로 전송되어</span><br />
              데이터 주권과 수익화의 기반이 됩니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🤖",
                title: "AI 건강 분석",
                description: "RAG 기반 의료 상담, 과거 진료기록 분석, 맞춤형 건강 추천",
              },
              {
                icon: "📊",
                title: "실시간 데이터 측정",
                description: "웨어러블 기기 연동, 24/7 생체신호 모니터링, 건강 상태 추적",
              },
              {
                icon: "👴",
                title: "시니어 케어 솔루션",
                description: "고령화 시대 맞춤 돌봄, 응급상황 대응, 가족 안심 서비스",
              },
            ].map((reward, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:scale-105 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{reward.icon}</div>
                <h3 className="text-xl font-bold mb-2">{reward.title}</h3>
                <p className="text-primary-foreground/80">
                  {reward.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/bodab"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            자세히 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
