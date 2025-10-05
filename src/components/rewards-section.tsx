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
      id="rewards"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">보답 (Bodab)</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            AI 기반 통합 시니어 케어 & 모니터링 솔루션으로<br />
            고령화 시대의 건강한 돌봄을 제공합니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🤖",
                title: "RAG 기반 AI 의료 상담",
                description: "과거 진료기록 접근, 맞춤형 질문 생성, 음성 인식 기능",
              },
              {
                icon: "📊",
                title: "AI 건강 레포트 작성",
                description: "주요 통증 및 증상 패턴 분석, 진료과 추천 및 예약",
              },
              {
                icon: "⌚",
                title: "웨어러블 기기 연동",
                description: "24/7 생체신호 모니터링, AI 예방 건강관리",
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
