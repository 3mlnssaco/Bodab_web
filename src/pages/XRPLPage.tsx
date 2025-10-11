import { SimpleNavigation } from "@/components/simple-navigation";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function XRPLPage() {
  const { t } = useLanguage();

  // 페이지 로드 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src="/images/xrpl-logo.png"
                alt="XRPL Logo"
                width={150}
                height={150}
                className="object-contain animate-float"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in whitespace-pre-line">
              {t('xrpl.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in whitespace-pre-line">
              {t('xrpl.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('xrpl.problem.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t('xrpl.problem.ownership'),
                description: t('xrpl.problem.ownership.desc'),
              },
              {
                title: t('xrpl.problem.privacy'),
                description: t('xrpl.problem.privacy.desc'),
              },
              {
                title: t('xrpl.problem.value'),
                description: t('xrpl.problem.value.desc'),
              },
              {
                title: t('xrpl.problem.access'),
                description: t('xrpl.problem.access.desc'),
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('xrpl.solution.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "👤",
                title: t('xrpl.solution.user.title'),
                description: t('xrpl.solution.user.desc'),
              },
              {
                icon: "🔒",
                title: t('xrpl.solution.security.title'),
                description: t('xrpl.solution.security.desc'),
              },
              {
                icon: "💰",
                title: t('xrpl.solution.monetization.title'),
                description: t('xrpl.solution.monetization.desc'),
              },
              {
                icon: "📊",
                title: t('xrpl.solution.model.title'),
                description: t('xrpl.solution.model.desc'),
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XRPL USE Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('xrpl.use.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t('xrpl.use.escrow.title'),
                description: t('xrpl.use.escrow.desc'),
                icon: "🔐",
              },
              {
                title: t('xrpl.use.mint.title'),
                description: t('xrpl.use.mint.desc'),
                icon: "🎨",
              },
              {
                title: t('xrpl.use.batch.title'),
                description: t('xrpl.use.batch.desc'),
                icon: "📦",
              },
              {
                title: t('xrpl.use.memo.title'),
                description: t('xrpl.use.memo.desc'),
                icon: "📝",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-primary/70 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B2C Structure */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('xrpl.b2b2c.title')}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {t('xrpl.b2b2c.business.title')}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('xrpl.b2b2c.business.item1')}</li>
                  <li>• {t('xrpl.b2b2c.business.item2')}</li>
                  <li>• {t('xrpl.b2b2c.business.item3')}</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/70 p-8 rounded-2xl shadow-lg text-center text-primary-foreground hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔷</div>
                <h3 className="text-2xl font-bold mb-4">{t('xrpl.b2b2c.platform.title')}</h3>
                <p className="text-lg">{t('xrpl.b2b2c.platform.name')}</p>
                <ul className="space-y-2 mt-4 text-primary-foreground/90">
                  <li>• {t('xrpl.b2b2c.platform.item1')}</li>
                  <li>• {t('xrpl.b2b2c.platform.item2')}</li>
                  <li>• {t('xrpl.b2b2c.platform.item3')}</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {t('xrpl.b2b2c.consumer.title')}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('xrpl.b2b2c.consumer.item1')}</li>
                  <li>• {t('xrpl.b2b2c.consumer.item2')}</li>
                  <li>• {t('xrpl.b2b2c.consumer.item3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t('xrpl.roadmap.title')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                period: t('xrpl.roadmap.2025q4.period'),
                title: t('xrpl.roadmap.2025q4.title'),
                description: t('xrpl.roadmap.2025q4.desc'),
              },
              {
                period: t('xrpl.roadmap.2026q2.period'),
                title: t('xrpl.roadmap.2026q2.title'),
                description: t('xrpl.roadmap.2026q2.desc'),
              },
              {
                period: t('xrpl.roadmap.2026q4.period'),
                title: t('xrpl.roadmap.2026q4.title'),
                description: t('xrpl.roadmap.2026q4.desc'),
              },
              {
                period: t('xrpl.roadmap.2027q2.period'),
                title: t('xrpl.roadmap.2027q2.title'),
                description: t('xrpl.roadmap.2027q2.desc'),
              },
              {
                period: t('xrpl.roadmap.2028.period'),
                title: t('xrpl.roadmap.2028.title'),
                description: t('xrpl.roadmap.2028.desc'),
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg whitespace-nowrap">
                    {milestone.period}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
