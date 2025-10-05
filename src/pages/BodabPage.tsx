import { SimpleNavigation } from "@/components/simple-navigation";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

export default function BodabPage() {
  // 페이지 로드 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent to-accent/70">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src="/images/bodab-logo.png"
                alt="Bodab Logo"
                width={180}
                height={180}
                className="object-contain animate-float"
              />
            </div>
            <div className="text-7xl mb-6 animate-float">💚</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-foreground">
              보답 (Bodab)
              <br />
              Healthcare Agent App
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in">
              AI 기반의 통합 시니어 케어 & 모니터링 솔루션
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Need Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            왜 필요한가?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "👴",
                title: "고령화 시대",
                description:
                  "2025년 고령 사회 진입, 2026년 초고령 사회 예상. OECD 국가 중 가장 빠른 고령화 속도",
              },
              {
                icon: "👨‍⚕️",
                title: "돌봄 인력 부족",
                description:
                  "간병 살인 증가, 공공 서비스 한계. 가족 돌봄의 부담 증가",
              },
              {
                icon: "📱",
                title: "디지털 헬스케어 성장",
                description:
                  "비대면 수요 증가, 디지털 치료제 등장, ICT 기술 발달 (AI, IoT, 빅데이터)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            핵심 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🤖",
                title: "RAG 기반 AI 의료 상담",
                features: [
                  "과거 진료 기록 접근",
                  "맞춤형 질문 생성",
                  "AI 의사-환자 대화",
                  "음성 인식 기능",
                ],
              },
              {
                icon: "📊",
                title: "AI 건강 레포트 작성",
                features: [
                  "주요 통증 및 증상 패턴 분석",
                  "진료과 추천 및 예약",
                  "건강 시각화",
                  "데이터 종합 분석",
                ],
              },
              {
                icon: "⌚",
                title: "웨어러블 기기 연동",
                features: [
                  "24/7 생체 신호 모니터링",
                  "골든타임 확보 솔루션",
                  "AI 예방 건강관리",
                  "실버 케어 알림",
                ],
              },
              {
                icon: "🏠",
                title: "스마트 홈 IoT 모니터링",
                features: [
                  "IoT 가전 연동 범위 확대",
                  "가전 상태 변화 추적",
                  "보호자 안심 알림 서비스",
                  "홈 IoT 모니터링",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Stakeholders */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            누구에게 도움이 되나요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "👨‍⚕️",
                title: "의사",
                benefits: [
                  "진료 시간 단축",
                  "업무 부담 경감",
                  "전문 의학 DB 참조",
                ],
              },
              {
                icon: "💊",
                title: "약사",
                benefits: [
                  "업무 부담 경감",
                  "정확한 복약 지도",
                  "환자 상태 파악",
                ],
              },
              {
                icon: "👨‍👩‍👧",
                title: "보호자",
                benefits: [
                  "경제적 부담 완화",
                  "심리적 안전감",
                  "자녀와의 갈등 완화",
                ],
              },
              {
                icon: "👴",
                title: "어르신",
                benefits: [
                  "만성질환 관리 효율화",
                  "응급상황 조기 대응",
                  "일상 의사결정 지원",
                ],
              },
            ].map((stakeholder, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{stakeholder.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {stakeholder.title}
                </h3>
                <ul className="space-y-2 text-left">
                  {stakeholder.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tablet Home Installation */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            태블릿 가정 설치 모델
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-12 rounded-3xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-7xl mb-6">📱</div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    간편한 설치
                  </h3>
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>
                        복잡한 설치 절차 없이 전원 연결만으로 즉시 사용 가능
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>
                        고령층도 직관적인 화면을 통해 쉽게 건강 상태 확인
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-2xl">✓</span>
                      <span>24시간 실시간 모니터링</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-accent to-accent/50 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🏠</div>
                    <p className="text-xl font-semibold text-foreground">
                      홈 IoT 통합 관리
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            경쟁사 대비 차별점
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/70 p-12 rounded-3xl shadow-2xl text-primary-foreground mb-12">
              <h3 className="text-3xl font-bold mb-4 text-center">
                AI 서비스를 제공하고 자동으로 관리되는 서비스는 우리가 유일
              </h3>
              <p className="text-xl text-center text-primary-foreground/90">
                보호자와 어르신을 모두 커버할 수 있는 유일한 솔루션
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-2xl shadow-lg overflow-hidden">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      서비스
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      제공 서비스
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      타겟
                    </th>
                    <th className="px-6 py-4 text-left text-lg font-bold">
                      서비스 금액
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-accent/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground">
                      SportiQue (보답)
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      AI를 이용한 헬스 건강 검사 및 의료 레포트 관리
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      재가 요양하는 어르신, 돌봄 여유가 필요한 보호자
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary">
                      무료
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground">
                      케어닥
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      간병인 네트워크를 통해 환자 상태와 필요에 맞는 간병인 중개
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      50대 이상 시니어 및 그 가족
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      월 250,000원 ~ 500,000원
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground">
                      Carefriends
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      수급자 관리, 급여 비용 청구, 평가 자료 관리 등 요양 기관의
                      행정 업무 자동화
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      노인 장기 요양 기관 운영자 및 종사자
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      21~30인 기준 월 58,000원
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/10 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground">
                      memofit
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      사용자의 신체 정보, 건강 상태, 운동 목표에 따라 AI가
                      맞춤형 운동 프로그램 추천
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      건강 관리에 관심이 많은 20~40대
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      기본 무료 (추후 유료화 모델 추정)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Development Plan */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            향후 발전 계획
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                number: "1",
                icon: "🤖",
                title: "AI 시니어 헬스케어 앱",
                description:
                  "HL7 FHIR 표준으로 병원 EMR 연동, 건강정보 고속도로 활용기관 승인",
              },
              {
                number: "2",
                icon: "⛳",
                title: "오프라인 소셜링 서비스",
                description:
                  "스포츠 교육업 사업자 도파밍 협업, 신체 상태에 따른 스포츠 추천 및 예약",
              },
              {
                number: "3",
                icon: "🔗",
                title: "건강데이터 블록체인",
                description:
                  "데이터 위·변조 방지 및 투명성 확보, 환자 중심의 안전한 데이터 소유·관리",
              },
              {
                number: "4",
                icon: "🤖",
                title: "하드웨어 시장 진출",
                description:
                  "돌봄 로봇 제작, 웨어러블 기기 제작, 해외 비즈니스 모델 수출",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {plan.number}
                </div>
                <div className="text-5xl mb-4">{plan.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              성장 목표
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                <span className="font-semibold text-foreground">1-2년</span>
                <span className="text-muted-foreground">
                  시설 100 × 45명 ≈ 4,500명 → 연 ~12억
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                <span className="font-semibold text-foreground">3-4년</span>
                <span className="text-muted-foreground">
                  시설 300 + B2C 1만명 → 연 ~54억
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                <span className="font-semibold text-foreground">5-7년</span>
                <span className="text-muted-foreground">
                  국내 500 + B2C 2.5만 + 해외 2.5만 → 연 ~143억
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
