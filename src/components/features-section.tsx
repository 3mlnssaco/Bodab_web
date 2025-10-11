import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const features = [
    {
      step: "01",
      titleKey: "features.1.title",
      descKey: "features.1.desc",
      icon: "🤖",
    },
    {
      step: "02",
      titleKey: "features.2.title",
      descKey: "features.2.desc",
      icon: "⌚",
    },
    {
      step: "03",
      titleKey: "features.3.title",
      descKey: "features.3.desc",
      icon: "⛓️",
    },
    {
      step: "04",
      titleKey: "features.4.title",
      descKey: "features.4.desc",
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
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('features.subtitle')}
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
                {t('features.step')} {feature.step}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
