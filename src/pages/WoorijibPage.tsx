import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import "../styles/base-styles.css";
import "../styles/service-styles.css";

export default function WoorijibPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="service-hero woorijib-hero" style={{paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)', textAlign: 'center'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="hero-content">
            <h1 style={{fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>우리집</h1>
            <h2 style={{fontSize: '1.8rem', fontWeight: 400, color: '#2d3436', marginBottom: '20px'}}>가족만의 특별한 공간</h2>
            <p className="hero-subtitle" style={{fontSize: '1.2rem', color: '#636e72', lineHeight: 1.8, marginBottom: '30px'}}>
              접근성 향상을 위한 연구 프로젝트<br/>
              가족 소통의 새로운 패러다임 탐구
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{padding: '80px 0', background: '#ffffff'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title" style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px'}}>연구 프로젝트 개요</h2>
          <div className="feature-list">
            <div className="feature-item" style={{background: '#f8f9fa', borderRadius: '15px', padding: '25px', marginBottom: '20px'}}>
              <div className="feature-left">
                <div className="feature-icon">💬</div>
                <div className="feature-content">
                  <h3>가족 전용 메신저</h3>
                  <p>광고 없는 깨끗한 가족 소통 공간</p>
                </div>
              </div>
            </div>
            {/* Add more features as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{padding: '100px 0', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', color: 'white', textAlign: 'center'}}>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px', color: 'white'}}>접근성 향상 연구 프로젝트</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '40px', opacity: 0.95}}>가족 소통의 새로운 미래를 함께 만들어갑니다</p>
        </div>
      </section>
    </div>
  );
}