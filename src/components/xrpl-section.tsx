import { useEffect, useRef, useState } from "react";

export function XRPLSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    "건강데이터 주권 실현",
    "NFT 기반 데이터 소유권 증명",
    "영지식 증명을 통한 익명화",
    "데이터 이전 및 판매로 수익 창출",
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
    <section ref={sectionRef} id="uniqdata" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-lg text-muted-foreground">Sportique</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              UniqData 글로벌 마켓플레이스
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              uniqdata.io에서 <span className="font-semibold text-foreground">보답에서 수집한</span> 건강데이터의 주권을 실현하고<br />
              NFT와 영지식 증명을 통한 데이터 익명화, 이전 및 판매로<br />
              나의 데이터로 수익을 만들 수 있습니다
            </p>
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 border border-primary/20">
              <p className="text-muted-foreground text-lg">
                🔗 <span className="font-semibold">보답(Bodab)에서 생성된 건강 데이터가</span><br />
                UniqData에서 안전하게 관리되고 수익화됩니다
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://uniqdata.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              UniqData 방문하기 →
            </a>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-primary to-primary/70 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <div className="text-center text-primary-foreground">
                  <div className="mb-4 animate-float flex justify-center">
                    <div className="w-30 h-30 bg-primary-foreground rounded-2xl flex items-center justify-center">
                      <span className="text-primary font-bold text-4xl">U</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">UniqData.io</h3>
                  <p className="text-primary-foreground/80">
                    글로벌 데이터 마켓플레이스
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
