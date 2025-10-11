import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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
            {t('about.title')}
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
                {t('about.ecosystem')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.ecosystem.desc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">{t('about.check1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">{t('about.check2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-foreground font-semibold">{t('about.check3')}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <h4 className="text-2xl font-bold text-foreground mb-4">{t('about.vision.title')}</h4>
                <p className="text-muted-foreground">
                  {t('about.vision.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
