import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/base-styles.css";
import "../styles/vision-styles.css";

export default function ScaleupPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scaleup-page">
      {/* Hero Section */}
      <section className="vision-hero" style={{paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)', textAlign: 'center'}}>
        <div className="container">
          <div className="hero-content" style={{maxWidth: '900px', margin: '0 auto'}}>
            <h1 style={{fontSize: '3rem', fontWeight: 900, marginBottom: '20px', color: '#2d3436'}}>우리가 바라보는 가족</h1>
            <p className="hero-subtitle" style={{fontSize: '1.2rem', color: '#636e72', lineHeight: 1.8}}>
              부모님을 걱정하는 자녀의 마음,<br/>
              자녀에게 짐이 되고 싶지 않은 부모님의 마음,<br/>
              우리는 그 두 마음을 모두 이해합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector Section */}
      <section className="final-message" style={{padding: '80px 0', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'}}>
        <div className="container">
          <div className="message-box" style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: 'white'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '30px', color: 'white'}}>지금 시작하세요</h2>
            <p style={{fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px', opacity: 0.95, color: 'white'}}>
              연령대별 맞춤 서비스를 선택하세요
            </p>

            <div className="service-selector" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto'}}>
              <Link to="/woorijib" className="service-btn" style={{
                background: 'white',
                border: '2px solid #e0e0e0',
                padding: '30px 20px',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <span className="btn-age" style={{fontSize: '0.9rem', color: '#636e72', marginBottom: '10px'}}>30대</span>
                <span className="btn-title" style={{fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '5px'}}>우리집 알아보기</span>
                <span className="btn-desc" style={{fontSize: '0.9rem', color: '#636e72'}}>접근성 연구 프로젝트</span>
              </Link>

              <Link to="/eoullim" className="service-btn" style={{
                background: 'white',
                border: '2px solid #e0e0e0',
                padding: '30px 20px',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <span className="btn-age" style={{fontSize: '0.9rem', color: '#636e72', marginBottom: '10px'}}>50-60대</span>
                <span className="btn-title" style={{fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '5px'}}>어울림 가입하기</span>
                <span className="btn-desc" style={{fontSize: '0.9rem', color: '#636e72'}}>건강한 인생 2막</span>
              </Link>

              <Link to="/bodab" className="service-btn" style={{
                background: 'white',
                border: '2px solid #e0e0e0',
                padding: '30px 20px',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <span className="btn-age" style={{fontSize: '0.9rem', color: '#636e72', marginBottom: '10px'}}>60-70대</span>
                <span className="btn-title" style={{fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '5px'}}>Bodab 시작하기</span>
                <span className="btn-desc" style={{fontSize: '0.9rem', color: '#636e72'}}>자립적 건강 관리</span>
              </Link>

              <Link to="/nest" className="service-btn" style={{
                background: 'white',
                border: '2px solid #e0e0e0',
                padding: '30px 20px',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <span className="btn-age" style={{fontSize: '0.9rem', color: '#636e72', marginBottom: '10px'}}>70대+</span>
                <span className="btn-title" style={{fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '5px'}}>Nest 알아보기</span>
                <span className="btn-desc" style={{fontSize: '0.9rem', color: '#636e72'}}>전문 케어 시스템</span>
              </Link>

              <a href="https://uniqdata.io" target="_blank" rel="noopener noreferrer" className="service-btn uniqdata-btn" style={{
                background: 'white',
                border: '2px solid #8b5cf6',
                padding: '30px 20px',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <span className="btn-age" style={{fontSize: '0.9rem', color: '#636e72', marginBottom: '10px'}}>전 연령</span>
                <span className="btn-title" style={{fontSize: '1.2rem', fontWeight: 700, color: '#8b5cf6', marginBottom: '5px'}}>UniQdata 시작하기</span>
                <span className="btn-desc" style={{fontSize: '0.9rem', color: '#636e72'}}>데이터로 수익 창출</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}