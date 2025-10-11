import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function XRPLSection() {
  const { t } = useLanguage();
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

  const features = [
    t('xrpl.feature1'),
    t('xrpl.feature2'),
    t('xrpl.feature3'),
    t('xrpl.feature4'),
  ];

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
              {t('xrpl.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {t('xrpl.desc')}
            </p>
            <div className="bg-primary/10 rounded-2xl p-6 mb-8 border border-primary/20">
              <p className="text-muted-foreground text-lg">
                🔗 <span className="font-semibold">{t('xrpl.connection')}</span>
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
              {t('xrpl.cta')} →
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
                  <h3 className="text-2xl font-bold mb-2">{t('xrpl.card.title')}</h3>
                  <p className="text-primary-foreground/80">
                    {t('xrpl.card.subtitle')}
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
