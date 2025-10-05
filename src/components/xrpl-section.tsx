import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function XRPLSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    "사용자 중심 데이터 소유권",
    "NFT 기반 정보 보안 강화", 
    "XRP를 통한 즉시 보상 지급",
    "투명한 거래 기록 관리",
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
    <section ref={sectionRef} id="xrpl" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              XRPL 블록체인 기술
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              TokenEscrow, NFTokenMint, Batch 등 XRPL의 핵심 기능을 활용하여 
              건강 데이터의 소유권을 보장하고 공정한 보상을 제공합니다
            </p>
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
            <Link
              to="/xrpl"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              자세히 보기 →
            </Link>
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
                    <img
                      src="/images/xrpl-logo.png"
                      alt="XRPL Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Powered by XRPL</h3>
                  <p className="text-primary-foreground/80">
                    안전하고 빠른 블록체인 네트워크
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
