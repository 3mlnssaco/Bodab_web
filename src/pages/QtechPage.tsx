import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import "../styles/base-styles.css";
import "../styles/service-styles.css";

export default function QtechPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="qtech-hero" style={{paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)', textAlign: 'center'}}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="qtech-hero-content">
            <h1 style={{fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{t('qtech.title')}</h1>
            <h2 style={{fontSize: '1.8rem', fontWeight: 400, color: '#2d3436', marginBottom: '20px'}}>{t('qtech.subtitle')}</h2>
            <p className="hero-subtitle" style={{fontSize: '1.2rem', color: '#636e72', lineHeight: 1.8, marginBottom: '30px', whiteSpace: 'pre-line'}}>
              {t('qtech.description')}
            </p>
            <div className="achievement-badge" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '10px 20px', borderRadius: '30px', display: 'inline-block', margin: '20px 0', fontWeight: 600}}>
              🏆 {t('qtech.achievement')}
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="research-section" style={{padding: '80px 0', background: '#f8f9fa'}}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="section-title" style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px'}}>{t('qtech.research')}</h2>
          <div className="research-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px'}}>
            <div className="research-card" style={{background: 'white', borderRadius: '20px', padding: '30px'}}>
              <h3 style={{fontSize: '1.5rem', color: '#2d3436', marginBottom: '20px'}}>🤖 {t('qtech.research.robot')}</h3>
              <p style={{color: '#636e72', marginBottom: '20px'}}>
                {t('qtech.research.robot.desc')}<br/>
                <strong style={{color: '#2563eb'}}>{t('qtech.achievement')}</strong>
              </p>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '8px 0', color: '#636e72'}}>▸ 대화형 AI 반려 로봇</li>
                <li style={{padding: '8px 0', color: '#636e72'}}>▸ 복약 알림 로봇</li>
                <li style={{padding: '8px 0', color: '#636e72'}}>▸ 긴급 상황 감지 및 알림</li>
              </ul>
            </div>
            <div className="research-card" style={{background: 'white', borderRadius: '20px', padding: '30px'}}>
              <h3 style={{fontSize: '1.5rem', color: '#2d3436', marginBottom: '20px'}}>🔗 {t('qtech.research.blockchain')}</h3>
              <p style={{color: '#636e72', marginBottom: '20px'}}>
                {t('qtech.research.blockchain.desc')}
              </p>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '8px 0', color: '#636e72'}}>▸ 의료 데이터 익명화</li>
                <li style={{padding: '8px 0', color: '#636e72'}}>▸ 스마트 컨트랙트 기반 보험</li>
                <li style={{padding: '8px 0', color: '#636e72'}}>▸ 데이터 소유권 증명</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{padding: '80px 0', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', textAlign: 'center'}}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 style={{color: 'white', fontSize: '2.5rem', marginBottom: '20px'}}>{t('qtech.cta.title')}</h2>
          <p style={{color: 'white', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '40px', opacity: 0.95}}>
            {t('qtech.cta.desc')}
          </p>
        </div>
      </section>
    </div>
  );
}