import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function RewardsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('rewards.title')}</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            {t('rewards.desc')}
          </p>
          <div className="bg-primary-foreground/10 rounded-2xl p-6 mb-8 border border-primary-foreground/20">
            <p className="text-primary-foreground/90 text-lg">
              💡 <span className="font-semibold">{t('rewards.connection')}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🤖",
                title: t('rewards.feature1.title'),
                description: t('rewards.feature1.desc'),
              },
              {
                icon: "📊",
                title: t('rewards.feature2.title'),
                description: t('rewards.feature2.desc'),
              },
              {
                icon: "👴",
                title: t('rewards.feature3.title'),
                description: t('rewards.feature3.desc'),
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
            {t('rewards.cta')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
