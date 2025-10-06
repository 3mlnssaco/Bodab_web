import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import "../styles/base-styles.css";
import "../styles/service-styles.css";

export default function NestPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nest-page">
      <Navigation />
      {/* Hero Section */}
      <section className="service-hero nest-hero" style={{paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)', textAlign: 'center'}}>
        <div className="container">
          <div className="nest-hero-content">
            <h1 style={{fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Nest</h1>
            <h2 style={{fontSize: '1.8rem', fontWeight: 400, color: '#2d3436', marginBottom: '20px'}}>따뜻한 보금자리, 전문적인 케어</h2>
            <p className="hero-subtitle" style={{fontSize: '1.2rem', color: '#636e72', lineHeight: 1.8, marginBottom: '30px'}}>
              70대 이상 어르신을 위한 프리미엄 요양 시설<br/>
              가족과 함께하는 투명한 케어 시스템
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="nest-section" style={{padding: '80px 0', background: 'white'}}>
        <div className="container">
          <h2 className="section-title" style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px'}}>Nest만의 특별함</h2>
          <div className="nest-features" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            <div className="nest-feature" style={{textAlign: 'center', padding: '30px', borderRadius: '20px', background: '#f8f9fa'}}>
              <span className="feature-icon" style={{fontSize: '2.5rem', marginBottom: '20px', display: 'block'}}>🏥</span>
              <h3 style={{color: '#1a202c', fontSize: '1.2rem', marginBottom: '15px'}}>24시간 전문 케어</h3>
              <p style={{color: '#636e72'}}>의료진과 요양보호사가 24시간 상주하며 어르신을 케어합니다</p>
            </div>
            <div className="nest-feature" style={{textAlign: 'center', padding: '30px', borderRadius: '20px', background: '#f8f9fa'}}>
              <span className="feature-icon" style={{fontSize: '2.5rem', marginBottom: '20px', display: 'block'}}>👨‍👩‍👧‍👦</span>
              <h3 style={{color: '#1a202c', fontSize: '1.2rem', marginBottom: '15px'}}>가족과 실시간 소통</h3>
              <p style={{color: '#636e72'}}>일일 케어 리포트와 화상통화로 가족과 매일 연결됩니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nest-cta" style={{padding: '80px 0', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', textAlign: 'center', color: 'white'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'white'}}>부모님을 위한 최선의 선택</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '40px', opacity: 0.95, color: 'white'}}>
            Nest와 함께 부모님께 편안하고 행복한 노후를 선물하세요
          </p>
        </div>
      </section>
    </div>
  );
}