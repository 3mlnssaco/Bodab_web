import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import "../styles/base-styles.css";
import "../styles/service-styles.css";

export default function EoullimPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="service-hero eoullim-hero" style={{paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)', textAlign: 'center'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="hero-content">
            <h1 style={{fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{t('eoullim.title')}</h1>
            <h2 style={{fontSize: '1.8rem', fontWeight: 400, color: '#2d3436', marginBottom: '20px'}}>{t('eoullim.subtitle')}</h2>
            <p className="hero-subtitle" style={{fontSize: '1.2rem', color: '#636e72', lineHeight: 1.8, marginBottom: '30px', whiteSpace: 'pre-line'}}>
              {t('eoullim.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section" style={{padding: '80px 0', background: '#ffffff'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title" style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px'}}>맞춤형 프로그램</h2>
          <div className="programs-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            <div className="program-card" style={{background: '#f8f9fa', borderRadius: '20px', padding: '30px'}}>
              <h3 style={{fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px'}}>시니어 요가</h3>
              <p style={{color: '#636e72'}}>관절에 무리 없는 부드러운 동작으로 유연성과 균형감각 향상</p>
            </div>
            <div className="program-card" style={{background: '#f8f9fa', borderRadius: '20px', padding: '30px'}}>
              <h3 style={{fontSize: '1.5rem', color: '#2d3436', marginBottom: '15px'}}>아쿠아로빅</h3>
              <p style={{color: '#636e72'}}>물속에서 즐기는 전신 운동, 관절 부담 최소화</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{padding: '100px 0', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', textAlign: 'center'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'white'}}>건강한 인생 2막을 시작하세요</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '40px', opacity: 0.95}}>지금 가입하시면 첫 달 50% 할인</p>
        </div>
      </section>
    </div>
  );
}